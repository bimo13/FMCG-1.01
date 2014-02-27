function submitTransaksi(){
	$("#pleasewait").modal();
	
	var trx_toko_id		=	$("#trx_toko_id").val();
	var trx_data_id		=	$("#trx_data_id").val();
	
	var prod_id			=	$("#produk_nama").val();
	var prod_qty		=	$("#produk_qty").val();
	var prod_reject		=	$("#produk_reject").val();
	var prod_diskon		=	$("#produk_diskon").val();
	var total_harga		=	$("#produk_total_pesanan").val();
	
	if(!isNaN(trx_toko_id) || !isNaN(trx_data_id) || trx_toko_id != "" || trx_data_id != ""){
		$.post(
			// URL
			//
			"http://demo.totalindo.net/FMCG-1.01/web-service/form-data_produk.php",
			// Data POST
			//
			{
				trx_data_id: trx_data_id,
				prod_id: prod_id,
				prod_qty: prod_qty,
				prod_reject: prod_reject,
				prod_diskon: prod_diskon,
				total_harga: total_harga
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
					$('#tabel_rekap tr:last').after(
						"<tr class=\"tr_transaksi\" id=\"row-id-"+data['return_data']['data_trx_produk']+"\"><td>"+data['return_data']['no_trx']+"</td><td>"+data['return_data']['nama_produk']+"</td><td>"+prod_qty+"</td><td>"+total_harga+"</td><td><a data-toggle=\"modal\" href=\"#questdialog\" class=\"row-rekap\" src-id=\""+data['return_data']['data_trx_produk']+"\"><span class=\"glyphicon glyphicon-remove\"></span> HAPUS</a></td></tr>"
					);
					
					var currentVal = parseInt($("#tot_trx_produk").val());
					$("#tot_trx_produk").val(currentVal + 1);
					if($("#tot_trx_produk").val() > 0){
						$("#button_add_trx").removeClass("hide");
					}else{
						$("#button_add_trx").addClass("hide");
					}
					
				}
			},
			"json"
		);
	}else{
		$("#pleasewait").modal('hide');
		$("#err_alert_text").empty();
		$("#err_alert_text").append("Pastikan anda sudah mengkonfirmasi data toko.");
		$("#errordialog").modal();
	}
}