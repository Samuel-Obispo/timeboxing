import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }[]>;
}
