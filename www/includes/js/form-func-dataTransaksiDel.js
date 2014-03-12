function delete_dataProduk(src){
	$("#pleasewait").modal();
	$.post(
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/delete-dataProduk.php",
		// Data POST
		//
		{
			src: src
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
				$("#pleasewait").modal("hide");
				$("#row-id-"+src).remove();
				
				var currentVal = parseInt($("#tot_trx_produk").val());
				$("#tot_trx_produk").val(currentVal - 1);
				if($("#tot_trx_produk").val() > 0){
					$("#button_add_trx").removeClass("hide");
				}else{
					$("#button_add_trx").addClass("hide");
				}
				
			}
		},
		"json"
	);
}