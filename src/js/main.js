import "../scss/styles.scss";
import { initBootstrap } from "./initBootstrap";
import { initLucide } from "./initLucide";
import { initTestimonials } from "./initTestimonials";

function app() {
  document.addEventListener("DOMContentLoaded", () => {
    initBootstrap();
    initLucide();
    initTestimonials();
  });
}

app();
