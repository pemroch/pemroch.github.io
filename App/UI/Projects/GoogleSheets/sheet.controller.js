(function() {
    
    'use strics';
    
    angular.module('sheet.controller', [])
    .controller('SheetCtrl', SheetCtrl);    
    
    SheetCtrl.$inject = ['$http', '$rootScope', '$state', '$scope', '$timeout'];

    function SheetCtrl ($http, $rootScope, $state, $scope, $timeout) {
        var vm = this;
        vm.loading = true;
        vm.setDate = null;
        vm.setTime = null;
        vm.setEmployee = null;        
        vm.saveColumn = null;        
        vm.saveRow = null;
        vm.days = [];
        vm.dates = [];
        vm.times = [];
        vm.schedule = [];
        vm.employees = [];
        vm.saveSchedule = saveSchedule;
        $timeout(function () { loadSheet(); })
        function loadSheet () {
            //Call to the Sheets API with the id of the sheet, ranges being requested, and the token set globally at login. 
            $http({ 
                url: 'https://sheets.googleapis.com/v4/spreadsheets/1-hMUEsrl9cykc6-fgjG96c0wac7Y-VYAfyrflzZPSqc/values:batchGet?ranges=Schedule!B5:B26&ranges=Schedule!C4:4&ranges=Schedule!C3:3&ranges=Employees!A1:A&ranges=Schedule!C5:I26&access_token=' + $rootScope.token,
                method: 'GET'
            })
            .then(function successCallback (response) {
                //First range requested sets the times to vm.times ranges=Schedule!B5:B26
                vm.times = response.data.valueRanges[0].values;
                //Second range requested sets the days to vm.days ranges=Schedule!C4:4
                vm.days = response.data.valueRanges[1].values[0];
                //Third range requested sets the dates to vm.dates ranges=Schedule!C3:3
                vm.dates = response.data.valueRanges[2].values[0];
                //Fourth range requested sets the name of employees to vm.employees ranges=Employees!A1:A
                vm.employees = response.data.valueRanges[3].values;
                //Fifth range requested (ranges=Schedule!C5:I26) should set the values of the employees scheduled, but if the 
                //cells in the spreadsheet are empty or the spreadsheet is not completely filled out the cells created 
                //by the application would be empty or unaligned with the rest of the table. This is taken care of below.
                //The Spreadsheets API also only sends values as empty strings before the last value in a row
                //and any empty value afterwards is ommited.
                //newRows is an empty array to hold our new arrays of rows. 
                var newRows = []; 
                //Rows returned from API call otherwise an empty array
                response.data.valueRanges[4].values = response.data.valueRanges[4].values || [];
                //22 rows are needed to occupy rows from 8:00 AM to 6:30PM.
                for (var i = 0; i < 22; i++) {
                    //An empty array to hold our new row that will be pushed into our array of rows.
                    var newRow = [];
                    //oldRow holds our column values if they exist otherwise an empty array to reference.
                    var oldRow = response.data.valueRanges[4].values[i] || [];
                    //7 columns are needed to occupy columns from SATURDAY 9/5 to SUNDAY 9/11.
                    for (var j = 0; j < 7; j++) {
                        //column holds a value if it exist in the spreadsheet cell otherwise its assigned an empty string.
                        var column = oldRow[j] || '';
                        //the value from the column is pushed into the our new row created above
                        newRow.push(column);
                    }
                    //Once our new row holds 7 values it is pushed into the array holding our new rows.
                    newRows.push(newRow)
                }
                //Finally we assign the new rows created to our property that will display our table. 
                vm.schedule = newRows;
                vm.loading = false;
            }, function errorCallback (error) {
                //If an error occurs we direct the user back to the login page.
                $state.go('home.login');
            });
        }
        function saveSchedule () {
            // Make sure values exist from our drop down menus.
            console.log(vm.setDate)
            console.log(vm.setTime)
            console.log(vm.setEmployee)
            if (vm.setDate && vm.setTime && vm.setEmployee) {
                vm.loading = true;
                // The Spreadsheets API looks for a specified row then enters the in each column as it iterates through the array.
                //  Null values tell the API to leave any current value alone and move on to the next value in the array.
                // indexArray creates an array used to specify the column that needs to be updated while leaving other alone.
                var indexArray = [];
                // rowIndex assigs the row to start at. Since our schedule starts at row 5 in the spreadsheet it is set the
                // index of the currently selected row plus 5.
                var rowIndex = vm.saveRow + 5;
                // columnIndex assigs the column to start at. Since our schedule starts at column 2 from the left
                // in the spreadsheet it is set to the columns index plus 2.
                var columnIndex = vm.saveColumn + 2;
                for( var i = 0; i < columnIndex + 1; i++) {
                    // if the column index is equal to the index we want it sets the name of the employee otherwise it pushes a 
                    // null value to be left alone.
                    var employeeName = (i === columnIndex) ? vm.setEmployee : null;
                    // Finally this this value is pushed into our array that will be sent in the request to the API. 
                    indexArray.push(employeeName);
                }            
                $http({
                    url: 'https://sheets.googleapis.com/v4/spreadsheets/1-hMUEsrl9cykc6-fgjG96c0wac7Y-VYAfyrflzZPSqc/values/Schedule!A' + rowIndex + ':' + rowIndex + '?valueInputOption=USER_ENTERED&access_token=' + $rootScope.token,
                    method: 'PUT',
                    data: {
                        'majorDimension': "ROWS",
                        'values': [
                            // Our array created above
                            indexArray
                        ],
                    }
                })
                .then(function successCallback (response) {
                    // Finally all values are reset to their default values and the sheet is reloaded to display the new value added.
                    vm.setDate = null;
                    vm.setTime = null;
                    vm.setEmployee = null;        
                    vm.saveColumn = null;        
                    vm.saveRow = null;                
                    vm.days = [];
                    vm.times = [];
                    vm.dates = [];
                    vm.schedule = [];
                    vm.employees = [];                
                    loadSheet();
                }, function errorCallback (error) {
                    // If an error occurs the user is redirected to the login screen.
                    $state.go('home.login');
                });
            }            
        }
        $scope.$emit( 'backButton', true );
    }

})();