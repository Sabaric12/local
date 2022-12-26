$(document).ready(function(){
    $("#style").change(function(){

        stylevalue=$("#style").val();
        colorvalue=$("#color").val();
        if(stylevalue=="plain"&&colorvalue=="white"){
            $("#photo-product2").attr("src", "img/v-white-personalized.jpg");
        }
else{(stylevalue=="printed"&&colorvalue=="white")
            $("#photo-product3").attr("src", "img/v-white.jpg");
            }
        stylevalue=$("#style").val();
        colorvalue=$("#color").val();
if(stylevalue=="printed"&&colorvalue=="pink"){
    $("#photo-product5").attr("src","img/pink-color.jpeg");
}
else {(stylevalue=="plain"&&colorvalue=="pink")
   $("#photo-product6").attr("src","img/pink-color-personalized.jpeg");
}
        stylevalue=$("#style").val();
        colorvalue=$("#color").val();
        if(stylevalue=="plain"&&colorvalue=="colored"){
            $("#photo-product1").attr("src","img/v-color-personalized.png");
        }
        else{(stylevalue=="printed"&&colorvalue=="colored")
            $("#photo-product4").attr("src","img/v-color.jpg");
        }
    });

});


