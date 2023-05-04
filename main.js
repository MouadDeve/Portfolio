let dark = document.querySelector('#dark')
let notDark = document.querySelector('#notDark')
let p1 = document.querySelectorAll('.p1')
let all = document.querySelector('.all')
let mouad = document.querySelector('.mouad')
let icons = document.querySelector('.icons')
let hello = document.querySelector('.hello')
let h1 = document.querySelector('h1')
let text = document.querySelector('.text')
let nav = document.querySelector('.nav')
let bar = document.querySelector('#nav')
let Close = document.querySelector('#close')
let div2 = document.querySelector('.div2')
let Icons = document.querySelector('.icons')



notDark.onclick = function(){
    for(let i = 0; i < p1.length; i++) {
        p1[i].setAttribute('id', 'p12');
        p1[i].style.color = 'white'
    }
    all.style.backgroundColor = 'black'
    mouad.style.color = 'white'
    icons.style.color = 'white'
    hello.style.color = 'white'
    h1.style.color = 'white'
    text.style.color = 'white'
    document.body.style.background = "linear-gradient(309deg, rgba(14,36,57,1) 42%, rgba(26,45,72,1) 55%)"
    notDark.style.display = 'none'
    dark.style.display = 'block'
    bar.style.color = 'white'
}


dark.onclick = function(){
    for(let i = 0; i < p1.length; i++) {
        p1[i].removeAttribute('id');
        p1[i].style.color = '';
    }
    all.style.backgroundColor = '';
    mouad.style.color = '';
    icons.style.color = '';
    hello.style.color = '';
    h1.style.color = '';
    text.style.color = '';
    document.body.style.background = '';
    dark.style.display = 'none';
    notDark.style.display = 'block';
    bar.style.color = ''
}



bar.onclick = function(){
    nav.style.transform = 'translateX(-434px)'
    bar.style.display = 'none'
    Close.style.display = 'block'
    nav.appendChild(Close)
    div2.style.transform = 'translateY(160px)'
    Icons.style.transform = 'translateY(160px)'
}
Close.onclick = function(){
    nav.style.transform = 'translateX(0)'
    Close.style.display = 'none'
    bar.style.display = 'block'
    div2.style.transform = 'translateY(0)'
    Icons.style.transform = 'translateY(0)'
}
