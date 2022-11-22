BASE_URL = "https://crudcrud.com/api/0c490d692bf846acb5b2d4bb39bf1674/appointments"

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
display()

function saveuser(e) {
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
        console.log(data)
        localStorage.setItem("data", data)
    }
    saveToCloud(datavalue)
    let li = document.createElement("li")
    li.className = "item"
    li.appendChild(document.createTextNode(datavalue["user"]))
    listofUsers.appendChild(li)

    inusername.value = ""
    inemail.value = ""

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/69f61b9dcb674b8893e403b3374bedaa/appointments")

        .then((response) => {
            
            tempdata = response.data
            keys = Object.keys(tempdata)
            keys.forEach((key) => {
                let div = document.createElement("div")
                div.style.display = "flex"
                let li_user = document.createElement("li")
                li_user.className = "item"
                li_user.appendChild(document.createTextNode(tempdata[key].user))
                console.log(li_user)
                let li_email = document.createElement("li")
                li_email.className = "item"
                li_email.appendChild(document.createTextNode(tempdata[key].email))
                div.appendChild(li_user)
                div.appendChild(li_email)
                console.log(div)

                listofUsers.appendChild(div)
            });
        }).catch((err) => {
            console.log("Error occured"+err)
        })
})


function saveToCloud(datavalue) {
    console.log("save data 1")
    axios.post("https://crudcrud.com/api/69f61b9dcb674b8893e403b3374bedaa/appointments", datavalue)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log("save data 2")
}