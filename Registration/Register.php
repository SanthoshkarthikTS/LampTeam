 <?php
 if (!ini_get('display_errors')) 
 	{
 		ini_set('display_errors', '1');
 	}
 $connection = mysqli_connect("localhost", "root", "aspire@123", "registrationform");
 if (!$connection) 
 	{
 		echo "Error: Unable to connect to MySQL.";
 	}
 	else 
 		{
 			echo "connected";
 		}
 	if (isset($_POST["submit"])) 
 		{
 			$firstname = $_POST['firstName'];
 			$lastname = $_POST['last_name'];
 			$password = $_POST['password'];
 			$gender = $_POST['gender'];
 			$dateofbirth = $_POST['dob'];
 			$emailid = $_POST['emailid'];
 			$mobileno = $_POST['mobileno'];
 			$nationality = $_POST['nationality'];
 			$address = $_POST['address'];
 			$state = $_POST['state'];
 			$city = $_POST['city'];
 			$securityquestion = addslashes($_POST['securityqn']);
 			$answer = $_POST['ans'];
 			$insert_data = "INSERT INTO regForms (fname, lname, password, gender, dob, emailid, mobile, nationality, address, state, city, securityquestion, answer)
 			VALUES('$firstname', '$lastname', '$password', '$gender', '$dateofbirth', '$emailid', '$mobileno', '$nationality', '$address', '$state', '$city', '$securityquestion', '$answer')";
 			//echo $insert_data;
 			if ( !mysqli_query( $connection, $insert_data ) ) 
 				{
 					echo("Input data is fail");
 					printf("Errormessage: %s\n", mysqli_error($connection));
 				} 
 				else 
 					{
 						echo("Input data is suceeded");
 					}
 				
 		}
 mysqli_close($connection);
 
 ?>
