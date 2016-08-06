  /*Javascript FMA -  Part 1 - Diabetes Tool - Javascript
  Student Id: Bturny01
  Student No: 13025638
  Tutor Name: Tobi Brody
  Submission Deadline: 09-08-2016 */



function init() {

  addEventListener();

}





function addEventListener() {

  var submit = document.getElementById("submitButton") ;

  submit.addEventListener("click", function(event){
  var elements= document.getElementsByClassName("result") ;
  for (var i =0; i< elements.length; i++){

    elements[i].style.display="none" ;
  }

 

  
  quizResult() ;

    event.preventDefault() ;

  });

}




function calculateScore() {
  var totalScore = 0;
  var buttons = document.getElementsByClassName("radioButton");
  var scores=[] ;
  var factors=[] ;

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].checked == true) {
      

      totalScore = totalScore + parseInt(buttons[i].value);
      scores.push(parseInt(buttons[i].value)) ;

      factors.push(buttons[i].getAttribute("name")) ;

      
      
      }

}
 
  return {totalScore:totalScore, factors:factors, scores:scores} ;




}





function quizResult(event) {

  var result = calculateScore() ;
  var message = "";
  var sectionToReplace=document.getElementById("confirmScore") ;

  if (result.totalScore <= 15) {
    console.log(calculateScore.totalScore) ;
    console.log(calculateScore.factors) ;
    message = document.getElementById("result15");
  } 
  else if (result.totalScore <= 25) {

    message = document.getElementById("result25");

  }   
  else {

  

    var message = document.getElementById("resultOver26");
    var factorsSpan = document.getElementById("factors") ;

    if( result.scores[1]+result.scores[3]===20){

      console.log(result.scores[1]+result.scores[3]) ;
      
    
      factorsSpan.innerHTML= "Your main risk factors are your "+result.factors[1].toUpperCase()+" and your "+ result.factors[3].toUpperCase()+"." ;

      }
    else{
      console.log(result.scores[1]+result.scores[3]) ;

      factorsSpan.innerHTML="" ;

    }
  }
   

  message.style.display = "block";
  sectionToReplace.parentNode.appendChild(message, confirmScore) ;
  message.style.padding="3em 10em 6em 10em" ;
  message.style.color="#1a3365" ;
  message.style.fontWeight= "bold" ;
  message.style.fontSize="1.2em" ;
  message.style.lineHeight="2em" ;
  message.style.textAlign="center" ;
  message.style.backgroundColor="#e6f2ff" ;
  document.getElementById("footer").style.backgroundColor="#c2cdef" ;
  document.getElementById("submit").style.marginBottom="-2.5em" ;
  


}



window.onload = init;