import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { DateRendererComponent } from '../../date-renderer/date-renderer.component';
import { ActionsRendererComponent } from '../../actions-renderer/actions-renderer.component';


@NgModule(
    {
        imports: [
            FormsModule,
            MaterialModule,
            FlexLayoutModule,
            AgGridModule.withComponents([DateRendererComponent,ActionsRendererComponent])
        ],
        exports: [
            MaterialModule,
            FlexLayoutModule,
            AgGridModule,
            FormsModule
        ]
    }
)

export class SharedModule { }