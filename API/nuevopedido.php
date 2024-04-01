<?php

    include "config.php";
    
    $peticion = "
        INSERT INTO pedidos
        VALUES(
            NULL,
            NULL,
            '".$_GET['fecha']."',
            '".$_GET['tipo']."',
            '".$_GET['valor']."',
            '".$_GET['pesoKG']."',
            '".$_GET['destino']."',
            NULL
        );";
    $resultado = mysqli_query($conexion, $peticion);

?>