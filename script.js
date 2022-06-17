
async function getResponce(){
    let responce = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
  
    let content = await responce.json()
    content = content.splice(length)
    let list = document.querySelector('body')
  
    let key;
    
   
    for (key in content) {
        
  list.innerHTML += 
  `<a data-modal-btn="my_modal${content[key].id}" class="text">
      <div class="tables"> 
      <div><img class="foto" src="https://usersdogs.dmytrominochkin.cloud${content[key].dogImage}"></div>
      <div class="title">${content[key].title}
      <div class="sex">${content[key].sex}</div></div></div>
  </a>  
  
  <div data-modal-window="my_modal${content[key].id}" class="modal">
  <div class="close_modal_window">&times</div>
  <div class="modal_content">
  <div><img class="modal_foto" src="https://usersdogs.dmytrominochkin.cloud${content[key].dogImage}"></div>
    
  <div class="modal_table">
      <span class="modal_title">${content[key].title}</span>
      <span class="modal_description"><hr>Sex:<br>${content[key].sex}</span>
      <span class="modal_description"><hr>Age:<br>${content[key].age}</span>
      <span class="modal_description"><hr>Personality:<br>${content[key].description}</span>
    
  <div><a href="https://usersdogs.dmytrominochkin.cloud/dogs" class="button"><img src="icon/tele.png">Adopt Me</a></div>`
  
  
  let btns = document.querySelectorAll("*[data-modal-btn]")
  
  for(let i = 0; i<btns.length; i++){
  btns[i].addEventListener('click',function(){
  let name = btns[i].getAttribute('data-modal-btn');
  let modal = document.querySelector("[data-modal-window='"+name+"']");
  modal.style.display = "block";
  
  let close = modal.querySelector(".close_modal_window");
  close.addEventListener('click',function(){
  modal.style.display = "none";
  })
  })
  }
  
  
  window.onclick = function(e){
    if(e.target.hasAttribute('data-modal-window')){
    let modals = document.querySelectorAll("*[data-modal-window]");
    for(let i = 0; i<modals.length; i++){
    modals[i].style.display = "none";
  }
  }
  }
  }
  }
  getResponce()
  