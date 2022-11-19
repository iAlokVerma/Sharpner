
amount = document.getElementById("amount")
description = document.getElementById("descrition")
category = document.getElementById("category")
itemlist = document.getElementById("itemlist")

submit = document.getElementById("submit")
submit.addEventListener("click",submitHandler)
itemlist.addEventListener("click",listHandler)




function listHandler(event){
        if (event.target.id == "delete"){
            itemlist.removeChild(event.target.parentElement)


        }
        if (event.target.id == "edit"){
            
            console.log(event.target.parentElement)
            let div =  event.target.parentElement
            amount.value = document.getElementById("txt_amount").innerText
            description.value =  document.getElementById("txt_description").innerText
            category.value =  document.getElementById("txt_category").innerText
        }
}


function submitHandler(event) {
    event.preventDefault()
    if(amount.value != "" && description.value != null && category.value != null){
    let txt_amount = amount.value
    let txt_description = description.value
    let txt_category = category.value
    let item = {"amount" : txt_amount,"description" : txt_description,"category" : txt_category}
    SaveinLocalStorage(item)
    let listitem = SaveInList(item)
    console.log(listitem)
    itemlist.appendChild(listitem)
    
    amount.value = ""
    description.value = ""
    category.value = ""

    }

}


function SaveinLocalStorage(item) {
    let data = JSON.parse(localStorage.getItem("data"))
    console.log(data)
    if (data == null){
        data = []
    }
    data.push(item)
    localStorage.setItem("data",JSON.stringify(data))
    console.log("data pushed ",data)
}



function SaveInList(item) {
    console.log(item)
    let div = document.createElement("div")
    let txt_amount = document.createElement("label")
    txt_amount.innerText = item["amount"]
    txt_amount.id = "txt_amount"
    let txt_description = document.createElement("label")
    txt_description.innerText = item["description"]
    txt_description.id = "txt_description"
    let txt_category = document.createElement("label")
    txt_category.innerText = item["category"]
    txt_category.id = "txt_category"
    let btn_edit = document.createElement("button")
    btn_edit.innerText = "Edit"
    btn_edit.id = "edit"

    let btn_delete = document.createElement("button")
    btn_delete.innerText = "Delete"
    btn_delete.id = "delete"

    div.appendChild(txt_amount)
    div.appendChild(txt_description)
    div.appendChild(txt_category)
    div.appendChild(btn_edit)
    div.appendChild(btn_delete)
    
    return div
}



