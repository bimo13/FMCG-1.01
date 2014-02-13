var app = {
    initialize: function() {
        this.bindEvents();
    },
    
	bindEvents: function() {
        document.getElementById('button_scan_barcode').addEventListener('click', this.scan, false);
    },
	
	scan: function() {
        console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 

            alert("We got a barcode\n" + 
            "Result: " + result.text + "\n" + 
            "Format: " + result.format + "\n" + 
            "Cancelled: " + result.cancelled);  

           console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
            document.getElementById("info").innerHTML = result.text;
            console.log(result);

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    }

};