function get_detail_produk(){
	$("#pleasewait").modal();
	
	var id_produk		=	$("#produk_nama option:selected").val();
	
	if(id_produk != ""){
		$.post(
			// URL
			//
			"http://demo.totalindo.net/FMCG-1.01/web-service/form-get_detailProduk.php",
			// Data POST
			//
			{
				id_produk: id_produk
			},
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
					$("#produk_produsen").val(data['return_data']['nama_produsen']);
					$("#produk_harga").val(data['return_data']['harga_satuan']);
					$("#produk_stok").val(data['return_data']['stok_pegawai']);
					$("#produk_qty").attr('disabled',false);
				}
			},
			"json"
		);
	}else{
		$("#pleasewait").modal('hide');
		$("#produk_produsen").val("");
		$("#produk_harga").val("");
		$("#produk_stok").val("");
		$("#produk_qty").attr('disabled',true);
	}
	
}