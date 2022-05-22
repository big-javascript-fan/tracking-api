import { IsString } from "class-validator";

export class TrackDto {
  @IsString()
  ipAddress: string;

  @IsString()
  tag: string;
}