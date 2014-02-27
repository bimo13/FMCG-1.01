$("#button_del_trx").click(function(){
	$("#buttonquest").unbind();
	$("#buttonquest").bind("click", function(){
		$("#questdialog").modal("hide");
		delete_dataToko();
	});
});

$(document).on("click", "a.row-rekap", function(){
	var src = $(this).attr("src-id");
	$("#buttonquest").unbind();
	$("#buttonquest").bind("click", function(){
		$("#questdialog").modal("hide");
		delete_dataProduk(src);
	});
});