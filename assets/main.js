import "./main.scss";

// JQuery import
const $ = require("jquery");
global.$ = global.jQuery = $;

$(function() {
  console.log("App ready~");

  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
