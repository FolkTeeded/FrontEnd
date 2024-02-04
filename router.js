async function token() {
    try {
        let token = localStorage.getItem('token');
        let token_json = (JSON.parse(token)).token;

        $.ajax({
            type: 'post',
            url: `http://localhost:3000/api/token`,
            contentType: "application/json",
            headers: { "Authorization": token_json },
            success: function (data) {
                // ทำสิ่งที่ต้องการกับข้อมูลที่ได้รับ (สถานะสำเร็จ)
                console.log('มีสมาชิก:');
                var currentPath = window.location.pathname;

                // หรือใช้ document.location
                // var currentPath = document.location.pathname;

                console.log('Current Path:', currentPath);
                if (currentPath == "/login.html") {
                    console.log("ไปหน้าHome")
                    window.location.href = '/index.html';
                } 

            },
            error: function (xhr, textStatus, errorThrown) {
                // ทำสิ่งที่ต้องการเมื่อเกิดข้อผิดพลาด (สถานะผิดพลาด)
                console.error('ไม่มีสมาชิก');
                window.location.href = '/login.html';
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');


            }
        });
    } catch (err) {
        console.log(err);
    }
}
token();
