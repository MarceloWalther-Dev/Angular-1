import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string): void{
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser():Observable<User>{
    return this.userSubject.asObservable();
  }


  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  private decodeAndNotify(): void{
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //as User é um cast pq o jwt-decode não sabe o que está dentro do token por isso que o retorno dele é unknown
    this.userSubject.next(user);
  }



}
