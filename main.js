ul = document.getElementById('items')

new_li = document.createElement("li")
new_li.className = "list-group-item"
new_li.innerText = "New Element"
ul.append(new_li)
console.log(ul)

li = document.getElementsByTagName("li")

for(var i=0 ;i<li.length;i++){

li[i].style.background = "pink"

}

li = document.getElementsByClassName("list-group-item")
console.log(li)
for(var i=0 ;i<li.length;i++){

li[i].style.color = "red"

}