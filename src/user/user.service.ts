import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}  // Inyección de PrismaService

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
