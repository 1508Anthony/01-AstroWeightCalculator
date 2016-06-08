

function calculator(){
   var myWeight = document.getElementById("myWeight").value;
   var myPlanet = document.getElementById("myPlanet").value;

   var myNewWeight = myWeight*myPlanet;
   
   myNewWeight = myNewWeight.toFixed(0)

   var planetSelection = document.getElementById("myPlanet")[document.getElementById("myPlanet").selectedIndex].text;
    
   
   document.getElementById ("result").innerHTML = "If you were on  " + planetSelection + " your weight would be  " + myNewWeight + " pounds!";

   
}
  