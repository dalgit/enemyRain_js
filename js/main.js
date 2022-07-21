const hero = document.querySelector('#hero')
const enemy = document.querySelector('.enemy')
const bg = document.querySelector('#bg')
const imgBox = document.querySelector('.imgBox')
const timeDiv = document.getElementById('time')
const heart =document.getElementsByTagName('i')

window.addEventListener("keydown", (e) => {
    let x=0;
    let y=0;

    if (e.key === 'ArrowLeft' && hero.offsetLeft>20) {
        x = hero.offsetLeft - 10;
        hero.style.left = `${x}px`;   
        hero.className='heroLeft'       
    }

    if (e.key === 'ArrowRight' && hero.offsetLeft<780) {
        x = hero.offsetLeft + 10;
        hero.style.left = `${x}px`;
        hero.className='heroRight'
    }
});

window.addEventListener("keyup", (e)=>{
    hero.className='heroStop'
});

function enemyMove(ene) {
    if(ene.offsetTop>540){
        ene.classList.add('enemyDeath')
        setTimeout(() => ene.classList.remove('enemy'), 500);
       return clearInterval(interval)
    }
    y = ene.offsetTop + 10;
    ene.style.top = `${y}px`;   
}

function crash(ene) {
    if(hero.offsetTop<=ene.offsetTop+15 && 
        ene.offsetLeft-22<=hero.offsetLeft &&
        hero.offsetLeft<=ene.offsetLeft+22){
        ene.classList.add('enemyDeath')
        return clearInterval(interval)
    }
}

let interval = setInterval(()=>{
    enemyMove(enemy)
    crash(enemy)
},20)


let copyInterval = setInterval(()=>{
    let random = Math.floor(Math.random()*(bg.offsetWidth-66)+22);
    let copyEnermy = document.createElement('div');
    copyEnermy.className='enemy';
    copyEnermy.style.left = `${random}px`;  
    imgBox.appendChild(copyEnermy);
    console.log(random)
    let interval = setInterval(()=>{
        enemyMove(copyEnermy)
        crash(copyEnermy)
    },20)
},600)


//오류     let random = Math.floor(Math.random()*(bg.offsetWidth-enemy.offsetWidth));



let second = 0;
setInterval(()=>{
    second++;
    timeDiv.innerHTML=`${second} seconds`
},1000)
