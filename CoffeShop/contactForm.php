<?php

if(!empty($_POST)) {
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
		echo 'Plese, fill in all spaces';
	}

  	$name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $recipient = "sawadacoffee@gmail.com";  // send the form to this address once submitted
    mail($recipient, $name, $message);
}