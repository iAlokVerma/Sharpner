editItem = document.getElementById("item")
editDescription = document.getElementById("description")
form = document.getElementById("addForm")
itemlist = document.getElementById("items")

form.addEventListener("submit",addItem)
itemlist.addEventListener("click",removeListItem)

filter = document.getElementById("filter")
filter.addEventListener("keyup",filterItem)



function filterItem(e) {
    console.log("e")
    searchfor = e.target.value.toLowerCase()
    itemsList = document.getElementsByClassName("i")
    Array.from(itemsList).forEach((div)=>{
        if ((div.children[0].innerText.toLowerCase().indexOf(searchfor) != -1) || (div.children[1].innerText.toLowerCase().indexOf(searchfor) != -1)){
                div.style.display = "block"
        }
        else{
                div.style.display = "none"
        }
        
    })
    
}


function removeListItem(e) {
    if (e.target.classList.contains("delete")){
        li = e.target.parentElement.parentElement
        console.log(li)
        li.removeChild(e.target.parentElement)
    }
}

function addItem(e) {
    e.preventDefault()
    item = editItem.value
    descrption = editDescription.value
    
    newitem = document.createElement("li")
    newitem.className = "list-group-item"
    newitem.appendChild(document.createTextNode(item))

    newdescrption = document.createElement("li")
    newdescrption.className = "list-group-item"
    newdescrption.appendChild(document.createTextNode(descrption))


    newButton = document.createElement("button")
    newButton.className = "btn btn-danger btn-sm float-right delete"
    newButton.appendChild(document.createTextNode("X"))

    neweditButton = document.createElement("button")
    neweditButton.className = "btn btn-danger btn-sm float-right mr-4 delete"
    neweditButton.appendChild(document.createTextNode("Edit"))


    div = document.createElement("div")
    div.className = "i"
    console.log(item)
    console.log(newdescrption)
    div.appendChild(newitem)
    div.appendChild(newdescrption)
    div.appendChild(newButton)
    div.appendChild(neweditButton)

    itemlist.appendChild(div)


}
