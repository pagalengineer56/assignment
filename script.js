window.addEventListener('scroll', function () {
    let navbar = document.getElementById("menu-bar");
    if (window.pageYOffset >= 256) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


function addProp() {
    var ul = document.getElementById("name-list");
    var candidate = document.getElementById("candidate1");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    console.log("working add btn");
}

function removeProp() {
    var ul = document.getElementById("name-list");
    var candidate = document.getElementById("candidate1");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
    console.log("working remove btn");
}

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
}