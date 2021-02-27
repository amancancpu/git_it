var ball=document.getElementById('ball');
var firstrod=document.getElementById('rod-one');
var secondrod=document.getElementById('rod-two');
// taking left
firstrod.style.left=firstrod.offsetLeft+"px";
secondrod.style.left=secondrod.offsetLeft+"px";
// taking top
firstrod.style.top=firstrod.offsetTop+"px";
secondrod.style.top=secondrod.offsetTop+"px";
// ball left and top
ball.style.left=ball.offsetLeft+"px";
ball.style.top=ball.offsetTop+"px";
// storing score for both players
var ballspeedX=5;
var ballspeedY=5;
let first=0;
let second=0;
let maxscore=0;
let maxscorename="";
let losingside="";
// at the starting of game
(function(){
      resetgame();
      var value=localStorage.getItem('losingside');
      var maxi=localStorage.getItem('maxscore');
      if(value=="")
      {
            alert("You are playing game first time!!!");
      }
      else
      {
            alert("Maxscore till now  "+maxi);
      }
      
})();

function resetgame(){
      // setting rod 1 at centre
      firstrod.style.left=window.innerWidth/2-firstrod.getBoundingClientRect().width/2+"px";
      // setting rod2 at centre
      secondrod.style.left=window.innerWidth/2-secondrod.getBoundingClientRect().width/2+"px";
      // setting ball at centre
      ball.style.left =window.innerWidth/2-ball.getBoundingClientRect().width/2+"px";
      var value=localStorage.getItem('losingside');
      console.log("losing side at starting of game",value);
      if(value=="")
      {
            ball.style.top=window.innerHeight/2-ball.getBoundingClientRect().width/2+"px";
      }
      else
      {
            if(value=="Rod 1")
             {
                  ball.style.top=firstrod.getBoundingClientRect().height+5+"px";
                  
             }
             else
             {
                  ball.style.top=window.innerHeight-ball.getBoundingClientRect().height-secondrod.getBoundingClientRect().height-5+"px";
                  ballspeedY=-ballspeedY;
             }
      }  
}

document.addEventListener('keydown',function(event){
     if(event.keyCode===39)
     {
          if(parseInt(firstrod.style.left)<window.innerWidth-firstrod.offsetWidth-20)
          {
                firstrod.style.left=parseInt(firstrod.style.left)+20+"px";
                secondrod.style.left=parseInt(secondrod.style.left)+20+"px";
          }
     }
     else if(event.keyCode===37)
     {
        if(parseInt(firstrod.style.left)>0)
        {
              firstrod.style.left=parseInt(firstrod.style.left)-20+"px";
              secondrod.style.left=parseInt(secondrod.style.left)-20+"px";
        }
     }
     // game starts
     if(event.keyCode===13)
     { 
        var id =setInterval(function(){
                  let ballcoordinates=ball.getBoundingClientRect();
                  let firstrodcoordinates=firstrod.getBoundingClientRect();
                  let firstrodX=firstrodcoordinates.x;
                  let firstrodheight=firstrodcoordinates.height;
                  let firstrodwidth=firstrodcoordinates.width;
                  let ballX=ballcoordinates.x;
                  let ballY=ballcoordinates.y;
                  let ballwidth=ballcoordinates.width;
                  ballX+=ballspeedX;
                  ballY+=ballspeedY;
                  ball.style.top=ballY+"px";
                  ball.style.left=ballX+"px";    
                  // handling event associated with left and right viewport touch
                  if(ballX+ballwidth>=window.innerWidth||ballX<0)
                        ballspeedX=-ballspeedX;
                  // when ball touches bottom rod
                  else if((ballX>firstrodX && ballX<firstrodX+firstrodwidth && ballY+ballwidth>=(window.innerHeight-firstrodheight)))
                  {
                        ballspeedY=-ballspeedY;
                        second+=100;
                  }
                  // when ball touches upper  rod
                  else if(ballX>firstrodX && ballX<firstrodX+firstrodwidth && ballY<=firstrodheight)
                  {
                        ballspeedY=-ballspeedY;
                        first+=100;
                  }
                  // lower rod lose the ball
                  else if(ballY+ballwidth>=window.innerHeight)
                  {
                            alert("Game over");
                            clearInterval(id);
                            let maxi=localStorage.getItem('maxscore');
                            if(first>maxi)
                            {
                                  localStorage.setItem('maxscore',first);
                            }
                            let value=localStorage.getItem('maxscore');
                            alert("Rod 1 wins with a score of "+first+" Maxscore till now  "+value);
                            localStorage.setItem('losingside','Rod 2');
                            let lost=localStorage.getItem('losingside');
                            console.log("losing side at end of game",lost);
                            return;
                   }
                   else if(ballY<=0)
                   {
                        alert("Game over");
                        clearInterval(id);
                            let maxi=localStorage.getItem('maxscore');
                            if(second>maxi)
                            {
                              localStorage.setItem('maxscore',second);
                            }
                            let value=localStorage.getItem('maxscore');
                            alert("Rod 2 wins with a score of "+second+" Maxscore till now "+value);
                            localStorage.setItem('losingside','Rod 1');
                            let lost=localStorage.getItem('losingside');
                            console.log("losing side at end of game",lost);
                            return;
                  }
                  
         },20);

     }

}); 

