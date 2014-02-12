$('#form-data_toko').validate({
	rules: {
		toko_id: {
			required: true
		}
	},
	highlight: function(element) {
		$(element).closest('.form-group').addClass('has-error');
	},
	unhighlight: function(element) {
		$(element).closest('.form-group').removeClass('has-error');
	},
	errorElement: 'span',
	errorClass: 'help-block',
	errorPlacement: function(error, element) {
		if(element.parent('.input-group').length) {
			error.insertAfter(element.parent());
		} else {
			error.insertAfter(element);
		}
	},
	submitHandler: function(form){
		submit_dataToko();
	}
});

function submit_dataToko(){
	$("#pleasewait").modal();
	
	var id_toko			=	$("#toko_id").val();
	if(!isNaN(id_toko)){
		$.post(
			// URL
			//
			"http://demo.totalindo.net/fcmg/web-service/form-data_toko.php",
			// Data POST
			//
			{
				id_toko: id_toko
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
					$("#toko_nama").val(data['return_data']['nama_toko']);
					$("#toko_alamat").val(data['return_data']['alamat_toko']);
					$("#pemilik_nama").val(data['return_data']['nama_pemilik']);
					$("#pemilik_alamat").val(data['return_data']['alamat_pemilik']);
					$("#pemilik_telp").val(data['return_data']['no_telp_pemilik']);
					$("#pemilik_mail").val(data['return_data']['email_pemilik']);
					
					$("#toko_id").attr('disabled',true);
					$("#button_scan_barcode").attr('disabled',true);
					$("#button_konfirmasi_toko").attr('disabled',true);
					
					$("#trx_toko_id").val(data['return_data']['id_toko']);
					$("#trx_data_id").val(data['return_data']['data_trx_toko']);
					$("#button_del_trx").removeClass('hide');
					
					if(data['return_data']['jenis_kelamin'] == "L"){
						$("#pemilik_kelamin_l").attr("checked",true).checkboxradio("refresh");
						$("#pemilik_kelamin_p").attr("checked",false).checkboxradio("refresh");
					}else if(data['return_data']['jenis_kelamin'] == "P"){
						$("#pemilik_kelamin_p").attr("checked",true).checkboxradio("refresh");
						$("#pemilik_kelamin_l").attr("checked",false).checkboxradio("refresh");
					}
				}
			},
			"json"
		);
	}else{
		$("#pleasewait").modal('hide');
		$("#err_alert_text").empty();
		$("#err_alert_text").append("ID Toko salah.");
		$("#errordialog").modal();
	}
}