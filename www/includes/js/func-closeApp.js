//DeviceReady function
document.addEventListener('deviceready', function(){
	document.addEventListener("backbutton", ShowExitDialog, false);
}, false);

//Dialog popup
function ShowExitDialog(){
	$("#button-DialogYes").unbind();
	$("#button-DialogNo").unbind();
	
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