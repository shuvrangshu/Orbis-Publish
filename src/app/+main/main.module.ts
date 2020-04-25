import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MenuBarComponent } from './framework/menu-bar/menu-bar.component';
import { NavBarComponent } from './framework/nav-bar/nav-bar.component';
import { DashboardComponent } from './framework/dashboard/dashboard.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    declarations: [
        MenuBarComponent,
        NavBarComponent,
        DashboardComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MainRoutingModule
    ]
})
export class MainModule { }
