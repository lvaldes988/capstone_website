window.onload = function () {
    document.getElementById('hamber').addEventListener('click', function () {
    var classApplied = document.getElementById('navbar').className;
    if (classApplied === 'visible') {
        document.getElementById('navbar').className = 'hidden';
    } else {
        document.getElementById('navbar').className = 'visible';
        }

    })
    var patharray = location.pathname.split('/');
    var folderName = patharray[1];
    if (folderName == '' || folderName == 'index.html') {
            document.getElementById('home').className = 'currentpage';
    } else {
        var navbar = document.getElementById('navbar');
        var links = navbar.getElementsByTagName('a');
        for (i = 0; i < links.length; i++) {
            if (links[i].getAttribute('href').indexOf(folderName) > -1) {
                links[i].className = 'currentpage';
            }
        }
    }

}