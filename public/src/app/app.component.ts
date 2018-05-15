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
  newTask: any;
  edit: any;
  editTask: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.title = "Tasks API"
    this.taskDetails = {
      id: "",
      description: "",
      completed: "",
      createdAt: ""
    }
    this.newTask = {
      title: "",
      description: ""
    }
    this.editTask = {
      id: "",
      title: "",
      description: ""
    }
    this.hide = true
    this.taskID = ""
    this.edit = false
  }
  
  getTasksFromService(){
    this._httpService.getTasks()
      .subscribe(data => {
        this.taskDetails.id = -1
        console.log("Success! Tasks:", data);
        this.tasks = data;
        console.log(this.tasks)
   });
  }
/*   searchForTask(){
    console.log(this.taskID)
    this._httpService.getTask(this.taskID)
      .subscribe(data=>{
        if (data._id) {
          this.taskID = ""
          console.log("Success! Tasks:", data);
          this.tasks = [data];
          this.showTaskDetails(0);
          console.log(this.tasks)
        }
        else {
          console.log(data) // work for ID's not in the system
        }
      })

  } */

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
  addNewTask(){
    this._httpService.addTask(this.newTask)
      .subscribe(data => {
        console.log(data);
      })
  }

  editTaskFromService(idx){
    this.editTask.id = this.tasks[idx]._id
    this.editTask.title = this.tasks[idx].title
    this.editTask.description = this.tasks[idx].description
    this.edit = true
  }

  updateTaskFromService(){
    this._httpService.updateTask(this.editTask)
      .subscribe(data => {
        console.log(data);
        this.getTasksFromService();
      })
  }

  closeEdit(){
    this.edit = false;
  }

} 
