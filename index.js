let products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg'
        },
        'printed': {
            'unit_price': 10.95,
            'photo': 'v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg'
        },
        'printed': {
            'unit_price': 12.47,
            'photo': 'v-color-personalized.png'
        }
    },
    'pink': {
        'plain': {
            'unit_price': 7.04,
            'photo': 'pink-color.jpeg'
        },
        'printed': {
            'unit_price': 13.47,
            'photo': 'pink-color-personalized.jpeg'
        }
    }
};


let search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
    "thickness":""
}



$(function(){

    function update_params() {
        search_params.quantity = parseInt($("#quantity").val());
        search_params.color = $("#color .option-button.selected").attr('id');
        search_params.quality = $("#quality .option-button.selected").attr('id');
        search_params.style = $("#style").val();
        search_params.thickness=$("#thickness").val();
        console.log(search_params);
        update_order_details();
    }

    function update_order_details() {

        $(".refresh-loader").show();

        let qualityId = "#" + search_params.quality;
        $("#result-quality").html( $(qualityId).text() );

        let colorId = "#" + search_params.color;
        $("#result-color").html( $(colorId).text() );

        $("#result-quantity").html( search_params.quantity );

        let styleSelector = "#style option[value=" + search_params.style + "]";
        $("#result-style").html( $(styleSelector).text() );

        let orderTotal = calculate_total();

        $("#total-price").text( orderTotal );

        let photoUrl = "img/" + products[search_params.color][search_params.style].photo;

        $("#photo-product").attr("src", photoUrl);

        window.setTimeout(function(){
            $(".refresh-loader").hide();
        },500);


    }

    function calculate_total() {

        let unitPrice = products[search_params.color][search_params.style].unit_price;

        if (search_params.quality == "q190") {
            unitPrice *= 1.12;
        }

        let total = unitPrice * search_params.quantity;

        if (search_params.quantity >= 1000) {
            total *= 0.8;
        } else if (search_params.quantity >= 500) {
            total *= 0.88;
        } else if (search_params.quantity >= 100) {
            total *= 0.95;
        }

        return total.toLocaleString("en-US", {style: "currency",currency: "USD"});


    }

    update_params();

    $("#quantity").change(function(){
        search_params.quantity = parseInt($("#quantity").val());
        update_order_details();
    });

    $("#style").change(function(){
        search_params.style = $("#style").val();
        update_order_details();
    });
    $("#thickness").change(function(){
        search_params.style = $("#thickness").val();
        update_order_details();
    });

    $(".option-button").click(function(){

        let clickedParam = $(this).parent().attr("id");
        let childSelector = "#" + clickedParam + " .option-button";
        $(childSelector).removeClass("selected");
        $(this).addClass("selected");
        let selectedChild = "#" + clickedParam + " .option-button.selected";
        search_params[clickedParam] = $(selectedChild).attr('id');
        update_order_details();

    });
});










