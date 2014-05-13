function get_stok_produk(){
	$("#pleasewait").modal();
	
	$.post(
		// URL
		//
		"http://fmcg.totalit.co.id/bimo/web-service/form-get-stok_produk.php",
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
				
				for(var x=0; x<data['return_data'].length; x++){
					$('#produk_nama').append($('<option></option>').val(data['return_data'][x].id_produk).text(data['return_data'][x].nama_produk));
				}
			}
		},
		"json"
	);
}

get_stok_produk();