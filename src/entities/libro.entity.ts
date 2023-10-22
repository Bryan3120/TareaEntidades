import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AutorEntity } from "./Autor.entity";
import { GeneroEntity } from "./genero.entity";
import { CopiaEntity } from "./copia.entity";


@Entity('libros', { schema: 'biblioteca' })

export class LibroEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @ManyToOne(() => AutorEntity, autor => autor.libros)
    autor: AutorEntity;

    @ManyToMany(() => GeneroEntity, genero => genero.libros)
    @JoinTable()
    generos: GeneroEntity[];

    @OneToOne(type => CopiaEntity, copia => copia.libros)
    @JoinColumn()
    copias: CopiaEntity;

    @Column('varchar', {
        name: 'titulo',
        nullable: false,
        comment: 'titulo del libro'
    })

    titulo: string;

    @Column('varchar', {
        name: 'isbn',
        nullable: false,
        comment: 'Número Internacional Normalizado del Libro'
    })

    isbn: string;

    @Column('date', {
        name: 'fecha_publicacion',
        nullable: false,
        comment: 'fecha de publicacion del Libro'
    })

    fecha_publicacion: Date;

    @Column('varchar', {
        name: 'resumen',
        nullable: false,
        comment: 'resumen del Libro'
    })

    resumen: string;

    @Column('varchar', {
        name: 'idioma',
        nullable: false,
        comment: 'idioma del Libro'
    })

    idioma: string;

    @Column('varchar', {
        name: 'numero_paginas',
        nullable: false,
        comment: 'numero de paginas del Libro'
    })

    numero_paginas: string;

    @Column('varchar', {
        name: 'editorial',
        nullable: false,
        comment: 'editorial del Libro'
    })

    editorial: string;

    @Column('varchar', {
        name: 'anio_edicion',
        nullable: false,
        comment: 'anio_edicion del Libro'
    })

    anio_edicion: string;

    @Column('varchar', {
        name: 'autor_id',
        nullable: false,
        comment: 'autor_id del Libro'
    })

    autor_id: string;
}