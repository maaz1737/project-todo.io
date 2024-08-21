let todoItems = [
{
    item:'wednesday',
    Datev:'12/23/2020',
},
{
    item:'will go to lahore',
    Datev:'09/23/2024'
}

];
      

displayItems();

function addTodo() {
  let inputValue = document.querySelector(".input-value");

  let date_input= document.querySelector(".date");

  let getInputValue = inputValue.value;

  let dueDate = date_input.value;


  if(getInputValue =='' && dueDate == ''){

    alert('Add task ')
  }
  else
  {

 todoItems.push({item:getInputValue , Datev:dueDate} );

}

inputValue.value = "";
  date_input.value="";
displayItems();
}


function displayItems() {
  let items = document.querySelector(".items");
  let container = "";
  for (let i = 0; i < todoItems.length; i++) {

     let {item,Datev} = todoItems[i]

    container += `
       


       <span>  ${item}</span>
       <span>  ${Datev}</span>
       <button class='delbtn' onclick=' 
       todoItems.splice(${i},1)
       displayItems();'>Delete  </button>`
       
   
  }

  let getstritem=localStorage.getItem('stritem')
  let objIt=JSON.parse(getstritem)

  items.innerHTML = container;
}
