window.addEventListener('scroll', function() {
	let navbar = document.getElementById("menu-bar");
	if (window.pageYOffset >= 256) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
});


function addProp() {
	var ul = document.getElementById("name-list");
	var candidate1 = document.getElementById("candidate1");
	var candidate2 = document.getElementById("candidate2");
	var candidate3 = document.getElementById("candidate3");
	var li1 = document.createElement("li");
	var li2 = document.createElement("li");
	var li3 = document.createElement("li");
	li1.setAttribute('id', candidate1.value);
	li2.setAttribute('id', candidate2.value);
	li3.setAttribute('id', candidate3.value);
	li1.appendChild(document.createTextNode(candidate1.value));
	li2.appendChild(document.createTextNode(candidate2.value));
	li3.appendChild(document.createTextNode(candidate3.value));
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	console.log("working add btn");
}

function removeProp() {
	var ul = document.getElementById("name-list");
	var candidate1 = document.getElementById("candidate1");
	var candidate2 = document.getElementById("candidate2");
	var candidate3 = document.getElementById("candidate3");
	var item1 = document.getElementById(candidate1.value);
	var item2 = document.getElementById(candidate2.value);
	var item3 = document.getElementById(candidate3.value);
	ul.removeChild(item1);
	ul.removeChild(item2);
	ul.removeChild(item3);
	console.log("working remove btn");
}
/*
function addDesc() {
	var ul = document.getElementById("desc-list");
	var candidate = document.getElementById("candidate2");
	var li = document.createElement("li");
	li.setAttribute('id', candidate.value);
	li.appendChild(document.createTextNode(candidate.value));
	ul.appendChild(li);
	console.log("working add btn");
}

function removeDesc() {
	var ul = document.getElementById("desc-list");
	var candidate = document.getElementById("candidate2");
	var item = document.getElementById(candidate.value);
	ul.removeChild(item);
	console.log("working remove btn");
}

function addSize() {
	var ul = document.getElementById("size-list");
	var candidate = document.getElementById("candidate3");
	var li = document.createElement("li");
	li.setAttribute('id', candidate.value);
	li.appendChild(document.createTextNode(candidate.value));
	ul.appendChild(li);
	console.log("working add btn");
}

function removeSize() {
	var ul = document.getElementById("size-list");
	var candidate = document.getElementById("candidate3");
	var item = document.getElementById(candidate.value);
	ul.removeChild(item);
	console.log("working remove btn");
}*/