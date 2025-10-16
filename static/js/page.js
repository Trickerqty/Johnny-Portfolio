$(document).ready(function () {
  const $toggleBtn = $(".nav-toggle");
  const $navLinks  = $(".nav-links");
  const $year      = $("#year");
  const DESKTOP_BP = 900;

  // Set footer year
  $year.text(new Date().getFullYear());

  // Toggle menu
  $toggleBtn.on("click", function () {
    const isOpen = $navLinks.toggleClass("show").hasClass("show");
    $toggleBtn.attr("aria-expanded", isOpen);
  });

  // Close on nav link click
  $navLinks.on("click", "a", function () {
    if ($navLinks.hasClass("show")) {
      $navLinks.removeClass("show");
      $toggleBtn.attr("aria-expanded", false);
    }
  });

  // Click outside to close
  $(document).on("click", function (e) {
    const isInsideNav = $(e.target).closest(".nav-links, .nav-toggle").length > 0;
    if (!isInsideNav && $navLinks.hasClass("show")) {
      $navLinks.removeClass("show");
      $toggleBtn.attr("aria-expanded", false);
    }
  });

  // Esc key to close
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $navLinks.hasClass("show")) {
      $navLinks.removeClass("show");
      $toggleBtn.attr("aria-expanded", false);
    }
  });

  // On window resize — close menu if on desktop
  $(window).on("resize", function () {
    if ($(window).width() > DESKTOP_BP && $navLinks.hasClass("show")) {
      $navLinks.removeClass("show");
      $toggleBtn.attr("aria-expanded", false);
    }
  });
});
