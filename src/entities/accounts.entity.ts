import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientId: number

    @Column()
    loanId: number

    @Column()
    accountBalance: string

    @Column()
    interestRate: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    status: number
}