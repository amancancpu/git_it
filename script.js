$(document).ready(function(){
    alert("document is ready");
})
$('#para1').css("color","red");
$('p').css("color","blue");
$('p').css("font-size","30px");
$('div').css({
    height:"100px",
    width:"100px",
    backgroundColor:"red"
});
$('div').off({
    mouseenter:function(){
        console.log( "hovered over a div" );
    },
    mouseleave:function(){
        console.log("mouse left on a div");
    },
    click:function(){
        console.log("clicked on a div");
    }
})
$('#para1').click(function(event){
    event.preventDefault();
    alert("anchor tag clicked");
})
