// user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { PrestamoEntity } from './prestamo.entity';

@Entity('usuario', { schema: 'biblioteca' })
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    deleteAt: Date;

    @OneToMany(() => PrestamoEntity, prestamo => prestamo.usuarios)
    prestamos: PrestamoEntity[];

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre de usuario'
    })
    nombre: string;

    @Column('varchar', {
        name: 'apellido',
        nullable: false,
        comment: 'apellido de usuario'
    })
    apellido: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'email de usuario'
    })
    email: string;

    @Column('varchar', {
        name: 'contraseña',
        nullable: false,
        comment: 'contraseña de usuario'
    })
    contraseña: string;

    @Column({
        name: 'fecha_nacimineto',
        nullable: false,
        type: 'timestamp',
        comment: 'fecha_nacimineto del usuario'
    })
    fecha_nacimiento: Date;

    @Column('varchar', {
        name: 'direccion',
        nullable: false,
        comment: 'direccion de usuario'
    })
    dirección: string;

    @Column('number', {
        name: 'telefono',
        nullable: false,
        comment: 'telefono de usuario'
    })
    telefono: number;

    @Column('varchar', {
        name: 'rol',
        nullable: false,
        comment: 'rol de usuario'
    })
    rol: string;
}
