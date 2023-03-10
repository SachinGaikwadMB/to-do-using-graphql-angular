import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  tasks: any = [];
  isDone : boolean = false;
  isDeleted : boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllToDoTasksData();
  }

  public getAllToDoTasksData() {
    this.dataService.getAllToDoTasksData().valueChanges.subscribe((res) => {
      this.tasks = res.data;
    });
  }

  onCheckBoXChange(event: any, id: number) {
    if (event.target.checked) {

      // If value is checked then update isCompleted to true
      this.dataService.updateToDoTask(id, true).subscribe((res) => {
        this.getAllToDoTasksData();
        this.isDone = true;
      });
    }
    if (!event.target.checked) {
      this.dataService.updateToDoTask(id, false).subscribe((res) => {
        this.getAllToDoTasksData();
        this.isDone = false;
        
      });
    }
  }

  onDelete(id: number) {
    this.dataService.deleteToDoTask(id).subscribe((res) => {

    });
    this.isDeleted = true;
  }
}
