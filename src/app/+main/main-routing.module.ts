import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './framework/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'mix-design',
                loadChildren: () => import('./mix-design/mix-design.module').then(m => m.MixDesignModule)
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
