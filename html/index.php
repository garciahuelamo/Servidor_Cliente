<?php
    include "../API/log.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AV - Programm</title>
    <link rel="stylesheet" href="../CSS/login.css">
</head>
<body>

    <header>
        <h1>LOGIN</h1>
    </header>   
    
    <form action="../API/login.php" method="POST">
        <div style="margin: 40px;">
            <img id="logo" src="../Img/R.jpg" alt="AVP" width="300" height="150">
            <input type="text" name="usuario" placeholder="Usuario:">
            <input type="password" name="contrasena" placeholder="Contraseña:">
            <input type="submit">
        </div>
    </form>
</body>
</html>