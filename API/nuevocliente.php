<?php

    include "config.php";
    
    $peticion = "
        INSERT INTO clientes
        VALUES(
            NULL,
            '".$_GET['nombre']."',
            '".$_GET['cif']."',
            '".$_GET['direccion']."',
            '".$_GET['cp']."',
            '".$_GET['horario']."',
            '".$_GET['telefono']."'
        );";
    $resultado = mysqli_query($conexion, $peticion);

?>