import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from './models';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    private url:string = 'https://reqres.in/api/users';

    constructor(private httpClient: HttpClient) { }

    getAllUsers() {
        return this.httpClient.get<Resource>(this.url);
    }
}