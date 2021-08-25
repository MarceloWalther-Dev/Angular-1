import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.file);
    console.log(description)
    console.log(allowComments)

  }

}
