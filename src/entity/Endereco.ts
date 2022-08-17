import { TipoEndereco } from '../application/Enum/TipoEndereco';
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm"
import { Base } from "./Base"
import Usuario from './Usuario';

@Entity()
export class Endereco extends Base {

    @Column()
    rua : string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    cep:string 

    @Column({type: "enum",enum: TipoEndereco})
    tipo_endereco:TipoEndereco;
    
    @OneToOne(()=>Usuario)
    @JoinColumn()
    usuario:Usuario;
}
