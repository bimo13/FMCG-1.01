function logout(){
	$("#pleasewait").modal();
	
	$.post(
		// URL
		//
		"http://fmcg.totalit.co.id/bimo/web-service/logout.php",
		// When Succeeded
		//
		function(data){
			if(data['status'] != 1){
				$("#pleasewait").modal('hide');
				
				$(".err_body_bg").addClass('bg-danger');
				$(".err_body_text").empty();
				$(".err_body_text").addClass('text-danger');
				$(".err_body_text").append(data['message']);
			}else{
				window.location.href="index.html";
			}
		},
		"json"
	);
}