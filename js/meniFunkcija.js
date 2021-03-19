const toggleIcon=document.querySelector(".toggle");
const check=document.getElementById("check-class");

toggleIcon.addEventListener('click',function(){ 
    if (check.style.display === "none") {
        check.style.display = "block";
    } else {
        check.style.display = "none";
    }
})