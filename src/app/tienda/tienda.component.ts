import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  imagenes = [
    '../../assets/corte.jpg',
    '../../assets/spa.jpg',
    '../../assets/esterilizacion.jpeg',
    '../../assets/croquetas.jpg',
    '../../assets/adiestramiento.jpg'
  ];

  titulos = [
    'Sueter para cachorro',
    'Correa reforzada',
    'Tazon para croquetas',
    'Shampoo para pelo negro',
    'Shampoo para pelo esponjado',
    'Hueso de carnaza'
  ];

  descripciones = [
    'sueter de felpa para cachorro, talla ch, m, g',
    'Correa con refuerzo de 2mt',
    'Tazon antiderrapable para croquetas con division',
    'Shampoo especial para pelo negro y lacio',
    'shampoo especial para pelo esponjado ',
    'Juguete suave'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
