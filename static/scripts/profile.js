function loadProfileInfo() {
    loadUsername();
    loadImage();
    loadNumberOfConvos();
    generateItems();
}

function loadUsername() {
    let username = "<h2>FeralCourgette2349</h2>";

    document.getElementById('username').innerHTML = username;
}

function loadImage() {
    img = document.createElement('img');
    img.src = "./images/nico.png";
    document.getElementById('profile-picture').appendChild(img);


}

function loadNumberOfConvos() {
    let convoNumber = 8;

    document.getElementById('num-conversations').append(convoNumber.toString());
}


function generateItems() {

    let interestsList = ["Sports", "Donald Trump", "Video Games"];

    ul = document.createElement('ul');

    document.getElementById('interests').appendChild(ul);

    interestsList.forEach(function (interest) {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += interest;
});

}