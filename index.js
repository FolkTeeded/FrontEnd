// const apiupdateprofile = 'https://0b01-113-53-150-169.ngrok-free.app/api/updateprofile'
// const apitypecar = 'https://0b01-113-53-150-169.ngrok-free.app/api/typecar'

const apiupdateprofile = 'https://car.ctn-dev.net/api/updateprofile'
const apitypecar = 'https://car.ctn-dev.net/api/typecar'
const editpass = 'https://car.ctn-dev.net/api/editpass'
const Get_Profile = 'https://car.ctn-dev.net/api/Get-Profile'
const driving_img = 'https://car.ctn-dev.net/api/driving_img'

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
                        // console.log('Custom Base64 String:', custom_base64String);

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
      // console.log('Custom Selected Image Base64 String:', custom_base64String);
      // เข้าถึง btn_img1 ที่นี่หากต้องการ
      // console.log('btn_img1:', btn_img1);
});

let btnImgCar; // ประกาศ btnImgCar เป็นตัวแปรที่เป็น global

function customImgCarSelect(callback) {
      const customInputFileCar = document.querySelector("#customPictureInputcar");
      const customPictureImageCar = document.querySelector(".customPictureImagecar");
      const customImgPicCar = document.querySelector(".customImgPiccar");
      const customPictureImageTxtCar = "Select File";

      customInputFileCar.addEventListener("change", function (e) {
            const customFileCar = e.target.files[0];

            if (customFileCar) {
                  const customReaderCar = new FileReader();

                  customReaderCar.addEventListener("load", function (e) {
                        const customImgCar = document.createElement("img");
                        customImgCar.src = e.target.result;
                        customImgCar.classList.add("customPictureImgcar");
                        customPictureImageCar.innerHTML = "";
                        customPictureImageCar.appendChild(customImgCar);

                        // ซ่อน element ที่มี class customImgPicCar
                        customImgPicCar.style.display = "none";

                        const customBase64StringCar = e.target.result.split(',')[1];
                        // console.log('Custom Base64 String:', customBase64StringCar);

                        btnImgCar = customBase64StringCar; // กำหนดค่าให้กับตัวแปร btnImgCar

                        if (typeof callback === 'function') {
                              callback(customBase64StringCar);
                        }
                  });

                  customReaderCar.readAsDataURL(customFileCar);

                  // เรียกใช้ click ที่ label เพื่อจำลองการคลิก
                  document.getElementById('customPictureLabelcar').click();
            } else {
                  customPictureImageCar.innerHTML = customPictureImageTxtCar;

                  // แสดง element ที่มี class customImgPicCar
                  customImgPicCar.style.display = "block";

                  btnImgCar = undefined; // รีเซ็ต btnImgCar เมื่อไม่มีการเลือกไฟล์
            }
      });

      // ป้องกันพฤติกรรมปกติของ label เพื่อหลีกเลี่ยงปัญหาการคลิกซ้ำ
      document.getElementById('customPictureLabelcar').addEventListener('dblclick', function (e) {
            e.preventDefault();
      });
}

// การใช้งาน
customImgCarSelect(function (customBase64StringResult) {
      // ตอนนี้ customBase64String พร้อมใช้งาน
      const customBase64StringCar = customBase64StringResult;
      // console.log('Custom Selected Image Base64 String:', customBase64StringCar);
      // เข้าถึง btnImgCar ที่นี่หากต้องการ
      // console.log('btnImgCar:', btnImgCar);
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
      btn_img1

      btn_nunmber = edit_nunmber.value
      btn_nunmber1 = edit_nunmber1.value
      car_type = type_res.value
      color_car = colorcar.value
      btnImgCar
      $(".overlay_edit .load-icon").show();

      // Call the updateprofile function with captured values
      updateprofile(newName, newLastName, newPhone, dt_date, gander_e, btn_img1, btn_nunmber, btn_nunmber1, car_type, color_car, btnImgCar);
}
btn_confirm.onclick = btn_editprofile;

function btn_editpassword() {
      password = password_updatapass.value
      // password1 = password_editpass1.value
      editpassword(password)
}
confirm_updatapass.onclick = btn_editpassword;


// function loading_edit() {
//       // Attach a click event handler to the element with ID "btn_confirm"
//       $("#btn_confirm").click(function () {
//             // Show loading overlay when button is clicked
//             // Set a timeout to hide the loading overlay after 2000 milliseconds (2 seconds)
//             setTimeout(function () {
//                   document.getElementById('loadingOverlay1').style.display = 'none';
//             }, 2000);

//             // Display the loading overlay initially by setting its display property to 'flex'
//             document.getElementById('loadingOverlay1').style.display = 'flex';
//       });
// }

async function updateprofile(a, b, d, e, f, g, h, i, k, l, m) {
      try {
            var newName = a;
            var newLastName = b;
            var newPhone = d;
            var dt_date = e ? formatDate(new Date(e)) : null;
            var gander_e = f;
            var btn_img1 = g;
            var btn_nunmber = h;
            var btn_nunmber1 = i;
            var cartype = k;
            var colorcar = l;
            var imgcar = m

            // Show the loading icon
            $(".overlay_edit .load-icon").addClass('show');

            $(".overlay_menu .open").addClass('blur-background');

            await $.ajax({
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
                        carint: btn_nunmber,
                        carcounty: btn_nunmber1,
                        cartype: cartype,
                        carcolor: colorcar,
                        piccar: imgcar
                  }),

                  success: function (response) {
                        if (response) {
                              c = response.data;
                              Swal.fire({
                                    icon: "success",
                                    title: "อัพเดทสำเร็จ",
                                    showConfirmButton: false,
                                    timer: 2000
                              });
                              setTimeout(function () {
                                    // Remove the loading icon
                                    $("overlay_menu .open").removeClass('blur-background');

                                    // Remove the loading icon
                                    $(".overlay_edit .load-icon").removeClass('show');

                                    // Remove the 'open' class from the overlay to hide it
                                    $("div[class^=overlay_edit]").removeClass('open');
                                    location.reload();
                              }, 2000);

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
      if (!date || !(date instanceof Date)) {
            return null;
      }

      var day = date.getDate();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();

      // Add leading zeros if needed
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      return month + '/' + day + '/' + year;
}

async function editpassword(a) {
      try {
            const password = a;
            const password_editpass1 = document.getElementById('password_editpass1').value;

            if (!password_editpass1 && !password) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "โปรดกรอกรหัสผ่าน",
                  });
                  return;
            }

            if (password !== password_editpass1) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "โปรดใส่รหัสผ่านให้เหมือนกัน",
                  });
                  return;
            }
            $.ajax({
                  type: 'post',
                  url: editpass, // ตั้งค่า URL ของคุณ
                  contentType: "application/json",
                  headers: { "Authorization": localStorage.getItem('token') },
                  data: JSON.stringify({
                        password: password,
                  }),
                  success: function (response) {
                        if (response) {
                              c = response.data;
                              Swal.fire({
                                    icon: "success",
                                    title: "เปลี่ยนรหัสผ่านสำเร็จ",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                              setTimeout(function () {
                                    $("div[class^=overlay_updatapass]").removeClass('open');
                                    location.reload();
                              }, 1500);
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

            Swal.fire({
                  title: "ขออภัย",
                  text: "เมนูส่วนนนี้ยังอยู่ในระหว่างการอัปเดต",
                  icon: "warning",
                  // showButton: true,
                  preConfirm: () => {
                        $("div[class^=overlay_supp]").removeClass('open');
                  }
            });
      }
});

// Add a separate click event listener for $(".prev_supp")
//   $(".prev_supp").on("click", function () {
//       var direction = "next1";

//       if (direction === "next1") {
//           $("div[class^=overlay_supp]").removeClass('open');
//       }
//   });
$(".pers1").on("click", function () {

      var direction = "next1";

      if (direction === "next1") {
            $("div[class^=overlay_personal]").addClass('open');
      }
});

// overlay_search
$(".searc").on("click", function () {

      var direction = "next1";

      if (direction === "next1") {
            $("div[class^=overlay_search]").addClass('open');
      }
});
$(".search_edit").on("click", function () {

      var direction = "next1";

      if (direction === "next1") {
            $("div[class^=overlay_search]").removeClass('open');
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
      // const overlay = document.getElementById('overlay');

      openOverlayBtn.addEventListener('click', function () {
            overlay.style.left = '0'; /* Slide in from the left */
      });

      closeOverlayBtn.addEventListener('click', function () {
            overlay.style.left = '-100%'; /* Slide out to the left */
      });

      // Close overlay if user clicks outside the content

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
                              // console.log('Base64 String:', base64);

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
            const maxSize = 10 * 1024 * 1024; // 1 MB in bytes

            if (fileSize > maxSize) {
                  alert('File size exceeds the allowed limit.');
                  // Optionally clear the selected file
                  input.value = '';
            } else {
                  // Convert file to base64
                  const reader = new FileReader();
                  reader.onloadend = function () {
                        let base64String = reader.result;
                        const img = new Image();
                        img.onload = async function () {
                              // const canvas = document.createElement('canvas');
                              // const ctx = canvas.getContext('2d');
                              
                              var base64 = base64String; // Your base64 image string
                              var maxWidth = 800; // Maximum width
                              var maxHeight = 600; // Maximum height
                              resizeBase64Img(base64, maxWidth, maxHeight)
                                    .then(resizedBase64 => {
                                          console.log('Resized base64 image:', resizedBase64);
                                          base64String = resizedBase64.split(',')[1]
                                    })
                                    .catch(error => {
                                          console.error('Error:', error);
                                    });
                              // canvas.width = img.width;
                              // canvas.height = img.height;
                              // ctx.drawImage(img, 0, 0);
                        
                              // const dataURL = canvas.toDataURL('image/jpeg');
                              // base64String = resizedBase64.split(',')[1]
                              // Use dataURL for further processing (e.g., displaying, sending to server)
                        };

                        // alert('Base64 representation: ' + base64String);
                        Swal.fire({
                              icon: "success",
                              title: "กำลังค้นหาป้านทะเบียน",
                              showConfirmButton: false,
                              timer: 1500
                            });
                        cameraSend(base64String)
                        img.src = event.target.result;

                  };
                  reader.readAsDataURL(file);
            }
      }
}
function resizeBase64Img(base64, maxWidth, maxHeight) {
      return new Promise((resolve, reject) => {
          var img = new Image();
  
          img.onload = function() {
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
  
              var width = img.width;
              var height = img.height;
  
              if (width > height) {
                  if (width > maxWidth) {
                      height *= maxWidth / width;
                      width = maxWidth;
                  }
              } else {
                  if (height > maxHeight) {
                      width *= maxHeight / height;
                      height = maxHeight;
                  }
              }
  
              canvas.width = width;
              canvas.height = height;
  
              ctx.drawImage(img, 0, 0, width, height);
  
              resolve(canvas.toDataURL('image/jpeg', 0.3)); // 0.7 is the image quality (0.0 to 1.0)
          };
  
          img.onerror = function() {
              reject('Invalid image');
          };
  
          img.src = base64;
      });
  }
  
function cameraSend(base64String) {
      $.ajax({
            type: 'post',
            url: 'https://car.ctn-dev.net/api/camerasend',
            contentType: "application/json",
            headers: { "Authorization": localStorage.getItem('token') },
            data: JSON.stringify({ base64String }),
            success: function (data) {
                  // console.log("Response:", data);

                  if (data && data.data.car && data.data.user) {
                        const profileData = data.data.user;
                        const carData = data.data.car;
                        // console.log("ผ่าน");

                        const containerProfile = document.getElementById('container-profile_personal23');
                        containerProfile.innerHTML += `
                    <div class="pic-profile-personal">
                        <div class="pic-profile1">
                        <div id ="image-picporcar" style="
                  width: 100%;
                  height: 100%;
              "></div>
                        </div>
                    </div>
                    <div style="margin-top: 58px;">
                        <div class="detall-profile_personal">
                            <div class="detall-profile-per">
                                <div id="carP" class="carP" style="color: #ffffff;">
                                    <p>ชื่อ : ${profileData.firstname}</p>
                                    <p>นามสกุล : ${profileData.lastname}</p>
                                    <p>อีเมล์ : ${profileData.email}</p>
                                    <p>เบอร์โทรศัพท์ : ${profileData.phone}</p>
                                    <p>เลขป้ายทะเบียน : ${carData.car_number} ${carData.car_country}</p>
                                    <p id = "carpy">ประเภทรถ : ${carData.cartype}</p> 
                                    <p id = "carcolor11" style="padding-bottom: 30px;">สีรถ : ${carData.carcolor}</p> <!-- Use correct property name -->
                                    <div style="width: 100%;
                              height: 25dvh;
                              border-radius: 40px ;">
                              <div id = "imgcartt" style="
                              width: 100%;
                              height: 100%;
                          "></div>
                              </div>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
                    </div>`;

                        $("div[class^=overlay_cardetail]").addClass('open');
                        function convertBase64ToImage(base64Data) {
                              var image = document.createElement('img');
                              image.src = "data:image/jpeg;base64," + base64Data;
                              return image;
                        }

                        // แสดงรูปภาพของโปรไฟล์
                        const imageContainer = document.getElementById('image-picporcar');
                        imageContainer.innerHTML = '';

                        if (profileData.img_pro) {
                              var imageElementProfile = convertBase64ToImage(profileData.img_pro);
                              imageContainer.appendChild(imageElementProfile);
                        }

                        // แสดงรูปภาพของรถ
                        const imageContainercar = document.getElementById('imgcartt');
                        imageContainercar.innerHTML = '';

                        if (carData.img_car) {
                              var imageElementCar = convertBase64ToImage(carData.img_car);
                              imageContainercar.appendChild(imageElementCar);
                              // console.log("รถผ่าน");
                        } else {
                              // console.log("รถไม่ผ่าน");
                        }
                        const carpy = document.getElementById('carpy');

                        if (carpy) {
                              if (carData.cartype) {
                                    carpy.innerHTML = `ประเภทรถ: ${carData.cartype}`;
                              } else {carcolor11
                                    // Handle the case when profileData.gander is null or undefined
                                    carpy.innerHTML = '';  // You might want to set a default value here
                              }
                        }
                        const colorc = document.getElementById('carcolor11');

                        if (colorc) {
                              if (carData.carcolor) {
                                    colorc.innerHTML = `สีรถ: ${carData.carcolor}`;
                              } else {
                                    // Handle the case when profileData.gander is null or undefined
                                    colorc.innerHTML = '';  // You might want to set a default value here
                              }
                        }
                  } else {
                        console.log("ไม่ผ่าน1");
                        // Handle failure as needed
                  }
            },

            error: function (err) {
                  if (err) {
                        setTimeout(function () {
                              Swal.fire({
                                    icon: "error",
                                    text: "ไม่พบป้ายทะเบียน โปรดถ่ายใหม่!",
                                });
                          }, 2000);
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

// setTimeout(function () {
//       // Remove the loading icon
//       $("overlay_menu .open").removeClass('blur-background');

//       // Remove the loading icon
//       $(".overlay_img .load-icon").removeClass('show');

//       $("div[class^=overlay_img]").removeClass('open');

//       location.reload();
// }, 3000);

function logout() {
      Swal.fire({
            icon: "success",
            title: "ออกจากระบบ",
            showConfirmButton: false,
            timer: 1500
      });
      setTimeout(function () {
            window.location.href = '/login.html';
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
      }, 1500);
}

$.ajax({
      url: Get_Profile,
      type: 'POST',
      dataType: 'json',
      contentType: "application/json",
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
            if (data && data.data && data.data.length > 0) {
                  const profileData = data.data[0];

                  const containerProfile = document.getElementById('container-profile');
                  containerProfile.innerHTML += `
                        <div class="detall-profile is_loading">
                                 <div class="pic-profile-menu is_loading">
                                       <div class="pic-profile img_skeleton">
                                             <div class="header-img img_skeleton" id="imageContainer">
                                             </div>
                                       </div>
                                 </div>
                                 <div class="detall-profile-pf">
                                       <div class="text-n1 hide-text1" id="name">ชื่อ : ${profileData.firstname}</div>
                                       <div class="text-n2 hide-text1" id="lastname">นามสกุล : ${profileData.lastname}</div>
                                       <div class="text-n3 hide-text1" id="studentId">รหัสนักศึกษา : ${profileData.student_id}</div>
                                 </div>
                           </div>`;
                  const imageContainer = document.getElementById('imageContainer');
                  imageContainer.innerHTML = '';

                  const removeClassWithDelay = (selector, className, delay) => {
                        const element = document.querySelector(selector);
                        setTimeout(() => {
                              element.classList.remove(className);
                        }, delay);
                  };

                  // Usage
                  removeClassWithDelay(".detall-profile", "is_loading", 1000);
                  removeClassWithDelay(".pic-profile-menu", "is_loading", 1000);
                  removeClassWithDelay(".text-n1", "hide-text1", 1000);
                  removeClassWithDelay(".text-n2", "hide-text1", 1000);
                  removeClassWithDelay(".text-n3", "hide-text1", 1000);
                  removeClassWithDelay(".header-img", "img_skeleton", 1000);
                  removeClassWithDelay(".pic-profile", "img_skeleton", 1000);

                  function convertBase64ToImage(base64Data) {
                        var image = document.createElement('img');

                        image.src = "data:image/jpeg;base64," + base64Data;

                        return image;
                  }

                  if (profileData.img_pro) {
                        var imageElement = convertBase64ToImage(profileData.img_pro);
                        imageContainer.appendChild(imageElement);
                  } else {
                  }


            }
      },
      error: function (err) {
            console.log(err);
      }
});
$.ajax({
      url: Get_Profile,
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

                  }


            }
      },
      error: function (err) {
            console.log(err);
      }
});

$.ajax({
      url: Get_Profile,
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
                              <p>ชื่อ : ${profileData.firstname}</p>
                              <p>นามสกุล : ${profileData.lastname}</p>
                              <p>รหัสนักศึกษา : ${profileData.student_id}</p>
                              <p>อีเมล์ : ${profileData.email}</p>
                              <p>เบอร์โทรศัพท์ : ${profileData.phone}</p>
                              <p id="birthdayParagraph">วัน/เดือน/ปีเกิด : ${profileData.birthday}</p>
                              <p id="gander12">เพศ : ${profileData.gander}</p>
                              <p>เลขป้ายทะเบียน : ${carData.car_number} ${carData.car_country}</p>
                              <p id = "cartype" >ประเภทรถ : ${carData.cartype}</p>
                              <p id = "carcolor" style="padding-bottom: 30px;">สีรถ : ${carData.carcolor}</p>
                              <div style="width: 100%;
                              height: 25dvh;
                              border-radius: 40px ;">
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
                  }
                  // ตรวจสอบว่า profileData.birthday ไม่ใช่ค่า null หรือ undefined
                  if (profileData.birthday) {
                        // ทำการแปลง profileData.birthday เป็น timestamp
                        const timestamp = new Date(profileData.birthday);
                        const day = timestamp.getUTCDate();
                        const month = timestamp.getUTCMonth() + 1;
                        const year = timestamp.getUTCFullYear();

                        // ตรวจสอบค่า day, month, year ถ้าเป็น falsy ให้กำหนดค่า default เป็น "-"
                        const formattedDate = day && month && year
                              ? `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
                              : '-';

                        // นำ formattedDate ไปใช้งานต่อ
                        const birthdayParagraph = document.getElementById('birthdayParagraph');
                        if (birthdayParagraph) {
                              birthdayParagraph.innerHTML = `วัน/เดือน/ปีเกิด: ${formattedDate}`;
                        }
                  } else {
                        // ถ้า profileData.birthday เป็นค่า null หรือ undefined ให้กำหนดค่า default เป็น "-"
                        const birthdayParagraph = document.getElementById('birthdayParagraph');
                        if (birthdayParagraph) {
                              birthdayParagraph.innerHTML = '';
                        }
                  }

                  const gan = document.getElementById('gander12');

                  if (gan) {
                        if (profileData.gander) {
                              gan.innerHTML = `เพศ: ${profileData.gander}`;
                        } else {
                              // Handle the case when profileData.gander is null or undefined
                              gan.innerHTML = '';  // You might want to set a default value here
                        }
                  }

                  if (carData.cartype) {
                        // ทำบางสิ่งเมื่อ carData.cartype ไม่ใช่ค่า null หรือ undefined
                        // เช่น กำหนดค่าให้ HTML element
                        const cartype = document.getElementById('cartype');
                        if (cartype) {
                              cartype.innerHTML = `ประเภทรถ: ${carData.cartype}`;
                        }
                  } else {
                        // ทำบางสิ่งเมื่อ carData.cartype เป็นค่า null หรือ undefined
                        // เช่น กำหนดค่า default หรือลบค่าใน HTML element
                        const cartype = document.getElementById('cartype');
                        if (cartype) {
                              cartype.innerHTML = '';  // หรือกำหนดค่า default ตามที่ต้องการ
                        }
                  }
                  if (carData.carcolor) {
                        // ทำบางสิ่งเมื่อ carData.cartype ไม่ใช่ค่า null หรือ undefined
                        // เช่น กำหนดค่าให้ HTML element
                        const carcolor = document.getElementById('cartype');
                        if (carcolor) {
                              carcolor.innerHTML = `ประเภทรถ: ${carData.carcolor}`;
                        }
                  } else {
                        // ทำบางสิ่งเมื่อ carData.cartype เป็นค่า null หรือ undefined
                        // เช่น กำหนดค่า default หรือลบค่าใน HTML element
                        const cartype = document.getElementById('cartype');
                        if (cartype) {
                              carcolor.innerHTML = '';  // หรือกำหนดค่า default ตามที่ต้องการ
                        }
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
                        // console.log('Profile image not available');
                  }
            }
      },
      error: function (err) {
            console.log(err);
      }
});

const sl_driving_license = document.querySelector('#select_driving_license')

function img_driving_license() {
      let pic_driving = base64
      driving_licenseimg(pic_driving)
      $(".overlay_img .load-icon").show();
}


sl_driving_license.onclick = img_driving_license

async function driving_licenseimg(a) {
      try {
            const imgdrl = a;

            const response = await $.ajax({
                  type: 'post',
                  url: driving_img,
                  contentType: "application/json",
                  headers: { "Authorization": localStorage.getItem('token') },
                  data: JSON.stringify({
                        driving_license: imgdrl
                  }),
            });
            if (response.success) {
                  Swal.fire({
                        icon: "success",
                        title: "เพิ่มรูปสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500
                  });
                  $(".overlay_img .load-icon").addClass('show');

                  $(".overlay_menu .open").addClass('blur-background');

                  setTimeout(function () {
                        // Remove the loading icon
                        $("overlay_menu .open").removeClass('blur-background');

                        // Remove the loading icon
                        $(".overlay_img .load-icon").removeClass('show');

                        $("div[class^=overlay_img]").removeClass('open');

                        location.reload();
                  }, 1500);

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
      url: Get_Profile,
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
                  $('#edit_nunmber1').val(carData.car_country);
                  $('#type_res').val(carData.cartype);
                  $('#color_car').val(carData.carcolor)
            }
      },
      error: function (err) {
            console.log(err);
      }
});
const edit_car1 = document.getElementById('edit_car1')
const btn_cars = document.getElementById('edit_car3')

function btn_cars_2() {
      const value_car1 = edit_car1.value
      console.log(value_car1)
      send_datav2(value_car1)
  }
btn_cars.onclick = btn_cars_2

async function send_datav2(a) {
      try {
            const datacar = a;
            $.ajax({
                  type: 'post',
                  url: 'https://car.ctn-dev.net/api/datacarV2',
                  contentType: "application/json",
                  headers: { "Authorization": localStorage.getItem('token') },
                  data: JSON.stringify({
                        datacarv2: datacar,
                  }),
                  success: function (response) {
                        console.log('response',response)
                        if (response && response.data.car && response.data.user) {
                            const profileData = response.data.user;
                            const carData = response.data.car;
                            const containerProfile = document.getElementById('container-profile_personal23');
                        containerProfile.innerHTML += `
                    <div class="pic-profile-personal">
                        <div class="pic-profile1">
                        <div id ="image-picporcar" style="
                  width: 100%;
                  height: 100%;
              "></div>
                        </div>
                    </div>
                    <div style="margin-top: 58px;">
                        <div class="detall-profile_personal">
                            <div class="detall-profile-per">
                                <div id="carP" class="carP" style="color: #ffffff;">
                                    <p>ชื่อ : ${profileData.firstname}</p>
                                    <p>นามสกุล : ${profileData.lastname}</p>
                                    <p>อีเมล์ : ${profileData.email}</p>
                                    <p>เบอร์โทรศัพท์ : ${profileData.phone}</p>
                                    <p>เลขป้ายทะเบียน : ${carData.car_number} ${carData.car_country}</p>
                                    <p id = "carpy">ประเภทรถ : ${carData.cartype}</p> 
                                    <p id = "carcolor11" style="padding-bottom: 30px;">สีรถ : ${carData.carcolor}</p> <!-- Use correct property name -->
                                    <div style="width: 100%;
                              height: 25dvh;
                              border-radius: 40px ;">
                              <div id = "imgcartt" style="
                              width: 100%;
                              height: 100%;
                          "></div>
                              </div>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
                    </div>`;

                        $("div[class^=overlay_cardetail]").addClass('open');
                        function convertBase64ToImage(base64Data) {
                              var image = document.createElement('img');
                              image.src = "data:image/jpeg;base64," + base64Data;
                              return image;
                        }

                        // แสดงรูปภาพของโปรไฟล์
                        const imageContainer = document.getElementById('image-picporcar');
                        imageContainer.innerHTML = '';

                        if (profileData.img_pro) {
                              var imageElementProfile = convertBase64ToImage(profileData.img_pro);
                              imageContainer.appendChild(imageElementProfile);
                        }

                        // แสดงรูปภาพของรถ
                        const imageContainercar = document.getElementById('imgcartt');
                        imageContainercar.innerHTML = '';

                        if (carData.img_car) {
                              var imageElementCar = convertBase64ToImage(carData.img_car);
                              imageContainercar.appendChild(imageElementCar);
                              // console.log("รถผ่าน");
                        } else {
                              // console.log("รถไม่ผ่าน");
                        }
                        const carpy = document.getElementById('carpy');

                        if (carpy) {
                              if (carData.cartype) {
                                    carpy.innerHTML = `ประเภทรถ: ${carData.cartype}`;
                              } else {carcolor11
                                    // Handle the case when profileData.gander is null or undefined
                                    carpy.innerHTML = '';  // You might want to set a default value here
                              }
                        }
                        const colorc = document.getElementById('carcolor11');

                        if (colorc) {
                              if (carData.carcolor) {
                                    colorc.innerHTML = `สีรถ: ${carData.carcolor}`;
                              } else {
                                    // Handle the case when profileData.gander is null or undefined
                                    colorc.innerHTML = '';  // You might want to set a default value here
                              }
                        }
                        }
                        // rest of the code
                     else {
                              console.log("ไม่ผ่าน");
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

const removeClassWithDelay = (selector, className, delay) => {
      const element = document.querySelector(selector);
      setTimeout(() => {
            element.classList.remove(className);
      }, delay);
};

// Removing "" class from menu items
removeClassWithDelay(".menu-item", "is-loading", 1500);
removeClassWithDelay(".menu-item1", "is-loading", 1500);
removeClassWithDelay(".menu-item2", "is-loading", 1500);
removeClassWithDelay(".menu-item3", "is-loading", 1500);

// Removing "loading_scan" class from .scanblue element
removeClassWithDelay(".scanblue", "loading_scan", 1500);
removeClassWithDelay(".bt-register1", "loading_scan", 1500);
// removeClassWithDelay(".scanblue1", "loading_scan", 1500);

const removeClassWithDelay1 = (selector, className, delay) => {
      const element = document.querySelector(selector);
      setTimeout(() => {
            element.classList.remove(className);
      }, delay);
};

// Removing "is-loading" class from menu items
removeClassWithDelay1(".menu-item", "img_skeleton1", 1500);
removeClassWithDelay1(".menu-item1", "img_skeleton1", 1500);
removeClassWithDelay1(".menu-item2", "img_skeleton1", 1500);
removeClassWithDelay1(".menu-item3", "img_skeleton1", 1500);

// Removing "loading_scan" class from .scanblue element



function closeshow() {
      location.reload();
      closeOverlayAll();
}
