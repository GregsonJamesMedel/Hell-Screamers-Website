window.onload = function(){

    var burger = document.getElementById('burger');
    var listitems = document.querySelectorAll('#header nav ul li');
    var status = false;
    burger.onclick = function(){
        status = !status;
        if(status){
            display('block');
        }else{
           display('none');
        }
    }

    function display(value){
        listitems.forEach(element => {
            element.style.display = value;
        });
    }


};