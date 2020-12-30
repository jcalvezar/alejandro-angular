import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MylistComponent } from './components/mylist/mylist.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
    { path: '', component: MylistComponent },
    { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
