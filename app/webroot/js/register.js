$(document).ready(function(){
	/**************Form Validation Start******************/
    $('#submit').click(function(){
        $('.Fvalidation').hide();
        var status = true;
        var empty_field_string = "Please fill out this field";
        var Registration_name = $('#name').val();
        var Registration_email = $('#register_email').val();
        
        var Registration_mobile = $('#mobile').val();
        var Registration_password = $('#user_password').val();
        var Registration_cpassword = $('#Cpassword').val();
        var Registration_city = $('#city').val();
        var Registration_institute = $('#Institute').val();
        var Registration_year = $('#year').val();
        var Registration_uploadImage = $('#Image').val();
        function CheckPassword(Registration_cpassword)   
        {   
        Registration_password=  /^[A-Za-z]\w{7,14}$/;  
        if(inputtxt.value.match(Registration_password))   
        {   
        alert('Correct, try another...')  
        return true;  
        }  
        else  
        {   
        alert('Wrong...!')  
        return false;  
        }  
        }
        function CheckEmail(Registration_email){
            var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            status = emailCheck.test(Registration_email);
            if(status == false)
            {
                $('#Register_email').text('Enter email in correct format').show();
            }
        }
        CheckEmail(Registration_email);
        function CheckMobile(Registration_mobile){
            var numCheck = /^\s*\d+\s*$/;
            status = numCheck.test(Registration_mobile);
            if(status == false)
            {
                $('#Register_mobile').text('Mobile Number should be Numeric').show();
            }
        }
        CheckMobile(Registration_mobile);
        if(Registration_name == ""){
            $('#Register_name').show();
            status = false;
        }
        if(Registration_email == ""){
            $('#Register_email').text(empty_field_string).show();
            status = false;
        }
        if(Registration_mobile == ""){
            $('#Register_mobile').text(empty_field_string).show();
            status = false;
        }
        if(Registration_password == ""){
            $('#Register_password').text(empty_field_string).show();
            status = false;
        }
        if(Registration_cpassword == ""){
            $('#Register_Cpassword').text(empty_field_string).show();
            status = false;
        }
        if(Registration_city == ""){
            $('#Register_city').show();
            status = false;
        }
        if(Registration_institute == ""){
            $('#Register_institute').show();
            status = false;
        }
        if(Registration_year == ""){
            $('#Register_year').show();
            status = false;
        }
        if(Registration_password != Registration_cpassword)
        {
            $('#Register_Cpassword').text('Password Not Matched').show();
            status = false;
        }

        return status;
    });

 

    /***************Form Validation End******************/
});
