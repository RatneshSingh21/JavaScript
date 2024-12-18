function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)   //This line calls the SetUsername function with this referring to the new object being created by createUser. It effectively sets the username property on the new object.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName: "Jane",
//     lastName: "Smith"
//   }
      

//   //calls the fullName method of person1 but uses person2 as the context (this).
//   document.getElementById("demo1").innerHTML = person1.fullName.call(person2);