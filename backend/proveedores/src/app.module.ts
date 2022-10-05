import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Catergorias } from './entities/Catergorias';
import { Ordenes } from './entities/Ordenes';
import { Productos } from './entities/Productos';
import { ProductosOrdenes } from './entities/ProductosOrdenes';
import { Proveedores } from './entities/Proveedores';
import { Usuarios } from './entities/Usuarios';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'encuentraproveedordb',
    entities: [Catergorias, Ordenes, Productos, ProductosOrdenes, Proveedores, Usuarios],
    synchronize: true,
  }), UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
