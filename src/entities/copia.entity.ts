import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LibroEntity } from "./Libro.entity";
import { PrestamoEntity } from "./prestamo.entity";


@Entity('copias', { schema: 'biblioteca' })
export class CopiaEntity {
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

    @OneToOne(() => LibroEntity, libro => libro.copias)
    @JoinColumn()
    libros: LibroEntity;

    @ManyToOne(() => PrestamoEntity, prestamo => prestamo.copias)
  prestamos: PrestamoEntity;

    @Column('varchar', {
        name: 'estado',
        nullable: false,
        comment: 'estado del libro'
    })
    estado: string;

    @Column('varchar', {
        name: 'condicio',
        nullable: false,
        comment: 'condicio de prestado  del libro'
    })
    condicion: string;

    @Column({
        name: 'fecha_adquisicion',
        nullable: false,
        type: 'timestamp',
        comment: 'adquisicion del prestamo'
    })
    fecha_adquisicion: Date;

    @Column('varchar', {
        name: 'ubicacion',
        nullable: false,
        comment: 'ubicacion del libro'
    })
    ubicacion: string;

    @Column('varchar', {
        name: 'disponibilidad',
        nullable: false,
        comment: 'disponibilidad del libro'
    })
    disponibilidad: boolean;


    @Column('varchar', {
        name: 'ISBN',
        nullable: false,
        comment: 'Número de identificación único del libro asociado a esta copia'
    })
    ISBN: string;
}