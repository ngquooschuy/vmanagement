import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';
import {UsersModule} from "../../features/users/users.module";


@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UsersModule,

  ]
})
export class HomeModule { }
