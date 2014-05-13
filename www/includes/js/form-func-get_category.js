function get_kategori_produk(){
	
	$.post(
		
		// URL
		//
		"http://fmcg.totalit.co.id/bimo/web-service/form-get-kategori_produk.php",
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
				
				for(var x=0; x<data['return_data'].length; x++){
					
					$('#produk_kategori').append($('<option></option>').val(data['return_data'][x].id_kategori_produk).text(data['return_data'][x].nama_kategori));
					
				}
				
			}
			
		},
		"json"
		
	);
	
}

get_kategori_produk();