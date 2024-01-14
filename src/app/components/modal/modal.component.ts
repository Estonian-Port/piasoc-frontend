import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  constructor(public router : Router) {}

  @ViewChild('modal') 
  modal!: ElementRef;

  @Input()
  cliente! : Cliente

  @Output() 
  outputAceptar = new EventEmitter<number>();

  ngOnInit(): void {
  }

  mostrarModal(){
    this.modal.nativeElement.click();
  }

  volverHome() {
    this.router.navigateByUrl('/')
  }
}
