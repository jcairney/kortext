import {Volume} from 'src/app/models/volume';

export interface VolumeList {
  kind:"books#volumes",
  totalItems:number,
  items:Array<Volume>,
}
