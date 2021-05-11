function copyToClipboard(textID, buttonID) {
    var r = document.createRange();
    r.selectNode(document.getElementById(textID));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();  
    var buttons = $("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "Copy";
    }
    $("#" + buttonID)[0].innerHTML = "Copied"; 
} 

function play() {
    console.log("played");
    console.log("played");
    console.log("played");
    console.log("played");
    $(this)[0].play();
}