let form  = document.getElementById("addForm")
let inputText =document.getElementById("item")
let ul = document.getElementById("items")


ul.addEventListener("click",removeelement)


function removeelement(e) {
    if (e.target.classList.contains('delete')){
        let li = e.target.parentElement
        ul.removeChild(li)
    }
    
}


form.addEventListener('submit',addItem)

function addItem(event){
    event.preventDefault()
    let item  = inputText.value
    let button = document.createElement('button')
    button.className = "btn btn-danger btn-sm float-right delete"
    button.innerText = "x"
    let newList =  document.createElement('li')
    newList.className = "list-group-item"
    newList.innerText = item
    newList.appendChild(button)
    ul.appendChild(newList)

    
}