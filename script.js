const newHeader = document.createElement('h2');
console.log(newHeader); 
newHeader.textContent = "This content added by JavaScript";

document.querySelector("div.container2").append(newHeader);

document.addEventListener('click', function() {alert('Look, an event listener, too!')})
