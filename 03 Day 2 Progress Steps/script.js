const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let count = 1;

next.addEventListener('click', ()=>{
    count++;

    if(count > circles.length){
        count = circles.length;
    }    
    update()
})

prev.addEventListener('click', ()=>{
    count--;
    if(count < 1){
        count = 1;
    }    
    update()
})

function update() {
    circles.forEach((circle, index)=>{        
        if(index < count){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    const activeCircles = document.querySelectorAll('.active')
    progress.style.width = ((activeCircles.length-1)/(circles.length-1)*100) + '%';


    if(count === 1){
        prev.classList.add('disabled');
    }else if(count === circles.length){
        next.classList.add('disabled');
    }else{
        prev.classList.remove('disabled');
        next.classList.remove('disabled');
    }

}

update();