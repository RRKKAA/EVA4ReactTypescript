import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Usuario } from '@/Interfaces/IUsuario'
import { registrarUsuario } from '@/Firebase/Promesas'


const initialState:Usuario = {
    nombre:"",
    password:""
}

export const Pagina2 = () => {
    const [usuario, setUsuario] = useState<Usuario>(initialState)
    
    const handleUsuario = (name:string,value:string)=>{
        setUsuario({...usuario,[name]:value})
    }

    const registrar = ()=>{
        registrarUsuario(usuario).then(()=>{
            alert("Se logro registrar")
        }).catch((e)=>{
            console.log(e);
            alert("Algo ocurrio")
        })
    }


  return (
    <>
    {/* nombre,apellido,correo,fechaNacimiento,edad,rut */}
    
    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su nombre: '
            name="nombre"
            onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su contraseña: '
             name="password"
             onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}} />
            
            <Form.Text></Form.Text>
        </Form.Group>
        <Button type="button" variant='success'
            onClick={registrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default Pagina2