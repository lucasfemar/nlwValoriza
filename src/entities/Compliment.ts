import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments") // defininto a tabela que a entidade ira se referir
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({ name: "user_sender" }) // Referencia a coluna user_sender
    @ManyToOne(() => User) // Muitos Compliments para um User
    userSender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;


    @Column()
    tag_id: string;

    @JoinColumn({ name: "tag_id" }) // ReferÊncia ao campo tag_id
    @ManyToOne(() => Tag) // Muitos compliments para uma Tag
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };
