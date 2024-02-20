// const apilogin = 'https://0b01-113-53-150-169.ngrok-free.app/api/login'
// const apiregister = 'https://0b01-113-53-150-169.ngrok-free.app/api/register'

const apilogin = 'http://140.99.98.129:3000/api/login'
const apiregister = 'http://140.99.98.129:3000/api/register'
const check_email = 'http://140.99.98.129:3000/api/check_email'
const updatepass = 'http://140.99.98.129:3000/api/api/updatepass'

const btn_login = document.getElementById('loginpress')
// btn_login.style.backgroundColor = ''
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

const caPic = document.getElementById('')
// // js form rigister
// const loginregisterpass = document.querySelector("#loginregisterpass")

// Selecting HTML elements by their IDs
const name_rigister = document.querySelector('#name_rigister');
const lastname_res = document.querySelector('#lastname_res');
const phone_res = document.querySelector('#phone_res');
const email_res = document.querySelector('#email_res');
const insert_std = document.getElementById('stude_id');
const insert_nunmber = document.querySelector('#car_nunmber');
const insert_nunmber1 = document.querySelector('#car_nunmber1');

// Selecting form password elements by their IDs
const confirm_res = document.querySelector('#confirm_res');
const password_res = document.querySelector('#password_res');
const confirm_pass = document.querySelector('#confirm_pass');

const pass_email = document.querySelector('#pass_email');
const confirm_email = document.querySelector('#confirm_email');

const password_editpass = document.querySelector('#password_editpass')
const confirm_editpass = document.querySelector('#confirm_editpass')
const confirm_password = document.querySelector('#confirm_password')

function btn_login_2() {
    // console.log(userid_1.value)
    const uid = userid_1.value
    const ps = password_1.value
    // console.log(ps)
    send_data(uid, ps)
}
btn_login.onclick = btn_login_2

function btn_email_pass() {
    const pa_email = pass_email.value
    send_email(pa_email)
}
confirm_email.onclick = btn_email_pass


function btn_registerlogin() {
    // Declare variables and retrieve values from form elements
    let name_res = name_rigister.value;
    let last_res = lastname_res.value;
    let phonessrester = phone_res.value;
    let emailregister = email_res.value;
    let insert_student = insert_std.value;
    let insert_num = insert_nunmber.value;
    let insert_num1 = insert_nunmber1.value;
    let pass1 = password_res.value;
    let pass2 = confirm_pass.value;

    // Call the insert_data function with the retrieved values
    insert_data(name_res, last_res, phonessrester, emailregister, insert_student, insert_num, insert_num1, pass1, pass2);
}

// Attach btn_registerlogin function to the click event of confirm_res element
confirm_res.onclick = btn_registerlogin;


async function send_data(a, b) {
    try {
        var user = a;
        var password_1 = b;

        const response = await $.ajax(

            {
                type: 'post',
                url: apilogin,
                contentType: "application/json",
                headers: { "Authorization": localStorage.getItem('token') },
                data: JSON.stringify({ user: user, password_1: password_1 }),
            });

        // Assuming the response structure is like { "data": { "token": "...", "token_re": "...", "user_id": "..." }, "status": "success" }
        if (response && response.data && response.data.user_id) {
            const token = response.data;
            const refresh = response.data;
            Swal.fire({
                icon: "success",
                title: "ล็อกอินสำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                window.location.href = '/index.html';
                location.reload();
            }, 1000);
            // window.location.href = '/index.html';
            // $("div[class^=overlay_menu").addClass('open');
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('refresh', JSON.stringify(refresh));

            // console.log('Token:', token);
            // console.log('Refresh:', refresh);


        } else {
            // console.log("Login failed");
            // Handle failure as needed
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "โปรใส่อีเมล์หรือรหัสผ่านให้ถูก!",
            });
        }
    } catch (err) {
        // console.log("Unexpected error:", err);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "โปรใส่อีเมล์หรือรหัสผ่านให้ถูก!",
        });

    }
}

async function send_email(a) {
    try {
        var email = a;
        const response = await $.ajax(

            {
                type: 'post',
                url: check_email,
                contentType: "application/json",
                headers: { "Authorization": localStorage.getItem('token') },
                data: JSON.stringify({ email: email }),
            });

        // Assuming the response structure is like { "data": { "token": "...", "token_re": "...", "user_id": "..." }, "status": "success" }
        if (response && response.data && response.data.user_id) {
            // console.log(response.data.user_id)

            Swal.fire({
                icon: "success",
                title: "สำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                $("div[class^=overlay_passedit").addClass('open');
                // location.reload();
            }, 1500);
            // $("div[class^=overlay_passedit").addClass('open');

            updatapass12(response.data.user_id)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "โปรใส่อีเมล์ให้ถูก!",
            });
            // Handle failure as needed
        }
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "โปรใส่อีเมล์ให้ถูก!",
        });
        // Handle AJAX request errors
    }
}

function updatapass12(user_id) {
    $('#confirm_pass1').click(function () {

        const passw_edit = password_editpass.value
        const passw_edit1 = confirm_editpass.value
        if (passw_edit !== passw_edit1) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "โปรใส่รหัสผ่านให้เหมือนกัน",
            });
            return;
        }

        $.ajax({
            type: 'post',
            url: updatepass,
            contentType: "application/json",
            // headers: { "Authorization": localStorage.getItem('token') },
            data: JSON.stringify({ user_id: user_id, password: passw_edit }),

            success: function (response) {
                // console.log(response)
                if (response) {
                    const c = response.data;

                    Swal.fire({
                        icon: "success",
                        title: "เปลี่ยนรหัสผ่านแล้ว",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(function () {
                        closeOverlayAll();
                        location.reload();
                    }, 1500);
                } else {
                    console.log("ไม่ถูกต้อง", response.status, response.statusText);
                }
            },

            error: function (err) {
                if (err) {
                    console.log("ไม่ผ่าน", err)
                }
            }
        })
    })
}


//    * function insert api
//    * @author   audy
//    * @create   2024-01-31
//    * @update  
async function insert_data(a, b, c, d, s, y, z, p, passComfim) {
    try {
        var na = a;
        var lastname = b;
        var pho_ne = c;
        var emai_l = d;
        var st_id = s;
        var carnum1 = y;
        var carnum2 = z;
        var password = p;

        if (password !== passComfim) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "โปรใส่รหัสผ่านให้เหมือนกัน",
            });
            return;
        }

        $.ajax({
            type: 'post',
            url: apiregister,
            contentType: "application/json",
            headers: { "Authorization": localStorage.getItem('token') },
            data: JSON.stringify({
                Name: na,
                lastname: lastname,
                phone: pho_ne,
                email: emai_l,
                studentID: st_id,
                carint: carnum1,
                carcouty : carnum2,
                password: password
            }),
            success: function (response) {
                if (response && response.data) {
                    const token = response.data; // Adjust this based on your response structure
                    const refresh = response.data; // Adjust this based on your response structure

                    Swal.fire({
                        icon: "success",
                        title: "ลงทะบียนสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(function () {
                        closeOverlayAll();
                        location.reload();
                    }, 1500);

                    // console.log("ผ่าน");
                    // closeOverlayAll();

                    // Storing token and refresh in localStorage
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('refresh', JSON.stringify(refresh));
                }
            },
            error: function (err) {
                if (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "โปรดกรอกข้อมูลให้ครบถ้วน",
                    });
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
}

// async function updateprofile(a, passComfim1) {
//     try {
//         var password = a
//         if (password !== passComfim1) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "โปรใส่รหัสผ่านให้เหมือนกัน",
//             });
//             return;
//         }

//         alert("ถูกต้อง");
//         $.ajax({
//             type: 'post',
//             url: updatepass,
//             contentType: "application/json",
//             headers: { "Authorization": localStorage.getItem('token') },
//             data: JSON.stringify
//                 ({
//                     password: password,
//                 }),
//             success: function (response) {
//                 if (response) {
//                     c = response.data;

//                     console.log("ผ่าน");

//                     // Handle success as needed
//                     // $("div[class^=overlay_pass").addClass('open');
//                     $("div[class^=overlay_edit]").removeClass('open');

//                 } else {
//                     console.log("ไม่ผ่าน", response.status, response.statusText);
//                 }
//             },

//             error: function (err) {
//                 if (err) {
//                     console.log("ไม่ผ่าน", err)
//                 }
//             }
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }


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

$(".reset_pass1").on("click", function () {
    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_editemail]").addClass('open');
    }
});
$(".prssedit").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_editemail]").removeClass('open');
    }
});

$(".prss1").on("click", function () {

    var direction = "next1";

    if (direction === "next1") {
        $("div[class^=overlay_passedit]").removeClass('open');
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
                phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})/, '$1-$2');
            } else if (phoneNumber.length <= 10) {
                phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '$1-$2-$3');
            }
            else if (phoneNumber.length > 10) {
                phoneNumber = phoneNumber.slice(0, 10);
                phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '$1-$2-$3');
            }

        }

        // Update the input value
        input.value = phoneNumber;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    var phoneInput1 = document.getElementById('stude_id');

    // Attach input event listener to format phone number
    phoneInput1.addEventListener('input', function () {
        formatPhoneNumber(this);
    });

    function formatPhoneNumber(input) {
        // Remove non-numeric characters
        var phoneNumber1 = input.value.replace(/\D/g, '');

        // Apply the phone number format
        if (phoneNumber1.length > 0) {
            if (phoneNumber1.length <= 12) {
                phoneNumber1 = phoneNumber1.replace(/(\d{1,3})/, '$1');
            } else if (phoneNumber1.length <= 13) {
                phoneNumber1 = phoneNumber1.replace(/(\d{1,3})(\d{1,3})(\d{1,6})(\d{1,1})/, '$1$2$3-$4');
            } else if (phoneNumber1.length > 13) {
                phoneNumber1 = phoneNumber1.slice(0, 13);
                phoneNumber1 = phoneNumber1.replace(/(\d{1,3})(\d{1,3})(\d{1,6})(\d{1,1})/, '$1$2$3-$4');
            }
        }

        // Update the input value
        input.value = phoneNumber1;
    }
});
