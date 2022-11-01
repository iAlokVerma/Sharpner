let inusername = document.querySelector("#name")
let inemail = document.querySelector("#email")
btnsubmit = document.querySelector(".btn")
btnsubmit.addEventListener("click",saveuser)

function saveuser(e) {
    e.preventDefault()
    if (inusername.value != "" ||  inemail.value != ""){
        let username = inusername.value
        let email = inemail.value
        console.log(username)
        console.log(email)
        save = `user : ${username } email : ${email}`
        console.log(save)
        localStorage.setItem("user",`user : ${username} email : ${email}`)
    }
    
}
