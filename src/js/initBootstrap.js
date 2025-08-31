import Dropdown from "bootstrap/js/dist/dropdown";

function initDropdowns() {
  const dropdownElements = document.querySelectorAll(
    '[data-bs-toggle="dropdown"]'
  );
  dropdownElements.forEach((element) => new Dropdown(element));
}

export function initBootstrap() {
  initDropdowns();
}
