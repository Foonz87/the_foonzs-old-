var aboutCharlie = "This is Charlie."
var aboutAtticus = "This is Atticus."
var aboutSamara = "This is Samara."
var aboutBrooklyn = "This is Brooklyn."
var aboutBellatrix = "This is Bellatrix."
var aboutProngs = "This is Prongs."

function imageCharlie()
  {
    document.getElementById('image').src="images/charlie.jpg";
    $('.aboutPets').text(aboutCharlie);
  }

function imageAtticus()
  {
    document.getElementById('image').src="images/atticus.jpg";
    $('.aboutPets').text(aboutAtticus);
  }

function imageSamara()
  {
    document.getElementById('image').src="images/samara.jpg";
    $('.aboutPets').text(aboutSamara);
  }

function imageBrooklyn()
  {
    document.getElementById('image').src="images/brooklyn.jpg";
    $('.aboutPets').text(aboutBrooklyn);
  }

function imageBellatrix()
  {
    document.getElementById('image').src="images/bellatrix.jpg";
    $('.aboutPets').text(aboutBellatrix);
  }

function imageProngs()
  {
    document.getElementById('image').src="images/prongs.jpg";
    $('.aboutPets').text(aboutProngs);
  }

function imageAbout()
  {
    $('.image').click($('.aboutPets').toggle());
  }
