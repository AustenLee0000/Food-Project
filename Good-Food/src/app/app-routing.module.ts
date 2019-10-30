import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Food1Component } from './food1/food1.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';

import { EmptyComponent } from './empty/empty.component';

const routes : Routes =[
    {path: 'food1', component: Food1Component},
    {path: 'food2', component: Food2Component},
    {path: 'food3', component: Food3Component},
    {path: 'food4', component: Food4Component},
    {path: 'empty', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
