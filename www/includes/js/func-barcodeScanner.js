var app = {
	initialize: function(){
		this.bindEvents();
	},
	
	bindEvents: function(){
		document.getElementById('button_scan_barcode').addEventListener('click', this.scan, false);
	},
	
	scan: function(){
		console.log('scanning');
		
		var scanner = cordova.require("cordova/plugin/BarcodeScanner");
		
		scanner.scan(function(result){
			
			/*
			alert(
				"We got a barcode\n" + 
				"Result: " + result.text + "\n" + 
				"Format: " + result.format + "\n" + 
				"Cancelled: " + result.cancelled
			);
			*/
			
			var scan_result		=	result.text+"<br />"+result.format+"<br />"+result.cancelled
			
			if(result.cancelled == "false"){
				$("#err_alert_text").empty();
				$("#err_alert_text").append(scan_result);
				$("#errordialog").modal();
			}else{
				$("#err_alert_text").empty();
				$("#err_alert_text").append("<i>Barcode Scan</i> dibatalkan.");
				$("#errordialog").modal();
			}
			
			console.log(
				"Scanner result: \n" +
				"text: " + result.text + "\n" +
				"format: " + result.format + "\n" +
				"cancelled: " + result.cancelled + "\n"
			);
			console.log(result);
		}, function(error){
			$("#err_alert_text").empty();
			$("#err_alert_text").append("Scanning failed: ", error);
			$("#errordialog").modal();
			console.log("Scanning failed: ", error);
		});
	}
};