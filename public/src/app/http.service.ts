import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient) { 

  }

  getTasks(){
    return this._http.get('/tasks');
  }

  deleteTask(id){
    return this._http.get('/task/'+id);
  }
  getTask(id){
    return this._http.get('/tasks/'+id);
  }

  addTask(data){
    return this._http.post('/tasks', data);
  }
  updateTask(data){
    return this._http.put('/tasks/'+data.id, data);
  }
}
