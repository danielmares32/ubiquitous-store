import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

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
    this.restapi.getUsuario(this.email).subscribe((data:any)=>{
      if(data!=null && data.password==this.password){
        alert('Login Exitoso');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    })
  }

}
