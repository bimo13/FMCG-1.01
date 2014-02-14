function delete_dataToko(){
	
	$("#pleasewait").modal();
	
	var trx_toko_id = $("#trx_toko_id").val();
	var trx_data_id = $("#trx_data_id").val();
	
	$.post(
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/delete-dataToko.php",
		// Data POST
		//
		{
			trx_toko_id: trx_toko_id,
			trx_data_id: trx_data_id
		},
		// When Succeeded
		//
		function(data){
			if(data['status'] == 1){
				$("#toko_nama").val("");
				$("#toko_alamat").val("");
				$("#pemilik_nama").val("");
				$("#pemilik_alamat").val("");
				$("#pemilik_telp").val("");
				$("#pemilik_mail").val("");
				$("#trx_toko_id").val("");
				$("#trx_data_id").val("");
				
				$("#pleasewait").modal('hide');
				
				$("#toko_id").attr('disabled',false);
				$("#button_scan_barcode").attr('disabled',false);
				$("#button_konfirmasi_toko").attr('disabled',false);
				$("#button_del_trx").addClass('hide');
				
				$("#pemilik_kelamin_p").attr("checked",false);
				$("#pemilik_kelamin_l").attr("checked",false);
			}else{
				$("#pleasewait").modal('hide');
				$("#err_alert_text").empty();
				$("#err_alert_text").append(data['message']);
				$("#errordialog").modal();
			}
		},
		"json"
	);
	
	return false;
	
}