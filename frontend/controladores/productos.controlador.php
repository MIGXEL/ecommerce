<?php

class ControladorProductos{

    public function ctrMostrarCategorias(){

        $tabla = "categorias";
        $respuesta = ModeloProductos::mdlMostrarCategorias($tabla);
        return $respuesta;
    }
}