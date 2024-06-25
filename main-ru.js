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
      name: "Профилактика",
      short_description: "Обеспечение безопасности ваших устройств",
      long_description:
        "Наши профилактические услуги помогут вам обезопасить ваши устройства от потенциальных угроз.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление потенциальных проблем",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Профилактический ремонт для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Регулярные проверки и обслуживание",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы и поддержка по профилактическим мерам",
        },
      ],
    },
    "pc-laptops": {
      img: "img/services/pc_laptiops_big.png",
      name: "Ноутбуки и компьютеры",
      short_description:
        "Страстное предоставление лучшего ухода за устройствами",
      long_description:
        "Наша команда посвятила себя предоставлению наилучшего ухода за вашими ноутбуками и ПК, будь то медленная работа, неожиданные сбои или неисправности оборудования.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов ноутбука",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    phones: {
      img: "img/services/phones_big.png",
      name: "Телефоны",
      short_description: "Экспертный уход за вашими мобильными устройствами",
      long_description:
        "Мы предоставляем первоклассные услуги по ремонту и обслуживанию всех типов телефонов, обеспечивая идеальное состояние вашего устройства.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов телефона",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    tablets: {
      img: "img/services/tablets_big.png",
      name: "Планшеты",
      short_description: "Надежная поддержка ваших планшетов",
      long_description:
        "Наши эксперты предлагают комплексные услуги по ремонту и обслуживанию планшетов, чтобы они работали гладко и эффективно.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов планшета",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    "gaming-consoles": {
      img: "img/services/consoles_big.png",
      name: "Игровые консоли",
      short_description: "Поддержка вашего игрового опыта без прерываний",
      long_description:
        "Мы предоставляем специализированные услуги по ремонту и обслуживанию игровых консолей, чтобы вы могли играть без перебоев.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов консоли",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    "office-equipment": {
      img: "img/services/office_big.png",
      name: "Офисное оборудование",
      short_description: "Обеспечение бесперебойной работы вашего офиса",
      long_description:
        "Наши услуги охватывают широкий спектр офисного оборудования, обеспечивая ремонт и обслуживание для бесперебойной работы вашего офиса.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов офисного оборудования",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    monitors: {
      img: "img/services/monitors_big.png",
      name: "Мониторы",
      short_description: "Услуги по обеспечению четкого и яркого дисплея",
      long_description:
        "Мы предлагаем услуги по ремонту и обслуживанию мониторов, чтобы ваш дисплей всегда был четким и ярким.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов монитора",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
        },
      ],
    },
    headphones: {
      img: "img/services/headphones_big.png",
      name: "Наушники",
      short_description: "Поддержка высококачественного звука",
      long_description:
        "Наши услуги обеспечивают ваши наушники высококачественным звуком благодаря комплексному ремонту и обслуживанию.",
      includes: [
        {
          icon: "img/icon-diagnostics.svg",
          title: "Диагностика",
          text: "Выявление проблем с оборудованием и программным обеспечением",
        },
        {
          icon: "img/icon-repair.svg",
          title: "Ремонтные услуги",
          text: "Ремонт или замена неисправных компонентов наушников",
        },
        {
          icon: "img/icon-maintanamnce.svg",
          title: "Профилактическое обслуживание",
          text: "Очистка и обслуживание для предотвращения будущих проблем",
        },
        {
          icon: "img/icon-support.svg",
          title: "Поддержка клиентов",
          text: "Советы по использованию и обслуживанию",
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

      // Обновление данных услуги
      serviceImage.src = service.img;
      serviceImage.alt = service.name;
      serviceName.textContent = service.name;
      serviceShortDescription.textContent = service.short_description;
      serviceLongDescription.textContent = service.long_description;

      // Очистка текущего списка включенных услуг
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

          // Очистка текущего списка включенных услуг для маленького экрана
          smallServiceIncludesList.innerHTML = "";
          service.includes.forEach((include) => {
            const li = document.createElement("li");
            li.className = "frequent_breakage_list__item grid-2c"; // Добавлен класс grid-2c
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

          // Перемещение активной услуги на маленьком экране в правильное положение
          const parent = item.parentElement;
          const grandParent = parent.parentElement;
          const index = Array.from(grandParent.children).indexOf(parent);

          if (index % 2 !== 0 || index === 0) {
            // Вставка после следующего элемента в grandParent
            if (grandParent.children[index + 2]) {
              grandParent.insertBefore(
                smallScreenActiveService,
                grandParent.children[index + 3]
              );
            } else {
              grandParent.appendChild(smallScreenActiveService);
            }
          } else {
            // Вставка нормально после текущего родителя
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
