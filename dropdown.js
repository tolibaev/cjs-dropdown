"use strict";

import "./dropdown.css";

function onDropdowns() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector(".dropdown__btn"),
      dropdownList = dropdown.querySelector(".dropdown__list"),
      dropdownInput = dropdown.querySelector(".dropdown__input");

    dropdownButton.onclick = () => dropdown.classList.toggle("open");
    dropdownList.onclick = (event) => {
      event.stopPropagation();
      const targetElement = event.target;
      if (targetElement.closest(".dropdown__list-btn")) {
        const innerHTML = targetElement.innerHTML;
        targetElement.innerHTML = dropdownButton.innerHTML;
        dropdownButton.innerHTML = innerHTML;

        const dataValue = targetElement.dataset.value;
        targetElement.dataset.value = dropdownButton.dataset.value;
        dropdownButton.dataset.value = dataValue;

        dropdownInput.setAttribute("value", dataValue);

        dropdown.classList.remove("open");
      }
    };

    document.addEventListener("click", (event) => {
      if (event.target != dropdownButton) dropdown.classList.remove("open");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key == "Escape") dropdown.classList.remove("open");
    });
  });
}

onDropdowns();
