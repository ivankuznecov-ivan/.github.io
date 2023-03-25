document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 27,
  });
  })

  const btns = document.querySelectorAll(".menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activeClassdropdowns = "dropdown__active";
  const activeClassbtns = "btn__active";

  btns.forEach(item => {
    item.addEventListener("click", function() {
      let DropThis = this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  })

  const element = document.querySelector('.select');
    const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
  });

  // inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form', {
  errorFieldCssClass: 'just-validate-error-field',
  errorFieldStyle: {
    border: '1px solid #D11616',
  },
  errorLabelCssClass: 'just-validate-error-label',
  errorLabelStyle: {
    color: '#D11616',
    textDecoration: 'underlined',
  },
});

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат'
    },

  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },


  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });


  //   map
  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector("#map");
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: ["geolocationControl", "zoomControl"]
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "300px", right: "20px" },
        geolocationControlFloat: "none",
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "200px", right: "20px" }
      }
    );

    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    }

    myMap.behaviors.disable("scrollZoom");

    myMap.events.add("sizechange", function (e) {
      if (window.matchMedia("(max-width: 1280px)").matches) {
        if (Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.remove('zoomControl');
          myMap.controls.remove('geolocationControl');
        }
      } else {
        if (!Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.add('zoomControl');
          myMap.controls.add('geolocationControl');
        }
      }
    });

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "image/svg/map-icon.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -40]
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }

  (() => {
    tippy('.js-project__tooltyp', {
      theme: 'project-tooltyp',
      placement: 'top',
      arrow: true,
      animation: 'fade',
      delay: 500,
    });

  })();

  // scroll
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 3000,
  framesCount = 50;

  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
      let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }

      }, animationTime / framesCount);
    });
  });
  const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
      if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.remove('btn-up_hide');
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    hide() {
      if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.add('btn-up_hide');
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
          return;
        }
        this.scrolling = false;
        if (scrollY > 350) {
          this.show();
        } else {
          this.hide();
        }
      });
      document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  btnUp.addEventListener();


});
