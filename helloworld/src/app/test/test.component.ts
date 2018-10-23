import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-test',//attribute  //'.app-test' class selector //'app-test' html tag selector
  template:`
  <div >
    <h2>h2 is {{varH2}}</h2>
    <p>{{getHref()}}</p>
    <h2 class = "medium">class binding</h2>
    <h2 [class.success] ="true">class binding</h2>
    <h2 [ngClass] ="messageClasses">class binding</h2>
    <h2 [style.color] = "isError? 'red' : 'green'">style binding</h2>
    <h2 [style.color] = "highlight">class binding</h2>
    <h2 [ngStyle] ="styleBinding">class binding</h2>
    <input (click) = "handleClick($event)"type= "submit" value = "sss">
    {{greeting}}
    <br>
    <input #myInput type = "text">
    <input type = "button" (click) = "logInput(myInput.value)">
    <p>template reference</p>
    <br>
    <input type = "text" [(ngModel)] = 'modleVar'>
    {{modleVar}}

    <div *ngIf = "renderFirst; then thenBlock;else elseBlock"></div>
    <ng-template #thenBlock>
    <h3>then block</h3>
    </ng-template >

    <ng-template #elseBlock>
    <h3>else block</h3>
    </ng-template >

    <div *ngFor = "let x of array;index as i;even as e">
    <p [style.color]="x">{{e}}{{i}}{{x}}</p>
    </div>

    <h3>{{"hello" + parentData}}</h3>

    <input type = "submit" (click) = "sendMessage()">

    <h3>{{num | number: '3.1-7'}}</h3>
    <h3>{{date | date : 'short'}}</h3>
    <h3>{{date | date : 'shortDate'}}</h3>

    <h3>{{str | lowercase}}</h3>
    <h3>{{str | titlecase}}</h3>
    <h3>{{str | slice : 0:9}}</h3>

    <ul *ngFor = "let x of employees">
      <li>{{x.id}}{{x.name}}{{x.age}}</li>
    </ul>
    <p>{{service_name}}</p>









    <p>
      test works!
      this is in test component

    </p>

  </div>
  ` ,
  styles: [`
    .success{
      color:green
    }
    .medium{
      color:yellow
    }
    .special{
      font-style:italic
    }
    .fail{
      color:red
    }
    `]
})
export class TestComponent implements OnInit {

  public varH2 = "h2 variable name" //variable format
  public isSuccess = true
  public isSpecial = true
  public isError = false
  public highlight = "orange"
  public href = ""
  public messageClasses = { //combine classes as object pass into ng.class attribute
    "success" : this.isSuccess,
    "fail" : !this.isSuccess,
    "special": this.isSpecial
  }
  public styleBinding = {
    color : "blue",
    fontStyle:"italic"
  }

  public greeting = ""

  public employees = []
  public service_name = ""

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees()
    this.service_name = this._employeeService.service_name
  }
  getHref(){ //function format //html like println in java
    this.href = window.location.href
    return this.href
  }
  handleClick(e){
    console.log(e)

    // setInterval(()=>{this.greeting += "welcome!!"},30)
    this.greeting += "welcome!!"

  }
  logInput(input){
    console.log(input)
  }

  public modleVar = ""

  public renderFirst = false

  public array = ["red","yellow","orange","blue","green"]

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter()

  sendMessage(){
    this.childEvent.emit("message from child component")
  }

  public num = 1.234
  public str = "this is string"
  public date = new Date()

}
