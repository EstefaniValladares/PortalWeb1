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
    'Corte gratis',
    '20% Descuetno en SPA',
    'Dia de esterilización',
    'Nueva marca de croquetas',
    'Un dia de Adiestramiento'
  ];

  descripciones = [
    'Llevate un corte para tu mascota gratis',
    'Obtén el 20% de descuento para un dia de SPA para tu mascota',
    'Esteriliza a tu mascota, en este dia, aprovecha la campaña de esterilizacion',
    'Conoce la nueva marca de croquetas. Una nueva marca que tiene la mejor proteina para tu mascota',
    'Ven con tu mascota y obten un dia de adiestramiento canino para que mejore sus habilidades de convivencia'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
