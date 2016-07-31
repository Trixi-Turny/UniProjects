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
      placeHolderLoad();

    }

    event.preventDefault();
    setFocus();

  });

}



function textBehaviourBlur(event) {
  var inputElement = event.target;

  if (inputElement.value === "") {
    placeHolderLoad();

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


function validator(regEx, element, errorValid, placeHolder) {
  var errorRequired = "*This is a required field";

  if (element.value === placeHolder) {
    showErrorMsgRequired(element, errorRequired);
    return false;

  } else if (element.value === "") {
    if (element.id === "tel") {

      return true;
    } else {

      showErrorMsgRequired(element, errorRequired);
      return false;
    }


  } else if (regEx.test(element.value)) {

    hideErrorMsg(element);
    return true;
  } else {

    showErrorMsg(element, errorValid);
    return false;
  }



}


function checkFname(element) {
  //regEx for fname - a-z and one word  //Ref: http://www.codeproject.com/Questions/378515/validation-expression-for-name-in-regular-expressi
  var errorValid = "*Please enter a valid First Name";

  var regEx = /^[A-Z][A-Z\s]+$/i;

  return validator(regEx, element, errorValid);


}

function checkSname(element) {

  var regEx = /^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i; //Ref: http://stackoverflow.com/questions/21437032/php-regex-match-only-a-word-or-a-hyphenated-word
  var errorValid = "*Please enter a valid Last Name";

  return validator(regEx, element, errorValid);
}




function checkHan(element) {

  var regEx = /^ZHA[0-9]{6}$/i;

  var errorValid = "*Please enter a valid Health Authority Number." + "<br/>" + "Your number should start with the letters ZHA and 6 digits.";

  var placeHolder = document.getElementById("eg_" + element.id).innerHTML

  return validator(regEx, element, errorValid, placeHolder);

}

function checkEmail(element) {

  var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //REF: Cohaesus ;
  var errorValid = "*Please enter a valid Email Address";
  var placeHolder = document.getElementById("eg_" + element.id).innerHTML

  return validator(regEx, element, errorValid, placeHolder);
}


function checkPhoneNo(element) {


  var regEx = /^[0-9]{11}$/; //REF: Cohaesus ;
  var errorValid = "*Please enter a valid Phone Number." + "<br/>" + "The Number should be 11 digits long and contain no spaces or special characters.";


  return validator(regEx, element, errorValid);


}



function checkFields(event) {
  var inputId = event.target.id;
  if (inputId === "fname") {

    checkFname(event.target);
  } else if (inputId === "sname") {

    checkSname(event.target);
  } else if (inputId === "han") {

    checkHan(event.target);

  } else if (inputId === "email") {

    checkEmail(event.target);
  } else if (inputId === "tel") {

    checkPhoneNo(event.target);
  }

}

function checkForm(event) {

  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("fieldToTest");

    // var regEx=['/^[A-Z][A-Z\\s]+$/i' , '/^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i', '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/','/^ZHA[0-9]{6}$/i','/^[0-9]{11}$/' ]
    var submitValidation = [];
    for (var i = 0; i < elements.length; i++) {
      var allowSubmit = true;
      console.log('incheckform' + elements[i].id)
      var inputId = elements[i].id;
      if (inputId === "fname") {

        var validateFname = checkFname(elements[i]);
        submitValidation.push(validateFname);

      }


      if (inputId === "sname") {

        var validateSname = checkSname(elements[i])

        submitValidation.push(validateSname);
      }

      if (inputId === "han") {

        var validateHan = checkHan(elements[i]);

        submitValidation.push(validateHan);

      }

      if (inputId === "email") {

        var validateEmail = checkEmail(elements[i]);
        submitValidation.push(validateEmail);
      }

      if (inputId === "tel") {

        var validateTel = checkPhoneNo(elements[i]);
        submitValidation.push(validateTel);

      }
    }

    if (submitValidation.indexOf(false) > -1) {
      allowSubmit = false;
      console.log(allowSubmit);

      event.preventDefault();


    } else {

      console.log("Yayy");

      return false;
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


}



function hideErrorMsg(element) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;
  errorDiv.style.display = "none";

}

function showErrorMsgRequired(element, errorRequired) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;

  var errorMessage = errorRequired;
  errorDiv.innerHTML = errorMessage;
  errorDiv.style.color = "#FF0000";
  errorDiv.style.display = "inline";


}

function showErrorMsg(element, errorValid) {

  var inputElement = element;
  var errorDiv = inputElement.parentNode.lastElementChild;
  var errorMessage = errorValid;
  errorDiv.innerHTML = errorMessage;
  errorDiv.style.color = "#FF0000";
  errorDiv.style.display = "inline";

}



window.onload = init;