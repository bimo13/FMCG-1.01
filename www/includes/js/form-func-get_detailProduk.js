function get_detail_produk(){
	$("#pleasewait").modal();
	
	var id_produk		=	$("#produk_nama option:selected").val();
	
	if(id_produk != ""){
		$.post(
			// URL
			//
			"http://fmcg.totalit.co.id/bimo/web-service/form-get_detailProduk.php",
			// Data POST
			//
			{
				id_produk: id_produk
			},
			// When Succeeded
			//
			function(data){
				if(data['status'] != 1){
					$("#myDialogs").empty();
					$("#myDialogs").html("<div class=\"text-danger\">Terjadi Kesalahan !</div>");
					
					$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
					$("#myDialogsText").addClass("alert-danger");
					$("#myDialogsText").html(data['message']);
					
					$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
					$("#button-DialogNo").removeClass("hide");
					$("#button-DialogClose").removeClass("hide");
					
					$("#button-DialogYes").unbind();
					$("#button-DialogNo").unbind();
					$("#button-DialogClose").unbind();
					
					$("#button-DialogClose").bind("click", function(){
						$("#FMCGDialogs").modal("hide");
					});
					
					$("#button-DialogYes").addClass("hide");
					$("#button-DialogNo").addClass("hide");
					
					$("#pleasewait").modal('hide');
					$("#FMCGDialogs").modal();
				}else{
					$("#pleasewait").modal('hide');
					$("#produk_produsen").val(data['return_data']['nama_produsen']);
					$("#produk_harga").val(data['return_data']['harga_satuan']);
					$("#produk_stok").val(data['return_data']['stok_pegawai']);
					$("#produk_qty").attr('disabled',false);
					$("#produk_reject").attr('disabled',false);
					$("#produk_diskon").attr('disabled',false);
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
		$("#produk_reject").attr('disabled',true);
		$("#produk_diskon").attr('disabled',true);
	}
	
}