<?php
    $email = $_POST['email']; // от кого
    $name = $_POST['name']; 
    $msg= $_POST['msg'];

    // $from = "admin@ehoss.com";
    $to = "greem.cr@gmail.com";
    $subject = "Cообщение с сайта EHOSS";
    $message = "Сообщение от".$name ,:<br>.$msg ;
    $headers = "From:" . $email;
    mail($to,$subject,$message,$headers);
    echo "The email message was sent.";
?>