import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Consulta } from "@/Interfaces/IPersona";
import { Usuario } from "@/Interfaces/IUsuario";

export const registrarConsulta = async(consulta:Consulta)=>{
    const docRef = await addDoc(collection(db, "consultas"), consulta);
}

export const obtenerConsultas = async()=>{
    let consultas:Consulta[] = []
    const querySnapshot = await getDocs(collection(db, "consultas"));
    querySnapshot.forEach((doc) => {
        let consulta:Consulta = {
            nombre:doc.data().nombre,
            apellido:doc.data().apellido,
            email:doc.data().email,
            telefono:doc.data().telefono,
            rut:doc.data().rut,
            dia:doc.data().dia,
            motivo:doc.data().motivo,
            comentario:doc.data().comentario,
            key:doc.id
        }
        consultas.push(consulta)
    });
    return consultas
}
export const obtenerConsulta = async(key:string)=>{
    const docRef = doc(db, "consultas", key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let consulta:Consulta = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            email:docSnap.data().email,
            telefono:docSnap.data().telefono,
            rut:docSnap.data().rut,
            dia:docSnap.data().dia,
            motivo:docSnap.data().motivo,
            comentario:docSnap.data().comentario,
            
            key:docSnap.id
        }
        return consulta
    } else {
      return undefined
    }
}
export const actualizarConsulta = async(p:Consulta)=>{
    const ref = doc(db,"consultas",p.key!)
    await updateDoc(ref,{...p})
}

export const eliminarConsulta = async(key:string)=>{
    const docRef = doc(db, "consultas", key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        deleteDoc(docRef)
    }
}

export const registrarUsuario = async(usuario:Usuario)=>{
    const docRef = await addDoc(collection(db, "usuarios"), usuario);
}

export const obtenerUsuario = async(password:string)=>{
    const docRef = doc(db, "usuarios", password);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let usuario:Usuario = {
            nombre:docSnap.data().nombre,
            password:docSnap.data().password
        }
        return usuario
    } else {
      return undefined
    }
}