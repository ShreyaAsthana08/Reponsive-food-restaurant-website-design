let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');

    if(window.scrollY >60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut();
