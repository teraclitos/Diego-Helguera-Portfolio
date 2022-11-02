<?php  

$addressee = `tefans12@gmail.com`;
$name = $_POST[`name`];
$asunto = $_POST[`asunto`];
$email = $_POST[`email`];
$text = $_POST[`text`];


mail($addressee, $asunto, $text)
?>