import Dropdown from "bootstrap/js/dist/dropdown";

function initDropdowns() {
  const dropdownElements = document.querySelectorAll(
    '[data-bs-toggle="dropdown"]'
  );
  dropdownElements.forEach((elements) => new Dropdown(elements));
}

export function bootstrapInit() {
  initDropdowns();
}
