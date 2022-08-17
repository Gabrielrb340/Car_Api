import  Usuario  from './Usuario';
import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "./Base"

@Entity()
export class Veiculo extends Base {

    @Column()
    modelo: string

    @Column()
    fabricante: string

    @Column()
    ano: number

    @Column()
    placa:string
    
    @ManyToOne(()=>Usuario,(user)=>user.carro)
    @JoinColumn()
    usuario:Usuario
}
