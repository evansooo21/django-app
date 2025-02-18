jQuery(document).ready(function($) {
    $('.number-multiplier-input').on('input', function() {
        // Remove non-numeric characters
        $(this).val(function(i, val) {
            return val.replace(/[^0-9]/g, '');
        });

        var number = $(this).val();
        if (number !== '') {
            $.ajax({
                url: ajax_object.ajax_url,
                type: 'POST',
                data: {
                    action: 'multiply_number',
                    number: number
                },
                success: function(response) {
                    $('.number-multiplier-output').val(response);
                }
            });
        } else {
            $('.number-multiplier-output').val('');
        }
    });
});