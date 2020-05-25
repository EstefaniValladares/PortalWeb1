import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 110) {
          $('.navbar').addClass('navbarFixed');
          $('.logo').addClass('imagen');
      } else {
          $('.navbar').removeClass('navbarFixed');
          $('.logo').removeClass('imagen');
      }
    });
  }
}
