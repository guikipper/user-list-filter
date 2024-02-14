import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FormsModule } from '@angular/forms';

import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from "@angular/common";
import { FilterComponent } from './filter/filter.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      CommonModule,
      PipesModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      FormsModule,
      UsersListComponent
    ],
    providers: [ provideNativeDateAdapter() ],
})
export class ComponentsModule {

}