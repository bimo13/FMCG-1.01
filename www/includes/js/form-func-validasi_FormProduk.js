$('#formdataproduk').validate({
	rules: {
		produk_qty: {
			required: true,
			digits: true
		},
		produk_reject: {
			required: true,
			digits: true
		},
		produk_diskon: {
			required: true,
			digits: true
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
		submitTransaksi();
	}
});