window.onload = choosePic;

var myPix = new Array("images/frase1.png","images/frase2.png","images/frase3.png","images/frase4.png","images/frase5.png");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}