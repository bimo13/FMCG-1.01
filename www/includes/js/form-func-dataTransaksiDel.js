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
				$("#pleasewait").modal('hide');
				$("#err_alert_text").empty();
				$("#err_alert_text").append(data['message']);
				$("#errordialog").modal();
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