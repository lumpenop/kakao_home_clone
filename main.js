
document.addEventListener('scroll', function() {

    var a = document.documentElement.scrollTop;
    console.log(a)
   
    if (a> 50) {

        document.querySelector(".header").style.background='black';
        document.querySelector(".title_logo span").style.color='white';
    
      } else {
    
        document.querySelector(".header").style.background='white';
        document.querySelector(".title_logo span").style.color='black';
    
      }
});

