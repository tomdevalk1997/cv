// document.addEventListener("DOMContentLoaded", function() {
//  fields.name = document.getElementById('name');
//  fields.email = document.getElementById('email');
//  fields.subject = document.getElementById('subject');
//  fields.message = document.getElementById('message');
// })





function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();







var profileSlideRight = {
    distance: '25%',
    origin: 'left',
    opacity: 0,
    duration: 3000,
};

var profileSlideLeft = {
    distance: '25%',
    origin: 'right',
    opacity: 0,
    duration: 3000,
};

var iconsSlideDown= {
    distance: '100%',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    delay: 1000,
};

ScrollReveal().reveal('.headshot', profileSlideRight);
ScrollReveal().reveal('.headline', profileSlideLeft);


$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({
        height: '80px',
        opacity: 1
    }, speed, easing, callback);
};


$.fn.slideSkill = function(speed, easing, callback) {
    return this.animate({
        height: '80px',
        opacity: 1
    }, speed, easing, callback);
};


var slideBar = function() {

      // Slide blue bar down when element is in sight
      var isElementInView = Utils.isElementInView($('.media'), false);
      if (isElementInView) {
          $(".media").slideFadeToggle(2000);
      }
}
var slideLanguages = function() {
    var isElementInView = Utils.isElementInView($('.language'), false);
    if (isElementInView) {
        $(".language").addClass("active");
    }
    else {
        $(".language").removeClass("active");
    }

    var isElementInView = Utils.isElementInView($('.hobby'), false);
    if (isElementInView) {
        $(".hobby").addClass("active");
    }
    else {
        $(".hobby").removeClass("active");
    }

}


var slideSkills = function() {
    $('.skill-level-bar' ).each(function(i, elem ) {
        var isElementInView = Utils.isElementInView($(elem), false);

        if (isElementInView) {
            $(elem).addClass("active");
        }
        else {
            $(elem).removeClass("active");
        }
      });

   
 
}

// Call slider when document is loaded and scrolled
document.addEventListener('scroll', function(e) {
    slideBar();
    slideLanguages();
    slideSkills();
});
window.addEventListener('load', function(e) {
    slideBar();
    slideLanguages();
    slideSkills();
});

  


var timelineSlideRight = {
    distance: '18%',
    origin: 'left',
    opacity: 0,
    reset: true,
    duration: 3000,
};

var timelineSlideLeft = {
    distance: '18%',
    origin: 'right',
    opacity: 0,
    reset: true,
    duration: 3000,
};

ScrollReveal().reveal('.timeline-time', timelineSlideRight);
ScrollReveal().reveal('.timeline-description', timelineSlideLeft);






var skillsDiv = jQuery('.skills-item');

jQuery(window).on('scroll', function(){
	var winT = jQuery(window).scrollTop(),
  	winH = jQuery(window).height(),
  	skillsT = skillsDiv.offset().top;
  if(winT + winH  > skillsT){
  	jQuery('.skills-item').each(function(){
      jQuery(this).find('.skills-item').animate({
        width:jQuery(this).attr('data-percent')
      },6000);
    });
  }
});

// CONTACT BAR
var contactSlideUp = {
    distance: '25%',
    origin: 'bottom',
    opacity: 0,
    reset: true,
    duration: 3000,
};

var contactIconSlideUp = {
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    reset: true,
    duration: 3000,
};

ScrollReveal().reveal('.contact-info', contactSlideUp);


function dropDown() {
    var x = document.getElementById("myTopnav");
    
    x.classList.toggle("responsive");
    if (x.classList.contains("responsive")) {
        $(x).animate({height:'560'})
    }
    else {
        $(x).animate({height:'0'})
    }
  }

function closeDropdown() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
    $(x).animate({height:'0'})
   
}
