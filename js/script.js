  var popup = document.querySelector(".modal-feedback");
  if (popup) {
    var link = document.querySelector(".feedback");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector("form");
    var username = popup.querySelector("[name=name]");
    var address = popup.querySelector("[name=email]");
    var message = popup.querySelector("[name=comment]");

    var isStorageSupport = true;
    var storage = "";

    try {
      storageName = localStorage.getItem("username");
      storageEmail = localStorage.getItem("address");
    } catch (err) {
      isStorageSupport = false;
    }


    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storageName && storageEmail) {
        username.value = storageName;
        address.value = storageEmail;
        message.focus();
      } else {
        username.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!username.value || !address.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("username", username.value);
          localStorage.setItem("address", address.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });
  }


  /*Вызов модального окна в блоке с популярными товарами*/

  var modalBuy = document.querySelectorAll(".button-buy");
  var buyPopup = document.querySelector(".add-product");
  var mapClose = buyPopup.querySelectorAll(".modal-close");

  for (var i = 0; i < modalBuy.length; i++) {
    modalBuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal-show");
    });
  };

  for (var n = 0; n < mapClose.length; n++) {
    mapClose[n].addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    });
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (buyPopup.classList.contains("modal-show")) {
        buyPopup.classList.remove("modal-show");
      }
    }
  });

  /*Вызов модального окна с картой*/


  var mapLink = document.querySelector(".map-link");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });