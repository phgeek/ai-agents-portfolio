import { Module } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { DbModule } from 'src/db/db.module';
import { ProjectController } from './project.controller';

@Module({
  providers: [ProjectPrisma],
  imports: [DbModule],
  controllers: [ProjectController],
})
export class ProjectModule {}
