import { IsNotEmpty, MinLength } from "class-validator";
import { Prioridade } from "./chamado.entity";

export class ChamadoDto {

    @IsNotEmpty({ message: "O título é obrigatório!" })
    @MinLength(10, { message: "O título deve ter no mínimo 10 caracteres" })
    titulo: string;

    @IsNotEmpty({ message: "Prioridade é obrigatória!" })
    prioridade: Prioridade;

    @IsNotEmpty({ message: "A descrição é obrigatória!" })
    @MinLength(20, { message: "A descrição deve ter no mínimo 20 caracteres" })
    descricao: string;
}