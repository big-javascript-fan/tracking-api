import { Body, Controller, Post } from '@nestjs/common';
import { TrackingService } from '../services/tracking.service';
import { TrackDto } from './track.input';

@Controller()
export class AppController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post('addTracking')
  addTracking(
    @Body() tracking: TrackDto
  ): Promise<boolean> {
    return this.trackingService.addTracking(tracking);
  }
}
