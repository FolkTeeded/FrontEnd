const btn_login = document.getElementById('loginpress')
btn_login.style.backgroundColor = ''
const userid_1 = document.getElementById('userid')
const password_1 = document.getElementById('password')

// js form edit 
const editprofile = document.querySelector('#btn_confirm')
const btn_name = document.querySelector('#edit_name')
const btn_lastname = document.querySelector('#edit_last')
const btn_StudentID = document.querySelector('#edit_Student_ID')
const btn_phone11 = document.querySelector('#edit_phone')
const date_ed = document.querySelector('#edit_date')
var sx_btn = document.querySelector('#sx_edit')
const picture__input1 = document.querySelector('#picture__input1')
const edit_nunmber = document.querySelector('#edit_nunmber')

// js form rigister
const loginregisterpass = document.querySelector("#loginregisterpass")
const name_rigister = document.querySelector('#name_rigister')
const lastname_res = document.querySelector('#lastname_res')
const phone_res = document.querySelector('#phone_res')
const email_res = document.querySelector('#email_res')
const type_res = document.querySelector('#type_res')
const number_car = document.querySelector('#number_car')
const color_car = document.querySelector('#color_car')

// js form password
const confirm_res = document.querySelector('#confirm_res')
const password_res = document.querySelector('#password_res')
const confirm_pass = document.querySelector('#confirm_pass')


function btn_login_2() {
    console.log(userid_1.value)
    const uid = userid_1.value
    const ps = password_1.value
    console.log(ps)
}

btn_login.onclick = btn_login_2

function btn_editprofile() {
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
    sx_ed = sx_btn.value
    console.log(sx_btn.value)
    btn_img1 = picture__input1.value
    console.log(picture__input1.value)
    btn_nunmber = edit_nunmber.value
    console.log(edit_nunmber.value)

}
editprofile.onclick = btn_editprofile

function btn_registerlogin() {
    name_res = name_rigister.value
    console.log(name_rigister.value)
    last_res = lastname_res.value
    console.log(lastname_res.value)
    phones_res = phone_res.value
    console.log(phone_res.value)
    email_ress = email_res.value
    console.log(email_res.value)
    num_car = number_car.value
    console.log(number_car.value)
    car_type = type_res.value
    console.log(car_type)
    color_cars = color_car.value
    console.log(color_car.value)
}

loginregisterpass.onclick = btn_registerlogin

function res_confirm() {
    pass1 = password_res.value
    console.log(pass1)
    pass2 = confirm_pass.value
    console.log(pass2)

    if (pass1 == pass2) {
        alert("ถูกต้อง")
        closeOverlayAll()
    }
    else {
        alert("ระบุใหม่อีกครั้ง")
    }
}
confirm_res.onclick = res_confirm

    var obj_data = {
        user : userid_1,
        password_1:password_1
    }
    // send_data()
        async function send_data(){
            try{
                $.ajax({
                    type:'post',
                    url:`/resister`,
                    data:obj_data,
                    success:function(response){
                        if(response){
                            console.log("ผ่าน")
                        }
                        else{
                            console.log("ไม่ผ่าน")
                        }
                    },
                     error:function(err){
                        if(err){
                            console.log("ไม่ผ่าน",err)
                        }
                     }
                })
            }catch(err){
                console.log(err)
            }
        }


$("#loginpress").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_menu").addClass('open');

    }
});

$(".login_register").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_register]").addClass('open');

    }
});
$(".prev").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_register]").removeClass('open');
    }
});


$(".login_pass").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_pass]").addClass('open');
    }
});
$(".prev1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_pass]").removeClass('open');
    }
});

$(".img1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_img]").addClass('open');
    }
});
$(".prev_img").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_img]").removeClass('open');
    }
});

$(".edit1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_edit]").addClass('open');
    }
});
$(".prev_edit").on("click", function () {
    console.log("Hello");

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_edit]").removeClass('open');
    }
});

$(".supp1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_supp]").addClass('open');
    }
});
$(".prev_supp").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_supp]").removeClass('open');
    }
});

$(".pers1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_personal]").addClass('open');
    }
});
$(".prev_personal").on("click", function () {

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
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Select file";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");
            var sdf = document.querySelector('.img_pic');

            // Use classList.add to add one or more classes
            sdf.classList.add('img_pic', 'new');
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});


//  js import imgprofile 
const inputFile1 = document.querySelector("#picture__input1");
const pictureImage1 = document.querySelector(".picture__image1");
const pictureImageTxt1 = "Select file";
pictureImage1.innerHTML = pictureImageTxt1;

inputFile1.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");
            var sdf = document.querySelector('.img_pic1');

            // Use classList.add to add one or more classes
            sdf.classList.add('img_pic1', 'new');
            pictureImage1.innerHTML = "";
            pictureImage1.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage1.innerHTML = pictureImageTxt;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    var phoneInput = document.getElementById('phone_res');

    // Attach input event listener to format phone number
    phoneInput.addEventListener('input', function () {
      formatPhoneNumber(this);
    });
    function formatPhoneNumber(input) {
      // Remove non-numeric characters
      var phoneNumber = input.value.replace(/\D/g, '');
      // Apply the phone number format
      if (phoneNumber.length > 0) {
        if (phoneNumber.length <= 3) {
          phoneNumber = phoneNumber.replace(/(\d{1,3})/, '$1');
        } else if (phoneNumber.length <= 6) {
          phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})/, '$1 $2');
        } else {
          phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '$1 $2 $3');
        }
      }

      // Update the input value
      input.value = phoneNumber;
    }
  });