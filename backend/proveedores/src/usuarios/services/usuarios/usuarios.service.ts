import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/entities/Usuarios';
import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuarios) private readonly usuarioRepositorio: Repository<Usuarios>){}
    findUsuarios(){
        return this.usuarioRepositorio.find();
    }
    findUsuario(email:string){
        return this.usuarioRepositorio.findOneBy({email:email}); 
    }
    createUser(createUsuario:UsuariosDTO){
        const newUser = this.usuarioRepositorio.create(createUsuario);
        return this.usuarioRepositorio.save(newUser);
    }
}
