
$('li').click(function(){
    alert('click')
})

$('#btn').click(function(){
    $('h1').text("testing");
    $('h1').append(" testing 2");

})

$('#btn2').on("click", function(){
    console.log('second button is clicked')
})

$('#mydiv').click(function(){
    $(this).addClass("clicked");
})
.find('span')
.attr('title','hover over me');

$('#btn3').click(function(){
    $(".hidden").show('slow');
});
$("#btn4").click(function(){
    $(".hidden").hide();
});

$(".testing").click(function(){
    $(".testing").animate({
        'left':'+=50px',
        'opacity':0.25,
        'fontSize':'30px'
    },300,
    function(){
        console.log("animation is completed")
    }

);
})

