import Link from "next/link";
import Perfil from "./Componentes/Perfil";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const index2 = () => {

  const [show, setShow] =
  useState(false);

  //const []

  const ocultar = ()=>
      setShow(false);

  const mostrar = ()=>
      setShow(true);

  return (
    <>
      <nav>
        <Link href='/Pagina1'>Pagina1</Link>
        <Link href='/Pagina2'>Calculadora</Link>
        <Link href='/Pagina3'>Registro</Link>
        <Link href='/Pagina4'>Tabla</Link>
      </nav>
      <p>Hola</p>
      <p>Chao</p>
      <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
      <Perfil nombre="Jose" apellido="Perez" edad={15} />

      <Button variant='danger' onClick={mostrar}>Salir</Button>
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
export default index2