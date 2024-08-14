import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { NavegacionService } from 'src/app/services/navegacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router : Router, public navegacionServioce : NavegacionService){}

  @ViewChild('home')
  private home!: ElementRef;

  @ViewChild('quienesSomos')
  private quienesSomos!: ElementRef;

  @ViewChild('companias')
  private companias!: ElementRef;

  async ngOnInit() {

    // Permite recargar la pagina aunque estes en la pagina al llavar por navbar a router ('/')
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  // Al finalizar la inicializacion de la pagina ejecuta
  ngAfterViewInit(){
    this.irA()
  }
  
  irA(){
    switch(this.navegacionServioce.irA) {
      case "companias": {
        this.companias.nativeElement.scrollIntoView();
        break;
      }
      case "quienes-somos": {
        this.quienesSomos.nativeElement.scrollIntoView();
        break;
      }
      default: {
        this.home.nativeElement.scrollIntoView();
        break;
      }
    }
  }


  cotizacion(){
    this.router.navigateByUrl('/cotizacion')
  }

  seguros() {
    this.router.navigateByUrl('/seguros')
  }

}
