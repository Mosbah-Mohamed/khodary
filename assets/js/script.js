$(document).ready(function () {
  $(".header #main-slide").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoplay: false,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /* ================== start scroll to sections  ============================================================ */
  // $("nav li a").on("click", function () {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
  //     },
  //     1000
  //   );
  // });

  //add class icon-active to li a
  $(".nav ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  /* =============================== end scroll to sections  ================================================= */
  /* =============================== start button up ========================================================= */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".up").fadeIn(2000);
      $(".up").css("right", "45px");
    } else {
      $(".up").fadeOut(2000);
      $(".up").css("right", "-45px");
    }
  });
  $(".up").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  /* =============================== end button up ============================================================ */

  /* ===============================  control radio  =============================== */
  $('input:radio[name="payment"]').change(function () {
    if (this.checked && this.value === "paybal") {
      $("#firstpayment").slideDown();
      $("#secondpayment").slideUp();
    } else if (this.checked && this.value === "visa") {
      $("#firstpayment").slideUp();
      $("#secondpayment").slideDown();
    }
  });

  /* ===============================  control radio  =============================== */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".auct").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active_tab").siblings().removeClass("active_tab");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("activeTab")
      .siblings()
      .removeClass("activeTab");
  });

  $(".paginate ul li").on("click", function (e) {
    // e.preventDefault();

    $(this)
      .addClass("active-paginate")
      .siblings()
      .removeClass("active-paginate");
  });

  /* =============================== end Settings of content tabs (payment) =================================== */

  /*=================== start side menu ======================================================================= */

  $(".navbar-toggler").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".side-bar").toggleClass("open");
  });

  $("body").click(function (e) {
    if ($(".side-bar").hasClass("open")) {
      $(".side-bar").toggleClass("open");
      $("nav .one").toggleClass("top");
      $("nav .two").toggleClass("hidden");
      $("nav .three").toggleClass("bottom");
    }
  });

  /*=================== end side menu ========================================================================= */
  /*============================ start navbar toggler ========================================================= */
  $("nav .navbar-toggler").on("click", function () {
    $("nav .one").toggleClass("top");
    $("nav .two").toggleClass("hidden");
    $("nav .three").toggleClass("bottom");
  });

  /*============================ end navbar toggler =========================================================== */

  /* =============================== start  WOW.js  =========================================================== */
  new WOW().init();
  /* =============================== end  WOW.js  ============================================================= */
  /* =============================== start AOS.js  ============================================================ */
  $(function () {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  });
  /* =============================== end  AOS.js  ============================================================= */
  /*============================== start mixitup plugin======================================================== */
  // var mixitup = require('mixitup');
  /*============================== end mixitup plugin========================================================== */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".muo_tab").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  /* =============================== end Settings of content tabs (payment) =================================== */

  /* =============================== start nice select  ======================================================= */
  // $(".nice-select").niceSelect();
  /* =============================== end nice select  ========================================================= */
  /* ===============================  start slick library section  ============================================ */

  /* =============================== end slick library section  ===================================================== */

  /* =============================== start intlTelInput ===================================================== */
  $(".search_icon").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr("data-content");

    console.log(id);

    $('.search-overlay[id="' + id + '"]').addClass("show");

    $(".search-overlay,.close").click(function (e) {
      $(".search-overlay").removeClass("show");
    });

    $(".search-overlay #form-search,.send_code").click(function (e) {
      e.stopPropagation();
    });
  });

  // ==================== overlay Tab ======================

  /* =============================== end intlTelInput ===================================================== */
});

/*==================== start spinner ========================================================================== */
/*==================== start spinner ========================================================================== */
$(window).on("load", function () {
  $(".loading-spinner").fadeOut(1500);
});

/*==================== end spinner ============================================================================ */

function initMap() {
  var uluru = { lat: 20.501859, lng: 60.41032 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "https://haraj.azq1.com/saudi/public/storage/setting/marker.png",
    optimized: false,
  });
  var marker = new google.maps.Marker({
    position: { lat: 24.501859, lng: 50.41032 },
    map: map,
    icon: "https://haraj.azq1.com/saudi/public/storage/setting/marker.png",
    optimized: false,
  });
  var marker = new google.maps.Marker({
    position: { lat: 40.501859, lng: 70.41032 },
    map: map,
    icon: "https://haraj.azq1.com/saudi/public/storage/setting/marker.png",
    optimized: false,
  });
  var marker = new google.maps.Marker({
    position: { lat: 31.501859, lng: 31.41032 },
    map: map,
    icon: "https://haraj.azq1.com/saudi/public/storage/setting/marker.png",
    optimized: false,
  });
}
