
var beforePosition = document.documentElement.scrollTop

document.addEventListener('scroll', function() {

    var afterPosition = document.documentElement.scrollTop;
   
   
    if (afterPosition > 50) {

      if(beforePosition < afterPosition ){
        document.querySelector(".header").style.background='black';
        document.querySelector(".header").style.border='none';
        document.querySelector(".title_logo span").style.color='white';
        
      } else {
        document.querySelector(".header").style.background='white';
        document.querySelector(".title_logo span").style.color='black';
      }

    } else {
  
      document.querySelector(".header").style.background='white';
      document.querySelector(".title_logo span").style.color='black';
  
    }
    beforePosition = afterPosition;
});


// 600px 보다 크면 matches 가 false, 크면 true 가 되는 미디어 쿼리 리스트 생성


// document 가 미디어 쿼리를 충족시키는것에 대해 변화가 생기면 콘솔에 로깅한다
const changeHandler = () => {
  console.log(window.innerHeight);
  document.querySelector(".video > video").style.height=String(window.innerHeight)+"px";
};

// 600px 을 기준으로 document width 가 바뀔 때 마다 이벤트 핸들러를 호출한다
window.addEventListener("resize", changeHandler);




navOn = (index) => {
  li = document.querySelectorAll('.main_nav > li');
  console.log(index)

  sub = document.querySelectorAll('.sub_wrap > ul');
  for(i=0; i>sub.length; i++){
    sub[i].className = 'gnb_sub'
  }
  sub[index].className = "gnb_sub onNum";

  allLi = document.querySelectorAll('.onNum li');

  for(i=0;i<allLi.length;i++){

    allLi[i].style.width = String(Math.floor(100/allLi.length))+"%";
  }

  nav = document.querySelector('.gnb_sub_wrap');
  nav.className = 'gnb_sub_wrap on';
}

navOff = (index) => {
  nav = document.querySelector('.gnb_sub_wrap');
  nav.className = 'gnb_sub_wrap off';

  sub = document.querySelectorAll('.sub_wrap > ul');
  sub[index].className = "gnb_sub";
 
}