import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { RecadosEntity } from "./recados.entity";
import { v4 as uuid } from "uuid";

@Entity({ name: "usuarios" })
export class UsuariosEntity extends BaseEntity {
    @PrimaryColumn()
    idUsuario!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;

    @CreateDateColumn()
    dataCriacao!: Date;

    @UpdateDateColumn()
    dataAlteracao?: Date;

    @OneToMany(() => RecadosEntity, (recados) => recados.usuarios)
    recados!: RecadosEntity[];

    @BeforeInsert()
    beforeInsert() {
        this.idUsuario = uuid();
    }
}
