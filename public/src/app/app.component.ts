import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  tasks: any;
  taskDetails: any;
  hide: any;
  taskID: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.title = "Tasks API"
    this.taskDetails = {
      id: "",
      description: "",
      completed: "",
      createdAt: ""
    }
    this.hide = true
    this.taskID = ""
  }
  
  getTasksFromService(){
    this._httpService.getTasks()
      .subscribe(data => {
        console.log("Success! Tasks:", data);
        this.tasks = data;
        console.log(this.tasks)
   });
  }
  searchForTask(){
    console.log(this.taskID)
    this._httpService.getTask(this.taskID)
      .subscribe(data=>{
        this.taskID = ""
        console.log("Success! Tasks:", data);
        this.tasks = [data];
        console.log(this.tasks)
      })

  }

  deleteTaskFromService(id){
    this._httpService.deleteTask(id)
      .subscribe(data=>{
        this.getTasksFromService();
      });
  }

  showTaskDetails(idx){
    this.taskDetails.id = this.tasks[idx]._id
    this.taskDetails.description = this.tasks[idx].description
    this.taskDetails.completed = this.tasks[idx].completed
    this.taskDetails.createdAt = this.tasks[idx].createdAt
    this.hide = false
    console.log(this.taskDetails)
  }

  hideTaskDetails(){
    this.taskDetails = {
      id: "",
      description: "",
      completed: "",
      createdAt: ""
    }
    this.hide = true
  }
  hideTasks(){
    this.tasks = [];
  }

} 
