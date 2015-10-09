<!Doctype html>
<html>
	<head> 
		<title>User List </title>
		<link rel = "stylesheet" type = "text/css" href = "css/Register.css">
	</head>
	<body>
		<h1>User List</h1>
		<?php  
 			if (!ini_get('display_errors')) 
 				{
 					ini_set('display_errors', '1');
 				}
 				$connection = mysqli_connect("localhost", "root", "aspire@123", "registrationform");
 				$select_all = "SELECT * FROM regForms";
				$result = mysqli_query( $connection, $select_all);
				echo "<table border = '1'>
 				<tr>
 					<th>FirstName</th>
 					<th>LastName</th>
 					<th>Password</th>
 					<th>Gender</th>
 					<th>DateOfBirth</th>
 					<th>EmailId</th>
 					<th>MobileNo</th>
 					<th>Nationality</th>
 					<th>Address</th>
 					<th>State</th>
 					<th>City</th>
 					<th>SecurityQuestion</th>
 					<th>Answer</th>
				</tr>";
 				while($row = mysqli_fetch_assoc($result))
 					{
 						echo"<tr>";
 						echo "<td>" .$row['fname']."</td>";
 						echo "<td>" .$row['lname']."</td>";
 						echo "<td>" .$row['password']."</td>";
 						echo "<td>" .$row['gender']."</td>";
 						echo "<td>" .$row['dob']."</td>";
 						echo "<td>" .$row['emailid']."</td>";
 						echo "<td>" .$row['mobile']."</td>";
 						echo "<td>" .$row['nationality']."</td>";
 						echo "<td>" .$row['address']."</td>";
 						echo "<td>" .$row['state']."</td>";
 						echo "<td>" .$row['city']."</td>";
 						echo "<td>" .$row['securityquestion']."</td>";
 						echo "<td>" .$row['answer']."</td>";
 						echo "<tr>";
 					}
 				echo "</table>";
 			    echo mysqli_field_type($row);
				mysqli_close($connection);
		 ?>
	</body>
</html>
