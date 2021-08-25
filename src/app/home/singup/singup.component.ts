import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './singup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
})
export class SingupComponent implements OnInit {

  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;
  signupForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private router: Router,
    private service: SignUpService,
    private plataformDetectorService: PlataformDetectorService
    ) {

  }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({

      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(18)
      ]]

    });

  }

  signup(){
    const newUser = this.signupForm.getRawValue() as NewUser; // getRawValue() me entrega todos os campos do formulario com os valores quando digitado.
    this.service
      .signup(newUser)
      .subscribe(
        ()=>{
          this.router.navigate(['']);
        },
        error=>{
          console.group(error)
        }
        )
  }

  verificaRenderDaPaginaAcessaElementoDom(){
    this.plataformDetectorService.isPlataformBrowser() &&  this.inputEmail.nativeElement.focus();
  }

}
