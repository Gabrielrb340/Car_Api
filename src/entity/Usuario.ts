import { Acidente } from './Acidente';
import { Veiculo } from './Veiculo';
import { Entity, Column, OneToMany, ManyToMany } from "typeorm"
import { Base } from "./Base"

@Entity()
export default class Usuario extends Base {

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column({ type: 'timestamptz' })
    data_nascimento: Date

    @Column({unique:true})
    cpf:string 

    @OneToMany(()=>Veiculo,(veiculo)=>veiculo.usuario)
    carro:Veiculo[]

    @ManyToMany((type)=>Acidente,(acidente)=>acidente.envolvido)
    acidente:Acidente[]
    
}
