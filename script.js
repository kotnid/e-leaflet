var dropdown = document.getElementsByClassName("dropdown")[0];  
var lastScrollTime = 0;
var lastScrollY = 0;
var scrollSpeed = 0;
var arrow = document.getElementsByClassName("arrow")[0];  

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportHeight = window.innerHeight;
    var pages = Math.floor(scrollTop/viewportHeight+0.95);

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
    console.log(speed);
    // arrow.style.transform = "translateY(" + speed/5 +"vh)";
    scrollSpeed = speed;
    lastScrollTime = now;
    lastScrollY = event.pageY;
  });

