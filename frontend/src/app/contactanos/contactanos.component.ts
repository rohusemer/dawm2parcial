import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
//import { MessageService } from './services/message.service';
//import swal from 'sweetalert';

@Component({
  selector: 'app-contactanos',
  templateUrl: 'contactanos.component.html',
  styleUrls: ['contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  form: FormGroup;
  nombres: FormControl = new FormControl("", [Validators.required]);
  fechaNacimiento: FormControl = new FormControl("");
  provincia: FormControl = new FormControl("");
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  mensaje: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string = ""; // the response message to show to the user



  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
     this.form = this.formBuilder.group({
      nombres: this.nombres,
      fechaNacimiento: this.fechaNacimiento,
      provincia: this.provincia,
      email: this.email,
      mensaje: this.mensaje,
    });
   }
  

  ngOnInit(): void {};

  onSubmit() {
    if (this.form.status == "VALID" ) {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("nombres", this.form.get("nombres").value);
      formData.append("fechaNacimiento", this.form.get("fechaNacimiento").value);
      formData.append("provincia", this.form.get("provincia").value);
      formData.append("email", this.form.get("email").value);
      formData.append("mensaje", this.form.get("mensaje").value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://script.google.com/macros/s/AKfycbxSxveG9Neb3WRCnDcOIVal94iAdIqcWZ8ORE5dXHivSKOAf48L/exec", formData).subscribe(
        (response) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Gracias por tu mensaje. Te responderemos lo antes posible.";
          } else {
            this.responseMessage = "Ocurrió un error. Recarga la página e intenta nuevamente.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Ocurrió un error. Recarga la página e intenta nuevamente.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }



}

