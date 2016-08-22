( function() {
  
  'use strict';
  
  angular.module( 'qrCodeToJSPDF.controller', [] )
    .controller( 'QrCodeToJSPDFCtrl', QrCodeToJSPDFCtrl );
  
  QrCodeToJSPDFCtrl.$inject = [ '$scope', '$timeout' ];
  
  function QrCodeToJSPDFCtrl( $scope, $timeout ) {
    
    var vm = this;
    
    vm.names = [
      { fName: 'Rima', lName: 'Acoff' },
      { fName: 'Olene', lName: 'Weigand' },
      { fName: 'Christen', lName: 'Iadarola' },
      { fName: 'Shira', lName: 'Maloney' },
      { fName: 'Reginald', lName: 'Strang' },
      { fName: 'Silas', lName: 'Alber' },
      { fName: 'Trisha', lName: 'Zipp' },
      { fName: 'Gilberto', lName: 'Bolender' },
      { fName: 'Maryanna', lName: 'Emmett' },
      { fName: 'Osvaldo', lName: 'Hight' },
      { fName: 'Melynda', lName: 'Dittmar' },
      { fName: 'Devora', lName: 'Michel' },
      { fName: 'Willena', lName: 'Tillman' },
      { fName: 'Pamella', lName: 'Mikkelsen' },
      { fName: 'Sima', lName: 'Kwon' },
      { fName: 'Deetta', lName: 'Petz' },
      { fName: 'Roberta', lName: 'Toothaker' },
      { fName: 'Domenic', lName: 'Beshears' },
      { fName: 'Arminda', lName: 'Montemurro' },
      { fName: 'Chanell', lName: 'Munson' },
      { fName: 'Georgie', lName: 'Barron' },
      { fName: 'Jamaal', lName: 'Heckert' },
      { fName: 'Hubert', lName: 'Overstreet' },
      { fName: 'Bryanna', lName: 'Bertolino' },
      { fName: 'Lady', lName: 'Goodloe' },
      { fName: 'Kurtis', lName: 'Sheriff' },
      { fName: 'Everett', lName: 'Ashbaugh' },
      { fName: 'Maryetta', lName: 'Dressel' },
      { fName: 'Adria', lName: 'Brashear' },
      { fName: 'Flor', lName: 'Purdom' }
    ]
    
    vm.generateQrCodePdf = generateQrCodePdf;
    
    function generateQrCodePdf( name ) {
      var fullName = name.fName + ' ' + name.lName;
      var div = $( '<div></div>' )
      var qr = new QRCode( $( div)[ 0 ], fullName );
      $timeout( function() {
        var qrCodeSrc  = $( div ).find( 'img' ).attr('src');
        var doc = new jsPDF();
        doc.setFontSize( 30 );
        doc.text( 56, 30, name.fName );
        doc.text( 56, 44, name.lName );
        doc.addImage( qrCodeSrc, 'png', 20, 15, 30, 30 );
        doc.output( 'datauri' );
      }, 200 );
    } 
    $scope.$emit( 'backButton', true );
    
  };
  
})();