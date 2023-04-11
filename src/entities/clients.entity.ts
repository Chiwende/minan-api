import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    idNumber: string

    @Column({default: 'NRC'})
    idType: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    alternativePhone: string

    @Column()
    homeAddress: string

    @Column()
    city: string

    @Column()
    town: string

    @Column({default: 1})
    status: number

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date
}