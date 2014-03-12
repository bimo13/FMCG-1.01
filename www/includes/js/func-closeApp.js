//DeviceReady function
document.addEventListener('deviceready', function(){
	document.addEventListener("backbutton", ShowExitDialog, false);
}, false);

//Dialog popup
function ShowExitDialog(){
	$("#myDialogs").empty();
	$("#myDialogs").html("Anda yakin ingin keluar dari aplikasi ?");
	
	$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
	$("#button-DialogNo").removeClass("hide");
	$("#button-DialogClose").removeClass("hide");
	
	$("#button-DialogYes").unbind();
	$("#button-DialogNo").unbind();
	$("#button-DialogClose").unbind();
	
	$("#button-DialogYes").addClass("btn-warning");
	$("#button-DialogYes").bind("click", function(){
		navigator.app.exitApp();
	});
	
	$("#button-DialogNo").bind("click", function(){
		$("#FMCGDialogs").modal("hide");
	});
	
	$("#button-DialogClose").addClass("hide");
	
	$("#FMCGDialogs").modal();
}