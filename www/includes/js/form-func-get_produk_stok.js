function get_stok_produk(){
	$("#pleasewait").modal();
	
	$.post(
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/form-get-stok_produk.php",
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
				
				for(var x=0; x<data['return_data'].length; x++){
					$('#produk_nama').append($('<option></option>').val(data['return_data'][x].id_produk).text(data['return_data'][x].nama_produk));
				}
			}
		},
		"json"
	);
}

get_stok_produk();