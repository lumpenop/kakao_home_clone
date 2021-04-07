
var beforePosition = document.documentElement.scrollTop

document.addEventListener('scroll', function() {

    var afterPosition = document.documentElement.scrollTop;
   
   
    if (afterPosition > 50) {
      document.querySelector('.side_area input').checked = false;
      
      if(beforePosition < afterPosition ){
        document.querySelector(".header").style.background='black';
        
        document.querySelector(".title_logo span").style.color='white';
        document.querySelector(".header").style.zIndex = 1;
        ham = document.querySelectorAll(".side_area span")
        document.querySelector('.side_area input').checked = false;
        
        for (i=0; i<ham.length; i++){
          ham[i].style.background='white';
        }

      } else {
        document.querySelector('.side_area input').checked = false;
        document.querySelector(".header").style.background='white';
        
        document.querySelector(".title_logo span").style.color='black';
        document.querySelector(".header").style.zIndex = 9999;
        ham = document.querySelectorAll(".side_area span")
        for (i=0; i<ham.length; i++){
          ham[i].style.background='black';
        }
      }

    } else {
      document.querySelector('.side_area input').checked = false;
      document.querySelector(".header").style.background='white';
      document.querySelector(".title_logo span").style.color='black';
      
      document.querySelector(".header").style.zIndex = 9999;
  
    }
    beforePosition = afterPosition;
});



const changeHandler = () => {
  console.log(window.innerHeight);
  document.querySelector(".video > video").style.height=String(window.innerHeight)+"px";
  document.querySelector("#side_flag").checked = false;
};

window.addEventListener("resize", changeHandler);



beforeIndex = 0;

navOn = (index) => {

  if(index==undefined){
    index=beforeIndex;
  } 

  li = document.querySelectorAll('.main_nav > li');
  

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
  hov = document.querySelectorAll('.hov');
  
  hov[index].style.borderBottom = '1px solid black';
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

  hov = document.querySelectorAll('.hov');
  
  hov[index].style.borderBottom = 'none';

  beforeIndex = index;
}

const options = {
  threshold : [0, 0.5, 1]
}

const io = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
     
    if (entry.intersectionRatio >= 1){
          entry.target.play();
    } else if (entry.intersectionRatio < 1 && entry.intersectionRatio >= 0.4){
      entry.target.pause();
    } else{
        entry.target.load();
    }
    });},options);

box = document.querySelector('.card_body >   video');
io.observe(box);


blackHead = ()  => {
  if(document.querySelector('.side_area input').checked){
    console.log("checked")
    document.querySelector('.header').style.background = 'black';
   document.querySelector('.title_logo a > span').style.color = 'white';
   span = document.querySelectorAll('.side_area span')
    for(i=0; i < span.length; i++){
      span[i].style.background = 'white';
    }
    document.querySelector('.header').style.zIndex = 9999;
  } else {
    console.log("un checked")
    document.querySelector('.header').style.background = 'white';
    document.querySelector('.title_logo a > span').style.color = 'black';
    span = document.querySelectorAll('.side_area span')
    for(i=0; i < span.length; i++){
      span[i].style.background = 'black';
    }

  }
}


let index = 0;
beforeCopy = '';
liCopy = document.querySelectorAll('.ico_corp')

for(i=0;i<liCopy.length;i++){
  
    liCopy[i].parentElement.setAttribute('onclick','copyOn(this);');
}

document.querySelector('.tit_relation').setAttribute('onclick','copyRelation();');

function copyOn(copyA){
  

  for(i=0; i < liCopy.length; i++){
    if (liCopy[i].parentElement==copyA){
      index = i-1;
    }  
  }
  
  ul = document.querySelectorAll('.info_copyright li ul')
  
  for(i=0; i < ul.length; i++){
    if(index!=i){
      ul[i].className = 'list_relation';
    }
  }
  document.querySelector('.relation_list').className='relation_list';
  
  if(ul[index].className=='list_relation'){
    ul[index].className = 'list_relation relation_on';
 
  } else {
    ul[index].className = 'list_relation';
  
  }
  
  
}



copyRelation = () => {
  ul = document.querySelector('.relation_list')
  
  infoCopy = document.querySelectorAll('.info_copyright li ul')
  for(i=0; i < infoCopy.length; i++){
 
    infoCopy[i].className = 'list_relation';
  
  }


  if(ul.className=='relation_list'){
    ul.className='relation_list relation_on'
  } else {
    ul.className='relation_list'
  }
}
