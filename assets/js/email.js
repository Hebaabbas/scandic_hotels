

function sendMail(){
var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
}
 
emailjs.send('service_u77afju', 'template_mageqwt', templateParams, "rbSvDk825LGhLJpd6")
    .then(function(response) {
       console.log('Your message was sent successfully', response.status, response.text);
    }, function(error) {
       console.log('Please try again', error);
    });
}