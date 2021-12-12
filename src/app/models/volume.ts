import {AccessInfo} from 'src/app/models/access-info';
import {ImageLinks} from 'src/app/models/image-links';
import {IndustryIdentifier} from 'src/app/models/industry-identifier';
import {PanelizationSummary} from 'src/app/models/panelization-summary';
import {ReadingModes} from 'src/app/models/reading-modes';
import {SaleInfo} from 'src/app/models/sale-info';
import {SearchInfo} from 'src/app/models/search-info';
import {VolumeInfo} from 'src/app/models/volume-info';

export interface Volume {
  kind:"books#volume",
  id:string,
  etag:string,
  selfLink:string,
  volumeInfo:VolumeInfo,
  saleInfo:SaleInfo,
  accessInfo:AccessInfo,
  searchInfo:SearchInfo,
}
