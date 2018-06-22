window.onload = function(){
    document.getElementById('hamber').addEventListener('click', function(){
        var classApplied = document.getElementById('navbar').className;
        if (classApplied === 'visible'){
            document.getElementById('navbar').className = 'hidden';
        }else{
            document.getElementById('navbar').className = 'visible';
        }

    })
}


//ternary operator

//someting = if true ? then : else
// ? if true the value after
// : else the value after