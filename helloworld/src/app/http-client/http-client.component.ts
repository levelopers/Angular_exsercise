import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
public jsonStr = ''
public jsonObj : Object = {}

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    let obs = this._http.get('https://api.github.com/users/koushikkothagal')
    obs.subscribe((data)=>{
      console.log(data)
      this.jsonStr = JSON.stringify(data)
      // console.log(this.jsonStr)
      this.jsonObj = data

    })
  }

}
