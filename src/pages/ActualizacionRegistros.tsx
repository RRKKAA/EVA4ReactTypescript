import { actualizarConsulta, obtenerConsulta } from '@/Firebase/Promesas'
import { Consulta } from '@/Interfaces/IPersona'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


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

export const ActualizacionRegistros = () => {
  const router = useRouter()  
  const [consulta, setConsulta] = useState<Consulta>(initialState)
    
  const handleConsulta = (name:string,value:string)=>{
      setConsulta({...consulta,[name]:value})
  }


  useEffect(()=>{
    const key = router.query.key;
    if(key!=undefined && typeof(key)=="string"){
        obtenerConsulta(key).then((p)=>{
            if(p!=undefined){
                setConsulta(p)
            }
            else{
                //Volver a la tabla
            }
        })
    }else{
        //Volver a la tabla
    }
    
  },[])

  const modificar = ()=>{
    actualizarConsulta(consulta).then(()=>{
        alert("Se actualiza con exito")
    })
  }
  return (
    <>
        <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su nombre: '
            value={consulta.nombre}
            name="nombre"
            onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su apellido: '
            value={consulta.apellido}
             name="apellido"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
            
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control  type='email' placeholder='Ingrese su Email: ' 
            value={consulta.email}
             name="correo"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
             
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Telefono:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su Telefono: ' 
            value={consulta.telefono}
             name="telefono"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
             
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Rut:</Form.Label>
            <Form.Control  type='text' placeholder='Ingrese su rut: ' 
            value={consulta.rut}
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
            <Form.Select name="motivo" value={consulta.motivo} onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}}>
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
            value={consulta.comentario}
             name="edad"
             onChange={(e)=>{handleConsulta(e.currentTarget.name,e.currentTarget.value)}} />
             
            <Form.Text></Form.Text>
        </Form.Group>
        <Button type="button" variant='success'
            onClick={modificar}>Modificar</Button>
    </Form>
    </>
  )
}
export default ActualizacionRegistros