class Hero {
   constructor() {
      this.selector = document.querySelector('#hero');
      this.position = parseInt(window.getComputedStyle(this.selector).left);
      this.min = 27;
      this.max = 773;
      window.addEventListener('keydown',(event)=>{
         if(event.key==="ArrowLeft" && this.position>=this.min) {
            this.position = this.position-10;
            this.selector.classList.value="left-face";
         }else if(event.key==="ArrowRight" && this.position<=this.max) {
            this.position = this.position+10;
            this.selector.classList.value="right-face";
         }else if(event.key==="ArrowDown") {
            this.selector.classList.value="front-face";
         }else if(event.key==="ArrowUp") {
            this.selector.classList.value="back-face";
         }
         this.selector.style.left = this.position+"px";
      });
   }
}
