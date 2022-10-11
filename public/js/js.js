$(function() {

    $('#delete-modal').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget)
        var id = button.data('id')
        modal = $(this)
        modal.find('.modal-body #id').val(id)
    })

    // item
    $('#item-image').on('change', function() {
        $('#img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
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

    $('#edit-item-modal').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget)
        var id = button.data('id')
        var name = button.data('name')
        var price = button.data('price')
        var qty = button.data('qty')
        var image = button.data('image')
        if (image){
            imagePath = button.data('image_path')
        }
        modal = $(this)
        modal.find('.modal-body #id').val(id)
        modal.find('.modal-body #name').val(name)
        modal.find('.modal-body #price').val(price)
        modal.find('.modal-body #qty').val(qty)
        modal.find('.modal-body #image').val(image)
        modal.find('.modal-body #edit_item_img_url').attr("src", imagePath)
    })

    $('#new-item-image').on('change', function() {
        $('#edit_item_img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
    })

    var itemUpdateForm = $('#item-update-form').validate({
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
            }
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
            }
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
            $('input[name="price"]').removeClass('alert-danger')
            $('input[name="qty"]').removeClass('alert-danger')
        },
    })

    $('#edit-item-cancel-btn').on('click', function() {
        itemUpdateForm.resetForm()
    })

    // category
    $('#category-store-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            name: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Name is Required."
            }
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
        }
    })

    $('#edit-category-modal').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget)
        var id = button.data('id')
        var name = button.data('name')
        modal = $(this)
        modal.find('.modal-body #id').val(id)
        modal.find('.modal-body #name').val(name)
    })

    var categoryUpdateForm = $('#category-update-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            name: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Name is Required."
            }
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
        },
    })

    $('#edit-category-cancel-btn').on('click', function() {
        categoryUpdateForm.resetForm()
    })

    // box
    $('#box-image').on('change', function() {
        $('#box_img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
    })

    $('#box-store-form').validate({
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
            image: {
                required: true,
            },
            categoryId: {
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
            image: {
                required: "Image is Required."
            },
            categoryId: {
                required: "Category is Required."
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
            $('input[name="price"]').removeClass('alert-danger')
            $('input[name="image"]').removeClass('alert-danger')
            $('select[name="categoryId"]').removeClass('alert-danger')
        },
    })

    $('#edit-box-modal').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget)
        var id = button.data('id')
        var name = button.data('name')
        var price = button.data('price')
        var image = button.data('image')
        var categoryId = button.data('category_id')
        if (image){
            imagePath = button.data('image_path')
        }
        modal = $(this)
        modal.find('.modal-body #id').val(id)
        modal.find('.modal-body #name').val(name)
        modal.find('.modal-body #price').val(price)
        modal.find('.modal-body #image').val(image)
        modal.find('.modal-body #categoryId').val(categoryId)
        modal.find('.modal-body #edit_box_img_url').attr("src", imagePath)
    })

    $('#new-box-image').on('change', function() {
        $('#edit_box_img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
    })

    var boxUpdateForm = $('#box-update-form').validate({
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
            }
        },
        messages: {
            name: {
                required: "Name is Required."
            },
            price: {
                required: "Price is Required."
            }
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
            $('input[name="price"]').removeClass('alert-danger')
        },
    })

    $('#edit-item-cancel-btn').on('click', function() {
        boxUpdateForm.resetForm()
    })

    // box-item
    
})