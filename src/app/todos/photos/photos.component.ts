import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loadedData = 0;
  photosData: any;
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getPhotos().subscribe(
      (res) => {
        switch (res.type) {
          case HttpEventType.Sent: {
            console.log('request sent to the server');
            break;
          }
          case HttpEventType.DownloadProgress: {
            this.loadedData += res.loaded;
            console.log(res.total);
            break;
          }
          case HttpEventType.Response: {
            if (res.status === 200) {
              this.photosData = res.body;
            }
          }
        }
      }
    );
  }

}
