import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.photoForm = this.formBuilder.group({
      file:['', Validators.required],
      description:['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }


  upload(){
    const allowComments = this.photoForm.get('allowComments').value;
    const description = this.photoForm.get('description').value;

    this.photoService
    .upload(description,allowComments,this.file)
    .subscribe(

      ()=>{
        this.router.navigate([''])
      },
      error => console.log(error)
    )
  }

  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event : any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
