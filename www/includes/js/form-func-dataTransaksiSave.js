function save_dataTransaksi(){
	$("#pleasewait").modal();
	var id_trx	=	$("#trx_data_id").val();
	
	$.post(
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/save-dataTransaksi.php",
		// Data POST
		//
		{
			id_trx: id_trx
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
				setTimeout(function(){
					$("#pleasewait").modal('hide');
					window.location.href	=	"main-page.html";
				}, 1500);
			}
		},
		"json"
	);
}