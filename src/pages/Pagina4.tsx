import { eliminarPersona, obtenerPersona, obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/IPersona'
import { query } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //Traer listado de personas desde las promesas
        obtenerPersonas().then((personas)=>{
            //Meter el listado dentro del estado
            setPersonas(personas)
        }).catch((e)=>{
            console.log(e)
            alert("Algo ocurrio")
        })
    },[])

    const [show, setShow] =
    useState(false);

    //const []

    const initialState:Persona = {
        apellido:"",
        correo:"",
        edad:0,
        fechaNacimiento:"",
        nombre:"",
        rut:""
    }

    const [persona, setPersona] = useState<Persona>(initialState)

    const router = useRouter()  

    const ocultar = ()=>
        setShow(false);

    const mostrar = ()=>{
        setShow(true);
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerPersona(key).then((g)=>{
                if(g!=undefined){
                    setPersona(g)
                }
            })
        }
        return key
    }

    const eliminar = ()=>{
        setShow(false);
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            eliminarPersona(key).then(()=>{
                alert("La cuenta ha sido eliminada con exito")
            })
        }

    }


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Correo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Edad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personas.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.nombre}</td> 
                                    <td>{p.apellido}</td>
                                    <td>{p.rut}</td>
                                    <td>{p.correo}</td>
                                    <td>{p.fechaNacimiento}</td>
                                    <td>{p.edad}</td>
                                    <td>
                                        <Link href={{pathname:'Pagina5',query:{key:p.key}}}>
                                        <Button variant='warning'><FaEdit /></Button>
                                        </Link>
                                        <Link href={{query:{key:p.key}}}>
                                        <Button variant='danger' onClick={mostrar}><MdDelete /></Button>
                                        </Link>
                                        <Modal show={show} onHide={ocultar} backdrop="static" keyboard={false}>
                                            <Modal.Header>
                                                <Modal.Title>
                                                    Eliminar Cuenta {persona.nombre}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                ¿En serio deseas eliminar tu cuenta? La eliminacion sera permanente y tendras que registrarte otra vez si lo haces. ¿Deseas continuar?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="warning" onClick={ocultar}>Cancelar</Button>
                                                <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                                            </Modal.Footer>
                                        </Modal>    
                                    </td>         
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </Table>
        </>
  )
}
export default Pagina4