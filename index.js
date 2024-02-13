// const apiupdateprofile = 'https://0b01-113-53-150-169.ngrok-free.app/api/updateprofile'
// const apitypecar = 'https://0b01-113-53-150-169.ngrok-free.app/api/typecar'

const apiupdateprofile = 'http://localhost:3000/api/updateprofile'
const apitypecar = 'http://localhost:3000/api/typecar'

function img_select(callback) {
      return new Promise((resolve, reject) => {
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

                              sdf.classList.add('img_pic1', 'new');
                              pictureImage1.innerHTML = "";
                              pictureImage1.appendChild(img);

                              base64String = readerTarget.result.split(',')[1];
                              console.log('Base64 String:', base64String);

                              if (typeof callback === 'function') {
                                    callback(base64String);
                                    resolve(inputFile1);
                              }
                        });

                        reader.readAsDataURL(file);
                  } else {
                        pictureImage1.innerHTML = pictureImageTxt1;
                  }
            });
      });
}

// Usage
let base64String;

img_select(function (base64StringResult) {
      // Now base64String is available
      base64String = base64StringResult;
})


const editname = document.querySelector('#edit_name')
const edit_last1 = document.querySelector('#edit_last')
const edit_std = document.querySelector('#edit_Student_ID')
const edit_num = document.querySelector('#edit_phone')
const edit_date1 = document.querySelector('#edit_date')
const gander_edit = document.querySelector('#gander_edit')
// const edit_img = img_select();

const btn_confirm = document.querySelector('#btn_confirm')
const edit_nunmber = document.querySelector('#edit_nunmber')
const edit_nunmber1 = document.querySelector('#edit_nunmber1')
const edit_nunmber2 = document.querySelector('#edit_nunmber2')
const type_res = document.querySelector('#type_res')
const colorcar = document.querySelector('#color_car')
// js form rigister
const loginregisterpass = document.querySelector("#loginregisterpass")
const name_rigister = document.querySelector('#name_rigister')
const lastname_res = document.querySelector('#lastname_res')
const phone_res = document.querySelector('#phone_res')
const email_res = document.querySelector('#email_res')
function btn_editprofile() {
      // Capture values from form elements
      newName = editname.value;
      newLastName = edit_last1.value;
      newStudentID = edit_std.value;
      newPhone = edit_num.value;
      dt_date = edit_date1.value;
      gander_e = gander_edit.value;

      // Log the captured values to the console
      console.log(newName);
      console.log(newLastName);
      console.log(newStudentID);
      console.log(newPhone);
      console.log(dt_date);
      console.log(gander_e);

      // Capture the Base64 string from the img_select function
      btn_img1 = base64String
      console.log(btn_img1);

      // Call the updateprofile function with captured values
      updateprofile(newName, newLastName, newStudentID, newPhone, dt_date, gander_e, btn_img1);
}
// Call img_select with a callback function


function btn_carlogin() {
      car_type = type_res.value
      color_car = colorcar.value
      btn_nunmber = edit_nunmber.value
      btn_nunmber1 = edit_nunmber1.value
      btn_nunmber2 = edit_nunmber2.value
      insert_car(car_type, color_car, btn_nunmber, btn_nunmber1, btn_nunmber2)
}
// function btn_confirm_edit(){

//       btn_confirm.onclick = btn_carlogin() = btn_editprofile()
// }
btn_confirm.onclick = function () {
      btn_carlogin();
      btn_editprofile();
};
async function updateprofile(a, b, c, d, e, f, g) {
      try {
            console.log(a, b, c, d, e)
            var newName = a
            var newLastName = b
            var newStudentID = c
            var newPhone = d
            var dt_date = e
            var gander_e = f
            var btn_img1 = g

            $.ajax({
                  type: 'post',
                  url: apiupdateprofile,
                  contentType: "application/json",
                  headers: { "Authorization": localStorage.getItem('token') },
                  data: JSON.stringify({ newName: newName, newLastName: newLastName, newStudentID: newStudentID, newPhone: newPhone, dt_date: dt_date, gander_e: gander_e, btn_img1: btn_img1 }),
                  success: function (response) {
                        if (response) {
                              c = response.data;
                              console.log("ผ่าน");
                              // Handle success as needed
                              // $("div[class^=overlay_pass").addClass('open');
                              $("div[class^=overlay_edit]").removeClass('open');
                        } else {
                              console.log("ไม่ผ่าน", response.status, response.statusText);
                        }
                  },

                  error: function (err) {
                        if (err) {
                              console.log("ไม่ผ่าน", err)
                        }
                  }
            })
      } catch (err) {
            console.log(err)
      }
}


async function insert_car(a, b, c, d, e) {
      try {
            console.log(a, b, c, d, e)
            var cartype = a
            var colorcar = b
            var btn_nunmber = c
            var btn_nunmber1 = d
            var btn_nunmber2 = e

            $.ajax({
                  type: 'post',
                  url: apitypecar,
                  contentType: "application/json",
                  data: JSON.stringify({ cartype: cartype, colorcar: colorcar, btnnunmber: btn_nunmber, btnnunmber1: btn_nunmber1, btnnunmber2: btn_nunmber2 }),
                  success: function (response) {
                        if (response) {
                              c = response.data;
                              console.log(c)
                              console.log("ผ่าน");
                              // Handle success as needed
                              // $("div[class^=overlay_pass").addClass('open');
                              $("div[class^=overlay_edit]").removeClass('open');
                        } else {
                              console.log("ไม่ผ่าน");
                              // Handle failure as needed
                        }
                  }
            })
      } catch (err) {
            console.log(err)
      }
}


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

function triggerFileInput() {
      document.querySelector('#camaraPic').click();
}
function displaySelectedFile(input) {
      const file = input.files[0];
      if (file) {
            // Check file size (in bytes)
            const fileSize = file.size;
            // Limit the file size to, for example, 1 MB
            const maxSize = 5 * 1024 * 1024; // 1 MB in bytes

            if (fileSize > maxSize) {
                  alert('File size exceeds the allowed limit.');
                  // Optionally clear the selected file
                  input.value = '';
            } else {
                  // Convert file to base64
                  const reader = new FileReader();
                  reader.onloadend = function () {
                        const base64String = reader.result;
                        // Do something with the base64 string (e.g., send it to the server)
                        alert('Base64 representation: ' + base64String);
                        console.log(base64String)
                  };
                  reader.readAsDataURL(file);
            }
      }
}

document.addEventListener('DOMContentLoaded', function () {
      // Get the input element
      var phoneInput = document.getElementById('edit_phone');
  
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
      var phoneInput = document.getElementById('edit_Student_ID');
  
      // Attach input event listener to format phone number
      phoneInput.addEventListener('input', function () {
          formatPhoneNumber(this);
      });
      function formatPhoneNumber(input) {
          // Remove non-numeric characters
          var phoneNumber = input.value.replace(/\D/g, '');
          // Apply the phone number format
          if (phoneNumber.length > 0) {
              if (phoneNumber.length <= 12) {
                  phoneNumber = phoneNumber.replace(/(\d{1,12})/, '$1');
              } else if (phoneNumber.length <= 13) {
                  phoneNumber = phoneNumber.replace(/(\d{1,12})(\d{1,12})/, '$1-$2');
            //   } else if 
            //   (phoneNumber.length > 13) {
            //       phoneNumber = phoneNumber.slice(0, 13);
            //       phoneNumber = phoneNumber.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '$1-$2-$3');
              }
  
          }
  
          // Update the input value
          input.value = phoneNumber;
      }
  });

function logout() {
      window.location.href = '/login.html';
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
}