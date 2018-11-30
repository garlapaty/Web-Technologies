function rollDice() {
    var num=0;
    var maxnum=7;
    var count=1;
    var txt = prompt("Enter the number of times to roll dice:", "");
   if (txt > maxnum) {
        num = maxnum;;
    } else {
        num = txt;
    }
    
      var time = setInterval(function () {
            if(count <=  num){
                rollIt();
               count++;
            }else {
                clearInterval(time);
            }
        }, 3000);
        }
  function rollIt(){
  var dice1 = Math.floor(Math.random()*6) + 1;
  var dice2 = Math.floor(Math.random()*6) + 1;
  var dice3 = Math.floor(Math.random()*6) + 1;
  console.log(dice1,dice2,dice3);

  var dice1img = document.getElementById('dice1');
  dice1img.src = roll(dice1);

  var dice2img = document.getElementById('dice2');
  dice2img.src = roll(dice2);

  var dice3img = document.getElementById('dice3');
  dice3img.src = roll(dice3);
  
  if(dice1==dice2&& dice2==dice3){
                document.getElementById("demo").innerHTML = "TRIPLE";
            }else if(dice1==dice2 || dice2==dice3 || dice3 == dice1 ){
                document.getElementById("demo").innerHTML = "DOUBLE";
            }else{
                document.getElementById("demo").innerHTML = "BETTER LUCK NEXT TIME";
            }
 }
 
 function roll(num){
        var image= "";
        switch (num){
            case 1:
                image = "dice1.png";
                break;
            case 2:
                image = "dice2.png";
                break;
            case 3:
                image = "dice3.png";                        
                break;
            case 4:
                image = "dice4.png";
                break;
            case 5:
                image = "dice5.png";
                break;
            case 6:
                image = "dice6.png";
                
            
        }
        return image;
}
 