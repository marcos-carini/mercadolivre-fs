import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private readonly prisma: PrismaService){}


  async getProducts() {

    const produtosDB = await this.prisma.produto.findMany({include: {fotos: true}})
    return produtosDB;
  }
}
