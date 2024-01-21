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
