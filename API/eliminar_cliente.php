<?php

include "config.php";

if(isset($_POST['id']) && is_numeric($_POST['id'])) {

    $peticion = "DELETE FROM tu_tabla WHERE id = " . $_POST['id'];

    if(mysqli_query($conexion, $peticion)) {
        echo "Elemento eliminado correctamente.";
    } else {
        echo "Error al eliminar el elemento: " . mysqli_error($conexion);
    }
} else {
    echo "ID no válido.";
}

?>