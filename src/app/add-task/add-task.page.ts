import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  public addTaskForm = new FormGroup({
    date: new FormControl(''),
    label: new FormControl(''),
    taskType: new FormControl(''),
    workLog: new FormControl(''),
    taskName: new FormControl(''),
    taskNumber: new FormControl(''),
    taskDescription: new FormControl(''),
  });
  postId;

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}
  async successToast() {
    this.addTaskForm.reset();
    const toast = await this.toastController.create({
      message: 'Your task is saved successfully.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async failedToast() {
    this.addTaskForm.reset();
    const toast = await this.toastController.create({
      message: 'Failed to save the task',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  public addTask() {
    if (this.addTaskForm.value.taskName === 'Learning') {
      this.addTaskForm.value.taskNumber = undefined;
    }
    this.addTaskForm.value.date = moment(this.addTaskForm.value.date).format(
      'MM-DD-YYYY'
    );
    // this.http.post<any>('https://work-master-pro.herokuapp.com/addtask', this.addTaskForm.value).subscribe(data => {
    //       this.presentToast();
    //     });

    this.http
      .post<any>(
        'https://work-master20.herokuapp.com/addtask',
        this.addTaskForm.value
      )
      .subscribe((data) => {
        if (data) {
          this.successToast();
          this.router.navigateByUrl('/view-work');
        } else {
          this.failedToast();
        }
      });
  }
}
