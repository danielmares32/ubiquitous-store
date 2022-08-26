import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/services/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService){}
    @Get('')
    getUsuarios(){
        return this.usuariosService.findUsuario();
    }
}
