import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Persona } from "@/Interfaces/IPersona";
import { Usuario } from "@/Interfaces/IUsuario";

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}

export const obtenerPersonas = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db, "personas"));
    querySnapshot.forEach((doc) => {
        let persona:Persona = {
            rut:doc.data().rut,
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre,
            key:doc.id
        }
        personas.push(persona)
    });
    return personas
}
export const obtenerPersona = async(key:string)=>{
    const docRef = doc(db, "personas", key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let persona:Persona = {
            rut:docSnap.data().rut,
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            edad:docSnap.data().edad,
            fechaNacimiento:docSnap.data().fechaNacimiento,
            nombre:docSnap.data().nombre,
            key:docSnap.id
        }
        return persona
    } else {
      return undefined
    }
}
export const actualizarPersona = async(p:Persona)=>{
    const ref = doc(db,"personas",p.key!)
    await updateDoc(ref,{...p})
}

export const eliminarPersona = async(key:string)=>{
    const docRef = doc(db, "personas", key);
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