function session_check(){
	$.post(
		// URL
		//
		"http://demo.totalindo.net/fcmg/web-service/login-check.php",
		// When Succeeded
		//
		function(data){
			if(data['status'] != 1){
				$("#sessiondialog").modal();
				$("#mySessionModal").addClass('text-danger');
				
				$(".err_session_bg").addClass('bg-danger');
				$(".err_session_text").empty();
				$(".err_session_text").addClass('text-danger');
				$(".err_session_text").append(data['message']);
				
				$('#sessiondialog').on('hidden.bs.modal',function(e){
					window.location.href="index.html";
				})
			}
		},
		"json"
	);
}

session_check();