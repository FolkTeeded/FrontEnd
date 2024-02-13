// const apilogin = 'https://0b01-113-53-150-169.ngrok-free.app/api/login'
// const apiregister = 'https://0b01-113-53-150-169.ngrok-free.app/api/register'

const apilogin = 'http://localhost:3000/api/login'
const apiregister = 'http://localhost:3000/api/register'



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

// Selecting form password elements by their IDs
const confirm_res = document.querySelector('#confirm_res');
const password_res = document.querySelector('#password_res');
const confirm_pass = document.querySelector('#confirm_pass');



function btn_login_2() {
    console.log(userid_1.value)
    const uid = userid_1.value
    const ps = password_1.value
    console.log(ps)
    send_data(uid, ps)
}

btn_login.onclick = btn_login_2

function btn_registerlogin() {
    // Declare variables and retrieve values from form elements
    let name_res = name_rigister.value;
    let last_res = lastname_res.value;
    let phonessrester = phone_res.value;
    let emailregister = email_res.value;
    let pass1 = password_res.value;
    let pass2 = confirm_pass.value;

    // Call the insert_data function with the retrieved values
    insert_data(name_res, last_res, phonessrester, emailregister, pass1, pass2);
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
            window.location.href = '/index.html';
            // $("div[class^=overlay_menu").addClass('open');
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('refresh', JSON.stringify(refresh));

            console.log('Token:', token);
            console.log('Refresh:', refresh);


        } else {
            console.log("Login failed");
            // Handle failure as needed
        }
    } catch (err) {
        console.log("Unexpected error:", err);
        // Handle AJAX request errors
    }
}

//    * function insert api
//    * @author   audy
//    * @create   2024-01-31
//    * @update  
async function insert_data(a, b, c, d, p, passComfim) {
    try {
        var na = a;
        var lastname = b;
        var pho_ne = c;
        var emai_l = d;
        var password = p;

        if (password !== passComfim) {
            alert("รหัสไม่ถูกต้อง");
            return;
        }

        alert("ถูกต้อง");

        $.ajax({
            type: 'post',
            url: apiregister,
            contentType: "application/json",
            headers: { "Authorization": localStorage.getItem('token') },
            data: JSON.stringify({
                Name: na, lastname: lastname, phone: pho_ne, email: emai_l, password: password
            }),
            success: function (response) {
                if (response && response.data) {
                    const token = response.data; // Adjust this based on your response structure
                    const refresh = response.data; // Adjust this based on your response structure

                    console.log("ผ่าน");
                    closeOverlayAll();

                    // Storing token and refresh in localStorage
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('refresh', JSON.stringify(refresh));

                    console.log('Token:', token);
                    console.log('Refresh:', refresh);
                } else {
                    console.log("ไม่ผ่าน");
                    // Handle failure as needed
                }
            },
            error: function (err) {
                if (err) {
                    console.log("ไม่ผ่าน", err);
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
}


// async function insert_car(a, b, c, d, e) {
//     try {
//         console.log(a, b, c, d, e)
//         var cartype = a
//         var colorcar = b
//         var btn_nunmber = c
//         var btn_nunmber1 = d
//         var btn_nunmber2 = e

//         $.ajax({
//             type: 'post',
//             url: `http://localhost:3000/api/typecar`,
//             contentType: "application/json",
//             data: JSON.stringify({ cartype: cartype, colorcar: colorcar, btnnunmber: btn_nunmber, btnnunmber1: btn_nunmber1, btnnunmber2: btn_nunmber2 }),
//             success: function (response) {
//                 if (response) {
//                     c = response.data;
//                     console.log(c)
//                     console.log("ผ่าน");
//                     // Handle success as needed
//                     // $("div[class^=overlay_pass").addClass('open');
//                     $("div[class^=overlay_edit]").removeClass('open');
//                 } else {
//                     console.log("ไม่ผ่าน");
//                     // Handle failure as needed
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

// async function insert_profile() {
//     try {

//         $.ajax({
//             type: 'post',
//             url: `http://localhost:3000/api/insertprofile`,
//             contentType: "application/json",
//             data: JSON.stringify({}),
//             success: function (response) {
//                 if (response) {
//                     console.log("ผ่าน");
//                 } else {
//                     console.log("ไม่ผ่าน");
//                     // Handle failure as needed
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

// const updateUser = async (user_id, updatedName, updatedLastName, newStudentID,  updatedPhone) => {
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 url: `http://localhost:3000/api/updateUser`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 user_id: user_id,
//                 updatedName: updatedName,
//                 updatedLastName: updatedLastName,
//                 newStudentID: newStudentID,
//                 updatedPhone: updatedPhone,
//             }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             console.log(data.msg); // Successful update
//         } else {
//             console.error(data.msg); // Failed update
//         }
//     } catch (error) {
//         console.error('Error updating user:', error);
//     }
// };


// $("#loginpress").on("click", function () {

//     var direction = "next1";

//     if (direction === "next1") {
//         $("div[class^=overlay_menu").addClass('open');

//     }
// });

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

// function triggerFileInput() {
//     document.querySelector('.scanblue input').click();
// }

// function displaySelectedFile(input) {
//     const file = input.files[0];
//     if (file) {
//         // Check file size (in bytes)
//         const fileSize = file.size;
//         // Limit the file size to, for example, 1 MB
//         const maxSize = 5 * 1024 * 1024; // 1 MB in bytes

//         if (fileSize > maxSize) {
//             alert('File size exceeds the allowed limit.');
//             // Optionally clear the selected file
//             input.value = '';
//         } else {
//             // Convert file to base64
//             const reader = new FileReader();
//             reader.onloadend = function () {
//                 const base64String = reader.result;
//                 // Do something with the base64 string (e.g., send it to the server)
//                 alert('Base64 representation: ' + base64String);
//                 console.log(base64String)
//             };
//             reader.readAsDataURL(file);
//         }
//     }
// }