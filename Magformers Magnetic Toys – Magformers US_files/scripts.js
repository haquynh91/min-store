(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["awards-content"]) return;
  try {
    
$(document).ready(function(){
    const awardsCarousel = $("div[class^='awards-carousel-']");
    let awardsSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:'<span class="prevArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2259 23.6805C18.6519 23.2545 18.652 22.5637 18.2258 22.1377L8.08817 12.0002L18.2259 1.86229C18.6519 1.43633 18.652 0.745563 18.2258 0.319527C17.7998 -0.106509 17.1091 -0.106509 16.6831 0.319527L5.77399 11.2289C5.56941 11.4335 5.4545 11.7109 5.4545 12.0002C5.4545 12.2896 5.56948 12.5671 5.77406 12.7716L16.6832 23.6804C17.1091 24.1065 17.7999 24.1065 18.2259 23.6805Z" fill="#E3283A"/></svg></span>', 
            nextArrow:'<span class="nextArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.77408 0.31954C5.34812 0.745502 5.34804 1.43627 5.77415 1.8623L15.9118 11.9998L5.77408 22.1377C5.34812 22.5637 5.34804 23.2544 5.77415 23.6805C6.20019 24.1065 6.89088 24.1065 7.31692 23.6805L18.226 12.7711C18.4306 12.5665 18.5455 12.2891 18.5455 11.9998C18.5455 11.7104 18.4305 11.4329 18.2259 11.2284L7.31684 0.319613C6.89088 -0.106497 6.20012 -0.106497 5.77408 0.31954Z" fill="#E3283A"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></span>',            
            responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]   
        }
    }
    awardsCarousel.slick(awardsSliderSettings());
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["counterfeits-example"]) return;
  try {
    
$(document).ready(function(){
    const cfExampleCarousel = $('.counterfeits-example_row-wrapper');
    let cfExampleSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            prevArrow:'<span class="prevArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2259 23.6805C18.6519 23.2545 18.652 22.5637 18.2258 22.1377L8.08817 12.0002L18.2259 1.86229C18.6519 1.43633 18.652 0.745563 18.2258 0.319527C17.7998 -0.106509 17.1091 -0.106509 16.6831 0.319527L5.77399 11.2289C5.56941 11.4335 5.4545 11.7109 5.4545 12.0002C5.4545 12.2896 5.56948 12.5671 5.77406 12.7716L16.6832 23.6804C17.1091 24.1065 17.7999 24.1065 18.2259 23.6805Z" fill="#E3283A"/></svg></span>', 
            nextArrow:'<span class="nextArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.77408 0.31954C5.34812 0.745502 5.34804 1.43627 5.77415 1.8623L15.9118 11.9998L5.77408 22.1377C5.34812 22.5637 5.34804 23.2544 5.77415 23.6805C6.20019 24.1065 6.89088 24.1065 7.31692 23.6805L18.226 12.7711C18.4306 12.5665 18.5455 12.2891 18.5455 11.9998C18.5455 11.7104 18.4305 11.4329 18.2259 11.2284L7.31684 0.319613C6.89088 -0.106497 6.20012 -0.106497 5.77408 0.31954Z" fill="#E3283A"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></span>',            
            responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]
        }
    }
    cfExampleCarousel.slick(cfExampleSliderSettings());
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["counterfeits-genuine"]) return;
  try {
    
$(document).ready(function(){
    const cfGeniuneCarousel = $('.counterfeits-geniune_row-wrapper');
    let cfGeniuneSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:'<span class="prevArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2259 23.6805C18.6519 23.2545 18.652 22.5637 18.2258 22.1377L8.08817 12.0002L18.2259 1.86229C18.6519 1.43633 18.652 0.745563 18.2258 0.319527C17.7998 -0.106509 17.1091 -0.106509 16.6831 0.319527L5.77399 11.2289C5.56941 11.4335 5.4545 11.7109 5.4545 12.0002C5.4545 12.2896 5.56948 12.5671 5.77406 12.7716L16.6832 23.6804C17.1091 24.1065 17.7999 24.1065 18.2259 23.6805Z" fill="#E3283A"/></svg></span>', 
            nextArrow:'<span class="nextArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.77408 0.31954C5.34812 0.745502 5.34804 1.43627 5.77415 1.8623L15.9118 11.9998L5.77408 22.1377C5.34812 22.5637 5.34804 23.2544 5.77415 23.6805C6.20019 24.1065 6.89088 24.1065 7.31692 23.6805L18.226 12.7711C18.4306 12.5665 18.5455 12.2891 18.5455 11.9998C18.5455 11.7104 18.4305 11.4329 18.2259 11.2284L7.31684 0.319613C6.89088 -0.106497 6.20012 -0.106497 5.77408 0.31954Z" fill="#E3283A"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></span>',            
        }
    }
    cfGeniuneCarousel.slick(cfGeniuneSliderSettings());
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-blog"] && !window.DesignMode) return;
  try {
    
$(document).ready(function(){
    const blogCarousel = $('.blog-carousel');
    let blogSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:'<span class="prevArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2259 23.6805C18.6519 23.2545 18.652 22.5637 18.2258 22.1377L8.08817 12.0002L18.2259 1.86229C18.6519 1.43633 18.652 0.745563 18.2258 0.319527C17.7998 -0.106509 17.1091 -0.106509 16.6831 0.319527L5.77399 11.2289C5.56941 11.4335 5.4545 11.7109 5.4545 12.0002C5.4545 12.2896 5.56948 12.5671 5.77406 12.7716L16.6832 23.6804C17.1091 24.1065 17.7999 24.1065 18.2259 23.6805Z" fill="#E3283A"/></svg></span>', 
            nextArrow:'<span class="nextArrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.77408 0.31954C5.34812 0.745502 5.34804 1.43627 5.77415 1.8623L15.9118 11.9998L5.77408 22.1377C5.34812 22.5637 5.34804 23.2544 5.77415 23.6805C6.20019 24.1065 6.89088 24.1065 7.31692 23.6805L18.226 12.7711C18.4306 12.5665 18.5455 12.2891 18.5455 11.9998C18.5455 11.7104 18.4305 11.4329 18.2259 11.2284L7.31684 0.319613C6.89088 -0.106497 6.20012 -0.106497 5.77408 0.31954Z" fill="#E3283A"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></span>',            
            responsive: [
                {
                    breakpoint: 591,
                    settings: {
                        arrows: false,
                        dots: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false,
                        dots: false,
                        slidesToShow: 3
                    }
                }
            ]   
        }
    }
    blogCarousel.slick(blogSliderSettings());
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-testimonials"] && !window.DesignMode) return;
  try {
    
$(document).ready(function(){
    const testimonialCarouel = $('.testimonial-carousel');
    let getSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]   
        }
    }
    testimonialCarouel.slick(getSliderSettings());
    $(".testimonial-arrow-left").click(function(e) {
        e.preventDefault();
        testimonialCarouel.slick("slickPrev"); 
      });
      $(".testimonial-arrow-right").click(function(e) {
        e.preventDefault();
        testimonialCarouel.slick("slickNext");
      });
});

  } catch(e) { console.error(e); }
})();

})();
