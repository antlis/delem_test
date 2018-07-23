class formHandler {
  constructor(form) {
    this.form = form;
  }

  submit() {
    this.form.on('submit', function(e) {
        e.preventDefault();
        
        $.ajax({
            url: 'https://formspree.io/antlis@protonmail.com',
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                console.log('mail sent');
            }
        })
    })
  }
}

var form = new formHandler($('.feedback__ajax-submit'));
console.log(form.submit());