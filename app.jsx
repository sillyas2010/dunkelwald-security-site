import 'bootstrap';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';


$(document).ready(() => {
  $('.testimonials__carousel').not('.slick-initialized').slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false
  });
});