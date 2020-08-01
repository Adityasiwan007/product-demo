import { Injectable } from '@angular/core';
// import { NGXLogger } from 'ngx-logger';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private subject = new Subject<any>();
  constructor() { }
 
  // get Logger() {
  //   return this.loggerService;
  // }

  get DimCodes() {
    return { MARKET: 'MRKT', PRODUCT: 'PRDC', FACT: 'FCT', PERIOD: 'PRD' };
  }
  get Dim() {
    return { MRKT: 'MARKET', PRDC: 'PRODUCT', FCT: 'FACT', PRD: 'PERIOD' };
  }
  get DimIcons() {
    return { MARKET: 'nlsn:localization', PRODUCT: 'nlsn:products', FACT: 'nlsn:report', PERIOD: 'nlsn:calendar' };
  }
  get PeriodFormats() {
    return ['YYYYMM', 'YYMM', 'MMYY', 'MMYYYY', 'MMDDYY', 'DDMMYY', 'MMDDYYYY', 'DDMMYYYY', 'MM/DD/YYYY', 'DD/MM/YYYY', 'DD/MM/YY','MM/DD/YY', 'MM/YYYY', 'MM/YY'];
  }
  get PeriodIntervalList() {
    return ['365 - Daily', '52 - Weekly', '26 - Bi-Weekly', '12 - 445-Weekly', '13 - 4-Weekly', '12 - Monthly', '6 - Bi-Monthly', '4 - Quarterly', '2 - Half-Yearly', '1 - Yearly'];
  }
  //For setting the active page name based on the
  get PageNameMapWithUrl() {
  return { 'upload/:IntegrationId':'Upload',
            'dataset/:IntegrationId':'Dataset',
            'dimension/market/:IntegrationId':'Market',
            'dimension/product/:IntegrationId':'Product',
            'dimension/period/:IntegrationId':'Period',
            'dimension/fact/:IntegrationId':'Fact',
            'preview/:IntegrationId':'Preview',
            'share/:IntegrationId':'share',
          };
  }
  sendClickEvent($event) {
    this.subject.next();
  }
  get  AppClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
