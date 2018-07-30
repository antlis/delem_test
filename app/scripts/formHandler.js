module.exports = class FormHandler {
  constructor(form, url) {
    this.form = form;
  }
  
  initSubmitHandler() {
    this.form.on('submit', function(e) {
        e.preventDefault();

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
    });
  }
}