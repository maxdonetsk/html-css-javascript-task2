$(document).ready(function () {

    $('#signup-form').off().on('submit', function (event) {
        event.preventDefault();

        var that = $(this),
                formData = new FormData(that.get(0));

        $.ajax({
            url: that.attr('action'),
            type: that.attr('method'),
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            beforeSend: function () {
                //do something cool here, e. g. show loaders
            },
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                alert('Done! Clearing the form...');
                $('#signup-form').each(function () {
                    this.reset();
                });
            }
        });
    });

    $('#footer-submit').off().on('click', function () {
        if (!$('#signup-form')[0].checkValidity()) {
            // If the form is invalid, submit it. The form won't actually submit;
            // this will just cause the browser to display the native HTML5 error messages.
            $('#signup-form').find(':submit').click();
        } else {
            $('#signup-form').trigger('submit');
        }
    });
});