import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { DateRendererComponent } from '../../date-renderer/date-renderer.component';


@NgModule(
    {
        imports: [
            MaterialModule,
            FlexLayoutModule,
            AgGridModule.withComponents([DateRendererComponent])
        ],
        exports: [
            MaterialModule,
            FlexLayoutModule,
            AgGridModule
        ]
    }
)

export class SharedModule { }