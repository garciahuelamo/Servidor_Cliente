<?php

    if(isset($_SESSION)){
        $sesion = $_SESSION;
    } else {
        $sesion = "";
    }

    include "config.php";

    $peticion = "
        INSERT INTO registros
        VALUES (
            NULL,
            '".DATE('U')."',
            '".$_SERVER['REMOTE_ADDR']."',
            '".$_SERVER['HTTP_USER_AGENT']."',
            '".json_encode($sesion)."',
            '".json_encode($_REQUEST)."')
        ;"
    ;

    $resultado = mysqli_query($conexion, $peticion);
?>