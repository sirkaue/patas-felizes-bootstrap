import Dropdown from "bootstrap/js/dist/dropdown";

function initDropdowns() {
  const dropdownElements = document.querySelectorAll(
    '[data-bs-toggle="dropdown"]'
  );

  for (const element of dropdownElements) {
    Dropdown.getOrCreateInstance(element);
  }
}

export function initBootstrap() {
  initDropdowns();
}
