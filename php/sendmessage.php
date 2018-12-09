<?php

ini_set('display_errors',1);
error_reporting(E_ALL);
include 'functions.php';

$subject = $_POST['subject'];
$message = $_POST['message'];
$to = $_POST['to'];
$from = "fromsite@glukov.net.ua\r\n";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"\n";
$headers .= "From: $from";

$send = mail($to, $subject, $message, $headers);
 if ($send == 'true'){
	$responce = 'Ok';
 } else {
 	$responce = 'Bad';
 }

$r = json_encode($responce);
echo($r);


