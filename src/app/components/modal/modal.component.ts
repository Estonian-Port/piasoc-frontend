import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 formMonto: FormGroup

  constructor(private miFormBuild:FormBuilder) {
    this.formMonto=this.miFormBuild.group({
      monto :['', [Validators.min(0)]],
    })
  }

  @Input()
  modal = false

  @Input()
  modalAmigos = false

  @Input()
  modalCredito = false

  @Input()
  usuario : Usuario = new Usuario(0,"","","",0,"",0)

  @Input()
  listaUsuarios! : Usuario[]
  
  @Input()
  titulo = ""
  
  @Input()
  cuerpo = ""
  
  @Input()
  boton = ""

  monto: any | undefined

  @Output() 
  outputAceptar = new EventEmitter<number>();

  @Output() 
  outputChangeModal = new EventEmitter<boolean>();


  ngOnInit(): void {
  }

  changeModal(){
    this.modal = false
    this.modalAmigos = false
    this.modalCredito = false
    this.outputChangeModal.emit(this.modal)
    this.monto = 0
  }

  aceptar(){
    if (this.formMonto.valid){
    this.outputAceptar.emit(this.monto);
    this.changeModal()
    }
  }

}
