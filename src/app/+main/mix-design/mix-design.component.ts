import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MixDesignService } from './services/mix-design.service';
import { Codelists, CodeList } from './Models/code-list';
import { of } from 'rxjs';

@Component({
  selector: 'o-mix-design',
  templateUrl: './mix-design.component.html',
  styleUrls: ['./mix-design.component.scss']
})
export class MixDesignComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ddCodeList = {};

  constructor(private _formBuilder: FormBuilder, private mixService: MixDesignService) { }


  ngOnInit(): void {
    this.mixService.getCodeList().subscribe((data) => {
      this.populateDropDownList(data);
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  private populateDropDownList(data: Codelists[]) {
    data.forEach((list => {
      this.ddCodeList[list.code_list_name] = list.code_list;
    }));
  }


}
