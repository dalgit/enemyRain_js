const hero = document.querySelector('#hero')
const enemy = document.querySelector('#enemy')

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
    console.log(hero)
});

function enemyMove() {
    if(enemy.offsetTop>540){
        enemy.className='enemyDeath'
       return clearInterval(enemyInterval)
    }
    y = enemy.offsetTop + 10;
    enemy.style.top = `${y}px`;   
}

function crash() {
    if(hero.offsetTop<=enemy.offsetTop+15 && 
        enemy.offsetLeft-22<=hero.offsetLeft &&
        hero.offsetLeft<=enemy.offsetLeft+22){
        enemy.className='enemyDeath'
        console.log('boom!!!!')
        return clearInterval(enemyInterval)
    }
}

const enemyInterval = setInterval(()=>{
    enemyMove()
    crash()
},40)