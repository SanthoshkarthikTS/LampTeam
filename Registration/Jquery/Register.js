$(document).ready(function() {
	$('#submit').click(function() {
		var fname = $('#firstName').val();		
		var lname = $('#lastName').val();
		var passwordval = new RegExp('^([^0-9]{1,30})');
		var passworderror = $('#password').val();
		var confirmPassword = $('#confirmPassworderror').val();
		var Gender = $('#Gender').val();
		var DOB = $('#Dateofbirth').val();
		var Emailid = $('#EmailId').val();
		var Mobile = $('#Mobile').val();
		var checkBox = $('input.checkBox').is(':checked');
		var address = $("textarea#Addressbox").val();
		var State = $ ( '#selectState' ).val(); 
		var City = $( '#selectCity').val();
		var security_Question = $( '#selectSecurityQuestion' ).val();
		var Answer = $('#Answer').val();
		var valid = true;
//FirstName validation 
		if( fname == "" )
			{	
				$('#FirstName_error').html( "<span>Please type your firstName</span>" );
				$( "#firstName" ).focus();
				var valid = false;
			}
		else
			{	
				$( '#FirstName_error' ).html("");
				var fnameval = new RegExp( '^([a-zA-Z]{1,30})' );
				if( !fnameval.test( fname ) )
					{
						$( '#FirstName_error' ).html( "<span>Enter text only</span>" );
						var valid = false;
					}
			}	
//LastName Validation
		if( lname == "" )
			{
				$( "#lastName" ).focus();
				$('#LastName_error').html( "<span>Please type your lastName</span>");
				var valid = false;
			}
		else
			{	
				$( '#LastName_error' ).html("");
				var lnameval = new RegExp( '^([a-zA-Z]{1,30})' );
				if( !lnameval.test( lname ) )
					{
						$( '#LastName_error' ).html( "<span>Enter text only</span>" );
						var valid = false;
					}
			}	
//Password Validation
		if( passworderror == "" )
			{
				$( "#password" ).focus();
				$( '#password_error' ).html( "<span>Please type your password</span>" );
				var valid = false;
			}
		else
			{	
				$( '#password_error' ).html("");
				var passwordval = new RegExp( '^([^0-9]{1,30})' );
				if( !passwordval.test( passworderror ) ) 
					{
						$( '#password_error' ).html( "<span>Enter valid password</span>" );
						var valid = false;
					}
			}
//ConfirmPassword Validation
		if( confirmPassword == "" )
			{
				$( "#confirmPassworderror" ).focus();
				$( '#confirmpassword_error' ).html( "<span>Please type your confirm password</span>" );
				var valid = false;
			}
		else
			{	
				$( '#confirmpassword_error' ).html("");
				if( confirmPassword != passworderror ) 
					{
						$( '#confirmpassword_error' ).html( "<span>Enter Correct password</span>" );
						var valid = false;
					}	
			}
//Gender Validation
		if( $( "#Gender:checked" ).length == 0) 
			{
				$( '#gender_error' ).html( "<span>Please select your Gender</span>" );
				var valid = false;
			}
		else
			{
				$( '#gender_error' ).html( "");
			}
//Date Of Birth Validation
		if( DOB == "" )
			{
				$( '#dob_error' ).html( "<span>Select your date of birth</span>" );
				var valid = false;
			}
		else
			{
				$( '#dob_error').html("");
			}
//Email-Id Validation
		if( Emailid == "" )
			{
				$( "#EmailId" ).focus();
				$('#email_error' ).html( "<span>Enter your Email-Id</span>" );
				var valid = false;
			}
		else
			{	
				$( '#email_error' ).html("");
				var emailval = new RegExp( '^([a-zA-Z0-9]{1,30}[@][a-zA-Z]{1,30}[.][a-zA-Z0-9]{1,30})' );
				if( !emailval.test( Emailid ) )
					{
						$( '#email_error' ).html( "<span>Enter valid Email-Id</span>" );
						var valid = false;
					}
			}
//Mobile Number validation
		if( Mobile == "" )
			{
				$( "#Mobile" ).focus();
				$( '#mobilenumber_error' ).html( "<span>Please type your Mobile Number</span>" );
				var valid = false;
			}
		else
			{	
				$( '#mobilenumber_error' ).html( "" );
				var mobval = new RegExp('^([0-9]{10})');
				if( !mobval.test( Mobile ) )
					{
						$( '#mobilenumber_error' ).html( "<span>Enter 10 digit number</span>" );
						var valid = false;
					}	
			}
//checkBox validation
		if(!$('input#checkBox').is(':checked'))
			{ 
				$('#checkBox_error').html("<span>Select atleast one</span>");
				var valid = false;
			}
		else
			{
				$('#checkBox_error').html("");
			}
//Address validation
		var address = $("textarea#Addressbox").val();
		if(address == "")
			{
				$("#Address_error").html("<span>Enter your Address</span>");
				$("#Addressbox").focus();
				var valid = false;
			}
		else 
			{
				$("#Address_error").html("");
			}
//State validation
		if( State == "")
			{
				$( "#state_error" ).html( "<span>Select your state</span>" );
				var valid = false;
			}
		else
			{
				$( "#state_error" ).html( "" );
			}
//City validation
		if( City == "" )
			{
				$( '#city_error' ).html( "<span>Select your city</span>" );
				var valid = false;
			}
		else
			{
				$( '#city_error' ).html( "" );
			}
//Security question validation
		if( security_Question == "" )
			{ 
				$( '#securityQuestion_error' ).html( "<span>Select your security question</span>" );
				var valid = false;
			}
		else
			{
				$( '.securityQuestion_error' ).html( "");
			}
//Answer validation
		if( Answer == "" )
			{
				$( "#Answer" ).focus();
				$( '#Answer_error' ).html( "<span>Select your Answer</span>" );
				var valid = false;
			}
		else
			{
				$( '#Answer_error' ).html( "" );
			}
		if(valid)
			{
				return true;
			}
		else
			{
				return false;
			}
	});
});
