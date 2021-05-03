import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  moneda_entrada = 'USD'
  moneda_salida = 'EUR'
  total = 0; 
  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  constructor() { }


  ngOnInit(): void {
  }

  convertirMoneda():void{
    switch (this.moneda_entrada) {
      case 'USD':
        if(this.moneda_salida ==='USD'){
          this.total = this.cantidad;
        }
        if(this.moneda_salida ==='EUR'){
          this.total = this.cantidad * 0.83;
        }
        if(this.moneda_salida ==='LIBRA'){
          this.total = this.cantidad * 0.72;
        }        
        break;

      case 'EUR':
        if(this.moneda_salida ==='USD'){
          this.total = this.cantidad * 1.20;
        }
        if(this.moneda_salida ==='EUR'){
          this.total = this.cantidad
        }
        if(this.moneda_salida ==='LIBRA'){
          this.total = this.cantidad * 0.87;
        }        
        break;

      case 'LIBRA':
        if(this.moneda_salida ==='USD'){
          this.total = this.cantidad * 1.38;
        }
        if(this.moneda_salida ==='EUR'){
          this.total = this.cantidad * 1.15
        }
        if(this.moneda_salida ==='LIBRA'){
          this.total = this.cantidad;
        }        
        break;

      default:
        break;
    }
  }

}
