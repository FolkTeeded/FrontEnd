const btn_login = document.getElementById('loginpress')
btn_login.style.backgroundColor = ''
const userid_1 = document.getElementById('userid')
const password_1 = document.getElementById('password')

const editprofile = document.querySelector('#btn_confirm')
const btn_name = document.querySelector('#edit_name')
const btn_lastname  = document.querySelector('#edit_last')
const btn_StudentID = document.querySelector('#edit_Student_ID')
const btn_phone11 = document.querySelector('#edit_phone')
const date_ed = document.querySelector('#edit_date')
var sx_btn = document.querySelector('#sx_edit')


function btn_login_2 (){
    console.log(userid_1.value)
const uid = userid_1.value
const ps = password_1.value
    console.log(ps)
}

btn_login.onclick = btn_login_2

function btn_editprofile(){
    name_edit = btn_name.value
    console.log(btn_name.value)
    ed_lastname = btn_lastname.value
    console.log(btn_lastname.value)
    dt_Student = btn_StudentID.value
    console.log(btn_StudentID.value)
    dt_phone = btn_phone11.value
    console.log(btn_phone11.value)
    dt_date = date_ed.value
    console.log(date_ed.value)
    sx_ed = sx_btn
    console.log(sx_ed)

}
editprofile.onclick = btn_editprofile



$("#loginpress").on("click", function() {
    
    var direction = "next1"; 
    
    if (direction === "next1") {
        $("div[class^=overlay_menu").addClass('open');

    }
});

$(".login_register").on("click", function() {
    
    var direction = "next1"; 
    
    if (direction === "next1") {
        $("div[class^=overlay_register]").addClass('open');

    }
});
$(".prev").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_register]").removeClass('open');
    }
});


$(".login_pass").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_pass]").addClass('open');
    }
});
$(".prev1").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_pass]").removeClass('open');
    }
});

$(".img1").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_img]").addClass('open');
    }
});
$(".prev_img").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_img]").removeClass('open');
    }
});

$(".edit1").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_edit]").addClass('open');
    }
});
$(".prev_edit").on("click", function() {
    console.log("Hello");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_edit]").removeClass('open');
    }
});

$(".supp1").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_supp]").addClass('open');
    }
});
$(".prev_supp").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_supp]").removeClass('open');
    }
});

$(".pers1").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_personal]").addClass('open');
    }
});
$(".prev_personal").on("click", function() {

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_personal]").removeClass('open');
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

  
  