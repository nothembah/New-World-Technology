function submitButton(){

    if(fullname.checkValidity() === true && email.checkValidity() === true && message.checkValidity() === true){
        if(document.getElementById("general").checked){
            alert("Thank you for your general enquiry. We'll respond soon.");
        } else if(document.getElementById("other").checked){
            alert("Thank you for your enquiry. We'll respond soon.");
        } else {
            alert("Thank you for your product enquiry. We'll respond soon.");
        }

    }
}

