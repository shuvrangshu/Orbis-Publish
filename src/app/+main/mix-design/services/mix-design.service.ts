import { Injectable } from '@angular/core';
import { DataService } from '../../../shared/data-service/data.service';
import { Observable, of } from 'rxjs';
import { Codelists } from '../Models/code-list';
import { MIX_DESIGN_WEB_API } from '../utility/mix-design-web-api.constants';
import { IUrlType } from '../../../shared/data-service/url-type';


@Injectable()
export class MixDesignService {
    constructor(private dataService: DataService) {
    }

    getCodeList(): Observable<Codelists[]> {
        return this.dataService.getData<Codelists[], any>(MIX_DESIGN_WEB_API.CODE_LIST);
    }

    // GetData() {
    //     this.http.get('./assets/data/data.json').subscribe(data => {
    //         console.log(data);
    //     });
    // }

}
