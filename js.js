function $(id) {
    return document.getElementById(id);
}

function kep(){

    var files = fs.readdirSync('/image/');

    for (let index = 0; index < files.length; index++) {
        $('main').innerHTML += '<img class="kepek" src='+folder[index]+' alt="kep">';    
        
    }
}


window.onload = function() {
    kep();
};