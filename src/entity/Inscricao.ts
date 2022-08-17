import { Endereco } from './Endereco';
import  Usuario  from './Usuario';
import { Entity,Column, OneToOne, JoinColumn } from "typeorm";
import { Base } from "./Base";

@Entity()
export class Inscricao extends Base{
    @Column({unique:true})
    email:string

    @Column()
    password:string
    ///Table RelationShip
    @OneToOne(()=> Usuario)
    @JoinColumn()
    usuario:Usuario

    @OneToOne(()=> Endereco)
    @JoinColumn()
    endereco:Endereco
}