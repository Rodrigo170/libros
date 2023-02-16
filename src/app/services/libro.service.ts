import { Injectable } from '@angular/core';

import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';



@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  //metodo que permite tener todos los doc de la colección
  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();
  }

  //método para insertar un documento en la colección
  insertarLibro(libro:Libro){
    return this.firestore.collection('libros').add(Object.assign({},libro));
  }

  //método para actualizar un doc existente
  updateLibro(libro:Libro){
    return this.firestore.doc('libros/'+libro.id).update(libro);
  }

  deleteLibro(libro:Libro){
    return this.firestore.doc('libros/'+libro.id).delete();
  }



}
