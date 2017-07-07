$(document).ready(function(){
	//begin button events
	$('.submit').click(function(){
		var i=$('#feedbackNumber').val().length;
		//alert(i);
		if(i!=10){
			$('#error').text("Please enter correct phone number");
			return false;
		}
	})
});//end
