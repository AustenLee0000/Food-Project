import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Food1Component } from './food1/food1.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';
import { Food5Component } from './food5/food5.component';
import { Food6Component } from './food6/food6.component';
import { Food7Component } from './food7/food7.component';
import { Food8Component } from './food8/food8.component';
import { EmptyComponent } from './empty/empty.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { Empty1Component } from './empty1/empty1.component'

const routes : Routes =[
    {path: 'empty1', component: Empty1Component},
    {path: 'front-page', component: FrontPageComponent},
    {path: 'food1', component: Food1Component},
    {path: 'food2', component: Food2Component},
    {path: 'food3', component: Food3Component},
    {path: 'food4', component: Food4Component},
    {path: 'food5', component: Food5Component},
    {path: 'food6', component: Food6Component},
    {path: 'food7', component: Food7Component},
    {path: 'food8', component: Food8Component},
    {path: 'empty', component: EmptyComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
