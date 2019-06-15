$( document ).ready(function() {
    $("#bold-button").click(function(){
        $("#p1").toggleClass('bolder') ;
    });
});

 
function myFunctionUnd() {
    if(($("p1").style.textDecoration) != "underline")
    {
        $("p1").style.textDecoration = "underline";}
        else
        {
           $("p1").style.textDecoration="none";

        }

    }
function MyfunctionF() {
    var x = $("mySelect").value;
    $("p1").style.fontSize =x; 
}
function MyfunctionS() {
    var x = $("myS").value;
   $("p1").style.fontFamily=x; 
}
