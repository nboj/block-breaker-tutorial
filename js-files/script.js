var lastIdOpen = false;
var open = false;
var lastId;
var canOpen = true;
var sidebarOpen = false;
var buttonHasAnimated = false;
function openNav() {
	document.getElementById("sideNav").style.marginLeft = "0";
	document.getElementById("sideNav").style.boxShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";
	sidebarOpen = true;
}
function closeNav() {
	if (sidebarOpen) {
		document.getElementById("sideNav").style.marginLeft = "-300px";
		document.getElementById("sideNav").style.boxShadow = "0 0";
		sidebarOpen = false;
	}
}
function cantOpen() {
	canOpen = false;
}
function extendButton(id) {
	if (canOpen) {
		if (lastIdOpen) {
			document.getElementById(lastId).style.paddingBottom = "0px";
		} else
			lastIdOpen = true;
		$(".assignment").css("background-color", "rgba(239,71,111,0.84)");
		if (id == lastId && open) {
			document.getElementById(id).style.paddingBottom = "0px";
			$(".assignment").css("background-color", "#EF476F");
		open = false;
		} else {
			$("#" + id).css("background-color", "#EF476F");
			document.getElementById(id).style.paddingBottom = "150px";
		lastId = id;
		if (!open)
		  open = true;
		}
	} else
		canOpen = true;
}
function animateButton() {
	if (!buttonHasAnimated) {
		$(".chat-menu img").hide(200,function() {
			$(".chat-menu").animate({paddingTop: "500px", paddingRight: "250px"}, 200);
		});
		buttonHasAnimated = true;
	} else {
		$(".chat-menu").animate({paddingTop: "0px", paddingRight: "0px"}, 200, function() {$(".chat-menu img").show(200)});
		
		buttonHasAnimated = false;
	}
}
function toggleAssignment(evt) {
	var box = evt.target.parentElement.id;
}