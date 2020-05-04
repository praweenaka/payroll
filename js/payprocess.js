function GetXmlHttpObject() {
	var xmlHttp = null;
	try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
// Internet Explorer
try {
	xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
}
return xmlHttp;
}

function keyset(key, e) {

	if (e.keyCode == 13) {
		document.getElementById(key).focus();
	}
}

function got_focus(key) {
	document.getElementById(key).style.backgroundColor = "#000066";
}

function lost_focus(key) {
	document.getElementById(key).style.backgroundColor = "#000000";
}

function print_sheet() {

	var url = "salarysheet.php";
	url = url + "?month=" + document.getElementById('month').value;
	window.open(url, '_blank');

}
function print_slip() {

	var url = "salaryslip.php";
	url = url + "?month=" + document.getElementById('month').value;
	window.open(url, '_blank');

}