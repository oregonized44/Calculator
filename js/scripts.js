/*
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

/*This is our BMI calulator*/
/*
var bmi = function(height, weight){
  return weight / height;
};

var height = parseInt(prompt("What is your height in inches?"));
var weight = parseInt(prompt("What is your wight in pounds?"));
var resultBmi = weight / height;
alert(resultBmi);

var temp = function(fahrenheit){
  var celsius = parseInt(prompt("What is the temperature in celsius"));
  fahrenheit = (9/5) * celsius + 32;
  alert(fahrenheit);

};
temp(85);

var gallonToLiter = function(gallons){
  liters = gallons * 3.78541;
  alert(liters);
};
gallonToLiter(25);
*/
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $(".btnAdd").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $(".btnSubtract").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $(".btnMultiply").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $(".btnDivide").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });

});
