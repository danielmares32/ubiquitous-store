import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RestApiService } from '../shared/rest-api.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private restapi: RestApiService) { }

  ngOnInit(): void {
  }

  send(): void{ 
    let user:Usuario = {} as Usuario;
    user.email=this.email;
    user.password=this.password;
    this.restapi.getUsuario(user).subscribe((data:any)=>{
      console.log(data);
      if(data.message==null){
        Swal.fire(
          'Correcto!',
          'Inicio de Sesión Exitoso',
          'success'
        );
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('nombre', data.nombre);
        sessionStorage.setItem('email',data.email);
        
      } else {
        Swal.fire(
          'ERROR',
          'Usuario o Contraseña Incorrecto',
          'error'
        );
      }
    })
  }

}
