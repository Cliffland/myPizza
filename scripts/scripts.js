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
        var grandtotal = 0;

        $('table').show();
        $('.extra-button').show();
        $('.btn .order').hide();

        
    });
});