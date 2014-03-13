$("#button_del_trx").click(function(){
	$("#myDialogs").empty();
	$("#myDialogs").html("<div class=\"text-danger\">Alert !</div>");
	
	$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
	$("#myDialogsText").addClass("alert-warning");
	$("#myDialogsText").html("Anda yakin ingin keluar dari aplikasi ini ?");
	
	$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
	$("#button-DialogNo").removeClass("hide");
	$("#button-DialogClose").removeClass("hide");
	
	$("#button-DialogYes").unbind();
	$("#button-DialogNo").unbind();
	$("#button-DialogClose").unbind();
	
	$("#button-DialogYes").addClass("btn-warning");
	$("#button-DialogYes").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
		delete_dataToko();
	});
	
	$("#button-DialogNo").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
	});
	
	$("#button-DialogClose").addClass("hide");
	
	$("#FMCGDialogs").modal();
	
	/*
	$("#buttonquest").unbind();
	$("#buttonquest").bind("click", function(){
		$("#questdialog").modal("hide");
		delete_dataToko();
	});
	*/
});

$(document).on("click", "a.row-rekap", function(){
	var src = $(this).attr("src-id");
	$("#myDialogs").empty();
	$("#myDialogs").html("<div class=\"text-danger\">Alert !</div>");
	
	$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
	$("#myDialogsText").addClass("alert-warning");
	$("#myDialogsText").html("Anda yakin ingin keluar dari aplikasi ini ?");
	
	$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
	$("#button-DialogNo").removeClass("hide");
	$("#button-DialogClose").removeClass("hide");
	
	$("#button-DialogYes").unbind();
	$("#button-DialogNo").unbind();
	$("#button-DialogClose").unbind();
	
	$("#button-DialogYes").addClass("btn-warning");
	$("#button-DialogYes").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
		delete_dataProduk(src);
	});
	
	$("#button-DialogNo").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
	});
	
	$("#button-DialogClose").addClass("hide");
	
	$("#FMCGDialogs").modal();
	
	/*
	$("#buttonquest").unbind();
	$("#buttonquest").bind("click", function(){
		$("#questdialog").modal("hide");
		delete_dataProduk(src);
	});
	*/
});