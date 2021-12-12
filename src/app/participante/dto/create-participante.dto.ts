import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  dataNascimento: string;

  @IsString()
  @IsNotEmpty()
  staff: string;

  filme: number;
}
