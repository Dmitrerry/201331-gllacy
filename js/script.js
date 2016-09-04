"use strict";

var open = document.querySelector(".form-open");
var close = document.querySelector(".feedback-field a");	
var feedback = document.querySelector(".shadow");


close.addEventListener("click", function (event) {
  event.preventDefault();
  feedback.classList.remove("feedback-form-show");
	feedback.classList.remove("feedback-form-error");
});

open.addEventListener("click", function (event) {
	event.preventDefault();
	feedback.classList.add("feedback-form-show");
});