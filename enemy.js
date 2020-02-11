class Enemy {
   constructor() {
      this.audio = document.querySelector('audio');
      this.enemy = document.createElement('div');
      this.enemy.setAttribute('class','enemy');
      this.getRandomPosition();
      this.moveDown();
      this.alive = 0;
      this.intervalID;
   }

   getRandomPosition() {
      this.enemy.style.left = Math.floor(Math.random() * (760 - 40 + 1)) + 40 + "px";
   }
   
   moveDown() {
      //setInterval 함수가 실행되면 top이 600이 될 동안 계속 top을 계속 증가시킨다.
      this.intervalID = setInterval(()=>{
         this.alive = this.alive+2;
         this.enemy.style.top = this.alive+"px";
         if(this.alive>550) {
            this.die();
         }
         if( (document.querySelector('#hero').offsetLeft > this.enemy.offsetLeft-45 
            && document.querySelector('#hero').offsetLeft < this.enemy.offsetLeft + 45)
            && this.enemy.offsetTop === 500 ) {
               this.die();
         }
      },8);
   }
   die() {
      this.enemy.classList.add("die-enemy");
      clearInterval(this.intervalID);
      this.audio.currentTime = 0;
      this.audio.play();
      setTimeout(()=>{
         this.enemy.remove();
      },2000);
   }
}
