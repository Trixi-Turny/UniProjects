/*Javascript FMA -  Part 1 - Diabetes Tool
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

    quizResult() ;

    event.preventDefault() ;

  });

}




function calculateScore() {
  var totalScore = 0;
  var buttons = document.getElementsByClassName("radioButton");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].checked == true) {
      totalScore = totalScore + parseInt(buttons[i].value);
    }
  }
  return totalScore;


}



function quizResult(event) {
  var result = calculateScore();
  var message = "";

  if (result <= 15) {
    message = document.getElementById("result15");
  } 
  else if (result <= 25) {

    message = document.getElementById("result25");

  } 
  else {

    message = document.getElementById("resultOver26");
  }


  message.style.display = "block";

}



window.onload = init;