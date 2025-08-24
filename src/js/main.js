import "../scss/styles.scss";
import { bootstrapInit } from "./bootstrapInit";
import { lucideInit } from "./lucideInit";

function app() {
  document.addEventListener("DOMContentLoaded", () => {
    bootstrapInit();
    lucideInit();
  });
}

app();
