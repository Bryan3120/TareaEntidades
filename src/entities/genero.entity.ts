import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LibroEntity } from "./Libro.entity";


@Entity('generos', {schema:'biblioteca'})
export class GeneroEntity {

    @PrimaryGeneratedColumn()
    id: number;

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

    @ManyToMany(() => LibroEntity, libro => libro.generos)
    libros: LibroEntity[];

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre del genero'
    })

    nombre: string;

    @Column('varchar', {
        name: 'otros_campos',
        nullable: false,
        comment: 'información adicional relacionada con el género'
    })

    otros_campos: string;
}