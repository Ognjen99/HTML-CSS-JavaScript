window.addEventListener('resize',update);
var x=window.document.querySelector(".dim");
update();

function update(){
    x.innerHTML= window.innerHeight+"x"+window.innerWidth;
}
