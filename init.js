const bg = document.querySelector('#bg');

const createHero = () => {
   let div = document.createElement('div');
   div.setAttribute('id','hero');
   div.setAttribute('class','front-face');
   bg.appendChild(div);
   const hero = new Hero();
}

const createEnemy = () => {
   const enemy = new Enemy();
   bg.appendChild(enemy.enemy);
}

const Level = () => {
   let showLevel = document.querySelector('.level');
   showLevel.remove();
}

const draw = (() => {
   setTimeout(Level,3000);
   createHero();
   setInterval(createEnemy,3000);
})();






   