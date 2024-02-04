async function token() {
    try {
        let token = localStorage.getItem('token');
        let token_json = (JSON.parse(token)).token;

        $.ajax({
            type: 'post',
            url: `http://localhost:3000/api/register`,
            contentType: "application/json",
            headers: { "Authorization":  token_json },
            success: function(response) {
                // Handle success response
                if (token_json) {
                    // Do something if token is present
                    console.log("Token passed",token_json);
                } else {
                    console.log("Token not found");
                    // Handle failure as needed
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("AJAX request failed:", textStatus, errorThrown);
                // Handle AJAX request errors
            }
        });
    } catch (err) {
        console.log(err);
    }
}

token();
