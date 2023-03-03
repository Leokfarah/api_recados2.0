import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { UsuariosEntity } from "./usuarios.entity";
import { v4 as uuid } from "uuid";

@Entity({ name: "recados" })
export class RecadosEntity extends BaseEntity {
    @PrimaryColumn()
    idRecado!: string;

    @Column()
    idUsuario!: string;

    @Column()
    titulo!: string;

    @Column()
    descricao!: string;

    @Column()
    data!: string;

    @Column()
    arquivado!: boolean;

    @Column()
    deletado!: boolean;

    @CreateDateColumn()
    dataCriacao!: Date;

    @UpdateDateColumn()
    dataAlteracao?: Date;

    @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.recados)
    @JoinColumn({ name: 'idUsuario' })
    usuarios!: UsuariosEntity;

    @BeforeInsert()
    beforeInsert() {
        this.arquivado = false;
        this.deletado = false;
        this.idRecado = uuid();
    }
}