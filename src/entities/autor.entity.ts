import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LibroEntity } from "./Libro.entity";


@Entity('autores', {schema:'biblioteca'})

export class AutorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    deleteAt: Date;

    @OneToMany(() => LibroEntity, libro => libro.autor)
    libros: LibroEntity[];

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre de autor'
    })

    nombre: string;

    @Column('varchar', {
        name: 'apellido',
        nullable: false,
        comment: 'apellido de autor'
    })

    apellido: string;

    @Column('date', {
        name: 'fecha_nacimiento',
        nullable: false,
        comment: 'fecha_nacimiento del autor'
    })

    fecha_nacimiento: Date;

    @Column('varchar', {
        name: 'nacionalidad',
        nullable: false,
        comment: 'nacionalidad del autor'
    })

    nacionalidad: string;

    @Column('varchar', {
        name: 'biografia',
        nullable: false,
        comment: 'biografia del autor'
    })

    biografia: string;

    @Column('varchar', {
        name: 'genero',
        nullable: true,
        comment: 'genero del autor'
    })

    genero: string;

    @Column('varchar', {
        name: 'obras_destacadas',
        nullable: false,
        comment: 'obras_destacadas del autor'
    })

    obras_destacadas: string;
}