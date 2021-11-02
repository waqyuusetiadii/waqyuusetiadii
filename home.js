function jawabann(){
  alert("Ibuuuuu, Cuma Ada 2 nilai yaaaa! 100 = Yakin / 0= Tidak Yakin");
 
  var jawaban = prompt("Seberapa Yakin kah Ibuu untuk menilai Waqyu?:(");
  
  if (jawaban == 100){
    alert("Selamat Datang ibuuu!");
  }else if(jawaban <= 100){
    alert("Ibu tidak semangat menilai ku:(((")
  }else if(jawaban >= 100){
    alert("Ibu sangat niat sekali:(")
  }if(jawaban != 100 ){
    var jawaban = prompt("Ibu mah baong gamasukin angka dengan benar");
    if(jawaban == 100){
      alert("Makasi ibuuu");
    }else if (jawaban != 100){
      alert("Ibu masih baong");
    }
  }
}
  

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function dropdown(){
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
}

function collapse(){
  
var coll = document.getElementsByClassName("collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}


alert("Ibuuuuu, Cuma Ada 2 nilai yaaaa! 100 = Yakin / 0= Tidak Yakin");
 
var jawaban = prompt("Seberapa Yakin kah Ibuu untuk menilai Waqyu?:(");

if (jawaban == 100){
  alert("Selamat Datang ibuuu!");
}else if(jawaban <= 100){
  alert("Ibu tidak semangat menilai ku:(((")
}else if(jawaban >= 100){
  alert("Ibu sangat niat sekali:(")
}if(jawaban != 100 ){
  var jawaban = prompt("Ibu mah baong gamasukin angka dengan benar");
  if(jawaban == 100){
    alert("Makasi ibuuu");
  }else if (jawaban != 100){
    alert("Ibu masih baong");
  }
}
