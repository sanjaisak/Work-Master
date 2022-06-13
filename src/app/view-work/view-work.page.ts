import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.page.html',
  styleUrls: ['./view-work.page.scss'],
})
export class ViewWorkPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  taskName = 'APF-106 Integration of m1';
  taskType = 'Feat';
  date = '01/06/2020';
  label = 'editor';

  taskInfo;
  taskData: any[] = [];
  description = 'added integration of m1 ';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getData();
        // setInterval(() => {
        //     this.getData();
        // }, 10000);
  }
  /*
  https://work-master-pro.herokuapp.com/*/
  async getData(){
    await this.http.get<any>('https://work-master20.herokuapp.com/getTask').subscribe(data => {
      this.taskInfo = data;
      this.taskInfo.sort((a,b)=> {
        const d1 = Date.parse(a.date);
        const d2 = Date.parse(b.date);
        if(d1 <d2){
          return -1;
        }
        if(d1> d2){
          return 1;
        }
        return 0;
      }
      );
      this.taskData =[];
      const dataBasedOnDat = this.taskInfo.filter((eachtask) => eachtask.date === this.taskInfo[0].date);
      this.taskData.push({date: this.taskInfo[0].date,value:dataBasedOnDat });
      for(let i = 1 ; i < Object.keys(this.taskInfo).length ; i++){
          if (this.taskInfo[i].date !== this.taskInfo[i-1].date ){
            const dataBasedOnDate = this.taskInfo.filter((eachtask) => eachtask.date === this.taskInfo[i].date);
            this.taskData.push({date: this.taskInfo[i].date,value:dataBasedOnDate });
          }
}
console.log(this.taskData);
    });

  }
}
