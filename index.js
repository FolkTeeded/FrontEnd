// const apiupdateprofile = 'https://0b01-113-53-150-169.ngrok-free.app/api/updateprofile'
// const apitypecar = 'https://0b01-113-53-150-169.ngrok-free.app/api/typecar'

const apiupdateprofile = 'http://localhost:3000/api/updateprofile'
const apitypecar = 'http://localhost:3000/api/typecar'
const editpass= 'http://localhost:3000/api/editpass'
let btn_img1; // ประกาศ btn_img1 เป็นตัวแปรที่เป็น global

function custom_img_select(callback) {
    const custom_inputFile1 = document.querySelector("#custom_picture__input1");
    const custom_pictureImage1 = document.querySelector(".custom_picture__image1");
    const custom_img_pic1 = document.querySelector(".custom_img_pic1");
    const custom_pictureImageTxt1 = "เลือกไฟล์";

    custom_inputFile1.addEventListener("change", function (e) {
        const custom_file1 = e.target.files[0];

        if (custom_file1) {
            const custom_reader1 = new FileReader();

            custom_reader1.addEventListener("load", function (e) {
                const custom_img1 = document.createElement("img");
                custom_img1.src = e.target.result;
                custom_img1.classList.add("custom_picture__img");
                custom_pictureImage1.innerHTML = "";
                custom_pictureImage1.appendChild(custom_img1);

                // ซ่อน element ที่มี class custom_img_pic1
                custom_img_pic1.style.display = "none";

                const custom_base64String = e.target.result.split(',')[1];
                console.log('Custom Base64 String:', custom_base64String);

                btn_img1 = custom_base64String; // กำหนดค่าให้กับตัวแปร btn_img1

                if (typeof callback === 'function') {
                    callback(custom_base64String);
                }
            });

            custom_reader1.readAsDataURL(custom_file1);

            // เรียกใช้ click ที่ label เพื่อจำลองการคลิก
            document.getElementById('custom_picture1').click();
        } else {
            custom_pictureImage1.innerHTML = custom_pictureImageTxt1;

            // แสดง element ที่มี class custom_img_pic1
            custom_img_pic1.style.display = "block";

            btn_img1 = undefined; // รีเซ็ต btn_img1 เมื่อไม่มีการเลือกไฟล์
        }
    });

    // ป้องกันพฤติกรรมปกติของ label เพื่อหลีกเลี่ยงปัญหาการคลิกซ้ำ
    document.getElementById('custom_picture1').addEventListener('dblclick', function (e) {
        e.preventDefault();
    });
}

// การใช้งาน
custom_img_select(function (custom_base64StringResult) {
    // ตอนนี้ custom_base64String พร้อมใช้งาน
    const custom_base64String = custom_base64StringResult;
    console.log('Custom Selected Image Base64 String:', custom_base64String);
    // เข้าถึง btn_img1 ที่นี่หากต้องการ
    console.log('btn_img1:', btn_img1);
});



const editname = document.querySelector('#edit_name')
const edit_last1 = document.querySelector('#edit_last')
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
const StudentID_Error = document.querySelector('#studentid-error')
// js form rigister
const loginregisterpass = document.querySelector("#loginregisterpass")
const name_rigister = document.querySelector('#name_rigister')
const lastname_res = document.querySelector('#lastname_res')
const phone_res = document.querySelector('#phone_res')
const email_res = document.querySelector('#email_res')

const password_updatapass = document.querySelector('#password_updatapass')
const password_editpass1 = document.querySelector('#password_editpass1')
const confirm_updatapass = document.querySelector('#confirm_updatapass')

function btn_editprofile() {
      // Capture values from form elements
      newName = editname.value;
      newLastName = edit_last1.value;

      newPhone = edit_num.value;
      dt_date = edit_date1.value;
      gander_e = gander_edit.value;

      // Log the captured values to the console
      // console.log(newName);
      // console.log(newLastName);
      // console.log(newStudentID);
      // console.log(newPhone);
      // console.log(dt_date);
      // console.log(gander_e);

      // Capture the Base64 string from the img_select function
      btn_img1

      btn_nunmber = edit_nunmber.value
      btn_nunmber1 = edit_nunmber1.value
      btn_nunmber2 = edit_nunmber2.value
      car_type = type_res.value
      color_car = colorcar.value

      // Call the updateprofile function with captured values
      updateprofile(newName, newLastName, newPhone, dt_date, gander_e, btn_img1, btn_nunmber, btn_nunmber1, btn_nunmber2, car_type, color_car);
}
btn_confirm.onclick = btn_editprofile;

function btn_editpassword(){
      password = password_updatapass.value
      
      editpassword(password)
}
confirm_updatapass.onclick = btn_editpassword;
// Call img_select with a callback function


// function btn_carlogin() {
//       car_type = type_res.value
//       color_car = colorcar.value
//       btn_nunmber = edit_nunmber.value
//       btn_nunmber1 = edit_nunmber1.value
//       btn_nunmber2 = edit_nunmber2.value
//       insert_car(car_type, color_car, btn_nunmber, btn_nunmber1, btn_nunmber2)
// }
// function btn_confirm_edit(){

//       btn_confirm.onclick = btn_carlogin() = btn_editprofile()
// }
// btn_confirm.onclick = function () {
//       btn_carlogin();
//       btn_editprofile();
// };
async function updateprofile(a, b, d, e, f, g, h, i, j, k, l) {
      try {
          var newName = a;
          var newLastName = b;
          var newPhone = d;
          var dt_date = e ? formatDate(new Date(e)) : null;
          var gander_e = f;
          var btn_img1 = g;
          var btn_nunmber1 = h;
          var btn_nunmber2 = i;
          var btn_nunmber3 = j;
          var cartype = k;
          var colorcar = l;
  
          $.ajax({
              type: 'post',
              url: apiupdateprofile,
              contentType: "application/json",
              headers: { "Authorization": localStorage.getItem('token') },
              data: JSON.stringify({
                  newName: newName,
                  newLastName: newLastName,
                  newPhone: newPhone,
                  dt_date: dt_date,
                  gander_e: gander_e,
                  btn_img1: btn_img1,
                  carint: btn_nunmber1,
                  cartext: btn_nunmber2,
                  carcounty: btn_nunmber3,
                  cartype: cartype,
                  carcolor: colorcar
              }),
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
                      console.log("ไม่ผ่าน", err);
                  }
              }
          });
      } catch (err) {
          console.log(err);
      }
  }
  
  function formatDate(date) {
      if (!date || date.trim() === '') {
          return null;
      }
      
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
  
      // Add leading zeros if needed
      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
  
      return day + '/' + month + '/' + year;
  }
  


function ss() {
      $("#edit_password").click(function () {
          $(".overlay-content").hide();
          $("#overlay").hide();
      });
  }
  function aa() {
      $("#openOverlayBtn").click(function () {
          $(".overlay-content").show();
          $("#overlay").show();
      });
  }

// async function insert_car(a, b, c, d, e) {
//       try {
//             console.log(a, b, c, d, e)
//             var cartype = a
//             var colorcar = b
//             var btn_nunmber = c
//             var btn_nunmber1 = d
//             var btn_nunmber2 = e

//             $.ajax({
//                   type: 'post',
//                   url: apitypecar,
//                   contentType: "application/json",
//                   data: JSON.stringify({ cartype: cartype, colorcar: colorcar, btnnunmber: btn_nunmber, btnnunmber1: btn_nunmber1, btnnunmber2: btn_nunmber2 }),
//                   success: function (response) {
//                         if (response) {
//                               c = response.data;
//                               console.log(c)
//                               console.log("ผ่าน");
//                               // Handle success as needed
//                               // $("div[class^=overlay_pass").addClass('open');
//                               $("div[class^=overlay_edit]").removeClass('open');
//                         } else {
//                               console.log("ไม่ผ่าน");
//                               // Handle failure as needed
//                         }
//                   }
//             })
//       } catch (err) {
//             console.log(err)
//       }
// }


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

$(".edit_password").on("click", function () {

      var direction = "next1";

      if (direction === "next1") {
            $("div[class^=overlay_updatapass]").addClass('open');
      }
});
$(".updatapass").on("click", function () {

      var direction = "next1";

      if (direction === "next1") {
            $("div[class^=overlay_updatapass]").removeClass('open');
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

function img_select(callback_11) {
      return new Promise((resolve, reject) => {
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

                              sdf.classList.add('img_pic', 'new');
                              pictureImage.innerHTML = "";
                              pictureImage.appendChild(img);

                              base64 = readerTarget.result.split(',')[1];
                              console.log('Base64 String:', base64);

                              if (typeof callback_11 === 'function') {
                                    callback_11(base64);
                                    resolve(inputFile);
                              }
                        });

                        reader.readAsDataURL(file);
                  } else {
                        pictureImage.innerHTML = pictureImageTxt;
                  }
            });
      });
}

// Usage
let base64;

img_select(function (base64ss) {
      // Now base64String is available
      base64 = base64ss;
})
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
                        let base64String = reader.result;
                        base64String = base64String.split(',')[1]
                        // Do something with the base64 string (e.g., send it to the server)
                        alert('Base64 representation: ' + base64String);
                        console.log(base64String)
                        cameraSend(base64String)
                  };
                  reader.readAsDataURL(file);
            }
      }
}
function cameraSend(base64String) {
      $.ajax({
            type: 'post',
            url: `http://localhost:3000/api/camerasend`,
            contentType: "application/json",
            headers: { "Authorization": localStorage.getItem('token') },
            data: JSON.stringify({ base64String }),
            success: function (response) {
                  if (response) {
                        console.log("ผ่าน");
                  } else {
                        console.log("ไม่ผ่าน");
                        // Handle failure as needed
                  }
            },

            error: function (err) {
                  if (err) {
                        console.log("ไม่ผ่าน", err)
                  }
            }
      });
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

function logout() {
      window.location.href = '/login.html';
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
}

$.ajax({
      url: 'http://localhost:3000/api/Get-Profile',
      type: 'POST',
      dataType: 'json',
      contentType: "application/json",
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {

            if (data && data.data && data.data.length > 0) {
                  const profileData = data.data[0];

                  const containerProfile = document.getElementById('container-profile');
                  containerProfile.innerHTML += `
                              <div class="detall-profile">
                                          <div class="pic-profile-menu">
                                                <div class="pic-profile" >
                                                      <div id="imageContainer" style ="width: 100%;
                                                      height: 100%;">
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="detall-profile-pf">
                                          <div id="name">ชื่อ : ${profileData.firstname}</div>
                                          <div id="lastname">นามสกุล : ${profileData.lastname}</div>
                                          <div id="studentId">รหัสนักศึกษา : ${profileData.student_id}</div>
                                    </div>
                              </div>`;

                  const imageContainer = document.getElementById('imageContainer');
                  imageContainer.innerHTML = '';

                  function convertBase64ToImage(base64Data) {
                        var image = document.createElement('img');

                        image.src = "data:image/jpeg;base64," + base64Data;

                        return image;
                  }

                  if (profileData.img_pro) {
                        var imageElement = convertBase64ToImage(profileData.img_pro);
                        imageContainer.appendChild(imageElement);
                  } else {
                        console.log('Profile image not available');
                  }


            }
      },
      error: function (err) {
            console.log(err);
      }
});
$.ajax({
      url: 'http://localhost:3000/api/Get-Profile',
      type: 'POST',
      dataType: 'json',
      contentType: "application/json",
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {

            if (data && data.data && data.data.length > 0) {
                  const profileData = data.data[0];

                  const Profileimg = document.querySelector('.main-profile-show');
                  Profileimg.innerHTML += `
                              <div class="con-pic-profile-show">
                              <div class="pic-profile-show">
                                    <div id ="image-Con" style ="width: 100%;height: 100%;">
                              </div>
                              </div>
                        </div>
                        <div class="detall-profile-show">
                              <div class="detall-profile_IN">
                                    <p style="color: #ffffff;">ระบบตรวจสอบเจ้าของ
                                          ยานจากป้ายทะเบียน</p>
                              </div>
                        </div>`;

                  const imageContainer = document.getElementById('image-Con');
                  imageContainer.innerHTML = '';

                  function convertBase64ToImage(base64Data) {
                        var image = document.createElement('img');

                        image.src = "data:image/jpeg;base64," + base64Data;

                        return image;
                  }

                  if (profileData.img_pro) {
                        var imageElement = convertBase64ToImage(profileData.img_pro);
                        imageContainer.appendChild(imageElement);
                  } else {
                        console.log('Profile image not available');
                  }


            }
      },
      error: function (err) {
            console.log(err);
      }
});

$.ajax({
      url: 'http://localhost:3000/api/Get-Profile',
      type: 'POST',
      dataType: 'json',
      contentType: "application/json",
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
            if (data && data.data) {
                  const profileData = data.data[0];
                  const carData = data.data[1];
                  const Profileimg = document.querySelector('.container-profile_personal');
                  Profileimg.innerHTML += `<div class="pic-profile-personal">
                  <div class="pic-profile1">
                  <div id ="image-Contai" style="
                  width: 100%;
                  height: 100%;
              "></div>
                  </div>
              </div>
              <div style="margin-top: 58px;">
                  <div class="detall-profile_personal">
                      <div class="detall-profile-per">
                          <div id="img_dr" class="img_dr" style="color: #ffffff;">
                              <p>ชื่อ :${profileData.firstname}</p>
                              <p>นามสกุล :${profileData.lastname}</p>
                              <p>รหัสนักศึกษา :${profileData.student_id}</p>
                              <p>อีเมล์ :${profileData.email}</p>
                              <p>เบอร์โทรศัพท์ :${profileData.phone}</p>
                              <p id="birthdayParagraph">วัน/เดือน/ปีเกิด :${profileData.birthday}</p>
                              <p>เพศ :${profileData.gander}</p>
                              <p>เลขป้ายทะเบียน :${carData.car_text}/${carData.car_number}/${carData.car_country}</p>
                              <p>ประเภทรถ :${carData.cartype}</p>
                              <p style="padding-bottom: 30px;">สีรถ :${carData.carcolor}</p>
                              <div style="width: 100%;
                              height: 25dvh;
                              background-color: aqua;
                              border-radius: 40px ; border: 1px solid;">
                              <div id = "img-picdr" style="
                              width: 100%;
                              height: 100%;
                          "></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;

                  const imageContainer = document.getElementById('image-Contai');
                  imageContainer.innerHTML = '';

                  function convertBase64ToImage(base64Data) {
                        var image = document.createElement('img');
                        image.src = "data:image/jpeg;base64," + base64Data;
                        return image;
                  }

                  if (profileData.img_pro) {
                        var imageElement = convertBase64ToImage(profileData.img_pro);
                        imageContainer.appendChild(imageElement);
                  } else {
                        console.log('Profile image not available');
                  }
                  const timestamp = new Date(profileData.birthday);

                  // Extracting date components of the timestamp
                  const day = timestamp.getUTCDate();
                  const month = timestamp.getUTCMonth() + 1; // Note: Months are zero-based, so we add 1
                  const year = timestamp.getUTCFullYear();
                  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

                  // Displaying the formatted date in your HTML
                  const birthdayParagraph = document.getElementById('birthdayParagraph'); // Replace 'birthdayParagraph' with the actual ID or class of your HTML element
                  if (birthdayParagraph) {
                        birthdayParagraph.innerHTML = `วัน/เดือน/ปีเกิด: ${formattedDate}`;
                  }


                  const image = document.getElementById('img-picdr');
                  image.innerHTML = '';

                  function convertBase64ToImage(base64Data) {
                        var image = document.createElement('img');
                        image.src = "data:image/jpeg;base64," + base64Data;
                        return image;
                  }

                  if (profileData.driving_license) {
                        var imageElement = convertBase64ToImage(profileData.driving_license);
                        image.appendChild(imageElement);
                  } else {
                        console.log('Profile image not available');
                  }
            }
      },
      error: function (err) {
            console.log(err);
      }
});

const sl_driving_license =  document.querySelector('#select_driving_license')

function img_driving_license(){
      let pic_driving = base64
      driving_licenseimg(pic_driving)
}


sl_driving_license.onclick = img_driving_license

async function driving_licenseimg(a) {
      try {
          const imgdrl = a;
  
          const response = await $.ajax({
              type: 'post',
              url: 'http://localhost:3000/api/driving_img',
              contentType: "application/json",
              headers: { "Authorization": localStorage.getItem('token') },
              data: JSON.stringify({
                  driving_license: imgdrl
              }),
          });
  
          if (response.success) {
              console.log("Driving license updated successfully");
              // Handle success as needed
              // $("div[class^=overlay_pass").addClass('open');
              $("div[class^=overlay_img]").removeClass('open');
          } else {
              console.log("Error:", response.message);
              // Handle error, show appropriate message to the user
          }
      } catch (err) {
          console.log("Error:", err);
          // Handle unexpected errors
      }
  }


  $.ajax({
      url: 'http://localhost:3000/api/Get-Profile',
      type: 'POST',
      dataType: 'json',
      contentType: "application/json",
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
         if (data && data.data) {
            const profileData = data.data[0];
            const carData = data.data[1];
   
            // Update form fields with received data
            $('#edit_name').val(profileData.firstname);
            $('#edit_last').val(profileData.lastname);
            $('#edit_phone').val(profileData.phone);
            $('#edit_date').val(profileData.birthday);
            $('#gander_edit').val(profileData.gander);
            $('#edit_nunmber').val(carData.car_number);
            $('#edit_nunmber1').val(carData.car_text);
            $('#edit_nunmber2').val(carData.car_country);
         }
      },
      error: function (err) {
         console.log(err);
      }
   });