var validationLogic=[ 
  { id:"fname", required:true, errorRequired: 'This is a required field', regEx: /^[A-Z][A-Z\s]+$/i, errorValid: "*Please enter a valid First Name"},
  { id:"sname", required:true, errorRequired: 'This is a required field', regEx: /^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i, errorValid: "*Please enter a valid Last Name"},
  { id:"han", required:true, errorRequired: 'This is a required field', regEx: /^ZHA[0-9]{6}$/i, errorValid: "*Please enter a valid Health Authority Number." + "<br/>" + "Your number should start with the letters ZHA and 6 digits.", placeHolder:"e.g. ZHA123456"},
  { id:"email", required:true, errorRequired: 'This is a required field', regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, errorValid: "*Please enter a valid Email Address.", placeHolder:"john.doe@example.com"},
  { id: "tel", required: false, regEx: /^[0-9]{11}$/, errorValid: "*Please enter a valid Phone Number." + "<br/>" + "The Number should be 11 digits long and contain no spaces or special characters."}

]

function init() {

  toolTip(); //***********************Add an eventlistener and call it that way
  addEventListeners();
  placeHolderLoad();
  clearForm();
  setFocus();
  checkForm();

}




function addEventListeners() {


  var elementsWithPlaceHolder = document.getElementsByClassName("plcHolder");
  for (var p = 0; p < elementsWithPlaceHolder.length; p++) {
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
    var errorDiv = document.getElementsByClassName("errorDiv");
    for (var i = 0; i < elements.length; i++) {

      elements[i].value = "";

      errorDiv[i].style.display = "none";
      elements[i].style.borderColor="#1a3365"
      placeHolderLoad();

    }

    event.preventDefault();
    setFocus();

  });

}



function textBehaviourBlur(event) {
  var inputElement = event.target;

  if (inputElement.value === "") {
     var placeHolder= inputElement.parentElement.children[0].childNodes[1].innerHTML;
     inputElement.value=placeHolder ;
     inputElement.style.color = "#A8A8A8";
     inputElement.style.fontStyle = "italic";

  }

}


function textBehaviourFocus(event) {

  var inputElement = event.target;
  var placeHolder = inputElement.parentElement.children[0].childNodes[1].innerHTML;

  if (inputElement.value === placeHolder) {
    
      inputElement.value = "";  
  }

  inputElement.style.color = "#000";
  inputElement.style.fontStyle = "normal";

}



function placeHolderLoad() {

  var inputField = document.getElementsByClassName("plcHolder");
  var placeHolderElement = document.getElementsByClassName("placeHolder");

  for (var i = 0; i < inputField.length; i++) {
    var placeHolderText = placeHolderElement[i]
    var inputText = inputField[i];

    inputText.value = placeHolderText.innerHTML;
    inputField[i].style.color = "#A8A8A8";
    inputField[i].style.fontStyle = "italic";

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



function validateField(field, validation) {

  if ((field.value === "") || (field.value === validation.placeHolder)) {
    if (validation.required) {
      showErrorMsgRequired(field, validation.errorRequired);
      return false;
    }

  } else {

    if (validation.regEx.test(field.value)) {

      hideErrorMsg(field);

    } else {
      showErrorMsg(field, validation.errorValid);
      return false;
    }
  }

  return true;
}

function checkFields(event) {
  var inputId = event.target.id;

for(var i=0;i<validationLogic.length;++i) {
  if (inputId == validationLogic[i].id){
    validateField(event.target, validationLogic[i]);
  }
}
}


function checkForm(event) {

  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("fieldToTest");

    
    var submitValidation = [];
    for (var i = 0; i < elements.length; i++) {
      var allowSubmit = true;
    
      submitValidation.push(validateField(elements[i], validationLogic[i]));
    }

    if (submitValidation.indexOf(false) > -1) {
      allowSubmit = false;
      console.log(allowSubmit);

      event.preventDefault();


    } else {

  
      var form= document.getElementById("contactForm") ;

      var confirmationLine1=document.createTextNode("Thank You for submitting your details.");
      var confirmationLine2=document.createTextNode("The Health Authority will contact you within the next 14 days." );
      var newDiv = document.createElement("div") ;

      var newText = document.createElement("h1") ;
      newText.appendChild(confirmationLine1) ;
      var newLine=document.createElement("br") ;
      newText.appendChild(newLine) ;
      newText.appendChild(confirmationLine2) ;
      newDiv.appendChild(newText) ;
      
      wrapper= document.getElementById("wrapper") ;
      wrapper.replaceChild(newDiv, form) ;
      newDiv.style.padding="8em 5em  10em 5em" ;
      newDiv.style.margin="0 auto" ;
      newDiv.style.width="90%" ;
      newDiv.style.textAlign="center" ;
      newText.style.color="#1a3365"
      

      event.preventDefault();

    }
  })
}




function setFocus() {
  fieldToFocus = document.getElementById("fname");
  fieldToFocus.focus();

}



function hideErrorMsgOnFocus(event) {
  var inputElement = event.target;
  var errorDiv = inputElement.parentNode.lastElementChild;
  errorDiv.style.display = "none";
  inputElement.style.borderColor="#1a3365" ;


}



function hideErrorMsg(element) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;
  errorDiv.style.display = "none";
  inputElement.style.borderColor="none";

}

function showErrorMsgRequired(element, errorRequired) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;

  var errorMessage = errorRequired;
  errorDiv.innerHTML = errorMessage;
  errorDiv.style.color = "#FF0000";
  errorDiv.style.display = "inline";
  inputElement.style.borderColor="#FF0000";
  inputElement.style.boxShadow="-3px inset" ;


}

function showErrorMsg(element, errorValid) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;
  var errorMessage = errorValid;
  errorDiv.innerHTML = errorMessage;
  errorDiv.style.color = "#FF0000";
  errorDiv.style.display = "inline";
  inputElement.style.borderColor="#FF0000";


}



window.onload = init;