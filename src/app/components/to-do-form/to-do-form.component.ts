import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
})
export class ToDoFormComponent implements OnInit {
  toDoTaskTitle: string = '';
  flage : boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  public addToDoTask() {
    this.dataService.addToDoTask(this.toDoTaskTitle).subscribe((res) => {});
    this.toDoTaskTitle = '';
    this.flage = true;
  }
}
