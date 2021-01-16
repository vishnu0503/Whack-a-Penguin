
var count=0;
function random() {
    penguins = ["../images/penguin_1.png", "../images/penguin_2.png",
        "../images/penguin_3.png", "../images/penguin_4.png", "../images/penguin_5.png", "../images/penguin_6.png",
        "../images/penguin_7.png", "../images/penguin_8.png", "../images/yeti.png"];

    var i = 0,
        j = 0,
        temp = null;
    for (i = penguins.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i ));
        console.log(j);
        temp = penguins[i];
        penguins[i] = penguins[j];
        penguins[j] = temp;
    }
   
}

function displayImage(i) {
    
    if(penguins[i]!="../images/yeti.png")
    {
        document.getElementById("penguin" + i).src = penguins[i];
    }
    else
    {
        document.getElementById("penguin" + i).src = penguins[i];
        if(count!=8)
        setTimeout(myFunction, 500);
        else
        {
        alert("Congratulations!!.....You won the game");
        window.location.reload();
        }
    }
    count++;
}
function myFunction() {
    alert("ROOOAAAAARRRRR!"+"\n"+"Game over!!! Start a new new Game");
    window.location.reload();
  }