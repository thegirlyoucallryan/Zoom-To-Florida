function initialize() {
  var myLatLng = new google.maps.LatLng(28.538336, -81.379234);
  var mapOptions = {
    center: myLatLng,
    zoom: 8,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );
  var contentString =
    '<div id="content">' +
    '<div id="sideNotice"></div>' +
    '<h1 id="firstHeading">Florida</h1>' +
    '<div id="bodyContent">' +
    +"</div></div>";
  var infoWindowOptions = {
    content: contentString,
    maxWidth: 400,
  };
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Florida",
  });
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map, marker);
  });
  google.maps.event.addDomListener(window, "load", initialize);
}

//navbar

const header = document.querySelector("header");
const section = document.querySelector("#communities");
const nav = document.querySelectorAll(".nav-link li");
console.log(nav);
const navChange = function (entries, observer) {
  const [entry] = entries;
  let nav = document.querySelectorAll(".nav-link");

  if (!entry.isIntersecting) {
    nav.forEach((link, index) => {
      link.style.color = "#343a40";
    });
    if (entry.isVisbile) {
      console.log(entry);
      nav.forEach((link, index) => {
        link.style.color = "white";
      });
    }

    console.log(entry);
  }
};

const headerObserver = new IntersectionObserver(navChange, {
  root: null,
  threshold: 0.1,
});

headerObserver.observe(header);

///slider

let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.getElementById("arrow-left");

let arrowRight = document.querySelector("#arrow-right");
current = 0;

//clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
//init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function previous() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next
function next() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//left arrow click

arrowLeft.addEventListener("click", function (e) {
  if (current === 0) {
    current = sliderImages.length;
  }
  previous();
});
//left arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  next();
});

startSlide();
