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
        $("div[class^=overlay_menu").addClass('open');

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

$(".menu-item").on("click", function() {
    console.log("succ");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_img]").addClass('open');
    }
});
$(".prev3").on("click", function() {
    console.log("Hello");

    var direction = "next1"; 

    if (direction === "next1") {
        $("div[class^=overlay_img]").removeClass('open');
    }
});
