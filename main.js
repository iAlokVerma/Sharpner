container = document.querySelector(" .container")
console.log(container)
child = document.querySelector("#header-title")
text = document.createTextNode("Hello World")
li = document.createElement('h1')
li.append(text)
// console.log(li,container)
container.insertBefore(li,child)



items = document.querySelector('#items')



text = document.createTextNode("Hello World")
li = document.createElement('li')
li.className = 'list-group-item'
li.append(text)
items.insertBefore(li,items.firstElementChild)