import $ from './../../node_modules/jquery/dist/jquery';
window.jQuery = window.jquery = window.$ = $;
import bootstrap from './../../bower_components/bootstrap/dist/js/bootstrap.bundle.js';
import FormHandler from './formHandler';
import FieldValidator from './formValidation';
import Scroller from './scroller';

// Form validation
var form = document.querySelector('.feedback-form');

Array.prototype.slice.call(form.elements).forEach((element) => {
  element._validator = new FieldValidator(element);
});

// For some reason without setting the forms novalidate option
// we are unable to focus on an input inside the form when handling
// the 'submit' event
form.setAttribute('novalidate', true);

// When the form is submitted and fields don't pass validation
// we show the error messages for invalid fields
form.addEventListener('invalid', (event) => {
  event.preventDefault();
  
  event.target._validator.showError();
}, true);

// Suppress the submit event when validation fails and
// focus on the first invalid field
form.addEventListener('submit', (event) => {
  if ( ! form.checkValidity()) {
    event.preventDefault();
    
    form.querySelectorAll(':invalid')[0].focus();
    return;
  } else {
    $.ajax({
        url: 'https://formspree.io/antlis@protonmail.com',
        data: $(this).serialize(),
        type: 'POST',
        success: function(data) {
            $('.modal').modal('show');
            setTimeout(() => {
              $('.modal').modal('hide');
            }, 5000);
        }
    });
  }
  
  event.preventDefault();
});
// Form validation

// Page scroll
var pageScroll = new Scroller();
pageScroll.initScrolling($);
// Page scroll

var yaShareElements = document.querySelectorAll('.ya-share'),
    yaShareSettings = {
        content: {
            url: 'http://digital-elem-xzarxzes.c9users.io/',
            title: 'Photography Template',
            description: 'Photography is a clean, modern, unique and trendy website template with well-organized layers.',
            image: 'https://yastatic.net/morda-logo/i/logo.svg'   
        },
        theme: {
            services: 'facebook,twitter,vkontakte,telegram',
            counter: false,
            lang: 'ru',
            limit: 4,
            size: 'm',
            bare: false
        }
    };
    
yaShareElements.forEach((el, index) => {
    Ya.share2(el, yaShareSettings);
});