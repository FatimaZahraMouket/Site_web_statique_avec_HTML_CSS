$("document").ready(function () {
  var trigger = $("#hamburger"),
    isClosed = false;

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    var menu = $("#menu");
    if (isClosed == true) {
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      menu.removeClass("menuOpen")
      menu.addClass("menuClose")
      isClosed = false;
    } else {
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      menu.removeClass("menuClose")
      menu.addClass("menuOpen");
      isClosed = true;
    }
  }
});
