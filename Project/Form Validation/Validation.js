const nameError = document.querySelector('#nameError');
const numberError = document.querySelector('#numberError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');
const submitError = document.querySelector('#submitError');


const btn = document.querySelector('#btn');

function validateName() {
    const namet = document.querySelector('#namet').value;

    if (namet.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    else if (!namet.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full Name";
        return false;
    }

    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

function validateNumber(){
    const number= document.querySelector('#number').value;

    if(number.length==0)
    {
        numberError.innerHTML="Number is Required";
        return false;
    }
   else if(number.length !==10){
        numberError.innerHTML="Phone no should be 10 digits";
        return false;
    }
   else if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML=" must be digit";
        return false;
    }
    numberError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}

function validateEmail(){
    const email=document.querySelector('#email').value;

    if(email.length==0)
    {
        emailError.innerHTML="Email is Required";
       return false;
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML="email is invalid";
        return false;
    }
 emailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    const message=document.querySelector('#message').value;
   var required =30;
   var left=required-message.length;

   if(left>0)
   {
    messageError.innerHTML=left + " more character required";
    return false;
   }

   message.innerHTML='<i class="fas fa-check-circle"></i>';
   return true;
}

function validateForm()
{
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage)
    {
        submitError.innerHTML="Please fix the Error to Submit";
        return false;
    }
}

