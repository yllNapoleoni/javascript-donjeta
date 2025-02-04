
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

$('btn3').click(function(){
    
})

