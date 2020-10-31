import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`

 <style>
 table {
  border-collapse: separate;
  border-spacing: 0;
  color: #4a4a4d;
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
}
th,
td {
  padding: 10px 15px;
  vertical-align: middle;
}
thead {
  background: #6495ED;
  color: #fff;
}
th {
  font-weight: bold;
}
th:first-child {
  text-align: centre;
}
tbody tr:nth-child(even) {
  background: #f0f0f2;
}
td {
  border-bottom: 1px solid #cecfd5;
  border-right: 1px solid #cecfd5;
}
tfoot {
  text-align: right;
}
tfoot tr:last-child {
  background: #f0f0f2;
}
</style>
 <div> 
  <table class="blueTable"> 
    <thead> 
      <tr> 
        <th scope="col" rowspan="2">Timestamp</th> 
        <th scope="col" rowspan="2">Job Name</th> 
        <th scope="col" colspan="2" align="center">Metric 
          <table> 
            <tr> 
              <thead> 
                <th scope="col">Parameter</th> 
                <th scope="col">Value</th> 
              </thead> 
            </tr> 
          </table> 
        </th> 
      <tr> 
    </thead>
    <tbody> 
    <tr *ngFor="let n of products; let i = index;">
    <!--<div *ngIf="n!== products[i-1]">-->

      <td>{{n.job}}</td>
      <td>{{n.timestamp}}</td> 
     <!-- </div> -->
      <td > 
            <tr *ngFor="let m of n.metric | keyvalue" align="center"> 
              <td align="center">{{m.key}}</td>
              <td>{{m.value}}</td> 
            </tr> 
      </td> 
    </tr> 
    </tbody> 
    </table>
    </div>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app-json-build-output3';
  products: any =[];

  constructor(private httpClient: HttpClient){

  }
  ngOnInit()
{
  this.httpClient.get("assets/metrics.json").subscribe(data =>{
    console.log(data);
    this.products = data;
  })

}}
