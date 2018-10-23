import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public service_name = "Service_name";
  // public employees = []
  constructor() { }

  getEmployees(){
    return [
      {"id":1,name:"bob","age":30},
      {"id":2,"name":"andrew","age":23},
      {"id":3,"name":"alice","age":24},
      {"id":4,"name":"tank","age":27},

    ]
  }
}
