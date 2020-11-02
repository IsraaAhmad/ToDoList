 const add = document.querySelector('#add');
 let show = document.getElementById("show");
 let inputt = document.getElementById("textarea");
 

 add.addEventListener('click',() =>{
    
     const item=document.createElement('ul');
     item.setAttribute("class","item");
     const remove=document.createElement('button');
     const edit=document.createElement('button');
     const spann =document.createElement('span');
     remove.setAttribute("class","remove");
     
    show.setAttribute("class","show");
     
     spann.setAttribute("class","text");
     let IconDone="url('https://www.flaticon.com/svg/static/icons/svg/87/87932.svg')";
     let IcnoEdit="url('https://www.flaticon.com/svg/static/icons/svg/215/215498.svg')";
     edit.setAttribute("class","edit");
     spann.textContent=inputt.value;
     // Store

     localStorage.ToDoList =spann.textContent;   
     item.appendChild(remove);
     item.appendChild(edit);
     item.appendChild(spann);
     edit.style.backgroundImage=IcnoEdit;
     show.appendChild(item);
     remove.addEventListener('click',e=>{
         show.removeChild(e.target.parentElement);
       




         
     })
     edit.addEventListener('click',e=>{
        spann.setAttribute("contenteditable","true"); 
        edit.style.backgroundImage=IconDone;
        
        edit.addEventListener('click',e=>{
            spann.setAttribute("contenteditable","false"); 
            edit.style.backgroundImage=IcnoEdit;
          
            
        })
        
    })
    
 });
