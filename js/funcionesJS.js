
/* ARRAY DE IMAGENES */
ads = new Array(2);
ads[0] = "img/banner-lg.jpg";
ads[1] = "img/banner-lg2.jpg";
ads[2] = "img/banner-lg3.jpg";

//http://www.ticketya.com/promociones/mayorista/
//http://www.ticketya.com/promociones/mayorista/
//http://www.ticketya.com/promociones/mayorista/


/* ARRAY DE URLs */
arrayURLs = new Array(2);
arrayURLs[0] = "http://www.ticketya.com/promociones/B/2017-09-12/online.html"
arrayURLs[1] = "http://www.ticketya.com/promociones/B/2017-09-22/online.html"
arrayURLs[2] = "https://ticketya.psurfer.net/security/login.html"


//variable para llevar la cuenta de la imagen siguiente
var longuitudArray = ads.length;
var contador = 0
// Cojemos un numero aleatorio
contador = Math.floor((Math.random() * longuitudArray))

var tiempo = 3// En segundos
var timer = tiempo * 1000;

function banner() {
	contador++;
	contador = contador % longuitudArray
	document.banner.src = ads[contador];
	setTimeout("banner()", timer);
}

function ponerURL() {
	contador2 = contador;
	url = window.open(arrayURLs[contador2]);
	return false;
}
