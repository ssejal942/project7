 $("#reset-btn").click(function(){
    let x = document.getElementById("inputPassword1").value;
    let y= document.getElementById("inputPassword2").value;
     if (x === y) {
      window.open("index2.html",'_self');
    }
    else if(x!==y){
      
    $(".form-text").html("<p>Passwords do not match.</p> ");
    document.getElementById("inputPassword2").style.border= "3px solid red";
        }
    
 });




