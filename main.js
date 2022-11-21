BASE_URL = "https://crudcrud.com/api/0c490d692bf846acb5b2d4bb39bf1674"

RESOURCE = "/appointment"


let inusername = document.querySelector("#name")
let inemail = document.querySelector("#email")
btnsubmit = document.querySelector(".btn")
btnsubmit.addEventListener("click",saveuser)
listofUsers = document.getElementById("items")

// display already appointed used

function display() {
    
if (localStorage.getItem("data") != null){
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
else{
    localStorage.setItem("data",data)
}

}
display()

function saveuser(e) {
    e.preventDefault()
    if (inusername.value != "" ||  inemail.value != ""){
        data = JSON.parse(localStorage.getItem("data"))
        console.log(data)
        if (data == null){
            data = []
        }
        datavalue = {
            "user" : inusername.value,
            "email" : inemail.value
        }
        data.push(datavalue)
        data = JSON.stringify(data)
        console.log(data)
        localStorage.setItem("data",data)
    }
    saveToCloud(datavalue)
    let li = document.createElement("li")
    li.className = "item"
    li.appendChild(document.createTextNode(datavalue["user"]))
    listofUsers.appendChild(li)

    inusername.value = ""
    inemail.value = ""
    
}


function saveToCloud(datavalue) {
    console.log("save data 1")
    axios.post("https://crudcrud.com/api/0c490d692bf846acb5b2d4bb39bf1674/appointments", datavalue)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("save data 2")
}