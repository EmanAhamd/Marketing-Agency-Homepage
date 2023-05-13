// scroll up button visibal and hiddden
let myBtn = document.getElementById('btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        myBtn.classList.add('show');
    }else{
        myBtn.classList.remove('show');}
})

// OnScroll
function Top(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

// number counter
let nums = document.querySelectorAll(".nums .num");
let section = document.getElementById('sec2');
let started = false;

window.onscroll = function(){
    if(!started){
        nums.forEach((num)=> startCount(num));
    }
    started = true ;
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 20)
}


