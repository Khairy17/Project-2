function reverse (){
    
        var first;
        var enteredN;
        var second;
        var temp = 0;
    
        enteredN = Number(document.getElementById("start").value);
    
        second = enteredN;
    
        if(enteredN == ""){
          alert("No number entered, please enter a positive number.");
        }
       if(enteredN <0){
         alert("negative number! please enter a positive number!")
        }
          while(enteredN > 0)
          {
            first = enteredN  % 10;
            enteredN = parseInt(enteredN / 10);
            temp = temp * 10 + first;
    
        if(temp == second)
        {
          document.getElementById("outputText").innerHTML =  "Yes, Number equal to its <b><i>reverse</i></b>!";
        }
        else
        {
          document.getElementById("outputText").innerHTML =  "No, Number not equal to its reverse!";
          }
        }
    }

