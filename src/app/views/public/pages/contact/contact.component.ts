import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name?:string='';
  phone?:string='';
  email?:string='';
  description?:string=''  ;

  sendContact():void{

    const uriMessage = `https://api.whatsapp.com/send?phone=3160170632&text=¡hola mis datos son!: nombre: ${this.name} contacto: ${this.phone} 
    email: ${this.phone} descripción: ${this.description}`

    window.location.href = uriMessage;
  }

}
