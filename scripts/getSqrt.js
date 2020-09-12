  //variables
var in_obj = document.getElementById("inp");
var clear_button = document.getElementById("clr_but")
var button = document.getElementById("sqrtbtn");
  //int precision = ... for dynamic precision
  
  //events

button.onclick = handleButtonClick;
clear_button.onclick = clearInput

  //event functions
function handleButtonClick() 
{
	// GETS SQRT of input pole number
	
	// Check parsed object
	val = Number(in_obj.value);
	if (Number.isNaN(val) || val < 0){
		document.getElementById("answer").innerHTML = "Error: Enter non-negative real number!"
	}else{
		document.getElementById("answer").innerHTML = "The root square of " + val + " " +  "is " + Math.sqrt(val).toFixed(5);
	}
}

function clearInput() 
{
	// Clears the input and anwer poles
	document.getElementById("inp").value = document.getElementById("inp").defaultValue;
	document.getElementById("answer").innerHTML = "";
}
