var currentFace = 0;

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function currentDiv1(n) {
  showDivs1(slideIndex1 = n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  var dots1 = document.getElementsByClassName("logo");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
     dots1[i].className = dots1[i].className.replace("white1", "");
  }
  x[slideIndex1-1].style.display = "block";
  dots1[slideIndex1 - 1].className += "white1";
}

//T-Shirt Slider End

// T-Shirt  button



function blackt() {

    document.getElementById("BlackT").style.display = "block";
	document.getElementById("WhiteT").style.display = "none";
	document.getElementById("RedT").style.display = "none";
	document.getElementById("BlueT").style.display = "none";
	currentShirtColor = "black";

}

function whitet() {

    document.getElementById("BlackT").style.display = "none";
	document.getElementById("WhiteT").style.display = "block";
	document.getElementById("RedT").style.display = "none";
	document.getElementById("BlueT").style.display = "none";
	currentShirtColor = "white";

}
function redt() {

    document.getElementById("BlackT").style.display = "none";
	document.getElementById("WhiteT").style.display = "none";
	document.getElementById("RedT").style.display = "block";
	document.getElementById("BlueT").style.display = "none";
	currentShirtColor = "red";

}
function bluet() {

    document.getElementById("BlackT").style.display = "none";
	document.getElementById("WhiteT").style.display = "none";
	document.getElementById("RedT").style.display = "none";
	document.getElementById("BlueT").style.display = "block";
	currentShirtColor = "blue";

}


// T-shirt button end



window.onload = function(e) {
  updateFace();
}


function nextCustomiser() {
    if(currentFace == 3) {
        currentFace = 1;
    } else {
        currentFace++;
    }
    updateFace();
}

function lastCustomiser() {
    if(currentFace == 1) {
        currentFace = 3;
    } else {
        currentFace--;
    }
    updateFace();
}

function updateFace() {
    switch(currentFace) {
        case 1:
            $('#customiserFace').attr('src', "assets/Cena.png");
            break;
        case 2:
            $('#customiserFace').attr('src', "assets/progressmetal.png");
            break;
        case 3:
            $('#customiserFace').attr('src', "assets/Sting.png");
            break;
    }
