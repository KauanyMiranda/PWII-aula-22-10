import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Prioridade {
    BAIXA = 'Baixa',
    MEDIA = 'Média',
    ALTA = 'Alta',
    CRITICA = 'Critica'
}

export enum Situacao {
    Aberto = 'Aberto',
    EmAndamento = 'EmAndamento',
    Testando = 'Testando',
    Finalizado = 'Finalizado'
}

@Entity('chamados')
export class Chamado extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({ type: 'text' })
    descricao: string;

    @Column()
    situacao: string;

    @Column({ type: 'enum', enum: Prioridade, default: Prioridade.MEDIA })
    prioridade: Prioridade;

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn({ nullable: true })
    autalizadoEm: Date;
}