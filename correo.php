<?php

//Declaración de variables del formulario
 $name = $_POST['name'];
 $email = $_POST['email'];
 $msg = $_POST['msg'];

 //Datos del email
 $para = 'rosae.dc@gmail.com';
 $titulo = 'Preguntas portafolio';
 $header = "From: " . $email;
 $msjCorreo = "Nombre: $name\n E-mail: $email\n Mensaje:\n $msg";


 if($_POST['submit']){
     if(@mail($para, $titulo, $msjCorreo, $header)){
         echo "<script language='javascript'>
         alert('Mensaje enviado, muchas gracias por contactar.');</script>";
     }else{
         echo 'Falló el envío';
     }
 }
?>