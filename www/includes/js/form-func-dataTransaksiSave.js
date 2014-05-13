function save_dataTransaksi(){
	$("#pleasewait").modal();
	var id_trx	=	$("#trx_data_id").val();
	
	$.post(
		// URL
		//
		"http://fmcg.totalit.co.id/bimo/web-service/save-dataTransaksi.php",
		// Data POST
		//
		{
			id_trx: id_trx
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
				
				$("#myDialogs").empty();
				$("#myDialogs").html("<div class=\"text-success\">Selesai</div>");
				
				$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
				$("#myDialogsText").addClass("alert-success");
				$("#myDialogsText").html(data['message']);
				
				$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
				$("#button-DialogNo").removeClass("hide");
				$("#button-DialogClose").removeClass("hide");
				
				$("#button-DialogYes").unbind();
				$("#button-DialogNo").unbind();
				$("#button-DialogClose").unbind();
				
				$("#button-DialogClose").bind("click", function(){
					$("#FMCGDialogs").modal("hide");
					setTimeout(
						function(){
							window.location.href="main-page.html";
						},500
					);
				});
				
				$("#button-DialogYes").addClass("hide");
				$("#button-DialogNo").addClass("hide");
				
				$("#pleasewait").modal('hide');
				$("#FMCGDialogs").modal();
				
			}
		},
		"json"
	);
}