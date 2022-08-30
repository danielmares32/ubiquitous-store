import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { UsuariosService } from 'src/usuarios/services/usuarios/usuarios.service';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    getUsuarios(): {
        message: string;
    };
    addUsuarios(createUserDto: UsuariosDTO): Promise<import("../../../entities/Usuarios").Usuarios>;
}
