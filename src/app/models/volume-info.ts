import {ImageLinks} from 'src/app/models/image-links';
import {IndustryIdentifier} from 'src/app/models/industry-identifier';
import {PanelizationSummary} from 'src/app/models/panelization-summary';
import {ReadingModes} from 'src/app/models/reading-modes';

export interface VolumeInfo {
  title:string,
  authors:Array<string>,
  publisher:string,
  publishedDate:string,
  description:string,
  industryIdentifiers:Array<IndustryIdentifier>,
  readingModes:ReadingModes,
  pageCount:number,
  printType:string,
  categories:Array<string>, // TODO: Can probably create a list of Dewey Decimal categories that this is restricted to.  Check Google's documentation.
  averageRating:number,
  ratingsCount:number,
  maturityRating:string,
  allowAnonLogging:boolean,
  contentVersion:string,
  panelizationSummary:PanelizationSummary,
  imageLinks:ImageLinks,
}
