import { Participante } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipanteService {
  constructor(private prisma: PrismaService) {}

  async create(
    createParticipantDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.create({
      data: { ...createParticipantDto },
    });
  }

  async findAll(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOne(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.update({
      data: { ...updateParticipanteDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.participante.delete({ where: { id } });
  }
}
