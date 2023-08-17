document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.getElementsByClassName('accordion-item');
  
    for (var i = 0; i < accordionItems.length; i++) {
      var accordionItem = accordionItems[i];
      var accordionHeading = accordionItem.querySelector('.accordion-heading');
      var accordionContent = accordionItem.querySelector('.accordion-content');
      var accordionIcon = accordionItem.querySelector('.accordion-icon');
  
      accordionHeading.addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
        var content = this.nextElementSibling;
        var icon = this.querySelector('.accordion-icon');
        
        if (content.style.display === 'block') {
          content.style.display = 'none';
          icon.classList.remove('open');
        } else {
          content.style.display = 'block';
          icon.classList.add('open');
        }
      });
    }
  });

const change = document.getElementById("dark-color");

change.addEventListener("click", () => {
    document.body.classList.toggle("dark-color");

    if(document.body.classList.contains("dark-color")){
        change.src = "images/sun.png"
    }
    else{
        change.src = "images/imgbin-white-moon-in-the-night-sky-aTzr1pr44VqLsSx8iPUsckbgB-removebg-preview.png"
    }
})

const btn = document.getElementById("upp");

window.addEventListener("scroll", () => {
    if(pageYOffset > 600){
      btn.style.display = "block";
    }
    else{
      btn.style.display = "none";
    }
    
    btn.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior : "smooth"
        })
    })
})
