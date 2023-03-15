import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  
  //propiedades
  libros:Libro[] = [];
  libro = new Libro();

  constructor(private libroService:LibroService) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(data => {
      this.libros = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Libro,
          id:doc.payload.doc.id
        };
      })
    });
  }

  //MÉTODO PARA INSERTAR UN NUEVO LIBRO
  insertarLibro(){
    this.libroService.insertarLibro(this.libro);
    this.libro = new Libro();
  }

  //MÉTODO PARA SELECIONAR UN LIBRO Y QUE SE ASIGNE A LA PROP LIBRO
  selectLibro(libroSeleccionado:Libro){
    this.libro = libroSeleccionado;
  }

  //MÉTODO PARA ACTUALIZAR UN Libro
  updateLibro(){
    this.libroService.updateLibro(this.libro);
    this.libro = new Libro();
  }

  //MÉTODO PARA ELIMINAR UN LIRBO
  deleteLibro(id:string){
    this.libroService.deleteLibro(id);
    this.libro = new Libro();
  }



}
