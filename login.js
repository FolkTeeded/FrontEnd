const btn_login = document.getElementById('loginpress')
btn_login.style.backgroundColor = ''
const userid_1 = document.getElementById('userid')
const password_1 = document.getElementById('password')

function btn_login_2 (){
    console.log(userid_1.value)
const uid = userid_1.value
const ps = password_1.value
    console.log(ps)
}

btn_login.onclick = btn_login_2



$("#loginpress").on("click", function() {
    console.log("dsfdsf");
    
    var direction = "next1"; 
    
    if (direction === "next1") {
        $("div[class^=overlay]").addClass('open');

    }
});

$(".login_register").on("click", function() {
    console.log("Hello");
    
    var direction = "next1"; 
    
    if (direction === "next1") {
        $("div[class^=overlay_register]").addClass('open');

    }
});
$(".prev").on("click", function() {
    console.log("Hello");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay]").removeClass('open');
    }
});


$(".login_pass").on("click", function() {
    console.log("Hello");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_pass]").addClass('open');
    }
});
$(".prev1").on("click", function() {
    console.log("Hello");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_pass]").removeClass('open');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const openOverlayBtn = document.getElementById('openOverlayBtn');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');
    const overlay = document.getElementById('overlay');
  
    openOverlayBtn.addEventListener('click', function () {
      overlay.style.left = '0'; /* Slide in from the left */
    });
  
    closeOverlayBtn.addEventListener('click', function () {
      overlay.style.left = '-100%'; /* Slide out to the left */
    });
  
    // Close overlay if user clicks outside the content
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.style.left = '-100%';
      }
    });
  });
  