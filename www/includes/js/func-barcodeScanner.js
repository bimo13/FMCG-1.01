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
			
			if(result.cancelled === false){
				
				$("#pleasewait").modal();
				
				var text_res			=	result.text;
				var text_arr			=	text_res.split("|");
				
				if(text_arr[0] != "TOTALIT-FMCG"){
					$("#pleasewait").modal('hide');
					$("#err_alert_text").empty();
					$("#err_alert_text").append("<i>Barcode</i> salah.<br />Pastikan <i>barcode</i> yang anda scan adalah <i>barcode</i> FMCG.");
					$("#errordialog").modal();
				}else{
					var id_toko			=	text_arr[1];
					if(!isNaN(id_toko)){
						$.post(
							// URL
							//
							"http://demo.totalindo.net/FMCG-1.01/web-service/form-data_toko.php",
							// Data POST
							//
							{ id_toko: id_toko },
							// When Succeeded
							//
							function(data){
								if(data['status'] != 1){
									$("#pleasewait").modal('hide');
									$("#err_alert_text").empty();
									$("#err_alert_text").append(data['message']);
									$("#errordialog").modal();
								}else{
									$("#pleasewait").modal('hide');
									
									$("#toko_nama").val(text_arr[2]);
									$("#toko_alamat").val(text_arr[3]);
									$("#pemilik_nama").val(text_arr[4]);
									$("#pemilik_alamat").val(text_arr[6]);
									$("#pemilik_telp").val(text_arr[7]);
									$("#pemilik_mail").val(text_arr[8]);
									
									$("#toko_id").attr('disabled',true);
									$("#button_scan_barcode").attr('disabled',true);
									$("#button_konfirmasi_toko").attr('disabled',true);
									
									$("#trx_toko_id").val(text_arr[1]);
									$("#trx_data_id").val(data['return_data']['data_trx_toko']);
									$("#button_del_trx").removeClass('hide');
									
									if(text_arr[5] == "L"){
										$("#pemilik_kelamin_l").attr("checked",true).checkboxradio("refresh");
										$("#pemilik_kelamin_p").attr("checked",false).checkboxradio("refresh");
									}else if(text_arr[5] == "P"){
										$("#pemilik_kelamin_p").attr("checked",true).checkboxradio("refresh");
										$("#pemilik_kelamin_l").attr("checked",false).checkboxradio("refresh");
									}
								}
							}
						);
					}else{
						$("#pleasewait").modal('hide');
						$("#err_alert_text").empty();
						$("#err_alert_text").append("Terjadi kesalahan saat proses <i>scanning Barcode</i>.<br />Silakan ulangi proses <i>scan</i>.<br />Pastikan <i>barcode</i> yang anda scan adalah barcode FMCG.");
						$("#errordialog").modal();
					}
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