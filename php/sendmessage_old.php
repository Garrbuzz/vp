<?php

ini_set('display_errors',1);
error_reporting(E_ALL);
include 'functions.php';

$userName = $_POST['userName'];
$userMail = $_POST['userMail'];
$userPhone =$_POST['userPhone'];

$from = "fromsite@glukov.net.ua\r\n";
$subject = 'Повідомлення з сайту www.glukov.net.ua  ';
$subject .= $userName;
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"\n";
$headers .= "From: $from";
$textMessege = "Телефон: " + $userPhone + "Користувач:" + $userName + "\r\n";
$send = mail("buz@glukov.net.ua", $subject, $textMessege, $headers);
 if ($send == 'true'){
	$responce = 'Ok';
 } else {
 	$responce = 'Bad';
 }

$r = json_encode($responce);
echo($r);


