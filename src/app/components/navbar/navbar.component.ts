import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacionService } from 'src/app/services/navegacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router : Router, public navegacionService : NavegacionService) { }

  element : any

  ngOnInit(): void {
  }

  seguros() {
    this.router.navigateByUrl('/seguros')
  }

  cotizacion() {
    this.router.navigateByUrl('/cotizacion')
  }

  home() {
    this.navegacionService.irA = "home"
    this.router.navigateByUrl('/')
  }

  quienesSomos() {
    this.navegacionService.irA = "quienes-somos"
    this.router.navigateByUrl('/')
  }

  companias() {
    this.navegacionService.irA = "companias"
    this.router.navigateByUrl('/')
  }

}
