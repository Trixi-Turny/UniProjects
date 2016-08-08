


  var validationLogic=[ 
    { id:"fname", required:true, errorRequired: 'This is a required field', regEx: /^[A-Z][A-Z\s]+$/i, errorValid: "*Please enter a valid First Name"},
    { id:"sname", required:true, errorRequired: 'This is a required field', regEx: /^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i, errorValid: "*Please enter a valid Last Name"},
    { id:"han", required:true, errorRequired: 'This is a required field', regEx: /^ZHA[0-9]{6}$/i, errorValid: "*Please enter a valid Health Authority Number." + "<br/>" + "Your number should start with the letters ZHA and 6 digits.", placeHolder:"e.g. ZHA123456"},
    { id:"email", required:true, errorRequired: 'This is a required field', regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, errorValid: "*Please enter a valid Email Address.", placeHolder:"john.doe@example.com"},
    { id: "tel", required: false, regEx: /^[0-9]{11}$/, errorValid: "*Please enter a valid Phone Number." + "<br/>" + "The Number should be 11 digits long and contain no spaces or special characters."}

  ]




 


 $(document).ready(function() {


$('#submitButton').validate({
  rules: {

  fname:  { id:"fname", required:true, errorRequired: 'This is a required field', regEx: /^[A-Z][A-Z\s]+$/i, errorValid: "*Please enter a valid First Name"},
  sname: { id:"sname", required:true, errorRequired: 'This is a required field', regEx: /^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i, errorValid: "*Please enter a valid Last Name"},
  han: { id:"han", required:true, errorRequired: 'This is a required field', regEx: /^ZHA[0-9]{6}$/i, errorValid: "*Please enter a valid Health Authority Number." + "<br/>" + "Your number should start with the letters ZHA and 6 digits.", placeHolder:"e.g. ZHA123456"},
  email: { id:"email", required:true, errorRequired: 'This is a required field', regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, errorValid: "*Please enter a valid Email Address.", placeHolder:"john.doe@example.com"},
  tel: { id: "tel", required: false, regEx: /^[0-9]{11}$/, errorValid: "*Please enter a valid Phone Number." + "<br/>" + "The Number should be 11 digits long and contain no spaces or special characters."}


}
   
});




  textBehaviourFocus();
  textBehaviourBlur();
  checkFields() ;
  toolTip(); 
  // addEventListeners();
  placeHolderLoad();
  clearForm();
  setFocus();
  hideErrorMsgOnFocus();
  // checkForm();






// function addEventListeners() {


//   $(".fieldToTest").each(function(){
//     // $(this).on('change',function(){checkFields});
//     $(this).focus(function(){ hideErrorMsgOnFocus});
//     // $(this).blur(function(){checkFields});
//     // $(this).focus(function(){textBehaviourFocus(); console.log("calling")});
//     // $(this).blur(function(){textBehaviourBlur}) ;
//     // element.addEventListener("focus", hideErrorMsgOnFocus);
//     // element.addEventListener("blur", checkFields) ;
//     // element.addEventListener("focus", textBehaviourFocus);
//     // element.addEventListener("blur", textBehaviourBlur) ;
//     }) ;  

 
  // for (var i = 0; i < elements.length; i++) {
  //   elements[i].addEventListener("change", checkFields);
  //   elements[i].addEventListener("focus", hideErrorMsgOnFocus);
  //   elements[i].addEventListener("blur", checkFields);
  //   elements[i].addEventListener("focus", textBehaviourFocus);
  //   elements[i].addEventListener("blur", textBehaviourBlur);

  // }




function clearForm() {

	$("#clearForm").click(function(event){
       
		$.each(validationLogic, function(index, field){
	    
	       $('#'+field.id).val("");
	       hideErrorMsg(field);
	       placeHolderLoad();
 
		});
		event.preventDefault();
		setFocus();
	})

}


function textBehaviourBlur() {
   $(".fieldToTest").blur(function(){
		$.each(validationLogic, function(index, field){

		var value = $('#'+event.target.id).val();


		if (event.target.id===field.id){
			if(field.placeHolder){
		
    	    if(value===""){
              
    		  $("#"+field.id).val(field.placeHolder) ;
    	      $('#'+field.id).css("color" ,"#A8A8A8");
              $('#'+field.id).css("font-style" ,"italic");
        }
		}
	}
	  });
	});
}




function textBehaviourFocus() {

	 $(".fieldToTest").focus(function(){


		$.each(validationLogic, function(index, field){

              if (event.target.id===field.id){
        	
	        	  if($("#"+field.id).val()===field.placeHolder){
	               $('#'+field.id).val('');
	    		   $("#"+field.id).css("color","#000000");
	    		   $("#"+field.id).css("font-style","normal");

        	}    
	}

	
	  });
	});
}



function placeHolderLoad() {
	$.each(validationLogic, function(index, field){

		if(field.placeHolder){

			$("#"+field.id).val(field.placeHolder) ;
			$('#'+field.id).css("color" ,"#A8A8A8");
            $('#'+field.id).css("font-style" ,"italic");
		}
	})
}	







function toolTip() {

  $('#info').mouseover(function() {
    $('#toolTipContainer').css("display" , "inline");
  })
  $('#info').mouseout(function() {
   $('#toolTipContainer').css("display" , "none");
  })
}



function validateField(element, validation) {
     
   
    if(($('#'+element.id).val() === "")||($("#"+element.id).val()===validation.placeHolder)){
       if (validation.required) {
          showErrorMsg(element, validation.errorRequired);
      
	      return false ;
		 }
		}
   else {

	    if (validation.regEx.test(element.value)) {

	      hideErrorMsg(element);

		}
		else{

		  showErrorMsg(element, validation.errorValid);
		    return false ;
		}
 

}
return true ;

}	// else()
//EXAMPLE:

// $('#signup').submit(function(){ 
	// var errorMessage = "* "; $(':text').each(function(){ 
	// 	if ($(this).val()==""){ 
	// 		var myid = this.id; 
	// 		errorMessage = errorMessage 
	// 		$('label[for='+myid+']').text() + " "; }
// }) })		
  //   if (validation.required) {
  //     showErrorMsg(field, validation.errorRequired);
  //     return false;
  //   }

  // } else {

  //   if (validation.regEx.test(field.value)) {

  //     hideErrorMsg(field);

  //   } else {
  //     showErrorMsg(field, validation.errorValid);
  //     return false;
  //   }
  // }

//   return true;
// }



// // 

function checkFields() {

	$(".fieldToTest").blur(function(){

    $.each(validationLogic, function(index,field){

    	if (event.target.id===field.id){

  	        validateField(event.target, field);

}

});
});
}
//  }

// })

// }
//   var inputId = event.target.id;
//   console.log("hi") ;

// for(var i=0;i<validationLogic.length;++i) {

//   if (inputId == validationLogic[i].id){
//     validateField(event.target, validationLogic[i]);
//   }
// }
// }


// function checkForm(event) {

//   var submitButton = document.getElementById("submitButton");
//   submitButton.addEventListener("click", function(event) {
//     var elements = document.getElementsByClassName("fieldToTest");

    
//     var submitValidation = [];
//     for (var i = 0; i < elements.length; i++) {
//       var allowSubmit = true;
//       submitValidation.push(validateField(elements[i], validationLogic[i]));
//     }


//     if (submitValidation.indexOf(false) > -1) {
//       allowSubmit = false;
  

//     } else {

  
//       var form= document.getElementById("contactForm") ;

//       var confirmationLine1=document.createTextNode("Thank You for submitting your details.");
//       var confirmationLine2=document.createTextNode("The Health Authority will contact you within the next 14 days." );
//       var newDiv = document.createElement("div") ;
//       newDiv.setAttribute("id", "replace" ) ;
//       var newText = document.createElement("h1") ;
//       newText.appendChild(confirmationLine1) ;
//       var newLine=document.createElement("br") ;
//       newText.appendChild(newLine) ;
//       newText.appendChild(confirmationLine2) ;
//       newDiv.appendChild(newText) ;
//       wrapper= document.getElementById("wrapper") ;
//       wrapper.replaceChild(newDiv, form) ;

//     }

//     event.preventDefault();
//   })
// }




function setFocus() {
  $("#fname").focus();

}

 function hideErrorMsgOnFocus(){
 $(".fieldToTest").focus(function(){

 	var element=$(event.target);
 	
  $(event.target).nextAll(".errorDiv").css("display","none") ;
  $(event.target).css("border-color" , "inherit") ;
   

});

}



function hideErrorMsg(element) {

  $("#"+element.id).siblings(":last") ;
  $("#"+element.id).siblings(":last").css("display","none") ;
  $("#"+element.id).css("border-color" , "inherit") ;


}

   

function showErrorMsg(element, errorValid) {
	
 
  $("#"+element.id).siblings(":last").html(errorValid);
 $("#"+element.id).siblings(":last").css("color","#FF0000") ;
  $("#"+element.id).siblings(":last").css("display" , "inline");
  $("#"+element.id).css("border-color","#FF0000");


}

})
