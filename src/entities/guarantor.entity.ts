import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Guarantor {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    loanId: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    phoneNumber: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}