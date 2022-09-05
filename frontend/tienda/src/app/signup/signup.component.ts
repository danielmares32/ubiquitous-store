import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:Usuario = {} as Usuario;
  password1: string = '';
  password2: string = '';
  constructor(private restapi:RestApiService) { }

  ngOnInit(): void {
  }

  send():void{
    
    if(this.password1==this.password2){
      this.user.password=this.password1;
      console.log(this.user);
      this.restapi.createUsuario(this.user).subscribe((data)=>{
        console.log(data);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }
    
  }

}
