$(function(){
    $("span:even").css('color', 'red'); //alternatywa do niżej 

    /* var span = $("span");
      span.each(function(index, element) {
         if(index % 2 == 0) {
             $(element).css('color', 'red');
         }; 
      });*/

    $("p").each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Nadus</button>';
        $(element).append(button);
    });

    $("button").click(function(){
        alert($(this).attr("data-tmp"));
    });
});