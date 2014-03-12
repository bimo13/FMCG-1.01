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
				
				$("#toko_id").attr('disabled',false);
				$("#button_scan_barcode").attr('disabled',false);
				$("#button_konfirmasi_toko").attr('disabled',false);
				$("#button_tambah_data").attr('disabled',true);
				$("#pemilik_kelamin_p").attr("checked",false);
				$("#pemilik_kelamin_l").attr("checked",false);
				$("#button_del_trx").addClass('hide');
				
				$("#pleasewait").modal('hide');
			}else{
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
			}
		},
		"json"
	);
	
	return false;
	
}