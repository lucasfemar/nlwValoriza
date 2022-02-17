import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Expose } from "class-transformer";
@Entity("tags")
class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Expose({name: "names_custom"}) //Cria um atributo que não esta no banco, para eu poder personalizar
    nameCustom(): string{
        return `#${this.name}`; // Personalizando o atributo name concatenado com '#'
    }


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Tag }