import { Module } from '@nestjs/common';
import { PrismaModule } from '../plugins/prisma/prisma.module';
import { FilmesController } from './filmes/filmes.controller';
import { GeneroController } from './genero/genero.controller';
import { ParticipanteController } from './participante/participante.controller';
import { FilmesService } from './filmes/filmes.service';
import { GeneroService } from './genero/genero.service';
import { ParticipanteService } from './participante/participante.service';

@Module({
  imports: [PrismaModule],
  controllers: [FilmesController, GeneroController, ParticipanteController],
  providers: [FilmesService, GeneroService, ParticipanteService],
})
export class AppModule {}
