//lottie cover animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation container"),
  path: "./images/animations/Hero.lottie.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "cover animation",
});
var animationPen = bodymovin.loadAnimation({
  container: document.getElementById("animation2 container2"),
  path: "./images/animations/pen.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "pen animation",
});
var animationWhatIs = bodymovin.loadAnimation({
  container: document.getElementById("animation3 container3"),
  path: "./images/animations/WhatIs.lottie.json",
  render: "svg",
  loop: false,
  autoplay: true,
  name: "what animation",
});
console.log("hi2");
