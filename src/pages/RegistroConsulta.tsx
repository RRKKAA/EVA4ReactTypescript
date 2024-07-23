import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Consulta } from '@/Interfaces/IPersona'
import { registrarConsulta } from '@/Firebase/Promesas'


const initialState:Consulta = {
    nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    rut:"",
    dia:"",
    motivo:"",
    comentario:""
}

export const RegistroConsulta = () => {
    const [consulta, setConsulta] = useState<Consulta>(initialState)
    
    const handleConsulta = (name:string,value:string)=>{
        setConsulta({...consulta,[name]:value})
    }

    const registrar = ()=>{
        registrarConsulta(consulta).then(()=>{
            alert("Se logro registrar");
        }).catch((e)=>{
            console.log(e);
            alert("Algo ocurrio");
        });
    };


  return (
    <>
    {/* nombre,apellido,correo,fechaNacimiento,edad,rut */}
    
    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su nombre: '
            name="nombre"
            onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su apellido: '
             name="apellido"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su Email: ' 
             name="email"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Telefono:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su Telefono: ' 
             name="telefono"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Rut:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su Rut: ' 
             name="rut"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Dia:</Form.Label>
            <Form.Text>Indique que dia quieres hacer la consulta</Form.Text>
            <Form.Check type="radio" label="Lunes" name="dia" value="Lunes" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Martes" name="dia" value="Martes" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Miercoles" name="dia" value="Miercoles" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Jueves" name="dia" value="Jueves" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Viernes" name="dia" value="Viernes" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Sabado" name="dia" value="Sabado" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Check type="radio" label="Domingo" name="dia" value="Domingo" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Motivo:</Form.Label>
            <Form.Select name="motivo" onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}>
                <option>Eliga su motivo</option>
                <option value="Problema tecnico">Problema tecnico</option>
                <option value="Reclamo de producto">Reclamo de producto</option>
                <option value="Disponibilidad de producto">Disponibilidad de producto</option>
                <option value="Otro">Otro</option>
            </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>Comentario:</Form.Label>
            <Form.Control  type='textarea' placeholder='Explique en mas detalle su situacion: ' 
             name="comentario"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>

        <Button type="button" variant='success'
            onClick={registrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default RegistroConsulta