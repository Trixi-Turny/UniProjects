

 $(document).ready(function() {

    clearForm();
    setFocus() ;
    toolTip();
   
$('form').validate({

     rules: {
       
        	fname:{
	            minlength: 2,
	            fnameRegex: true 
	        },
	        sname:{
        	
	            minlength: 2,
	            fnameRegex: true 
	         },
	        han:{
	        
	           hanRegex: true
	        },
   
	        email:{
		       	emailRegex: true
		    },

	       tel:{

		       	telRegex: true
	       }
         },
    onfocusout:function(element) {
            this.element(element);
},
     submitHandler: function(form) {
    
      $('#contactForm').replaceWith("<div id=\"replace\"><h1>Thank You for submitting your details."+"<br/>"+"The Health Authority will contact you within the next 14 days.</h1></div>" );

            return false;
}
})



$('.fieldToTest').focusout(function(event) {
    $(this).valid();
});

 	$.validator.addMethod("fnameRegex", function(value, element) {
        return this.optional(element) || /^[A-Z][A-Z\s]+$/i.test(value);
    }, "*Please enter a valid First Name.");

  	$.validator.addMethod("snameRegex", function(value, element) {
        return this.optional(element) || /^([A-Z]{2,}(?:-[A-Z]{2,})?)$/i.test(value);
    }, "*Please enter a valid Last Name.");  

  	$.validator.addMethod("hanRegex", function(value, element) {
        return this.optional(element) || /^ZHA[0-9]{6}$/i.test(value);
    }, "*Please enter a valid Health Authority Number." + "<br/>" + "Your number should start with the letters ZHA and 6 digits."); 
	$.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "*Please enter a valid Email Address."); 
	$.validator.addMethod("telRegex", function(value, element) {
        return this.optional(element) || /^[0-9]{11}$/.test(value);
    },  "*Please enter a valid Phone Number." + "<br/>" + "The Number should be 11 digits long and contain no spaces or special characters.");

 
    });


function clearForm() {

	$("#clearForm").click(function(event){
     
		$('.fieldToTest').each(function(){
      
         $(this).val("");
         $(this).next().css("display", "none");

		});
		event.preventDefault();
		setFocus();
})
}

function setFocus(){
	$('.fieldToTest')[0].focus();
}

function toolTip() {

  $('#info').mouseover(function() {
    $('#toolTipContainer').css("display" , "inline");
  })
  $('#info').mouseout(function() {
   $('#toolTipContainer').css("display" , "none");
  })
}



