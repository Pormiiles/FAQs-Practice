window.onload = function() {
    let sections = document.querySelectorAll('.child-section2, .child-section3, .child-section4, .child-section5');
    sections.forEach(function(section) {
      section.querySelector('img').addEventListener('click', function() {
        let paragraph = section.nextElementSibling;
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
          paragraph.style.display = 'block';
          this.src = "assets/images/icon-minus.svg";
        } else {
          paragraph.style.display = 'none';
          this.src = "assets/images/icon-plus.svg";
        }
      });
    });
}