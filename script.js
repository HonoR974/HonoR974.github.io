
// When the user scrolls down 20px
// from the top of the document
//slide down the navbar
window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction(), read(1), read(2)};



function scrollFunction() {

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

    document.getElementById("menu").style.top = "0px";
    document.getElementById("menu").style.position = "fixed";


  } else {

    document.getElementById("menu").style.top = "0px";
    document.getElementById("menu").style.position = "relative";

  }
}


//------------------------- carousel img Screen 1 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 5 seconds
}




// -------------------------------carte projet 


filterSelection("all")

function filterSelection(c) {

  var x, i;
  x = document.getElementsByClassName("filterDiv");


  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {

    w3RemoveClass(x[i], "show");



    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    
  }


}

// Add 
function w3AddClass(element, name) {

  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// remove 
function w3RemoveClass(element, name) {

  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");


  for (i = 0; i < arr2.length; i++) {

    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");

}
 
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function(){

    console.log("this " + this.className +  " id " +this.id);
    

    var current = document.getElementsByClassName(" active");



    console.log( " nmb d'actif " + current.length);
    console.log("info " + current[0].id);

  current[0].className = current[0].className.replace(" active", " ");
    //current[i].className = current[i].className.replace("", " active");
   this.className += " active";
  
   console.log("this " + this.className +  " id " +this.id );


  });
}


//-------------------- Modal 

var modal;
var btn ;


// When the user clicks the button, open the modal 
function openModal(id)
{
  // Get the button that opens the modal
  btn = document.getElementById(id);
  // Get the modal
  modal = document.getElementById("myModal" + id);
  modal.style.display = "block";

}


// When the user clicks on <span> (x), close the modal
function closeModal(id)
{
// Get the <span> element that closes the modal
var span = document.getElementById(id);

modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/**Read More Read Less Button  */

function read(id) {



  var dots = document.getElementById("dots" + id);
  var moreText = document.getElementById("more"+id);
  var btnText = document.getElementById( id);



  if (dots.style.display.length < 1 )
  {
    dots.style.display = "none";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  }




  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

}