<?php

class ControladorProductos{

    static public function ctrMostrarCategorias($item, $valor){

        $tabla = "categorias";
        $respuesta = ModeloProductos::mdlMostrarCategorias($tabla, $item, $valor);
        return $respuesta;
    }

    static public function ctrMostrarSubCategorias($id){

        $tabla = "subcategorias";
        $respuesta = ModeloProductos::mdlMostrarSubCategorias($tabla, $id);
        return $respuesta;
    }
}