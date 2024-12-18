const promiseOne = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        console.log("heloo brother");
        resolve();

}, 1000)
})

promiseOne.then(function(){
    console.log("hehehehhehehhehhehhehehhehehhe");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        
        console.log("heyyyyyy brotherrrrr");
        resolve();
    })
},1000).then(function(){
    console.log("hehehhhehehhehhehehheheh");
})

                                        //  Data consumption
const promiseThree = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        
        resolve({username:"Ratnesh Singh",email:"ratnesh@gmail.com" });

}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})
    

const promiseFour=new Promise((resolve,reject)=>{
    let error = false;
    if(!error)
        {
            resolve({username:"Ratnesh Singh", password:"12344"});
        }
        else{
            reject("this show an error");
        }
})

promiseFour.then((user)=>{
   console.log(user);
   return user.username;
}).then((a)=>{
    console.log(a);
}).catch((b)=>{
  console.log(b);
}).finally(()=>console.log("Your promise is successfully resolved either reject"));


const promiseFive=new Promise((resolve,reject)=>{
    let error = false;
    if(!error)
        {
            resolve({username:"javascript", password:"12344"});
        }
        else{
            reject("JS went wrong");
        }
})

async function consumepromiseFive(){
  try {
    const  response = await promiseFive;
    console.log(response);
  } catch (error) {
     console.log(error);
  }
}

consumepromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))