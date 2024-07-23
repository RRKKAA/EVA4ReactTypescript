import { eliminarConsulta, obtenerConsultas, obtenerConsulta } from '@/Firebase/Promesas'
import { Consulta } from '@/Interfaces/IPersona'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TablaRegistros = () => {
    const [consultas, setConsultas] = useState<Consulta[]>([])
    useEffect(()=>{
        //Traer listado de personas desde las promesas
        obtenerConsultas().then((consultas)=>{
            //Meter el listado dentro del estado
            setConsultas(consultas)
        }).catch((e)=>{
            console.log(e)
            alert("Algo ocurrio")
        })
    },[])

    const [show, setShow] =
    useState(false);

    //const []

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

    const [consulta, setConsulta] = useState<Consulta>(initialState)

    const router = useRouter()  

    const ocultar = ()=>
        setShow(false);

    const mostrar = ()=>{
        setShow(true);
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerConsulta(key).then((g)=>{
                if(g!=undefined){
                    setConsulta(g)
                }
            })
        }
    }

    const eliminar = ()=>{
        setShow(false);
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            eliminarConsulta(key).then(()=>{
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
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Rut</th>
                        <th>Dia</th>
                        <th>Motivo</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        consultas.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.nombre}</td> 
                                    <td>{p.apellido}</td>
                                    <td>{p.email}</td>
                                    <td>{p.telefono}</td>
                                    <td>{p.rut}</td>
                                    <td>{p.dia}</td>
                                    <td>{p.motivo}</td>
                                    <td>{p.comentario}</td>
                                    <td>
                                        <Link href={{pathname:'ActualizacionRegistros',query:{key:p.key}}}>
                                        <Button variant='warning'><FaEdit /></Button>
                                        </Link>
                                        <Link href={{query:{key:p.key}}}>
                                        <Button variant='danger' onClick={mostrar}><MdDelete /></Button>
                                        </Link>
                                        <Modal show={show} onHide={ocultar} backdrop="static" keyboard={false}>
                                            <Modal.Header>
                                                <Modal.Title>
                                                    Eliminar Consulta de {consulta.nombre} {consulta.apellido}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                ¿En serio deseas eliminar esta? La eliminacion sera permanente y tendras que registrarte otra vez si lo haces. ¿Deseas continuar?
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
export default TablaRegistros