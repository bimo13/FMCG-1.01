//DeviceReady function
document.addEventListener('deviceready', function(){
	document.addEventListener("backbutton", ShowExitDialog, false);
}, false);

//Dialog popup
function ShowExitDialog(){
	$("#myDialogs").empty();
	$("#myDialogs").html("Anda yakin ingin keluar dari aplikasi ?");
	
	$("#button-DialogYes").removeClass("btn-info");
	$("#button-DialogYes").removeClass("btn-danger");
	$("#button-DialogYes").removeClass("btn-warning");
	$("#button-DialogYes").removeClass("btn-primary");
	
	$("#button-DialogYes").unbind();
	$("#button-DialogNo").unbind();
	
	$("#button-DialogYes").addClass("btn-warning");
	$("#button-DialogYes").bind("click", function(){
		navigator.app.exitApp();
	});
	
	$("#button-DialogNo").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
	});
	
	$("#FMCGDialogs").modal();
}

/*
function ShowExitDialog(){
	$("#exitdialog").modal();
}
*/

//Exit function

/*
function closeApp(){
	navigator.app.exitApp();
}
*/