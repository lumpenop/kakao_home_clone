
var beforePosition = document.documentElement.scrollTop

document.addEventListener('scroll', function() {

    var afterPosition = document.documentElement.scrollTop;
   
   
    if (afterPosition > 50) {

      if(beforePosition < afterPosition ){
        document.querySelector(".header").style.background='black';
        
        document.querySelector(".title_logo span").style.color='white';
        document.querySelector(".header").style.zIndex = 0;

      } else {
        document.querySelector(".header").style.background='white';
        document.querySelector(".title_logo span").style.color='black';
        document.querySelector(".header").style.zIndex = 1;
      }

    } else {
  
      document.querySelector(".header").style.background='white';
      document.querySelector(".title_logo span").style.color='black';
      
      document.querySelector(".header").style.zIndex = 1;
  
    }
    beforePosition = afterPosition;
});



const changeHandler = () => {
  console.log(window.innerHeight);
  document.querySelector(".video > video").style.height=String(window.innerHeight)+"px";
};

window.addEventListener("resize", changeHandler);



beforeIndex = 0;

navOn = (index) => {

  if(index==undefined){
    index=beforeIndex;
  } 

  li = document.querySelectorAll('.main_nav > li');
  console.log(index)

  sub = document.querySelectorAll('.sub_wrap > ul');
  for(i=0; i>sub.length; i++){
    sub[i].className = 'gnb_sub';
  }
  sub[index].className = "gnb_sub onNum";

  allLi = document.querySelectorAll('.onNum li');

  for(i=0;i<allLi.length;i++){

    allLi[i].style.width = String(Math.floor(100/allLi.length))+"%";
  }

  nav = document.querySelector('.gnb_sub_wrap');
  nav.className = 'gnb_sub_wrap on';

  beforeIndex = index;

}

navOff = (index) => {
  if(index==undefined){
    index=beforeIndex;
  } 

  sub = document.querySelectorAll('.sub_wrap > ul');
  sub[index].className = "gnb_sub";

  nav = document.querySelector('.gnb_sub_wrap');
  nav.className = 'gnb_sub_wrap off';

  beforeIndex = index;
}

const options = {
  threshold : [0, 0.5, 1]
}

const io = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
     
    if (entry.intersectionRatio >= 1){
          entry.target.play();
    } else if (entry.intersectionRatio >0.3) {
        entry.target.pause();
       
    }
    });},options);

box = document.querySelector('.card_body > div > div > video');
io.observe(box);

