// declare global element 


let inpName = document.getElementById("name")
let inpEmail = document.getElementById("email")
let formSubmit = document.getElementById("my-form")
let listOfUsers = document.getElementById("items")



//ADD listner to get data from form

formSubmit.addEventListener("submit",addData)
listOfUsers.addEventListener("click",handleUserlist)

// get the inpts 

function handleUserlist(e) {
    e.preventDefault()
    if (e.target.classList.contains("delete")){

        console.log("Delete button clicked")
        let parent = e.target.parentElement
        let username = Array.from(parent.getElementsByClassName("item")).pop()
        deleteFronLocalStorage(username.innerText)
        listOfUsers.removeChild(parent)
    }
    if (e.target.classList.contains("edit")){
        
        console.log("Edit button clicked")
        // get data from local storage
        let parent = e.target.parentElement
        let username = Array.from(parent.getElementsByClassName("item")).pop()
        let email = getDataFromLocalStorage(username.innerText)
        console.log(email)
        inpName.value = username.innerText
        inpEmail.value = email
        deleteFronLocalStorage(username)
        listOfUsers.removeChild(parent)

    }

}


function getDataFromLocalStorage(username) {
    let data = JSON.parse(localStorage.getItem("data"))
    let email = null
    data.forEach((user)=>{
        console.log(username)
        if (user["name"] == username){
            email = user["email"]
        }
    })
    return email
    
}

function deleteFronLocalStorage(username) {
    let data = JSON.parse(localStorage.getItem("data"))
    data.filter((user)=>{
        if (user["name"] === username){
            return true
        }
    })
    console.log(data)
    localStorage.setItem("data",JSON.stringify(data))
}


// add the inputs to list 
function addData(e) {
    console.log("button clicked")
    e.preventDefault()
    username = inpName.value
    email =  inpEmail.value
    if (username === "" || email === ""){
        alert("username or email cannot be blank")
    }
    else{
        let list  = createListItem(username)
        listOfUsers.appendChild(list)
        // save in local storage
        saveInLocalStorage(username,email)
    }
    inpName.value = ""
    inpEmail.value = ""

    
}


function createListItem(username){
    let div = document.createElement("div")
    let li = document.createElement("li")
    li.className = "item"
    li.appendChild(document.createTextNode(username))
    let btnedit = document.createElement("button")
    btnedit.appendChild(document.createTextNode("Edit"))
    btnedit.className = "btn edit"
    let btnDelete = document.createElement("button")
    btnDelete.className = "btn delete"
    btnDelete.appendChild(document.createTextNode("Delete"))

    div.appendChild(li)
    div.appendChild(btnedit)
    div.appendChild(btnDelete)
    return div

}

// save the input in local storage


function saveInLocalStorage(username,email) {
    userdata = {
        "name" : username,
        "email" : email
    }
    let data = localStorage.getItem("data")
    if (data == null){
        data = []
    }
    else{
        data = JSON.parse(data)
    }
    
    data.push(userdata)
    localStorage.setItem("data",JSON.stringify(data))    
}







// edit the input and save in local storage


























// let inusername = document.querySelector("#name")
// let inemail = document.querySelector("#email")
// btnsubmit = document.querySelector(".btn")
// btnsubmit.addEventListener("click",saveuser)
// listofUsers = document.getElementById("items")

// // display already appointed used

// function display() {
    
// if (localStorage.getItem("data") != null){
//     tempdata = JSON.parse(localStorage.getItem("data"))
//     console.log(tempdata)
//     tempdata.forEach((element) => {
//         console.log(element)
//         let li = document.createElement("li")
//         li.className = "item"
//         li.appendChild(document.createTextNode(element["user"]))
//         listofUsers.appendChild(li)
//     });
//     }
// else{
//     localStorage.setItem("data",data)
// }

// }
// display()

// function saveuser(e) {
//     e.preventDefault()
//     if (inusername.value != "" ||  inemail.value != ""){
//         data = JSON.parse(localStorage.getItem("data"))
//         console.log(data)
//         if (data == null){
//             data = []
//         }
//         datavalue = {
//             "user" : inusername.value,
//             "email" : inemail.value
//         }
//         data.push(datavalue)
//         data = JSON.stringify(data)
//         console.log(data)
//         localStorage.setItem("data",data)
//     }
//     let li = document.createElement("li")
//     li.className = "item"
//     li.appendChild(document.createTextNode(datavalue["user"]))
//     listofUsers.appendChild(li)

//     inusername.value = ""
//     inemail.value = ""
    
// }
