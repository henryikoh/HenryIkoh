<template>
  <div class="breathe">
    <div class="container" id="container">
      <div class="circle"></div>

      <div class="triangle">
        <svg  viewBox="0 0 134 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8375 11.2928C56.931 -2.65178 77.069 -2.65182 85.1625 11.2927L130.965 90.2084C139.091 104.208 128.99 121.75 112.803 121.75H21.1969C5.00976 121.75 -5.09116 104.208 3.03448 90.2084L48.8375 11.2928Z" fill="#FDFFFF"/>
</svg>

      </div>

      <div class="pointer-container">
        <span class="pointer"></span>
      </div>

      <div class="gradient-circle"></div>
    </div>
    <p>Hello Human, Remember to breathe</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
   if(process.browser){
     this.Animate()
   }
  },methods:{
    Animate() {
        const container = document.getElementById('container');


// const totalTime = 5000;
// const breatheTime = (totalTime / 2);
// const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  
  container.className = 'container grow';

  setTimeout(() => {
    

    
     
      container.className = 'container shrink';
   
  }, 2400);
}

setInterval(breathAnimation, 4400);

    }
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  .breathe{
     padding: 0px 40px;
    /* align-self: flex-end; */
    margin-top: 60px;
}
.breathe p{
   font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #C4C4C4;
    width: 75%;
    margin: auto;
    margin-top: 49PX;
}
.container {
       display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 160px;
    width: 160px;
    position: relative;
    transform: scale(1);
}

.circle {
    background-color: var(--primary-color);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.triangle{
      margin-bottom: 8px;
    /* font-size: 41px; */
    width: 70px;
}
.gradient-circle {
  position: absolute;
    background: var(--secondary-color);
    height: 185px;
    width: 185px;
    z-index: -2;
    border-radius: 50%;
}

.pointer {
  background: var(--secondary-color);
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: block;
}

.pointer-container {
        position: absolute;
    top: -50px;
    left: 70px;
    width: 20px;
    height: 130px;
    -webkit-animation: rotate 4.4s linear forwards infinite;
    animation: rotate 4.4s linear forwards infinite;
    transform-origin: bottom center;

}

}
@media screen and (min-width: 768px) {
.breathe{
      padding: 0px 40px;
    align-self: flex-end;
}
.breathe p{
   font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #C4C4C4;
    width: 75%;
    margin: auto;
    margin-top: 105PX;
}
.container {
      display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 210px;
    width: 210px;
    position: relative;
    transform: scale(1);
}

.circle {
        background-color: var(--primary-color);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.triangle{
  margin-bottom: 15px;
}
.gradient-circle {
  position: absolute;
  background: var(--secondary-color);
    height: 250px;
    width: 250px;
    z-index: -2;
    border-radius: 50%;
}

.pointer {
  background: var(--secondary-color);
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: block;
}

.pointer-container {
      position: absolute;
    top: -65px;
    left: 95px;
    width: 20px;
    height: 170px;
    animation: rotate 4.4s linear forwards infinite;
    transform-origin: bottom center;
}
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  60%{
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container.grow {
  animation: grow 2.4s linear forwards;
}

@keyframes grow {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
}

.container.shrink {
  animation: shrink 2s linear forwards;
}

@keyframes shrink {
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
}



</style>