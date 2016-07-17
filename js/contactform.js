
/*function checkForm (){

  var checkForm = document.getElementById("submitButton").onclick=function(){

  	var validForm = true ;
  	if 



 


  } ;
*/	
function init() {

	textBehaviour() ;
	toolTip() ;
	addEventListeners() ;
  
    }


function addEventListeners(){
   var elements=document.getElementsByClassName("fieldToTest") ;
   for ( var i=0; i< elements.length;  i++){
       elements[i].addEventListener("change", checkForm ) ;
       elements[i].addEventListener("focus", hideErrorMsg ) ;

   }


}



function textBehaviour() {
	var placeHolder = document.getElementById("egFname").innerHTML ;
	var write = document.getElementById("fname") ;
	write.value = placeHolder;
	write.style.color = "#A8A8A8" ;
	write.style.fontStyle = "italic" ;
	write.onfocus = function() {
	  if (write.value === placeHolder) {
	    write.value = "" ;
	    write.style.color = "#000" ;
	    write.style.fontStyle = "normal" ;
	}
}

	write.onblur = function() {
	  if (write.value === "") {
	    write.value = placeHolder;
	    write.style.color = "#A8A8A8";
	    write.style.fontStyle = "italic" ;

   }     
  }
}


function toolTip(){

	  document.getElementById('info').onmouseover = function() {
	    var toolTip = document.getElementById('toolTipContainer') ;
	    toolTip.style.display='inline' ;
	  } 	    
	  document.getElementById('info').onmouseout = function() {
	    var toolTip = document.getElementById('toolTipContainer') ;
	    toolTip.style.display='none' ;
	  } 	
}





function checkForm(event){



   // console.log("is this working?", event, this) ;
   if(( this.value=="")||(this.value.length<=1)){
     var errorId=this.getAttribute("id") ;
     var errorMessage=document.getElementById(errorId+"Valid") ;
     errorMessage.style.color="#FF0000" ;
     errorMessage.style.display="inline" ;

   }



 }


 function hideErrorMsg(event){

 
     var errorId=this.getAttribute("id") ;
     var errorMessage=document.getElementById(errorId+"Valid") ;

     errorMessage.style.display="none";

     console.log("hideErrorMsg :: hide error",errorId ) ;
    // errorMessag

 }

function formValidation(){
   




}

/*var fieldToTest=["fname", "sname", "han" , "email", "tel"] ;
var errorMessage= document.getElementsByClassName("errorMsg") ;

var elements = document.getElementsByTagName("input");
for (var i = 0; i < fieldToTest.length; i++) {
   var item=document.getElementById(fieldToTest[i]);


   
   if(elements[i].value == ""){
    	  
        
        errorMessage[i].style.color="#FF0000" ;  
			  errorMessage[i].style.display="inline" ;

				textBehaviour() ;
        
    }

    else {

         errorMessage[i].style.display="none" ;

    }

  

    }

}
	*//*

  if (isValid==true){

    var form = document.getElementById("form") ;
    var submission = document.createElement("h2") ;
    var submissionText = "Thank You for submitting your details. <br/>One of our professionals will get in contact with you within the next 7 working days."
    submission.innerHTML=submissionText ;
    documnent.replaceChild("form", submission) ; 

   


  }

}

}
*/
window.onload = init ;
