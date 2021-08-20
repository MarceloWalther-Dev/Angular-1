import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {

  photos: Array<Photo> = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}


  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.userName = this.activatedRoute.snapshot.params.userName;
  }

  load(){
    this.photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos =>{
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });

  }

}
