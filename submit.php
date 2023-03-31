<!DOCTYPE html>
<html>
<head>
	<title>Contact Us - Submission</title>
</head>
<body>
	<h1>Contact Us - Submission</h1>
	<?php
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$name = $_POST['name'];
			$lname = $_POST['lname'];
			$email = $_POST['email'];
			$phone = $_POST['phone'];
			$message = $_POST['message'];

			echo "<p><strong>Name:</strong> $name</p>";
			echo "<p><strong>LName:</strong> $lname</p>";
			echo "<p><strong>Email:</strong> $email</p>";
			echo "<p><strong>Phone:</strong> $phone</p>";
			echo "<p><strong>Message:</strong> $message</p>";
		} else {
			echo '<p>No form submission found.</p>';
		}
	?>
</body>
</html>
