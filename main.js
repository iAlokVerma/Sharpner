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
    let div = document.createElement("div")
    div.style.display = "flex"
    let li_user = document.createElement("li")
    li_user.className = "item"
    li_user.id = "user"
    li_user.appendChild(document.createTextNode(inusername.value))
    console.log(li_user)
    let li_email = document.createElement("li")
    li_email.className = "item"
    li_email.appendChild(document.createTextNode(inemail.value))

    let btn_delete = document.createElement("button")
    btn_delete.innerText = "Delete"
    btn_delete.id = "delete"
    btn_delete.addEventListener("click", delete_data)



    div.appendChild(li_user)
    div.appendChild(li_email)
    div.appendChild(btn_delete)
    listofUsers.appendChild(div)

    inusername.value = ""
    inemail.value = ""

}


var tempdata = {}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/53fa4cd709b84cd0bf4b5bdea7442835/appointments")

        .then((response) => {
            console.log(response)
            tempdata = response.data
            keys = Object.keys(tempdata)
            keys.forEach((key) => {
                let div = document.createElement("div")
                div.style.display = "flex"
                let li_user = document.createElement("li")
                li_user.className = "item"
                li_user.id = "user"
                li_user.appendChild(document.createTextNode(tempdata[key].user))
                console.log(li_user)
                let li_email = document.createElement("li")
                li_email.className = "item"
                li_email.appendChild(document.createTextNode(tempdata[key].email))

                let btn_delete = document.createElement("button")
                btn_delete.innerText = "Delete"
                btn_delete.id = "delete"
                btn_delete.addEventListener("click", delete_data)



                div.appendChild(li_user)
                div.appendChild(li_email)
                div.appendChild(btn_delete)


                listofUsers.appendChild(div)
            });
        }).catch((err) => {
            console.log("Error occured" + err)
        })
})


function delete_data(event) {
    if (event.target.id == "delete") {
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
        axios.delete(`https://crudcrud.com/api/53fa4cd709b84cd0bf4b5bdea7442835/appointments/${id}`).then().catch(() => {
            console.log("cannot delete element")
        })

        listofUsers.removeChild(div)
    }


}

function saveToCloud(datavalue) {
    console.log("save data 1")
    axios.post("https://crudcrud.com/api/53fa4cd709b84cd0bf4b5bdea7442835/appointments", datavalue)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log("save data 2")
}