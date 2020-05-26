import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  imagenes = [
    '../../assets/sueter.jpg',
    '../../assets/correa.jpg',
    '../../assets/cama.jpeg',
    '../../assets/negro.jpg',
    '../../assets/esponjado.jpg',
    '../../assets/hueso.jpg',
    '../../assets/gato.jpg',
    '../../assets/collar.jpg'
  ];

  titulos = [
    'Sueter para cachorro',
    'Correa reforzada',
    'Tazon para croquetas',
    'Shampoo para pelo negro',
    'Shampoo para pelo esponjado',
    'Hueso de carnaza',
    'casa para gato',
    'collar para gato'
  ];

  descripciones = [
    'sueter de felpa para cachorro, talla ch, m, g',
    'Correa con refuerzo de 2mt',
    'Tazon antiderrapable para croquetas con division',
    'Shampoo especial para pelo negro y lacio',
    'shampoo especial para pelo esponjado ',
    'Juguete suave',
    'casa original para gato',
    'collar original para gato'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
