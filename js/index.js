function sendMail(){
    console.log("sendMail");
    
    var question = document.getElementById('question').value;
    var email = document.getElementById('email').value;

    if(email && question){
        document.getElementById('cover-spin').style.display = "block";
        (async () => {
            const rawResponse = await fetch('https://pf-mailserver.herokuapp.com/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({"email": email, "message":question})
            });
            const content = await rawResponse.json();
            if (content.status == "success"){
                document.getElementById('cover-spin').style.display = "none";
                document.getElementById('question').value = '';
                document.getElementById('email').value = '';
                alert('Your response has been recorded');
            }else{
                document.getElementById('cover-spin').style.display = "none";
            }
            // console.log(content);
          })();
    }
    else{
        alert('Please fill Form Properly');
    }
}