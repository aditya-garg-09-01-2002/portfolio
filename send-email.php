<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'mynameisaditya824@gmail.com';
  $subject = 'New Message from Contact Form';
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  $headers = "From: $name <$email>";
  
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // Success
    echo 'Email sent successfully!';
  } else {
    http_response_code(500); // Internal Server Error
    echo 'Failed to send email. Please try again.';
  }
} else {
  http_response_code(400); // Bad Request
  echo 'Invalid request.';
}
?>
