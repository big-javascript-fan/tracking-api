/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  Injectable
} from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TrackDto } from 'src/controllers/track.input';

@Injectable()
export class TrackingService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async addTracking(body: TrackDto) {
    const oldTracking = await this.prisma.tracking.findFirst({
      where: {
        ipAddress: body.ipAddress
      }
    });

    if (oldTracking) {
      if (oldTracking.tag.length > 0 && oldTracking.tag !== body.tag) {
        await this.prisma.tracking.update({
          where: {
            ipAddress: body.ipAddress
          },
          data: {
            count: oldTracking.count + 1,
            updatedAt: new Date()
          }
        });
      } else {
        await this.prisma.tracking.update({
          where: {
            ipAddress: body.ipAddress
          },
          data: {
            tag: body.tag,
            count: oldTracking.count + 1,
            updatedAt: new Date()
          }
        });
      }
    } else {
      await this.prisma.tracking.create({
        data: {
          ipAddress: body.ipAddress,
          tag: body.tag,
          count: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }

    return true;
  }
}
