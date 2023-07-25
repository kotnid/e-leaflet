var dropdown = document.getElementsByClassName("dropdown")[0];

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportHeight = window.innerHeight;
    var pages = Math.floor(scrollTop/viewportHeight+0.95);

    var swipeText = document.querySelector('.swipe-text');
    var swipeTextColor = window.getComputedStyle(swipeText).getPropertyValue('color');
    console.log(swipeTextColor);

    if(pages%2==0){
        if(swipeTextColor == "rgb(153, 153, 153)") {
            swipeText.style.color = "#616161";
        }
    }else{
        if(swipeTextColor == "rgb(97, 97, 97)") {
            swipeText.style.color = "#999999";
        }
    }
  });

for(var i=0 ; i<dropdown.childNodes.length; i++){
    var box = dropdown.childNodes[i];
    if(box.nodeType != Node.ELEMENT_NODE)continue;

    box.addEventListener("click", function(){
        var dropdownContent = this.querySelector('.box-content');
        collapseAll(this);
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            this.style.height = "5.25vh";
        } else {
            dropdownContent.style.display = "block";
            this.style.height = "10.5vh";
        }
    })
}

function collapseAll(crt){
    for(var i=0 ; i<dropdown.childNodes.length; i++){
        var box = dropdown.childNodes[i];
        if(box.nodeType != Node.ELEMENT_NODE)continue;
        if(box == crt)continue;

        var dropdownContent = box.querySelector('.box-content');
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            box.style.height = "5.25vh";
        }
    }
}

