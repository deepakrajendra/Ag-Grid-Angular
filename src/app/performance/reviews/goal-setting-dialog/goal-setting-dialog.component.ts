import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from  '@angular/material';

@Component({
  selector: 'app-goal-setting-dialog',
  templateUrl: './goal-setting-dialog.component.html',
  styleUrls: ['./goal-setting-dialog.component.scss']
})
export class GoalSettingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GoalSettingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}
}
