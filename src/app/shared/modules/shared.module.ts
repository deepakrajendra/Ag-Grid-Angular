import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';


@NgModule(
    {
        imports: [
            MaterialModule,
            FlexLayoutModule,
            AgGridModule.withComponents([])
        ],
        exports: [
            MaterialModule,
            FlexLayoutModule,
            AgGridModule
        ]
    }
)

export class SharedModule { }