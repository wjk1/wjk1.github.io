function check (){

document.getElementById("after_submit").style.visibility = "visible";

var question1 = document.quiz.question1.value;

 var question2 = document.quiz.question2.value;

var question3 = document.quiz.question3.value;


var correct = 0;

  if (question1 == "Gallop") {
correct++;

 }

  if (question2 == "Draft") {

  	correct++;
  }

  if (question3 == "Front to back"){

  	correct++;
	}
document.getElementById("number_correct").innerHTML= " you got " + correct + " correct. ";
}
