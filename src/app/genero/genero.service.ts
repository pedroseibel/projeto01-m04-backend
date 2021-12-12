import { Genero } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async create(createGenreDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      data: { ...createGenreDto },
    });
  }

  async findAll(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  async findOne(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: { id } });
  }

  async update(id: number, UpdateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.update({
      data: { ...UpdateGeneroDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.genero.delete({ where: { id } });
  }
}
