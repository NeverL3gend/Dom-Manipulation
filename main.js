/*
Document Object Model
 > Tree of nodes/elements created by the browser
 > Javascript can be used to read /write/manipulate to the dom
 > Object Oriented Representation

*/



//examine the document object
// console.dir(document) //this is going to show the properties and methods

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //we can change things using selectors
// console.log(document.forms);
// console.log(document.links);

//selectors

//getelementbyid
// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'goodbye'

// //text content is showing 123 in console which does not pay attention to the styling
// console.log(headerTitle.textContent);
// //inner text is paying attention to the styling
// console.log(headerTitle.innerText);

// //innerHTML doesnt change the h1 it puts the h3 into the h1
// headerTitle.innerHTML = '<h3> Hello </h3>'

// headerTitle.style.borderBottom = 'solid 3px black'
// header.style.borderBottom = 'solid 3px black'


//Getting elements by class name
// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'red'

// // items[1].style.backgroundColor = 'grey'
// //This is making all the list items grey
// for (let i = 0; i < items.length; i ++ ){
//     items[i].style.backgroundColor = 'grey'
// }

//Get element by tag name

// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'red'

// // items[1].style.backgroundColor = 'grey'
// //This is making all the list items grey
// for (let i = 0; i < li.length; i ++ ){
//     li[i].style.backgroundColor = 'grey'
// }

//query selector


// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px grey';

// let input = document.querySelector('input')
// input.value = 'hello world';

// let submit = document.querySelector('input[type="submit"]')
// submit.value = 'Send';

// let item = document.querySelector('.list-group-item')
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

//Query Selector All

// let titles = document.querySelectorAll('.title') //this will give us a node list, we can use array methods on node list
// console.log(titles);
// titles[0].textContent = 'hello'

// let odd = document.querySelectorAll('li:nth-child(odd)')

// for(let i = 0; i < odd.length; i ++){
//     odd[i].getElementsByClassName.backgroundColor = 'light grey'
// }

//Traversing the DOM

// let itemList = document.querySelector('#items')
// //parent node property

// console.log(itemList.parentNode);//this returns the parent node of main
// itemList.parentNode.style.backgroundColor = 'grey'
// console.log(itemList.parentNode.parentNode);


//parent element
let itemList = document.querySelector('#items')
//parent node property

// console.log(itemList.parentElement);//this returns the parent node of main
// itemList.parentElement.style.backgroundColor = 'grey'
// console.log(itemList.parentElement.parentElement);


//child nodes
// console.log(itemList.childNodes); //takes white spaces into an account

//children nodes

// console.log(itemList.children[1]);
// itemList.children[1].getElementsByClassName.backgroundColor = 'yellow'

// //first child
// console.log(itemList.firstChild); //this will give us white space

// //first element child
// console.log(itemList.firstElementChild); //this will give us first item on the list
// itemList.firstElementChild.textContent = 'hello 1'



// Last child 
// console.log(itemList.lastChild);
// itemList.lastChild.textContent //will show white space


// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 5' //last item on the list


//creating DOM elements / insert

//create element method
//create a section 

let newSection = document.createElement('section')
console.log(newSection);
//adding class
newSection.className = 'testing'

//add id 
newSection.id = 'testing2'

//add attr 
newSection.setAttribute('title', 'hello section')

//create text node
let newSectionText = document.createTextNode('hello testing')


//add text to div 
newSection.appendChild(newSectionText)

//add it to th edom 
let container  = document.querySelector('header .container');

let h1 = document.querySelector('header h1')

container.insertBefore(newSection, h1)