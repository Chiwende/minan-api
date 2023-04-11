import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Loans {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientId: number

    @Column()
    loanAmount: string

    @Column()
    interestRate: string

    @Column()
    taxRate: string

    @Column()
    amountDue: string

    @Column()
    tenor: Date

    @Column()
    status: number

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}