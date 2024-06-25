document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu__link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      menuLinks.forEach((menuLink) =>
        menuLink.classList.remove("item_selected")
      );

      this.classList.add("item_selected");

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const scrollButtons = document.querySelectorAll(".scroll-button");
  const scrollDownButton = document.querySelector(
    '.scroll-button[data-target="#services"]'
  );
  const scrollUpButton = document.querySelector(".scroll-up");
  scrollButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = this.dataset.target;
      if (target === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (
      scrollDownButton.getBoundingClientRect().top <= window.innerHeight &&
      scrollDownButton.getBoundingClientRect().bottom >= 0
    ) {
      scrollUpButton.classList.add("hidden");
    } else {
      scrollUpButton.classList.remove("hidden");
    }
  });

  const accordionItems = document.querySelectorAll(".aboutus__item");

  // Set the first item as open by default
  accordionItems[0].classList.add("accordion_open");
  accordionItems[0].querySelector(".aboutus__item_arrow img").src =
    "img/chevron-up.svg";
  accordionItems[0]
    .querySelector(".aboutus__item_text")
    .classList.remove("hidden");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".aboutus__item_header");
    const content = item.querySelector(".aboutus__item_text");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("accordion_open");

      // Close all items
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("accordion_open");
        otherItem.querySelector(".aboutus__item_arrow img").src =
          "img/chevron-down.svg";
        otherItem.querySelector(".aboutus__item_text").classList.add("hidden");
        otherItem.querySelector(".aboutus__item_text").style.maxHeight = null; // Reset max-height
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add("accordion_open");
        item.querySelector(".aboutus__item_arrow img").src =
          "img/chevron-up.svg";
        item.querySelector(".aboutus__item_text").classList.remove("hidden");
        item.querySelector(
          ".aboutus__item_text"
        ).style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });

  const accordionPriceItems = document.querySelectorAll(".prices__item");

  accordionPriceItems.forEach((item) => {
    const header = item.querySelector(".prices__item_header");
    // const header = item.querySelector(".prices_items_list");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("accordion_open");

      // Close all items
      accordionPriceItems.forEach((otherItem) => {
        otherItem.classList.remove("accordion_open");
        otherItem.querySelector(".prices_item_arrow img").style.transform =
          "rotate(0)";
        otherItem.querySelector(".prices_items_list").classList.add("hidden");
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add("accordion_open");
        item.querySelector(".prices_item_arrow img").style.transform =
          "rotate(180deg)";
        item.querySelector(".prices_items_list").classList.remove("hidden");
      }
    });
  });

  //testimonial
  const testimonials = document.querySelectorAll(".testimonials__testimonial");
  const navigationItems = document.querySelectorAll(
    ".testimonials__navigation_item"
  );
  const prevButton = document.querySelector(".testimonials__controls .prev");
  const nextButton = document.querySelector(".testimonials__controls .next");

  let currentIndex = 0;
  const totalItems = testimonials.length;

  // Show the initial testimonial
  showTestimonial(currentIndex);

  // Previous button click handler
  prevButton.addEventListener("click", function () {
    showTestimonial((currentIndex - 1 + totalItems) % totalItems, "prev");
  });

  // Next button click handler
  nextButton.addEventListener("click", function () {
    showTestimonial((currentIndex + 1) % totalItems, "next");
  });

  // Navigation item click handler
  navigationItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      showTestimonial(index);
    });
  });

  // Automatic rotation
  setInterval(function () {
    showTestimonial((currentIndex + 1) % totalItems, "next");
  }, 5000);

  // Function to display the testimonial at the given index
  function showTestimonial(index, direction = "next") {
    // Hide all testimonials and remove animation classes
    testimonials.forEach(function (testimonial) {
      testimonial.classList.remove("active", "animate-in", "animate-out");
      testimonial.style.display = "none";
    });

    // Determine animation direction
    let animateOut =
      direction === "prev" ? "animate-out-reverse" : "animate-out";
    let animateIn = direction === "prev" ? "animate-in-reverse" : "animate-in";

    // Add animate-out class to the current testimonial
    if (testimonials[currentIndex]) {
      testimonials[currentIndex].classList.add(animateOut);
    }

    // Show the new testimonial with animation
    testimonials[index].style.display = "block";
    testimonials[index].classList.add("active", animateIn);

    // Update active navigation indicator
    navigationItems.forEach(function (item, idx) {
      if (idx === index) {
        item.innerHTML = '<img src="img/icon-circle-full.svg" alt="" />';
      } else {
        item.innerHTML = '<img src="img/icon-circle.svg" alt="" />';
      }
    });

    currentIndex = index;
  }

  // breaks
  const list = document.querySelector(".frequent_breakdowns__list");
  const items = Array.from(
    document.querySelectorAll(".frequent_breakdowns__item")
  );
  let isDragging = false;
  let startX;
  let scrollLeft;

  list.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
    list.style.cursor = "grabbing";
  });

  list.addEventListener("mouseleave", () => {
    isDragging = false;
    list.style.cursor = "grab";
  });

  list.addEventListener("mouseup", () => {
    isDragging = false;
    list.style.cursor = "grab";
  });

  list.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - list.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    list.scrollLeft = scrollLeft - walk;
  });

  // Clone the items to create an infinite loop
  function cloneItems() {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      list.appendChild(clone);
    });
  }

  cloneItems();

  // Function to reset scroll position when reaching the end
  function loopScroll() {
    if (list.scrollLeft >= list.scrollWidth / 2) {
      list.scrollLeft = 0;
    }
    requestAnimationFrame(loopScroll);
  }

  requestAnimationFrame(loopScroll);

  const tabs = document.querySelectorAll(".frequent_breakdowns__tabs .btn");
  const breaks_items = document.querySelectorAll(".frequent_breakdowns__item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = tab.textContent.toLowerCase().replace(" ", "-");

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show or hide items based on category
      breaks_items.forEach((item) => {
        if (item.classList.contains(`category-${category}`)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  //breaks small
  const tabs_sm = document.querySelectorAll(".frequent_breakdowns__tabs .btn");
  const items_sm = document.querySelectorAll(".frequent_breakdowns__item");

  // Selectors for smaller screens
  const select_sm = document.getElementById("breakdownCategorySelect");

  function filterItems(category) {
    items_sm.forEach((item) => {
      if (item.classList.contains(`category-${category}`)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  tabs_sm.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = tab.textContent.toLowerCase().replace(" ", "-");

      tabs_sm.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      filterItems(category);
    });
  });

  select_sm.addEventListener("change", function () {
    const category = select_sm.value;
    filterItems(category);
  });

  const buttonLang = document.querySelector(".button__button");
  const dropdownLang = document.querySelector(".button__dropdown");

  buttonLang.addEventListener("click", function () {
    console.log(dropdownLang)
    dropdownLang.classList.toggle("hidden");
  });

  // Optional: Close the dropdown when clicking outside
  // document.addEventListener("click", function (event) {
  //   if (
  //     !buttonLang.contains(event.target) &&
  //     !dropdownLang.contains(event.target)
  //   ) {
  //     dropdownLang.classList.add("hidden");
  //   }
  // });
});
