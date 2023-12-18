$(function () {
  $(window)
    .on("scroll", function () {
      if ($("header").length) {
        var top = window.document.documentElement.scrollTop,
          $header = $("header"),
          topObjectTop =
            $(".pageContainer").css("paddingTop").replace("px", "") * 1;
        if (top > topObjectTop) {
          $header.removeClass("isTop");
        } else {
          $header.addClass("isTop");
        }
      }
    })
    .scroll();
});
