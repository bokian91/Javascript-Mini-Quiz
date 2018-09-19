    function check() {
let q1 = document.getElementsByClassName("Q1");
        if(q1.checked === true) {
            console.log(q1.value)
        }
        else {
            console.log("false")
        }
        // let q1=document.quiz.q1.value;
    // let q2=document.quiz.q2.value;
    // let q3=document.quiz.q3.value;
    // let q4=document.quiz.q4.value;
    // let q5=document.quiz.q5.value;
     let count=0;
        console.log(q1);

    if(q1=="b"){
        count++;
    }
//    // if(q2=="c"){
//        count++;
//    }
//    if(q3=="a"){
//        count++;
//    }
//    if(q4=="b"){
//        count++;
//    }
//    if(q5=="c"){
//        count++;
//    }
        
    let messages = ["100 Percent! Congratulations!", "Very Good!", "You Pass", "Sorry, You Need More Practice."];
    let pictures = ["img/CfhL.gif", "img/NHli.gif", "img/RevA.gif", "img/Torres%20Failure.gif"]; 
        
    let range;
        
    if(count < 3) {
        range = 3;
    }
    if(count == 3) {
        range = 2;
    }
    if(count == 4) {
        range = 1;
    }
    if(count == 5) {
        range = 0;
    }

//    // document.getElementById("after_submit")=style.visibility="visible";
//        
//    document.getElementById("message").innerHTML = messages[range];
//    document.getElementById("number_count").innerHTML = "You got " + count + " questions correct."
//    document.getElementById("picture").src = pictures[range];
    console.log("Hey Man");    
    };
