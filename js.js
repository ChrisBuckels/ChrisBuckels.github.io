

function aboutButton() {
  var aboutUs = document.getElementById("aboutBlock") ; 
  var computed = window.getComputedStyle(aboutUs, null);
  if (aboutUs.style.opacity === "0") {
    aboutUs.style.opacity = "1" ;
    aboutUs.style.zIndex = "3" ;
  } else {
    aboutUs.style.opacity = "0" ;
    aboutUs.style.zIndex = "1" ;
  }
}

function closeButton1() {
  var aboutUs = document.getElementById("aboutBlock") ;  
  aboutUs.style.opacity = "0" ;
  aboutUs.style.zIndex = "1" ;
}

function experienceButton() {
  var experience = document.getElementById("experienceBlock") ;  
  if (experience.style.opacity === "0") {
    experience.style.opacity = "1" ;
    experience.style.zIndex = "3" ;
  } else {
    experience.style.opacity = "0" ;
    experience.style.zIndex = "1" ;
  }
}

function closeButton2() {
  var experience = document.getElementById("experienceBlock") ;  
  experience.style.opacity = "0" ;
  experience.style.zIndex = "1" ;
}

function projectButton() {
  var project = document.getElementById("projectBlock") ;  
  if (project.style.opacity === "0") {
    project.style.opacity = "1" ;
    project.style.zIndex = "3" ;
  } else {
    project.style.opacity = "0" ;
    project.style.zIndex = "1" ;
  }
}

function closeButton3() {
  var project = document.getElementById("projectBlock") ;  
  project.style.opacity = "0" ;
  project.style.zIndex = "1" ;
}

function aspirationsButton() {
  var aspirations = document.getElementById("aspirationsBlock") ;  
  if (aspirations.style.opacity === "0") {
    aspirations.style.opacity = "1" ;
    aspirations.style.zIndex = "3" ;
  } else {
    aspirations.style.opacity = "0" ;
    aspirations.style.zIndex = "1" ;
  }
}

function closeButton4() {
  var aspirations = document.getElementById("aspirationsBlock") ;  
  aspirations.style.opacity = "0" ;
  aspirations.style.zIndex = "1" ;
}

