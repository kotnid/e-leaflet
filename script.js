var dropdown = document.getElementsByClassName("dropdown")[0];  
var lastScrollTime = 0;
var lastScrollY = 0;
var scrollSpeed = 0;
var arrow = document.getElementsByClassName("arrow")[0];  

function calc(inp){
    return (inp*104.5/0.8)-100;
}

function calc2(inp){
    return (inp*104.5/0.6)-100;
}

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportHeight = window.innerHeight;
    var pages = Math.floor(scrollTop/viewportHeight+0.95);
    var pages2 = scrollTop/viewportHeight+0.95;

    var swipe = document.querySelector('.swipe');
    var swipeText = document.querySelector('.swipe-text');
    var swipeTextColor = window.getComputedStyle(swipeText).getPropertyValue('color');

    if(pages%2==0){
        if(swipeTextColor == "rgb(153, 153, 153)") {
            swipeText.style.color = "#616161";
        }
    }else{
        if(swipeTextColor == "rgb(97, 97, 97)") {
            swipeText.style.color = "#999999";
        }
    }

    
    if(pages != 4 && swipe.classList.contains('hidden')){
        swipe.classList.remove('hidden');
    }

    if(pages == 4 && !(swipe.classList.contains('hidden'))){
        swipe.classList.add('hidden');
    }

    var titles = document.getElementsByClassName("title");    
    var pg = document.getElementsByClassName("page"); 
    console.log(pages2,pages);

    if(pages%2==0){
        if(pages2-pages <= 0.8)titles[pages].style.marginLeft = calc(pages2-pages)+"vw";
        else titles[pages].style.marginLeft = "4.5vw";
        
        var children = pg[pages].querySelectorAll("div:not(.title)");
        for (var i = 0; i < children.length; i++) {
            if(children[i].classList.contains("box") || children[i].classList.contains("dropdown")){
                if(pages2-pages <= 0.95)children[i].style.marginLeft = calc2(pages2-pages-0.35)-4.5+"vw";
                else children[i].style.marginLeft = "0vw";
            }else{
                if(pages2-pages <= 0.95)children[i].style.marginLeft = calc2(pages2-pages-0.35)+"vw";
                else children[i].style.marginLeft = "4.5vw";
            }
        }

        
    }else{
        if(pages2-pages <= 0.8)titles[pages].style.marginRight = calc(pages2-pages)+"vw";
        else titles[pages].style.marginRight = "4.5vw";

        var children = pg[pages].querySelectorAll("div:not(.title)");
        for (var i = 0; i < children.length; i++) {
            if(children[i].classList.contains("box") || children[i].classList.contains("dropdown")){
                if(pages2-pages <= 0.95)children[i].style.marginRight = calc2(pages2-pages-0.35)-4.5+"vw";
                else children[i].style.marginRight = "0vw";
            }else{
                if(pages2-pages <= 0.95)children[i].style.marginRight = calc2(pages2-pages-0.35)+"vw";
                else children[i].style.marginRight = "4.5vw";
            }
        }
    }

  });

for(var i=0 ; i<dropdown.childNodes.length; i++){
    var box = dropdown.childNodes[i];
    if(box.nodeType != Node.ELEMENT_NODE)continue;

    box.addEventListener("click", function(){
        var dropdownContent = this.querySelector('.box-content');
        collapseAll(this);
        if (dropdownContent.classList.contains('hidden')) {
            dropdownContent.classList.remove('hidden');
            this.style.height = '10.5vh';
          } else {
            dropdownContent.classList.add('hidden');
            this.style.height = '5.25vh';
          }
    })
}

function collapseAll(crt){
    for(var i=0 ; i<dropdown.childNodes.length; i++){
        var box = dropdown.childNodes[i];
        if(box.nodeType != Node.ELEMENT_NODE)continue;
        if(box == crt)continue;

        var dropdownContent = box.querySelector('.box-content');
        dropdownContent.classList.add('hidden');
        box.style.height = '5.25vh';
    }
}

window.addEventListener('wheel', function(event) {
    var now = Date.now();
    var timeDiff = now - lastScrollTime;
    var distance = event.pageY - lastScrollY;
    var speed = Math.abs(distance / timeDiff);
    // console.log(speed);
    // arrow.style.transform = "translateY(" + speed/5 +"vh)";
    scrollSpeed = speed;
    lastScrollTime = now;
    lastScrollY = event.pageY;
  });

