import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#botonLogin").click(function(){
          $('#loginModal').modal('toggle');
      });

      $("#SigL").click(function(){
        $('#loginModal').modal('toggle');
        $("#btI").html(`<a id="newUser"  href="index.html">usuario@correo.ec <span id="salir" type="submit" class="fa fa-sign-in"></span> </a>`);
      });

      $("#btnLogin").click(function(){
        $('#regisModal').modal('toggle');
      });

  });
  }


}
