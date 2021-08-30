import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
//import { MessageService } from './services/message.service';
//import swal from 'sweetalert';

@Component({
  selector: 'app-contactanos',
  templateUrl: 'contactanos.component.html',
  styleUrls: ['contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(/*@Inject(String) public _MessageService: MessageService*/) {
  }

    ngOnInit(): void {};


  contactForm(form){
    //this._MessageService.sendMessage(form).subscribe(() => {
     // swal("Formulario de contacto", "Mensaje enviado correctamente", 'success');
   // });
  }
}

