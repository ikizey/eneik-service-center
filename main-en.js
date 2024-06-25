document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".services__service");
  const serviceDetails = document.getElementById("service-details");
  const serviceImage = serviceDetails.querySelector(".active_service__image");
  const serviceName = serviceDetails.querySelector(".active_service__name");
  const serviceShortDescription = serviceDetails.querySelector(
    ".active_service__short_description"
  );
  const serviceLongDescription = serviceDetails.querySelector(
    ".active_service__long_description"
  );
  const serviceIncludesList = serviceDetails.querySelector(
    ".active_service__frequent_breakage_list"
  );
  const smallScreenActiveService = document.querySelector(
    ".services__active_service"
  );

  const servicesData = {
    prevention: {
      img: "img/services/prevention_big.png",
      name: "Prevention",
      short_description: "Ensuring your devices stay safe",
      long_description:
        "Our prevention services help you keep your devices safe and secure from potential threats.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying potential issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Proactive repairs to prevent future issues",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Regular check-ups and maintenance",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Advice and support on preventive measures",
        },
      ],
    },
    "pc-laptops": {
      img: "img/services/pc_laptiops_big.png",
      name: "Laptops and computers",
      short_description: "Passionately providing top device care",
      long_description:
        "Our team is dedicated to providing the best care for your laptops and PCs, whether you're facing slow performance, unexpected crashes, or hardware malfunctions.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty laptop components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    phones: {
      img: "img/services/phones_big.png",
      name: "Phones",
      short_description: "Expert care for your mobile devices",
      long_description:
        "We provide top-notch repair and maintenance services for all types of phones, ensuring your device stays in perfect condition.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty phone components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    tablets: {
      img: "img/services/tablets_big.png",
      name: "Tablets",
      short_description: "Reliable support for your tablets",
      long_description:
        "Our experts offer comprehensive repair and maintenance services for tablets, keeping them running smoothly and efficiently.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty tablet components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    "gaming-consoles": {
      img: "img/services/consoles_big.png",
      name: "Gaming consoles",
      short_description: "Keeping your gaming experience uninterrupted",
      long_description:
        "We provide specialized repair and maintenance services for gaming consoles, ensuring you can game without any disruptions.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty console components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    "office-equipment": {
      img: "img/services/office_big.png",
      name: "Office equipment",
      short_description: "Ensuring your office runs smoothly",
      long_description:
        "Our services cover a wide range of office equipment, providing repairs and maintenance to keep your office operations smooth and efficient.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty office equipment components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    monitors: {
      img: "img/services/monitors_big.png",
      name: "Monitors",
      short_description: "Clear and bright display services",
      long_description:
        "We offer repair and maintenance services for monitors to ensure you have a clear and bright display at all times.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty monitor components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
    headphones: {
      img: "img/services/headphones_big.png",
      name: "Headphones",
      short_description: "High-quality audio support",
      long_description:
        "Our services ensure your headphones provide high-quality audio by offering comprehensive repair and maintenance.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Diagnostics",
          text: "Identifying hardware and software issues",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Repair services",
          text: "Fixing or replacing faulty headphone components",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Preventive Maintenance",
          text: "Cleaning and maintenance to prevent future issues",
        },
        {
          icon: "img/icon-support.svg",
          title: "Customer Support",
          text: "Providing advice on usage and maintenance",
        },
      ],
    },
  };

  serviceItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      serviceItems.forEach((i) => {
        i.classList.remove("selected_service");
        i.querySelector(".service__arrow_container img").src =
          "img/arrow-topright.svg";
        i.querySelector(".service__arrow_container").classList.remove(
          "service__arrow_container_active"
        );
      });

      item.classList.add("selected_service");
      const arrowContainer = item.querySelector(".service__arrow_container");
      arrowContainer.classList.add("service__arrow_container_active");
      arrowContainer.querySelector("img").src = "img/arrow-right.svg";

      const serviceKey = item.getAttribute("data-service");
      const service = servicesData[serviceKey];

      // Update the service details
      serviceImage.src = service.img;
      serviceImage.alt = service.name;
      serviceName.textContent = service.name;
      serviceShortDescription.textContent = service.short_description;
      serviceLongDescription.textContent = service.long_description;

      // Clear the current includes list
      serviceIncludesList.innerHTML = "";
      service.includes.forEach((include) => {
        const li = document.createElement("li");
        li.className = "frequent_breakage_list__item";
        li.innerHTML = `
                  <div class="icon icon-light">
                      <img src="${include.icon}" alt="${include.title}" />
                  </div>
                  <div class="frequent_breakage_item__description">
                      <p class="frequent_breakage_item__title">${include.title}</p>
                      <p class="frequent_breakage_item__text">${include.text}</p>
                  </div>
              `;
        serviceIncludesList.appendChild(li);

        // if (smallScreenActiveService) {
        //   const smallServiceName = smallScreenActiveService.querySelector(
        //     ".active_service__name"
        //   );
        //   const smallServiceShortDescription =
        //     smallScreenActiveService.querySelector(
        //       ".active_service__short_description"
        //     );
        //   const smallServiceLongDescription =
        //     smallScreenActiveService.querySelector(
        //       ".active_service__long_description"
        //     );
        //   const smallServiceIncludesList =
        //     smallScreenActiveService.querySelector(
        //       ".active_service__frequent_breakage_list"
        //     );
        //   smallScreenActiveService.classList.add("grid-2c", "sm-hidden");

        //   smallServiceName.textContent = service.name;
        //   smallServiceShortDescription.textContent = service.short_description;
        //   smallServiceLongDescription.textContent = service.long_description;

        //   // Clear the current includes list for small screen
        //   smallServiceIncludesList.innerHTML = "";
        //   service.includes.forEach((include) => {
        //     const li = document.createElement("li");
        //     li.className = "frequent_breakage_list__item";
        //     li.innerHTML = `
        //           <div class="icon icon-light">
        //               <img src="${include.icon}" alt="${include.title}" />
        //           </div>
        //           <div class="frequent_breakage_item__description">
        //               <p class="frequent_breakage_item__title">${include.title}</p>
        //               <p class="frequent_breakage_item__text">${include.text}</p>
        //           </div>
        //       `;
        //     smallServiceIncludesList.appendChild(li);
        //   });

        //   // Move the small screen active service to the correct position
        //   const parent = item.parentElement;
        //   const grandParent = parent.parentElement;
        //   const index = Array.from(grandParent.children).indexOf(parent);

        //   if (index % 2 === 0) {
        //     if (grandParent.children[index + 1]) {
        //       grandParent.insertBefore(
        //         smallScreenActiveService,
        //         grandParent.children[index + 2]
        //       );
        //     } else {
        //       grandParent.appendChild(smallScreenActiveService);
        //     }
        //   } else {
        //     grandParent.insertBefore(
        //       smallScreenActiveService,
        //       grandParent.children[index + 1]
        //     );
        //   }
        // }
        if (smallScreenActiveService) {
          const smallServiceName = smallScreenActiveService.querySelector(
            ".active_service__name"
          );
          const smallServiceShortDescription =
            smallScreenActiveService.querySelector(
              ".active_service__short_description"
            );
          const smallServiceLongDescription =
            smallScreenActiveService.querySelector(
              ".active_service__long_description"
            );
          const smallServiceIncludesList =
            smallScreenActiveService.querySelector(
              ".active_service__frequent_breakage_list"
            );

          smallScreenActiveService.classList.add("grid-2c", "sm-hidden");

          smallServiceName.textContent = service.name;
          smallServiceShortDescription.textContent = service.short_description;
          smallServiceLongDescription.textContent = service.long_description;

          // Clear the current includes list for small screen
          smallServiceIncludesList.innerHTML = "";
          service.includes.forEach((include) => {
            const li = document.createElement("li");
            li.className = "frequent_breakage_list__item grid-2c"; // Added grid-2c class here
            li.innerHTML = `
                  <div class="icon icon-light">
                      <img src="${include.icon}" alt="${include.title}" />
                  </div>
                  <div class="frequent_breakage_item__description">
                      <p class="frequent_breakage_item__title">${include.title}</p>
                      <p class="frequent_breakage_item__text">${include.text}</p>
                  </div>
              `;
            smallServiceIncludesList.appendChild(li);
          });

          // Move the small screen active service to the correct position
          const parent = item.parentElement;
          const grandParent = parent.parentElement;
          const index = Array.from(grandParent.children).indexOf(parent);

          if ((index) % 2 !== 0 || index === 0) {
            // Insert after the next element in the grandParent
            if (grandParent.children[index + 2]) {
              grandParent.insertBefore(
                smallScreenActiveService,
                grandParent.children[index + 3]
              );
            } else {
              grandParent.appendChild(smallScreenActiveService);
            }
          } else {
            // Insert normally after the current parent
            grandParent.insertBefore(
              smallScreenActiveService,
              grandParent.children[index + 1]
            );
          }
        }
      });
    });
  });
});
