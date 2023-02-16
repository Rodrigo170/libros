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

}
