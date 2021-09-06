const year = document.querySelector('#currentYear');
const currentYear = new Date();
year.innerText = currentYear.getFullYear()

const header = document.getElementById("myDiv");
const btns = header.getElementsByClassName('nav-link');
for (var i =0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className +=  " active";
    })
}