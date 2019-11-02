import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskFoodComponent } from './desk-food/desk-food.component';
import { Food1Component } from './food1/food1.component';
import { Food2Component } from './food2/food2.component';
import { EmptyComponent } from './empty/empty.component';
import { Food4Component } from './food4/food4.component';
import { Food3Component } from './food3/food3.component';
import { Food5Component } from './food5/food5.component';
import { Food6Component } from './food6/food6.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskFoodComponent,
    Food1Component,
    Food2Component,
    EmptyComponent,
    Food4Component,
    Food3Component,
    Food5Component,
    Food6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
