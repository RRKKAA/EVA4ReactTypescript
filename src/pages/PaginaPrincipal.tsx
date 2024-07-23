import Link from "next/link";
import Perfil from "./Componentes/Perfil";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const PaginaPrincipal = () => {

  const [show, setShow] =
  useState(false);

  //const []

  const ocultar = ()=>
      setShow(false);

  const mostrar = ()=>
      setShow(true);

  return (
    <>
      <h1> Bienvenido a la pagina principal de pc Factory</h1>

      <div className="d-grid gap-2">
        <Link href='/RegistroUsuario'>
        <Button variant='success' size="lg" onClick={mostrar}>Registrar nuevo usuario</Button>
        </Link>

        <Link href='/RegistroConsulta'>
        <Button variant='warning' size="lg" onClick={mostrar}>Crear nueva consulta</Button>
        </Link>

        <Link href='/TablaRegistros'>
        <Button variant='primary' size="lg" onClick={mostrar}>Ver tabla de consultas</Button>
        </Link>

        <Button variant='danger' size="lg" onClick={mostrar}>Salir de la pagina</Button>
      </div>
      <Modal show={show} onHide={ocultar} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>
              Salir de cuenta
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Deseas terminar su cuenta ahora?
          </Modal.Body>          
          <Modal.Footer>
          <Button variant="warning" onClick={ocultar}>Cancelar</Button>
            <Link href="/">
          <Button variant="danger" onClick={ocultar}>Salir</Button>
          </Link>
          </Modal.Footer>
        </Modal>    
    </>
    
  );
}
export default PaginaPrincipal