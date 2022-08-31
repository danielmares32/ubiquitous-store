import { Usuarios } from 'src/entities/Usuarios';
import { UsuariosDTO } from 'src/usuarios/dto/usuarios.dto';
import { Repository } from 'typeorm';
export declare class UsuariosService {
    private readonly usuarioRepositorio;
    constructor(usuarioRepositorio: Repository<Usuarios>);
    findUsuarios(): Promise<Usuarios[]>;
    findUsuario(email: string): Promise<Usuarios>;
    createUser(createUsuario: UsuariosDTO): Promise<Usuarios>;
}
