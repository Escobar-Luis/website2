const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

function SetNewImage () {
    document.getElementById("me").src= "/Users/administrator/Development/Code/learn-prework/website2/img/Logo.png";
}

function SetOldImage () {
    document.getElementById("me").src= "/Users/administrator/Development/Code/learn-prework/website2/img/Me.png"
}