//DeviceReady function
document.addEventListener('deviceready', function(){
	document.addEventListener("backbutton", ShowExitDialog, false);
}, false);

//Dialog popup
function ShowExitDialog(){
	$("#exitdialog").modal();
}

//Exit function
function closeApp(){
	navigator.app.exitApp();
}