$(function() {
    $('#item-image').on('change', function() {
        $('#img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0]);
    })

    $('#item-store-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            name: {
                required: true,
            },
            price: {
                required: true,
                number: true,
            },
            qty: {
                required: true,
            },
            image: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Name is Required."
            },
            price: {
                required: "Price is Required."
            },
            qty: {
                required: "Qty is Required."
            },
            image: {
                required: "Image is Required."
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
            $('input[name="price"]').removeClass('alert-danger')
            $('input[name="image"]').removeClass('alert-danger')
            $('input[name="qty"]').removeClass('alert-danger')
        },
    })

    $('#delete-form').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget);
        var id = button.data('id');
        modal = $(this);
        modal.find('.modal-body #id').val(id);
    });
})