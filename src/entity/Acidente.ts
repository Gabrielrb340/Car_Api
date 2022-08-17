import { Endereco } from './Endereco';
import  Usuario  from './Usuario';
import { Entity, Column, OneToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm"
import { Base } from "./Base"

@Entity()
export class Acidente extends Base {
    @Column()
    causa:string
    @Column({ type: 'timestamptz' })
    data_acidente: Date;
    
    @ManyToMany((type)=>Usuario,(usuario)=>usuario.acidente,{cascade:true})
    @JoinTable()
    envolvido:Usuario[]

    @OneToOne(()=>Endereco)
    @JoinColumn()
    endereco:Endereco
}
