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
	val = Number(in_obj.value);
	
	// Check if input is correct
	if (Number.isNaN(val)){
		var dic_errs = {
			"ru": "Ошибка: Введите действительное число!",
			"chinese": "错误：输入实数！",
			"en": "Error: Enter real number!"
		}
		document.getElementById("answer").innerHTML = dic_errs[document.documentElement.lang];
	}else{
		// dictionary with messages if number is negative 
		var dic_msgs_neg = {
			"ru": `Квадратный корень из ${val} это ${Math.sqrt(Math.abs(val)).toFixed(5)}i и -${Math.sqrt(Math.abs(val)).toFixed(5)}i`,
			"chinese": `${val}的平方根是${Math.sqrt(Math.abs(val)).toFixed(5)}i 和 -${Math.sqrt(Math.abs(val)).toFixed(5)}i`,
			"en": `The square root of ${val} is ${Math.sqrt(Math.abs(val)).toFixed(5)}i and -${Math.sqrt(Math.abs(val)).toFixed(5)}i`	
		}
		// dictionary with messages if number is positive
		var dic_msgs = {
			"ru": `Квадратный корень из ${val} это ${Math.sqrt(Math.abs(val)).toFixed(5)}`,
			"chinese": `${val}的平方根是${Math.sqrt(Math.abs(val)).toFixed(5)}`,
			"en": `The square root of ${val} is ${Math.sqrt(Math.abs(val)).toFixed(5)}`	
		}
		// Check if number is positive or negative
		if (val >= 0){
			document.getElementById("answer").innerHTML = dic_msgs[document.documentElement.lang];
		}else{
			document.getElementById("answer").innerHTML = dic_msgs_neg[document.documentElement.lang];
		}
	}
}

function clearInput() 
{
	// Clears the input and answer poles
	document.getElementById("inp").value = document.getElementById("inp").defaultValue;
	document.getElementById("answer").innerHTML = "";
}
