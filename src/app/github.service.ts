import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'marqJava';
  private userUrl = 'https://api.github.com/users/' + this.username;
  //private apiUrl = 'https://api.github.com';
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userUrl + '/orgs');
  }
}
