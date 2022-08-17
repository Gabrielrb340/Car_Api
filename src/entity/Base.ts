import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm"

@Entity()
export abstract class Base {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @CreateDateColumn()
    criado_em:Date

    @DeleteDateColumn()
    exclusao:Date

    @UpdateDateColumn()
    ultima_atualizacao:Date

}