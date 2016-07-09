function quiz(){

  var questions=[
  "How old are you?", 
  "What is your BMI?", 
  "Does anybody in your family have Diabetes?", 
  "How would you describe your diet?"] ;


  var answers=[
  ["1-25", "26-40", "41-60", "60+"],
  ["0-25", "26-30", "31-35","35+"],
  ["No.", "Grandparent", "Sibling", "Parent"], 
  ["Low Sugar", "Normal Sugar", "Quite High Sugar", "High Sugar" ]];

  var scores=[
  [0, 5, 8, 10], 
  [0, 0, 9, 10], 
  [0, 7, 15, 15], 
  [0, 0, 7, 10]];


//determining lowest scores 

  var lowestScores=[scores[0][0],scores[1][0],scores[2][0], scores[3][0]] ;

  var q= 0 ;
  var buttonIndex=0 ;

  for (var i=0; i< questions.length ; i++){

      var title=document.createElement("h3") ;

      var titleText=questions[i] ;

      title.innerHTML=titleText ;

      document.body.appendChild(title) ;

      


      for (var p=0; p<answers[i].length; p++){


      	 

         
         var button=document.createElement("input") ;
         
         button.setAttribute("type", "radio") ;
         button.setAttribute("class", "radioButton") ;
         button.setAttribute("id", "option"+buttonIndex) ;
         title.appendChild(button) ;

         label=document.createElement("label") ;
         label.setAttribute("for","option"+buttonIndex) 
         var labelText=answers[q][p] ;
         label.innerHTML=labelText ;
         title.appendChild(label) ;

         buttonIndex=buttonIndex+1 ;

       

      }

     q++ ;

                  

}

var submitSection=document.createElement("section") ;

var submitButton=document.createElement("input") ;
submitButton.setAttribute("type", "submit") ;
submitButton.setAttribute("id","submit") ;
submitButton.setAttribute("value","Submit") ;

submitSection.appendChild(submitButton) ;

questions.appendChild(submitButton) ;

}

window.onload=quiz ;



//Reference: JavaScript multidimensional array : http://stackoverflow.com/questions/7545641/javascript-multidimensional-array
//Reference: Calculate Results of Quiz: http://stackoverflow.com/questions/20859746/calculate-result-on-quiz