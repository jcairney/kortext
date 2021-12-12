export interface AccessInfo {
  country: string,
  viewability: string,
  embeddable: boolean,
  publicDomain: boolean,
  textToSpeechPermission: string,
  epub: IsAvailable,
  pdf:IsAvailable,
  webReaderLink:string,
  accessViewStatus:string,
  quoteSharingAllowed:boolean,
}

export interface IsAvailable {
  isAvailable: boolean,
}
