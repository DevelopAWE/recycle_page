(function($, root, undefined) {
  $(function() {
    "use strict";

    // Mobile Menu

    $("body").click(function() {
      $(".mobile-menu").removeClass("active");
    });

    $(".mobile-menu__button").click(function(e) {
      e.stopPropagation();
      $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu").click(function(e) {
      e.stopPropagation();
    });

    $(".menu-item-has-children").click(function(e) {
      e.stopPropagation();
      if ($(window).width() <= 991) {
        e.preventDefault();
        $(this)
          .find(".sub-menu")
          .slideToggle("fast");
      }
    });

    $(".menu-item-has-children").hover(
      function(e) {
        if ($(window).width() >= 991) {
          $(this)
            .find(".sub-menu")
            .fadeIn("fast");
        }
      },
      function() {
        if ($(window).width() >= 991) {
          $(this)
            .find(".sub-menu")
            .fadeOut("fast");
        }
      }
    );

    $(".sub-menu a").click(function(e) {
      e.stopPropagation();
    });

    // END Mobile Menu

    // Footer Locations Hover

    var rmclss,
      id = null;

    $(".locations-hover__container").hover(
      function() {
        var this_id = $(this).attr("id");
        if (id == null || id == this_id.substr(this_id.indexOf("-") + 1))
          clearTimeout(rmclss);
        $(this).fadeIn(300);
        $("#location-" + this_id.substr(this_id.indexOf("-") + 1)).addClass(
          "hover"
        );
      },
      function() {
        $(this).fadeOut(300);
        var context = $(this);
        rmclss = setTimeout(function() {
          var this_id = context.attr("id");
          $(
            "#location-" + this_id.substr(this_id.indexOf("-") + 1)
          ).removeClass("hover");
        }, 100);
      }
    );

    $(".location").hover(
      function() {
        var this_id = $(this).attr("id");
        if (id == null || id == this_id.substr(this_id.indexOf("-") + 1))
          clearTimeout(rmclss);
        id = this_id.substr(this_id.indexOf("-") + 1);
        $(this).addClass("hover");
        $("#locations-" + this_id.substr(this_id.indexOf("_"))).fadeIn(300);
      },
      function() {
        var this_id = $(this).attr("id");
        var context = $(this);
        rmclss = setTimeout(function() {
          context.removeClass("hover");
          $("#locations-" + this_id.substr(this_id.indexOf("_"))).fadeOut(300);
        }, 100);
      }
    );

    // END Footer Locations Hover

    // Add "animate" Class function with timeout

    function add_animate_class(el, os) {
      setTimeout(function() {
        el.addClass("animate");
      }, os);
    }

    // END Add "animate" Class function with timeout

    // Home page icon animations

    var half_win_height = $(window).height() / 2;

    function activate_scroll_icon(els, tos, pos) {
      $(els).each(function() {
        var el = $(this);

        $(window).scroll(function() {
          if (
            $(this).scrollTop() >=
            el.offset().top - (half_win_height + pos)
          ) {
            add_animate_class(el, tos);
          }
        });
      });
    }
    if ($(".home").length >= 1) {
      activate_scroll_icon(
        [
          $(".home #section-1"),
          $(".home #section-2"),
          $(".home #section-3"),
          $(".home #section-4"),
          $(".home #section-5"),
          $(".home #section-6")
        ],
        200,
        0
      );
    }

    // END Home page icon animations

    // Interior page animations

    if ($(".page-template-page-why-sadoff").length >= 1) {
      var cc_col_6_first = $("#comprehensive-checklist .col-sm-6:nth-child(3)");

      $(window).scroll(function() {
        if (
          $(this).scrollTop() >=
          cc_col_6_first.offset().top - half_win_height
        ) {
          add_animate_class(cc_col_6_first);
          add_animate_class(
            $("#comprehensive-checklist .col-sm-6:nth-child(4)"),
            500
          );
          add_animate_class(
            $("#comprehensive-checklist .col-sm-6:nth-child(5)"),
            1000
          );
          add_animate_class(
            $("#comprehensive-checklist .col-sm-6:nth-child(6)"),
            1500
          );
          add_animate_class(
            $("#comprehensive-checklist .col-sm-6:nth-child(7)"),
            2000
          );
          add_animate_class(
            $("#comprehensive-checklist .col-sm-6:nth-child(8)"),
            2500
          );
        }
      });
    }

    if ($(".page-template-page-electronics-recycling").length >= 1) {
      var collection = $(".toggle-group .collection");

      $(window).scroll(function() {
        if ($(this).scrollTop() >= collection.offset().top - half_win_height) {
          add_animate_class(collection);
          add_animate_class($(".toggle-group .processing"), 500);
          add_animate_class($(".toggle-group .sorting-and-weighing"), 1000);
          add_animate_class($(".toggle-group .dismantling"), 1500);
          add_animate_class($(".toggle-group .recycling"), 2000);
          add_animate_class($(".toggle-group .certification"), 2500);
        }
      });
    }

    if ($(".page-template-page-secure-data-destruction").length >= 1) {
      var collection = $(".toggle-group .collection"),
        processing = $(".toggle-group .processing"),
        drive_destruction = $(".toggle-group .drive-destruction"),
        drive_purging = $(".toggle-group .drive-purging"),
        certification = $(".toggle-group .certification");

      $(window).scroll(function() {
        if ($(this).scrollTop() >= collection.offset().top - half_win_height) {
          add_animate_class(collection);
          add_animate_class(processing, 500);
          add_animate_class(drive_destruction, 1000);
          add_animate_class(drive_purging, 1500);
          add_animate_class(certification, 2000);
        }
      });
    }

    if ($(".page-template-page-it-asset-remarketing").length >= 1) {
      var review_assets = $(".toggle-group .review-assets");

      $(window).scroll(function() {
        if (
          $(this).scrollTop() >=
          review_assets.offset().top - half_win_height
        ) {
          add_animate_class(review_assets);
          add_animate_class($(".toggle-group .collection"), 500);
          add_animate_class($(".toggle-group .destroy-data-and-test"), 1000);
          add_animate_class($(".toggle-group .sales"), 1500);
          add_animate_class($(".toggle-group .reporting"), 2000);
        }
      });
    }

    activate_scroll_icon($(".animation"), 0, 200);

    // END Interior page animations

    // Gray Row Red Col Height

    function gray_red_col_height() {
      $(".gray-row .container > .row > div").css("height", "auto");
      if ($(window).width() >= 767) {
        var gray_col_tallest = 0;
        $(".gray-row .container > .row > div")
          .each(function() {
            if ($(this).height() > gray_col_tallest);
            gray_col_tallest = $(this).height();
          })
          .each(function() {
            $(this).height(gray_col_tallest);
          });
      }
    }
    gray_red_col_height();

    // END Gray Row Red Col Height

    // v-align Class

    function v_align() {
      $(this).css("top", "auto");
      if ($(window).width() >= 767) {
        var parent_height = $(this)
          .parent()
          .height();
        $(this).css("top", parent_height / 2);
      }
    }

    function v_align_call() {
      $(".v_align").each(function() {
        v_align.call(this, this);
      });
    }

    v_align_call();

    $(window).resize(function() {
      gray_red_col_height();
      v_align_call();
    });

    // END v-align Class

    // Sticky on scroll

    function sticky_on_scroll(el_to_stick) {
      var el_to_stick_offset = el_to_stick.offset().top + 20;

      $(window).scroll(function() {
        $(this).scrollTop() >= el_to_stick_offset
          ? el_to_stick.addClass("sticky")
          : el_to_stick.removeClass("sticky");
      });
    }

    var get_started = $("#get-started");

    sticky_on_scroll(get_started);

    var contact_form = $("#contact-form");

    $(window).scroll(function() {
      var get_started_position = get_started.css("position");
      get_started_position === "fixed"
        ? contact_form.addClass("sticky")
        : contact_form.removeClass("sticky");
    });

    // END Sticky on scroll

    // Staff Directory toggle

    $(".btn-staff-directory").click(function() {
      $(this).toggleClass("active");
      $("#staff-directory").slideToggle(500);
    });

    // END Staff Directory toggle

    // Contact Form toggle

    $(
      "#get-started button, .btn-contact-form, .sell-to-sadoff .gray-row .col-sm-3 p, .form-activate"
    ).click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      $("#contact-form")
        .slideToggle(500)
        .toggleClass("active");

      $("#contact-form").hasClass("active")
        ? get_started.find("button").text("Close Form")
        : get_started.find("button").text("Reach Out");

      if ($(window).width() <= 767 && $("#contact-form").hasClass("active")) {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          "slow"
        );
      }

      if ($(this).hasClass("select-erdd")) {
        setTimeout(function() {
          $(
            '.electronics-recycling-and-data-destruction input[type="checkbox"]'
          ).click();
        }, 700);
      }
    });

    // END Contact Form toggle

    // Form "validation" checkboxes

    $(".captcha-group .wpcf7-form-control-wrap").click(function() {
      if (
        $(this).hasClass("recycle") ||
        $(this).hasClass("hands") ||
        $(this).hasClass("hardhat") ||
        $(this).hasClass("globe")
      ) {
        if (
          $(this)
            .find("input")
            .prop("checked") === true
        ) {
          $(this).removeClass("active");
          $(this)
            .find("input")
            .prop("checked", false);
        } else {
          $(".captcha-group .wpcf7-form-control-wrap").removeClass("active");
          $(this).addClass("active");
          $(".captcha-group .wpcf7-form-control-wrap")
            .find("input")
            .prop("checked", false);
          $(this)
            .find("input")
            .prop("checked", true);
        }
      }
    });

    // END Form "validation" checkboxes

    // Form contact list

    var inpDISPATCH = $("input[value=DISPATCH]");
    var inpLASKYJ = $("input[value=LASKYJ]");
    var inpEPPL = $("input[value=EPPL]");
    var inpSTAEBELLA = $("input[value=STAEBELLA]");
    var inpLASKYM = $("input[value=LASKYM]");
    var inpSTATHC = $("input[value=STATHC]");
    var inpBERGLUNDM = $("input[value=BERGLUNDM]");
    var inpKATZM = $("input[value=KATZM]");
    var inpHAYESC = $("input[value=HAYESC]");
    var inpCIESZYNSKIJ = $("input[value=CIESZYNSKIJ]");
    var inpWEIRMANM = $("input[value=WEIRMANM]");
    var inpINFO = $("input[value=INFO]");

    function prop_checked(inps, bool) {
      $(inps).each(function() {
        $(this).prop("checked", bool);
      });
    }

    function test_checked(inps, bool) {
      $(inps).each(function() {
        if (bool === true) {
          $(this).addClass("checked");
        } else {
          $(this).removeClass("checked");
        }
      });
    }

    function form_contact_select(el) {
      var el_parent_div = $($(el).parents("div")[0]);
      el_parent_div
        .find(".dropdown input, .dropdown select, .dropdown textarea")
        .val("");

      if (el_parent_div.hasClass("schedule-scrap-box")) {
        prop_checked([inpDISPATCH, inpLASKYJ, inpEPPL], true);
        test_checked([inpDISPATCH, inpLASKYJ, inpEPPL], true);
      } else if (el_parent_div.hasClass("selling-scrap")) {
        prop_checked(
          [inpEPPL, inpLASKYJ, inpLASKYM, inpSTATHC, inpBERGLUNDM, inpKATZM],
          true
        );
        test_checked(
          [inpEPPL, inpLASKYJ, inpLASKYM, inpSTATHC, inpBERGLUNDM, inpKATZM],
          true
        );
      } else if (el_parent_div.hasClass("buying-scrap")) {
        prop_checked(
          [inpSTAEBELLA, inpEPPL, inpLASKYJ, inpLASKYM, inpBERGLUNDM],
          true
        );
        test_checked(
          [inpSTAEBELLA, inpEPPL, inpLASKYJ, inpLASKYM, inpBERGLUNDM],
          true
        );
      } else if (el_parent_div.hasClass("scrap-quotes")) {
        prop_checked(
          [inpHAYESC, inpCIESZYNSKIJ, inpWEIRMANM, inpLASKYJ, inpEPPL],
          true
        );
        test_checked(
          [inpHAYESC, inpCIESZYNSKIJ, inpWEIRMANM, inpLASKYJ, inpEPPL],
          true
        );
      } else if (el_parent_div.hasClass("e-recycling")) {
        prop_checked(
          [inpHAYESC, inpCIESZYNSKIJ, inpWEIRMANM, inpLASKYJ, inpEPPL],
          true
        );
        test_checked(
          [inpHAYESC, inpCIESZYNSKIJ, inpWEIRMANM, inpLASKYJ, inpEPPL],
          true
        );
      } else if (el_parent_div.hasClass("fundraising")) {
        prop_checked([inpHAYESC, inpWEIRMANM, inpLASKYJ, inpEPPL], true);
        test_checked([inpHAYESC, inpWEIRMANM, inpLASKYJ, inpEPPL], true);
      } else if (el_parent_div.hasClass("other")) {
        prop_checked([inpHAYESC, inpLASKYJ, inpEPPL, inpINFO], true);
        test_checked([inpHAYESC, inpLASKYJ, inpEPPL, inpINFO], true);
      }
    }

    $("#interested-in__container")
      .find("input[type=checkbox]")
      .click(function() {
        prop_checked(
          [
            inpDISPATCH,
            inpLASKYJ,
            inpEPPL,
            inpSTAEBELLA,
            inpLASKYM,
            inpSTATHC,
            inpBERGLUNDM,
            inpKATZM,
            inpHAYESC,
            inpCIESZYNSKIJ,
            inpWEIRMANM,
            inpINFO
          ],
          false
        );
        test_checked(
          [
            inpDISPATCH,
            inpLASKYJ,
            inpEPPL,
            inpSTAEBELLA,
            inpLASKYM,
            inpSTATHC,
            inpBERGLUNDM,
            inpKATZM,
            inpHAYESC,
            inpCIESZYNSKIJ,
            inpWEIRMANM,
            inpINFO
          ],
          false
        );
        $("#interested-in__container")
          .find("input[type=checkbox]")
          .prop("checked", false);
        $(this).prop("checked", true);
        form_contact_select(this);
      });

    $("#interested-in__container .other input").click();

    // END Form contact list

    // Electronics recycling section two list item "equalizer"

    // function electronics_list_size() {
    // 	$('.recyclable-electronic__electronic-list').each(function() {
    // 		var largest_li = 0;
    // 		$(this).find('.recyclable-electronic__item').each(function() {
    // 			if($(this).width() > largest_li) largest_li = $(this).width();
    // 		}).each(function() {
    // 			$(this).width(largest_li);
    // 		});
    // 	});
    // };
    //
    // electronics_list_size();
    //
    // $(window).resize(function() {
    // 	$('.recyclable-electronic__item').css('width', 'auto');
    // 	electronics_list_size();
    // });

    // End Electronics recycling section two list item "equalizer"

    // Comprehensive Checklist click state

    $(".comprehensive-checklist__container > a").click(function(ev) {
      ev.preventDefault();
      $(this)
        .parents(".comprehensive-checklist__container")
        .find(".comprehensive-checklist__clickstate")
        .slideToggle("fast");
    });

    // END Comprehensive Checklist click state

    // Creds and Certs Dropdowns

    $(
      ".creds-and-certs .col-sm-2 > a, .creds-and-certs .col-sm-4 > a, .membs-and-assoc .col-sm-2 > a, .membs-and-assoc .col-sm-4 > a"
    ).click(function(ev) {
      ev.preventDefault();
      if (
        $(this)
          .parent()
          .find(".credentials-and-certs__clickstate")
          .hasClass("active")
      ) {
        $(this)
          .parent()
          .find(".credentials-and-certs__clickstate")
          .removeClass("active");
      } else {
        $(".credentials-and-certs__clickstate").removeClass("active");
        $(this)
          .parent()
          .find(".credentials-and-certs__clickstate")
          .addClass("active");
      }
    });

    // END Creds and Certs Dropdowns

    $(".toggle-group > div").click(function(ev) {
      ev.preventDefault();
      $(this)
        .find(".toggle__clickstate")
        .fadeIn("fast");
    });

    $(".infographic .exit").click(function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      $(this)
        .parent(".toggle__clickstate")
        .fadeOut("fast");
    });

    // What we recycle electronics recycling page

    var current;
    $(".recyclable-electronics__title-image").click(function(ev) {
      var context = $(this);
      if (
        $('[data-item-select="' + current + '"]').find(
          ".recyclable-electronics__title-image"
        )[0] !== $(this)[0]
      ) {
        $(".recyclable-electronics__title-image").removeClass("active");
        context.addClass("active");
      } else {
        if ($(this).hasClass("active")) {
          context.removeClass("active");
        } else {
          context.addClass("active");
        }
      }
      if (
        typeof current != "undefined" &&
        current != context.parent().data("item-select") &&
        $(".recyclable-electronic__electronic-list").is(":visible")
      ) {
        $(".item_" + current).slideUp("700");
        setTimeout(function() {
          $(".item_" + context.parent().data("item-select")).slideToggle();
        }, 500);
      } else {
        $(".item_" + context.parent().data("item-select")).slideToggle();
      }
      current = context.parent().data("item-select");
    });

    // END What we recycle electronics recycling page
  });
})(jQuery, this);
