import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    findUsuario(){
        return {
            message: 'Hi'
        }
    }
}
