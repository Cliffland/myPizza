$document(document).ready(function(){
    $('table').hide();
    $('.extra-button').hide();
    $('extra-info').hide();
    $('.btn .yes').hide();
    $('.btn .no').hide();
    $('.extra-info .po').hide();

    $('.btn .order').click(function(){
        var sizeOfPizza = $('.size option:selected').val();
        var toppingsOfPizza = $('.toppings option: selected').val();
        var crustOfPizza = $('.crust option: selected').val();
        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        var order = 1;
        var grandTotal = 0;

        $('table').show();
        $('.extra-button').show();
        $('.btn .order').hide();

        $('#inputSize').html($('.size option:selected').text() + " - " + sizeOfPizza);
        $('inputToppings').html($('.toppings option:selected').text() + "-" + toppingsOfPizza);
        $('inputCrust').html($('.crust option:selected').text() + "-" + crustOfPizza);
        
        function Pizza(orderNo, size, toppings, crust, total){
            this.orderNo = orderNo;
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;
            this.orderNo = orderNo;
        }

        $('.btn .more-pizza').click(function(){
            var sizeOfPizza = $('.size option: selected').val();
            var toppingsOfPizza = $('.toppings option: selected').val();
            var crustOfPizza = $('.crust option: selected').val();
            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            order = order + 1;
            grandTotal = grandTotal + total;

            var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total,order);
            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + "-" + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + "-" + newPizza.toppings + '</td><td = id="crust">' + $(".crust option:selected").text() + "-" + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
            $("#pizza").append(newRow);
        });
        $('.btn .check-out').click(function(){
            $('.btn .more-pizza').hide();
            $('.btn .check-out').hide();
            $('.extra-info').show();
            $('.btn .yes').show();
            $('.btn .no').show();
            $('.extra-info .location').hide();
            grandTotal = grandTotal + total;

            $('.extra-info h5 span').html(grandTotal);
        })
    });
});