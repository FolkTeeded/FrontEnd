// const apitoken = 'https://0b01-113-53-150-169.ngrok-free.app/api/token'
const apitoken = 'https://car.ctn-dev.net/api/token'

async function token() {
    try {
        let token = localStorage.getItem('token');

        // Check if token is not null before attempting to access its properties
        if (token !== null) {
            let token_json = JSON.parse(token).token;

            $.ajax({
                type: 'post',
                url: apitoken,
                contentType: "application/json",
                headers: { "Authorization": token_json },
                success: function (data) {
                // ทำสิ่งที่ต้องการกับข้อมูลที่ได้รับ (สถานะสำเร็จ)
                // console.log('มีสมาชิก:');
                var currentPath = window.location.pathname;

                // หรือใช้ document.location
                // var currentPath = document.location.pathname;

                // console.log('Current Path:', currentPath);
                if (currentPath == "/login.html") {
                    console.log("ไปหน้าHome")
                    window.location.href = '/index.html';
                } 
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.error('ไม่มีสมาชิก');
                    window.location.href = '/login.html';
                    localStorage.removeItem('token');
                    localStorage.removeItem('refresh');
                }
            });
        } else {
            // console.error('Token is null. Unable to make the request.');
        }
    } catch (err) {
        // console.error(err);
    }
}

token();
