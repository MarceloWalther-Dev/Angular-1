import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
    ){}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      userName:['', Validators.required],
      password: ['', Validators.required]

    });

  }

  login(){

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        ()=> {
          console.log('autenticado')
          this.router.navigate(['user', userName])
        },
        error =>{
          alert(error.error.message);
          this.verificaRenderDaPaginaAcessaElementoDom()
          this.limparFormulario();
        }
      )
  }

  limparFormulario(){
    this.loginForm.reset();
  }


  verificaRenderDaPaginaAcessaElementoDom(){
    this.plataformDetectorService.isPlataformBrowser() &&  this.userNameInput.nativeElement.focus();
  }
}
