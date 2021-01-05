import { NewUser, User } from './interfaces/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    const expireDate = new Date(localStorage.getItem('expireDate'));

    if (new Date() > expireDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('token');
  }

  registration(newUser: NewUser) {
    if (localStorage.allUsers) {
      let allUsers = [...JSON.parse(localStorage.getItem('allUsers'))];
      allUsers = [...allUsers, newUser];
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
    } else {
      localStorage.setItem('allUsers', JSON.stringify([newUser]));
    }
  }

  login(user: User): Observable<any> {
    const fetchLogin$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
    });

    return fetchLogin$.pipe(tap(this.setToken));
  }

  logout(): void {
    localStorage.removeItem('expireDate');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(): void {
    const expireDate = new Date(new Date().getTime() + 3600 * 1000);

    localStorage.setItem('expireDate', expireDate.toString());
    localStorage.setItem('token', JSON.stringify(uuidv4()));
  }
}
