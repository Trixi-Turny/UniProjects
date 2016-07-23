/*function checkForm (){

  var checkForm = document.getElementById("submitButton").onclick=function(){

    var validForm = true ;
    if 



 


  } ;
*/
function init() {

  toolTip(); //***********************Add an eventlistener and call it that way
  addEventListeners();
  onSubmitBehaviour();
  clearForm();
  textBehaviour();



}




function addEventListeners() {

  //    var placeHolder=document.getElementsByClassName("plcHolder") ;
  //    for ( var p=0; p< placeHolder.length;  p++){
  //       placeHolder[p].addEventListener("load", textBehaviour ) ;
  //       placeHolder[p].addEventListener("change", textBehaviour ) ;

  // }
  var clear = document.getElementById("clearForm").addEventListener("submit", hideErrorMsg);
  var elements = document.getElementsByClassName("fieldToTest");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", checkForm);
    elements[i].addEventListener("focus", hideErrorMsg);
    elements[i].addEventListener("blur", checkForm);


    // elements[i].addEventListener("blur", hideErrorMsg ) ;




  }


}


function clearForm(event) {




  var clearButton = document.getElementById("clearForm");
  clearButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("fieldToTest");
    for (var i = 0; i < elements.length; i++) {

      original = elements[i].getAttribute("id");
      if ((original == "fname") || (original == "han")) {
        elements[i].value = document.getElementById("eg_" + original).innerHTML;
        elements[i].style.color = "#A8A8A8";
        elements[i].style.fontStyle = "italic";
      } 
      else {

        elements[i].value = "";

      }


      var errorId = elements[i].getAttribute("id");
      var errorMessage = document.getElementById(errorId + "Valid");
      var requiredErrorMessage = document.getElementById(errorId + "Required");
      errorMessage.style.display = "none";
      requiredErrorMessage.style.display = "none";
    }


    event.preventDefault();
  });

}

function onSubmitBehaviour(event) {

  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {

    checkForm();

    event.preventDefault();

  });

}

function textBehaviour() {

  var placeHolder = document.getElementsByClassName("placeHolder");
  var inputWithplaceHolder = document.getElementsByClassName("plcHolder");


  inputWithplaceHolder[0].value = placeHolder[0].innerHTML;
  inputWithplaceHolder[0].style.color = "#A8A8A8";
  inputWithplaceHolder[0].style.fontStyle = "italic";

  inputWithplaceHolder[0].onfocus = function() {
    if (inputWithplaceHolder[0].value === placeHolder[0].innerHTML) {
      inputWithplaceHolder[0].value = "";
      inputWithplaceHolder[0].style.color = "#000";
      inputWithplaceHolder[0].style.fontStyle = "normal";
    }
  }

  inputWithplaceHolder[0].onblur = function() {
    if (inputWithplaceHolder[0].value === "") {
      inputWithplaceHolder[0].value = placeHolder[0].innerHTML;
      inputWithplaceHolder[0].style.color = "#A8A8A8";
      inputWithplaceHolder[0].style.fontStyle = "italic";

    }
  }


  inputWithplaceHolder[1].value = placeHolder[1].innerHTML;
  inputWithplaceHolder[1].style.color = "#A8A8A8";
  inputWithplaceHolder[1].style.fontStyle = "italic";

  inputWithplaceHolder[1].onfocus = function() {
    if (inputWithplaceHolder[1].value === placeHolder[1].innerHTML) {
      inputWithplaceHolder[1].value = "";
      inputWithplaceHolder[1].style.color = "#000";
      inputWithplaceHolder[1].style.fontStyle = "normal";
    }
  }

  inputWithplaceHolder[1].onblur = function() {
    if (inputWithplaceHolder[1].value === "") {
      inputWithplaceHolder[1].value = placeHolder[1].innerHTML;
      inputWithplaceHolder[1].style.color = "#A8A8A8";
      inputWithplaceHolder[1].style.fontStyle = "italic";

    }
  }
}




function toolTip() {

  document.getElementById('info').onmouseover = function() {
    var toolTip = document.getElementById('toolTipContainer');
    toolTip.style.display = 'inline';
  }
  document.getElementById('info').onmouseout = function() {
    var toolTip = document.getElementById('toolTipContainer');
    toolTip.style.display = 'none';
  }
}




function checkForm(event) {
  var allowSubmit = true;
  var inputId = this.getAttribute("id");
  var fieldToTest = document.getElementById(inputId);

  if (this.value === "") {

    showErrorMsgRequired(inputId);


  } 
  else if (this.value.length === 1) {

    showErrorMsg(inputId);


  } 
  else {



    if (inputId === "fname") {


      var regEx = /^[A-Za-z]\w+/; //regEx for fname - a-z and one word
    }  

    else if(inputId==="sname") {

      var regEx=/[^()[\]{}*&^%$#@!0-9]+/ ;
    }
    
    var fieldToTest = document.getElementById(inputId).value;
      
      if (!regEx.test(fieldToTest)) {

        console.log("Invalid");
        showErrorMsg(inputId) ;


      } else {

        console.log("Valid");
        hideErrorMsg(inputId);
      }
    }




  }


  //    } else if (regex).test(x)
  // var emailField = document.getElementById('my-email')
  // var emailVal = emailField.innerHTML;




function hideErrorMsg(inputId) {
  var errorMessage = document.getElementById(inputId + "Valid");
  var requiredErrorMessage = document.getElementById(inputId + "Required")
    //var errorId=this.getAttribute("id") ;
  errorMessage.style.display = "none";
  requiredErrorMessage.style.display = "none";

}

function showErrorMsgRequired(inputId) {

  hideErrorMsg(inputId);
  var errorMessage = document.getElementById(inputId + "Required");
  errorMessage.style.color = "#FF0000";
  errorMessage.style.display = "inline";




}

function showErrorMsg(inputId) {

  hideErrorMsg(inputId);
  var errorMessage = document.getElementById(inputId + "Valid");


  errorMessage.style.color = "#FF0000";
  errorMessage.style.display = "inline";

}

// var string = "sample1";
// var re = new RegExp("^([a-z0-9]{5,})$");
// if (re.test(string)) {
//     console.log("Valid");
// } else {
//     console.log("Invalid");
// }
// function regExCheck(event){
//   var allowSubmit=true ;
//   var fnameRegEx =/^[A-Za-z]\w+/;
//   var firstName= document.getElementById("fname").value; 
//   if(!fnameRegEx.test(firstName){  


//     allowsubmit = false;


// }

window.onload = init;