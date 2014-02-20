function get_kategori_produk(){
	
	$.post(
		
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/form-get-kategori_produk.php",
		// When Succeeded
		//
		function(data){
			
			if(data['status'] != 1){
				
				$("#log-message").empty();
				$("#log-message").append(data['message']);
				$("#popuptrig").click();
				
			}else{
				
				for(var x=0; x<data['return_data'].length; x++){
					
					$('#produk_kategori').append($('<option></option>').val(data['return_data'][x].id_kategori_produk).text(data['return_data'][x].nama_kategori));
					
				}
				
			}
			
		},
		"json"
		
	);
	
}

get_kategori_produk();