import {IsNotEmpty, IsInt, IsDate, IsBoolean} from "class-validator";

export class Soli {

    @IsDate({message: 'Fecha no válida'})
    date: String;

    @IsNotEmpty({message: 'Campo requerido'})
    name: string;

    @IsNotEmpty({message: 'Campo requerido'})
    lab: string;

    @IsNotEmpty({message: 'Campo requerido'})
    asign: string;

    @IsNotEmpty({message: 'Campo requerido'})
    teacher: string;

    @IsNotEmpty({message: 'Campo requerido'})
    faculty: string;

    @IsInt({message: 'Campo requerido'})
    students: number;

    @IsInt({message: 'Campo requerido'})
    cantmachines: number;

    @IsInt({message: 'Campo requerido'})
    cantconsume: number;

    @IsNotEmpty({message: 'Campo requerido'})
    observation: string;

    @IsBoolean({message: 'Seleccione una opción'})
    usemachines: boolean;

    @IsBoolean({message: 'Seleccione una opción'})
    useconsume: boolean;

    @IsBoolean({message: 'Seleccione una opción'})
    guide: boolean;

    datetime;
}
