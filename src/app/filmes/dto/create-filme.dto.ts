import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  dataLancamento: string;

  @IsString()
  @IsNotEmpty()
  duracao: string;

  @IsNotEmpty()
  generoId: number;

  @IsNotEmpty()
  participanteId: number;
}
