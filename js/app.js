
//const search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery');


// JavaScript searchbar 

document.getElementById("searchbar").addEventListener("keyup", search_photo);

function search_photo() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    console.log(input);
    let x = document.getElementsByClassName('photosearch');
    
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="grid";              
        }
    }
}
