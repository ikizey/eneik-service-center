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
      name: "პრევენცია",
      short_description: "თქვენი მოწყობილობების უსაფრთხოება",
      long_description:
        "ჩვენი პრევენციული მომსახურება დაგეხმარებათ თქვენი მოწყობილობების უსაფრთხოებაში.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "პოტენციური პრობლემების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "პოტენციური პრობლემების პრევენციული რემონტი",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "რეგულარული შემოწმებები და მოვლა",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები და მხარდაჭერა პრევენციულ ზომებზე",
        },
      ],
    },
    "pc-laptops": {
      img: "img/services/pc_laptiops_big.png",
      name: "ლეპტოპები და კომპიუტერები",
      short_description: "თქვენი მოწყობილობების საუკეთესო მოვლა",
      long_description:
        "ჩვენი გუნდი ეძღვნება თქვენს ლეპტოპებს და კომპიუტერებს საუკეთესო მოვლას, იქნება ეს ნელი მუშაობა, მოულოდნელი ხარვეზები ან ტექნიკური გაუმართაობა.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "ლეპტოპების კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    phones: {
      img: "img/services/phones_big.png",
      name: "ტელეფონები",
      short_description: "მობილური მოწყობილობების ექსპერტული მოვლა",
      long_description:
        "ჩვენ გთავაზობთ მაღალი ხარისხის რემონტსა და მოვლას ყველა ტიპის ტელეფონისთვის, რათა თქვენი მოწყობილობა იყოს სრულყოფილ მდგომარეობაში.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "ტელეფონის კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    tablets: {
      img: "img/services/tablets_big.png",
      name: "ტაბლეტები",
      short_description: "სანდო მხარდაჭერა თქვენი ტაბლეტებისთვის",
      long_description:
        "ჩვენი ექსპერტები გთავაზობენ სრულყოფილ რემონტსა და მოვლას ტაბლეტებისთვის, რათა ისინი შეუფერხებლად და ეფექტურად იმუშაონ.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "ტაბლეტების კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    "gaming-consoles": {
      img: "img/services/consoles_big.png",
      name: "სათამაშო კონსოლები",
      short_description: "თქვენი სათამაშო გამოცდილების უწყვეტობა",
      long_description:
        "ჩვენ გთავაზობთ სპეციალიზირებულ რემონტსა და მოვლას სათამაშო კონსოლებისთვის, რათა შეძლოთ თამაში შეფერხებების გარეშე.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "კონსოლის კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    "office-equipment": {
      img: "img/services/office_big.png",
      name: "ოფისის აღჭურვილობა",
      short_description: "თქვენი ოფისის შეუფერხებელი მუშაობა",
      long_description:
        "ჩვენი მომსახურება მოიცავს ფართო სპექტრს ოფისის აღჭურვილობისთვის, რემონტსა და მოვლას, რათა თქვენი ოფისის ოპერაციები იყოს შეუფერხებელი და ეფექტური.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "ოფისის აღჭურვილობის კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    monitors: {
      img: "img/services/monitors_big.png",
      name: "მონიტორები",
      short_description: "კაშკაშა და ნათელი ეკრანის სერვისები",
      long_description:
        "ჩვენ გთავაზობთ მონიტორების რემონტსა და მოვლას, რათა თქვენ გქონდეთ კაშკაშა და ნათელი ეკრანი ნებისმიერ დროს.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "მონიტორების კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
        },
      ],
    },
    headphones: {
      img: "img/services/headphones_big.png",
      name: "ყურსასმენები",
      short_description: "მაღალი ხარისხის აუდიო მხარდაჭერა",
      long_description:
        "ჩვენი მომსახურება უზრუნველყოფს თქვენი ყურსასმენების მაღალი ხარისხის აუდიოს, გთავაზობთ სრულყოფილ რემონტსა და მოვლას.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "დიაგნოსტიკა",
          text: "ტექნიკური და პროგრამული ხარვეზების იდენტიფიცირება",
        },
        {
          icon: "img/icon-repair.svg",
          title: "რემონტის სერვისები",
          text: "ყურსასმენების კომპონენტების შეკეთება ან შეცვლა",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "პრევენციული მოვლა",
          text: "გაწმენდა და მოვლა მომავალი პრობლემების პრევენციისთვის",
        },
        {
          icon: "img/icon-support.svg",
          title: "კლიენტთა მხარდაჭერა",
          text: "რჩევები გამოყენებასა და მოვლაზე",
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

      serviceImage.src = service.img;
      serviceImage.alt = service.name;
      serviceName.textContent = service.name;
      serviceShortDescription.textContent = service.short_description;
      serviceLongDescription.textContent = service.long_description;

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

          smallServiceIncludesList.innerHTML = "";
          service.includes.forEach((include) => {
            const li = document.createElement("li");
            li.className = "frequent_breakage_list__item grid-2c";
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

          const parent = item.parentElement;
          const grandParent = parent.parentElement;
          const index = Array.from(grandParent.children).indexOf(parent);

          if (index % 2 !== 0 || index === 0) {
            if (grandParent.children[index + 2]) {
              grandParent.insertBefore(
                smallScreenActiveService,
                grandParent.children[index + 3]
              );
            } else {
              grandParent.appendChild(smallScreenActiveService);
            }
          } else {
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
