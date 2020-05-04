import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MixDesignRoutingModule } from './mix-design-routing.module';
import { MixDesignComponent } from './mix-design.component';

import { MixDesignService } from './services/mix-design.service';


@NgModule({
  declarations: [MixDesignComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MixDesignRoutingModule
  ],
  providers: [MixDesignService]
})
export class MixDesignModule { }
