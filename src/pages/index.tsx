import Link from "next/link";
import { Button, Form, Modal, } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { obtenerUsuario } from "@/Firebase/Promesas";

export default function Home() {

  const [nombre, setNombre] = useState(""); 
  const [password, setPassword] = useState("");

  const [show, setShow] =
  useState(false);

  //const []

  const ocultar = ()=>
      setShow(false);

  const mostrar = ()=>
      setShow(true);

  const validarUsuario = ()=>{
    if(password != ""){
      if (password.toLowerCase() == "adminadmin"){
        setNombre("Administrador")
        mostrar();
      }
      else{
        obtenerUsuario(password).then((p)=>{
          if(p!=undefined){
              mostrar();
          }
          else{
              alert("Ingresaste la contraseña errada o la cuenta no existe, Intente de nuevo")
          }
        })
      }
    }
    else{
      alert("Por favor, Ingrese una contraseña")
    }
  }
  
  return (
    <>

      <Form>
        <Form.Group>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su contraseña: '
             name="password"
             onChange={(e)=>{setPassword(e.currentTarget.value)}} />
            
            <Form.Text></Form.Text>
            </Form.Group>
            <Button variant='primary' type='button' onClick={validarUsuario}>Ingresar</Button>
        </Form>

        <Modal show={show} onHide={ocultar} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>
              Bienvenido a su cuenta: {nombre}
            </Modal.Title>
          </Modal.Header>          
          <Modal.Footer>
            <Link href="/index2">
          <Button variant="primary" onClick={ocultar}>Ingresar</Button>
          </Link>
          </Modal.Footer>
        </Modal>    
    </>
    
  );
}
