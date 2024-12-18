const textBox=document.getElementById('textBtn');
const listContainer = document.querySelector('.listContainer');



function addTask(){
    if(textBox.value=== '')
        {
            alert("write something");
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
         
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
         
     }
     textBox.value = '';  
     saveData() 
} 

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
        {
            e.target.classList.toggle("checked");
            saveData()
        }
    else if(e.target.tagName==='SPAN'){
           e.target.parentElement.remove();
           saveData()
    }    
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();