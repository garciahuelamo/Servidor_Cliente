<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <main>
        <?php

            include "config.php";

            $peticion = "
            SELECT *
            FROM admin
            WHERE usuario = '".$_POST['usuario']."'
            AND contrasena = '".$_POST['contrasena']."'
            ;";

            $resultado = mysqli_query($conexion, $peticion);

            if($fila = mysqli_fetch_assoc($resultado)){
                $_SESSION['usuario'] = $fila['usuario'];
                echo "
                    <div class='correcto'>
                        <img src='../Img/alegre.jpg' alt='V'>
                        <p>Usuario correcto. Registrando acceso en el sistema.
                        Redirigiendo en 5 segundos...</p>
                    </div>
                ";
                echo '<meta http-equiv="refresh" content="5;url=../html/home.html">';
            } else{
                echo "
                    <div class='incorrecto'>
                        <img src='../Img/triste.jpg' alt='X'>
                    </div>
                    <p>Usuario incorrecto. Registrando acceso incorrecto en el sistema.
                    Redirigiendo en 5 segundos...</p>
                ";
                echo '<meta http-equiv="refresh" content="5;url=../html/index.php">';
            }
        ?>
    </main>
</body>
</html>

