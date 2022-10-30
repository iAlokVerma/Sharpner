second_element = document.querySelectorAll("li")[1]
second_element.style.color = "green"
element = document.querySelectorAll("li")

let count = 0
for (let i = 0 ;i<element.length;i++){
    if (i%2 == 0){
        element[i].style.background = "green"
    }
}

