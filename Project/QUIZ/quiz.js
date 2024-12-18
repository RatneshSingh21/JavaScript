let que=[
   {
    questions:"What is the capital of France?",
    answer:[
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
       
    ] 
   },
   {
   questions:"Who is the CEO of Tesla?",
    answer:[
       { text:"Jeff Bezos",correct:false},
       { text:"Elon Musk",correct:true},
       { text:"Bill Gates",correct:false},
       { text:"Tony Stark",correct:false},
       
    ] 
   } ,
   {
       questions:"What is the largest ocean on Earth?",
    answer:[
       { text:"Atlantic Ocean",correct:false},
       { text:"Indian Ocean",correct:false},
       { text:"Arctic Ocean",correct:false},
       { text:"Pacific Ocean",correct:true},
       
    ] 
   } ,
   {
       questions:"What year was JavaScript created?",
    answer:[
       { text:"1996",correct:false},
       { text:"1995",correct:true},
       { text:"1994",correct:false},
       { text:"1993",correct:false},
       
    ] 
   } 

];

const questionEl = document.querySelector('.question');
const aButton = document.querySelector('.aButtton');
const nextButton = document.querySelector('.nextButton');


let currentIndex=0;
let score=0;


function start()
{
 score=0;
  currentIndex=0;
  nextButton.innerHTML="Next";
  show();
}

function show()
{
  
  let currentQuestion=que[currentIndex];
  let questionNumber=currentIndex+1;
  questionEl.innerHTML=questionNumber+"."+currentQuestion.questions;

  aButton.innerHTML = '';

  currentQuestion.answer.forEach(answer=>{
     const button=document.createElement("button")
     button.innerHTML=answer.text
     button.classList.add('btn');
     button.addEventListener('click',()=>{
      
      [...aButton.children].forEach(btn => {
         btn.disabled = true;
         btn.style.color='black';
         
     });
     
          if(answer.correct===false)
            {
               button.style.background='red';
               button.style.color='white';
               
            }
            else{
               button.style.background='green';
               button.style.color='white';
                score++;
            }
   nextButton.style.display='block';
            //show the correct answer
           
               currentQuestion.answer.forEach(ans=>{
                  if(ans.correct)
                     {
                  const correctButton=[...aButton.children].find(btn=>btn.innerHTML===ans.text);
                  correctButton.style.background = 'green';
                       correctButton.style.color = 'white';
                       correctButton.disabled = true;
                     }
               })
          
     })
     
     aButton.appendChild(button);
  });
   
}

nextButton.addEventListener('click',()=>{
   if (currentIndex < que.length-1 ) {
      currentIndex++;
      show();
  } else {
   //    alert('your score is'+score)
   //    if (confirm('Play again?')) {
   //       start();
   //   } else {
   //       alert('Thank you for playing!');
   //   }

   aButton.innerHTML = '';
   questionEl.innerHTML=`your scored ${score} out of ${que.length}!`
   nextButton.innerHTML='play again';
   nextButton.style.display='block';
    currentIndex=0;
    nextButton.addEventListener('click', start); 
  }
})
//  nextButton.addEventListener('click',start);
start();

