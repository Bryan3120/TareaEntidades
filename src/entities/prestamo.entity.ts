import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { CopiaEntity } from './copia.entity';

@Entity('prestamos', { schema: 'biblioteca' })
export class PrestamoEntity {

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

    @ManyToOne(() => UsuarioEntity, user => user.prestamos)
    usuarios: UsuarioEntity;

    @OneToMany(() => CopiaEntity, copia => copia.prestamos)
    copias: CopiaEntity[];

    @Column('number', {
        name: 'monto',
        nullable: false,
        comment: 'cantidad de libros'
    })
    monto: number;

    @Column('number', {
        name: 'interes',
        nullable: false,
        comment: 'interes por prestamo'
    })
    interés: number;

    @Column({
        name: 'fecha_inicio',
        nullable: false,
        type: 'timestamp',
        comment: 'inicio del prestamo'
    })
    fecha_inicio: Date;

    @Column({
        name: 'fecha_fin',
        nullable: false,
        type: 'timestamp',
        comment: 'fin del prestamo'
    })
    fecha_fin: Date;

    @Column('varchar', {
        name: 'estado',
        nullable: false,
        comment: 'disponibilidad del libro'
    })
    estado: string;
}
