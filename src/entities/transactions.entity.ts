import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: string

    @Column()
    type: number

    @Column()
    accountId: number

    @Column()
    clientId: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}