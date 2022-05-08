import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

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
  description = 'added integration of m1 ';
  constructor() {}
  ngOnInit() {}
}
