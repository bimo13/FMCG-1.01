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
			
			if(result.cancelled === false){
				
				var text_res		=	result.text;
				var text_arr		=	text_res.split("|");
				
				$("#toko_nama").val(text_arr[1]);
				$("#toko_alamat").val(text_arr[2]);
				$("#pemilik_nama").val(text_arr[3]);
				$("#pemilik_alamat").val(text_arr[5]);
				$("#pemilik_telp").val(text_arr[6]);
				$("#pemilik_mail").val(text_arr[7]);
				
				/*
				$("#toko_id").attr('disabled',true);
				$("#button_scan_barcode").attr('disabled',true);
				$("#button_konfirmasi_toko").attr('disabled',true);
				
				$("#trx_toko_id").val(text_arr[1]);
				$("#trx_data_id").val(text_arr[1]);
				$("#button_del_trx").removeClass('hide');
				*/
				
				if(text_arr[4] == "L"){
					$("#pemilik_kelamin_l").attr("checked",true).checkboxradio("refresh");
					$("#pemilik_kelamin_p").attr("checked",false).checkboxradio("refresh");
				}else if(text_arr[4] == "P"){
					$("#pemilik_kelamin_p").attr("checked",true).checkboxradio("refresh");
					$("#pemilik_kelamin_l").attr("checked",false).checkboxradio("refresh");
				}
				
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