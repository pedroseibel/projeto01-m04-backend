import { Filme } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async create(CreateFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...CreateFilmeDto },
    });
  }

  async findAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOne(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  async update(id: number, UpdateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data: { ...UpdateFilmeDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
