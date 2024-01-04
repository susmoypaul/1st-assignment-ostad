function checkAge(){
 var age=document.getElementById("ageInput").value
 var resultCard=document.getElementById("resultCard")
 var cardTitle =document.getElementById("cardTitle")
 var cardText=document.getElementById("cardText")

 if(age>=18){
    cardTitle.innerText="You are an Adult";
    cardText.innerText= "Welcome to the adult section!";
 }
 else{
    cardTitle.innerText = "You are a Child";
          cardText.innerText = "Enjoy your childhood!";
 }
 resultCard.style.display="block";
}