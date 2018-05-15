import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task API';
  tasks = [];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
  }
  
  getTasksFromService(){
    this._httpService.getTasks()
      .subscribe(data => {
        console.log("Success! Tasks:", data);
        this.tasks = data;
        console.log(this.tasks)
      );
  }
}
