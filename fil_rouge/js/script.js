var i = 0;

function affichage() {
    i++;
    $('.question' + i).css('display','block');
    $('.question' + (i - 1)).css('display','none');
}
function nom() {
    var username = document.getElementById('username').value;
    console.log(username);
    document.getElementById('user').innerHTML = `<h2 class="bonjour">Bonjour ${username}</h2>`;
    $('#user').css('display','block');
}
var point = 0;
function compteur(){
    var select = document.getElementById('reponse' + (i-1));
    var choice = select.selectedIndex;
    var reponse = Number(select.options[choice].value);
    point += reponse;
    console.log(point);
}

function score(){
    $('#user').css('display','none');
    $('.question' + i).css('display','none');
    $('#fin').css('display', 'block');
    document.getElementById('fin').innerHTML = `<h3 class="final">Bien joué ${username.value} vous avez eu ${point} bonnes réponses sur ${i}</h3>`;
}

