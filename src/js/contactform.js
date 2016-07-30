
function init() {

  toolTip(); //***********************Add an eventlistener and call it that way
  addEventListeners();
  clearForm();
  placeHolderLoad() ;
  setFocus() ;
  checkForm() ;

}




function addEventListeners() {


  var elementsWithPlaceHolder=document.getElementsByClassName("plcHolder");
  for(var p=0; p<elementsWithPlaceHolder.length; p++){
    elementsWithPlaceHolder[p].addEventListener("focus", textBehaviourFocus);
    elementsWithPlaceHolder[p].addEventListener("blur", textBehaviourBlur);
  

  }
  var elements = document.getElementsByClassName("fieldToTest");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", checkFields);
    elements[i].addEventListener("focus", hideErrorMsgOnFocus);
    elements[i].addEventListener("blur", checkFields);

  }

}


function clearForm() {

  var clearButton = document.getElementById("clearForm");
  clearButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("fieldToTest");
    for (var i = 0; i < elements.length; i++) {

      var inputId = elements[i].getAttribute("id");
      if ((inputId === "email") || (inputId=== "han")) {
        elements[i].value = document.getElementById("eg_" + inputId).innerHTML;
        elements[i].style.color = "#A8A8A8";
        elements[i].style.fontStyle = "italic";
        
      } 

      else {

        elements[i].value = "";
       
      }

      hideErrorMsg(inputId) ;
    }
    
    event.preventDefault();
    setFocus() ;

  });
  
}



function textBehaviourBlur(event){
  var inputId=event.target.id ;

  var placeHolderText=document.getElementById("eg_"+inputId) ;

  var inputText=document.getElementById(inputId);
  
  if (inputText.value===""){

    inputText.value=placeHolderText.innerHTML;

    console.log (placeHolderText.innerHTML);
    inputText.style.color = "#A8A8A8";
    inputText.style.fontStyle = "italic";

    // showErrorMsgRequired(inputId) ;
  }

}


function textBehaviourFocus(event){

var inputId=event.target.id ;

var placeHolderText=document.getElementById("eg_"+inputId) ;

var inputText=document.getElementById(inputId);

if (inputText.value===placeHolderText.innerHTML){

  inputText.value="" ;
  inputText.style.color = "#000";
  inputText.style.fontStyle = "normal";
  
  }

}

function placeHolderLoad(){

  var inputField=document.getElementsByClassName("plcHolder");

  for(var i=0; i< inputField.length; i++){

    var placeHolderText=document.getElementById("eg_"+inputField[i].id) ;

    var inputText=document.getElementById(inputField[i].id);

      inputText.value=placeHolderText.innerHTML;
      inputText.style.color = "#A8A8A8";
      inputText.style.fontStyle = "italic";

  
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


function validator(regEx, element, placeHolder) {
  console.log('Calling validator for the ' + element.id + ' element');
  console.log('v' +  element.id);
  if (element.value===placeHolder){
     showErrorMsgRequired(element.id);
     return false ;

  }


  else if (element.value ===""){
        if (element.id==="tel"){

          return true ;
        }
        else{

          showErrorMsgRequired(element.id) ;
          return false ;
        }

       
  }

  else if(regEx.test(element.value)){
         
         hideErrorMsg(element.id) ;
         return true ;
  }
   else{

        showErrorMsg(element.id) ;
        return false ;
      }



}


function checkFname(element){
        //regEx for fname - a-z and one word  //Ref: http://www.codeproject.com/Questions/378515/validation-expression-for-name-in-regular-expressi
console.log('ce' + element);
   var regEx=/^[A-Z][A-Z\s]+$/i ;

   return validator(regEx, element) ;


}

function checkSname(element){

   var regEx=/^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i;   //Ref: http://stackoverflow.com/questions/21437032/php-regex-match-only-a-word-or-a-hyphenated-word
   return validator(regEx, element) ;
    }





function checkHan(element){

   var regEx=/^ZHA[0-9]{6}$/i ;

   var placeHolder=document.getElementById("eg_"+element.id).innerHTML
 
   return validator(regEx, element, placeHolder) ;

}

function checkEmail(element){

   var regEx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //REF: Cohaesus ;
   var placeHolder=document.getElementById("eg_"+element.id).innerHTML
  return validator(regEx, element, placeHolder) ;
}


function checkPhoneNo(element){

   var regEx= /^[0-9]{11}$/;  //REF: Cohaesus ;

  return validator(regEx, element) ;
 

}



function checkFields(event){
   var inputId= event.target.id ;
       if (inputId === "fname") {
          
          checkFname(event.target) ;
      }  

      else if(inputId==="sname") {

         checkSname(event.target) ;
      }
      else if(inputId==="han"){
      
        checkHan(event.target) ; 
        
      }

      else if(inputId==="email"){

         checkEmail(event.target) ;
      }
      
      else if(inputId==="tel"){

         checkPhoneNo(event.target) ;
      }
  
}

function checkForm(event) {

  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("fieldToTest");

  // var regEx=['/^[A-Z][A-Z\\s]+$/i' , '/^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i', '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/','/^ZHA[0-9]{6}$/i','/^[0-9]{11}$/' ]
  var submitValidation=[] ;
  for (var i=0; i<elements.length; i++ ){
    var allowSubmit = true;
    console.log('incheckform' + elements[i].id)
    var inputId = elements[i].id;
    if (inputId==="fname"){

      var validateFname=checkFname(elements[i]) ;
      submitValidation.push(validateFname) ;

    }
 

    if (inputId==="sname"){
      
      var validateSname=checkSname(elements[i]) ;
      submitValidation.push(validateSname) ;
    }

    if (inputId==="han"){

      var validateHan=checkHan(elements[i]) ;
      submitValidation.push(validateHan) ;  

    } 
        
    if (inputId==="email"){

      var validateEmail=checkEmail(elements[i]) ;
      submitValidation.push(validateEmail) ;
     }

    if (inputId==="tel"){

      var validateTel=checkPhoneNo(elements[i]) ;
      submitValidation.push(validateTel) ;

     }
    } 
   
   if (submitValidation.indexOf(false)> -1 ){
      allowSubmit=false ;
    console.log(allowSubmit) ;

    event.preventDefault();
    
   
   }
   else{

     console.log("Yayy") ;

     return false ;
   }
}) 
} 

 


  function setFocus(){
    fieldToFocus=document.getElementById("fname") ;
    fieldToFocus.focus() ;
    
  }



function hideErrorMsgOnFocus(event){
  var inputId= event.target.id ;
  hideErrorMsg(inputId) ;

}



function hideErrorMsg(inputId) {
console.log('hem' + inputId);

  var errorMessage = document.getElementById(inputId + "Valid");
  var requiredErrorMessage = document.getElementById(inputId + "Required") ;
  
  errorMessage.style.display = "none"; 
  requiredErrorMessage.style.display = "none";

}

function showErrorMsgRequired(inputId) {

console.log('semr' + inputId);

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



window.onload = init;