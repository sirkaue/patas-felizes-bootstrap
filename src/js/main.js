import "../scss/styles.scss";
import { bootstrapInit } from "./bootstrapInit";
import { lucideInit } from "./lucideInit";
import { testimonialsInit } from "./testimonialsInit";

function app() {
  document.addEventListener("DOMContentLoaded", () => {
    bootstrapInit();
    lucideInit();
    testimonialsInit();
  });
}

app();
