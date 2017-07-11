import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConnectME';
  private servicesURL = 'http://10.62.83.193:9180/connectmeservices/clientservices/register';
  inputData: any =
     {
  'connectmeRequest': {
    'applicationName': 'BRR',
    'sessionId': 'string',
    'transactionId': 'string',
    'userRole': 'GATE AGENT',
    'username': '00293070'
  },
  'topics': [
    'string'
  ]
};
  data: any = {};
  onSubmit = function(user) {
    console.log(user);
    return this.http.post(this.servicesURL, this.inputData).map((res: Response) => res.json()).subscribe(data => {
    console.log(data);
    })
  }
  constructor(private http: Http) {
    console.log('hello constructor');
  }

//  getData() {
//    return this.http.post(this.servicesURL, this.inputData).map((res: Response) => res.json()).subscribe
//  }
}
