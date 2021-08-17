import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {

  photos: Array<Photo> = [];

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe((photos) => {
        console.log(photos[0].likes);
        this.photos = photos;
    });
  }
}
