
const search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery');


// JavaScript searchbar 
function search_photo() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('photosearch');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="gallery-item";                 
        }
    }
}
