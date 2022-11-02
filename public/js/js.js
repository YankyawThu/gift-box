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

    // recharge
    $('#recharge-store-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            amount: {
                required: true,
            },
        },
        messages: {
            amount: {
                required: "Amount is Required."
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="amount"]').removeClass('alert-danger')
        },
    })

    $('#edit-recharge-modal').on('show.bs.modal', function(e) {
    var button = $(e.relatedTarget)
    var id = button.data('id')
    var amount = button.data('amount')
    modal = $(this)
    modal.find('.modal-body #id').val(id)
    modal.find('.modal-body #amount').val(amount)
    })

    var rechargeUpdateForm = $('#edit-recharge-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            amount: {
                required: true,
            },
        },
        messages: {
            amount: {
                required: "Amount is Required."
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="amount"]').removeClass('alert-danger')
        },
    })

    $('#edit-recharge-cancel-btn').on('click', function() {
        rechargeUpdateForm.resetForm()
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

    $('#edit-gbox-modal').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget)
        var id = button.data('id')
        var giftBoxId = button.data('gift-box-id')
        var probability = button.data('probability')
        var giftItemId = button.data('gift_item_id')
        modal = $(this)
        modal.find('.modal-body #id').val(id)
        modal.find('.modal-body #giftBoxId').val(giftBoxId)
        modal.find('.modal-body #probability').val(probability)
        modal.find('.modal-body #giftItemId').val(giftItemId)

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

    var gBoxUpdateForm = $('#gbox-update-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            giftItemId: {
                required: true,
            },
            probability: {
                required: true,
                number: true,
            }
        },
        messages: {
            name: {
                required: "Gift Item is Required."
            },
            price: {
                required: "Probability is Required."
            }
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="giftItemId"]').removeClass('alert-danger')
            $('input[name="probability"]').removeClass('alert-danger')
        },
    })

    $('#edit-item-cancel-btn').on('click', function() {
        boxUpdateForm.resetForm()
    })

    $('#edit-gbox-cancel-btn').on('click', function() {
        gBoxUpdateForm.resetForm()
    })

    $('#category_id').on('change', function() {
        document.forms["box-search-form"].submit();
    });

    //User
   $('#edit-user-modal').on('show.bs.modal', function(e) {
    var button = $(e.relatedTarget)
    var id = button.data('id')
    var name = button.data('name')
    var phone = button.data('phone')
    var coin = button.data('coin')
    var money = button.data('money')
    modal = $(this)
    modal.find('.modal-body #id').val(id)
    modal.find('.modal-body #name').val(name)
    modal.find('.modal-body #phone').val(phone)
    modal.find('.modal-body #coin').val(coin)
    modal.find('.modal-body #money').val(money)
    })

    var userUpdateForm = $('#edit-user-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            },
            coin: {
                required: true,
            },
            money: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Name is Required."
            },
            phone: {
                required: "Phone is Required."
            },
            coin: {
                required: "Coin is Required."
            },
            money: {
                required: "Money is Required."
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="name"]').removeClass('alert-danger')
            $('input[name="phone"]').removeClass('alert-danger')
            $('input[name="coin"]').removeClass('alert-danger')
            $('input[name="money"]').removeClass('alert-danger')
        },
    })

    $('#edit-user-cancel-btn').on('click', function() {
        userUpdateForm.resetForm()
    })

    //delivery order
   $('#edit-delivery-order-modal').on('show.bs.modal', function(e) {
    var button = $(e.relatedTarget)
    var id = button.data('id')
    var goods_name = button.data('goods_name')
    var goods_image = button.data('goods_image')
    var name = button.data('name')
    var phone = button.data('phone')
    var address = button.data('address')

    modal = $(this)
    modal.find('.modal-body #id').val(id)
    modal.find('.modal-body #goods_name').val(goods_name)
    modal.find('.modal-body #goods_image').val(goods_image)
    modal.find('.modal-body #name').val(name)
    modal.find('.modal-body #phone').val(phone)
    modal.find('.modal-body #address').val(address)
    })

    var deliveryOrderUpdateForm = $('#edit-delivery-order-form').validate({
        ignore: [],
        errorElement: 'span',
        errorClass: 'alert-danger',
        rules: {
            post_name: {
                required: true,
            },
            delivery_number: {
                required: true,
                number: true,
            },
        },
        messages: {
            post_name: {
                required: "Post Name is Required."
            },
            delivery_number: {
                required: "Deliver Number is Required.",
                number: "Deliver Number must be number.",
            },
        },
        showErrors: function() {
            this.defaultShowErrors()
            $('input[name="post_name"]').removeClass('alert-danger')
            $('input[name="delivery_number"]').removeClass('alert-danger')
        },
    })

    $('#edit-delivery-order-cancel-btn').on('click', function() {
        deliveryOrderUpdateForm.resetForm()
    })

})
