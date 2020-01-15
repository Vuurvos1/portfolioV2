let x = new Date();
let age;

d = x.getDate();
m = x.getMonth();
y = x.getFullYear();

if (x.getMonth > 4) {
    age = y - 2000; 
} else {
    age = y - 2001;
}

document.querySelector("#age").innerHTML = age;