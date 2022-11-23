BASE_URL = "https://crudcrud.com/api/53fa4cd709b84cd0bf4b5bdea7442835/appointments"

// RESOURCE = "/appointment"


let inusername = document.querySelector("#name")
let inemail = document.querySelector("#email")
btnsubmit = document.querySelector(".btn")
btnsubmit.addEventListener("click", saveuser)
listofUsers = document.getElementById("items")

// display already appointed used

function display() {

    if (localStorage.getItem("data") != null) {
        tempdata = JSON.parse(localStorage.getItem("data"))
        console.log(tempdata)
        tempdata.forEach((element) => {
            console.log(element)
            let li = document.createElement("li")
            li.className = "item"
            li.appendChild(document.createTextNode(element["user"]))
            listofUsers.appendChild(li)
        });
    }
    else {
        localStorage.setItem("data", data)
    }

}
// display()

function saveuser(e) {
    console.log("save user called")
    e.preventDefault()
    if (inusername.value != "" || inemail.value != "") {
        data = JSON.parse(localStorage.getItem("data"))

        if (data == null) {
            data = []
        }
        datavalue = {
            "user": inusername.value,
            "email": inemail.value
        }
        data.push(datavalue)
        data = JSON.stringify(data)
        // console.log(data)
        // localStorage.setItem("data", data)
    }

    inusername.value = ""
    inemail.value = ""
    saveToCloud(datavalue)

    
}


var tempdata = {}

window.addEventListener("DOMContentLoaded", () => {
    getAlluser()
})


function getAlluser() {
    console.log("get all user called")
    while (listofUsers.firstChild) listofUsers.removeChild(listofUsers.firstChild);
    
    axios.get("https://crudcrud.com/api/35e3eec2dcf144d0a1e711352a6b08ef/users")

        .then((response) => {
            console.log(response)
            tempdata = response.data
            keys = Object.keys(tempdata)
            keys.forEach((key) => {
                listUser(key)
            });
        }).catch((err) => {
            console.log("Error occured" + err)
        })
        // listofUsers.appendChild(div)
}



function listUser(key) {
    console.log("list user is called ")
    // console.log(listofUsers)
    let div = document.createElement("div")

    div.style.display = "flex"
    let li_user = document.createElement("li")
    li_user.className = "item"
    li_user.id = "user"
    li_user.appendChild(document.createTextNode(tempdata[key].user))

    let li_email = document.createElement("li")
    li_email.className = "item"
    li_email.appendChild(document.createTextNode(tempdata[key].email))

    let btn_delete = document.createElement("button")
    btn_delete.innerText = "Edit"
    btn_delete.id = "edit"
    btn_delete.addEventListener("click", edit_data)


    let btn_edit = document.createElement("button")
    btn_edit.innerText = "Delete"
    btn_edit.id = "delete"
    btn_edit.addEventListener("click", delete_data)



    div.appendChild(li_user)
    div.appendChild(li_email)
    div.appendChild(btn_delete)
    div.appendChild(btn_edit)


    listofUsers.appendChild(div)
    console.log("users added")
    // window.location.reload()
    return listofUsers

}

function edit_data(event) {
    if (event.target.id == "edit") {
        // console.log(event.target.parentNode)
        div = event.target.parentNode
        user = div.childNodes[0].innerText
        email = div.childNodes[1].innerText
        inusername.value = user
        inemail.value = email
        delete_data(event)

    }

    
}

function delete_data(event) {
    if (event.target.id == "delete" || event.target.id == "edit") {
        // console.log(event.target.parentNode)
        div = event.target.parentNode


        user = div.childNodes[0].innerText
        let id = null
        tempdata.forEach((data) => {
            console.log(data)
            if (data["user"] == user) {
                console.log(data["user"])
                id = data["_id"]
            }
        })
        console.log(id)
        axios.delete(`https://crudcrud.com/api/35e3eec2dcf144d0a1e711352a6b08ef/users/${id}`).then().catch(() => {
            console.log("cannot delete element")
        })

        listofUsers.removeChild(div)
    }


}

function saveToCloud(datavalue) {
    console.log("save to cloud1")
    axios.post("https://crudcrud.com/api/35e3eec2dcf144d0a1e711352a6b08ef/users", datavalue)
        .then(function (response) {
            console.log("akv" + response);
        })
        .catch(function (error) {
            console.log(error);
        });
    getAlluser()
}