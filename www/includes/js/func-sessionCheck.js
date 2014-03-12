function session_check(){
	$.post(
		// URL
		//
		"http://demo.totalindo.net/FMCG-1.01/web-service/login-check.php",
		// When Succeeded
		//
		function(data){
			if(data['status'] != 1){
				$("#myDialogs").empty();
				$("#myDialogs").html("<div class=\"text-danger\">Terjadi Kesalahan !</div>");
				
				$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
				$("#myDialogsText").addClass("hide");
				$("#myDialogsText").addClass("alert-danger");
				$("#myDialogsText").html(data['message']);
				$("#myDialogsText").removeClass("hide");
				
				$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
				$("#button-DialogNo").removeClass("hide");
				$("#button-DialogClose").removeClass("hide");
				
				$("#button-DialogYes").unbind();
				$("#button-DialogNo").unbind();
				$("#button-DialogClose").unbind();
				
				$("#button-DialogClose").bind("click", function(){
					$("#FMCGDialogs").modal("hide");
					setTimeout(
						function(){
							window.location.href="index.html";
						},500
					);
				});
				
				$("#button-DialogYes").addClass("hide");
				$("#button-DialogNo").addClass("hide");
				
				$("#FMCGDialogs").modal();
			}
		},
		"json"
	);
}

session_check();