let inusername = document.querySelector("#name")
let inemail = document.querySelector("#email")
btnsubmit = document.querySelector(".btn")
btnsubmit.addEventListener("click",saveuser)

function saveuser(e) {
    e.preventDefault()
    if (inusername.value != "" ||  inemail.value != ""){
        data = {
            "user" : inusername.value,
            "email" : inemail.value
        }
        data = JSON.stringify(data)
        console.log(data)
        localStorage.setItem("data",data)
        console.log(JSON.parse(localStorage.getItem("data")))
    }
    
}
