import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, Subscription, throwError,of } from 'rxjs';
import { tap, map, catchError, finalize } from 'rxjs/operators';
// import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RestServiceComponent {

  constructor(public http:HttpClient){

  }

  public post(endpoint: string, body:any,queryParams?:HttpParams){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Methods': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Origin:':'Origin',
      }),
      // withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.post(endpoint, body, httpOptions)
    .pipe(
      tap(this.logResponse),
      map((response:any) => {
        let error = (response)?response.error:undefined;
        if(error)
        {
            if (error.errorCode == "8888" || error.errorCode == "7777"){
              //this.sessionError(error.errorCode);
              return;
            }
            }
        return response;
      }),
      catchError(this.catchException),
      finalize(() => {
        //console.log('Dismissing loader For ' + endpoint);
        //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
       // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
      })
    );
  }

  public get(endpoint: string,queryParams?: HttpParams) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Methods': '*',
        // 'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.get(endpoint, httpOptions)
      .pipe(
        tap(this.logResponse),
        map((response: any) => {
          let error = (response) ? response.error : undefined;
          if (error) {
            if (error.errorCode == "8888" || error.errorCode == "7777") {
              //this.sessionError(error.errorCode);
              return;
            }
          }
          return response;
        }),
        catchError(this.catchException),
        finalize(() => {
          //console.log('Dismissing loader For ' + endpoint);
          //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
          // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
        })
      );
  }

  public put<T>(endpoint: string, body: any, queryParams?:HttpParams): Observable<T>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }
    const url: string = endpoint; // endpoint has '/' as prefix
    return this.http.put<T>(url, body, httpOptions)
    .pipe(
      tap(this.logResponse),
      map((response: any) => {
        let error = (response) ? response.error : undefined;
        if (error) {
          if (error.errorCode == "8888" || error.errorCode == "7777") {
            //this.sessionError(error.errorCode);
            return;
          }
        }
        return response;
      }),
      catchError(this.catchException),
      finalize(() => {
        //console.log('Dismissing loader For ' + endpoint);
        //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
        // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
      })
    );
  }

  public getGlobal(api:string,endpoint: string,queryParams?: HttpParams) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.get(api + endpoint, httpOptions)
      .pipe(
        tap(this.logResponse),
        map((response: any) => {
          let error = (response) ? response.error : undefined;
          if (error) {
            if (error.errorCode == "8888" || error.errorCode == "7777") {
              //this.sessionError(error.errorCode);
              return;
            }
          }
          return response;
        }),
        catchError(this.catchException),
        finalize(() => {
          //console.log('Dismissing loader For ' + endpoint);
          //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
          // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
        })
      );
  }

  public postGlobal(api:string,endpoint: string, body:any,queryParams?:HttpParams){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Methods': '*',
        // 'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.post(api + endpoint, body, httpOptions)
    .pipe(
      tap(this.logResponse),
      map((response:any) => {
        let error = (response)?response.error:undefined;
        if(error)
        {
            if (error.errorCode == "8888" || error.errorCode == "7777"){
              //this.sessionError(error.errorCode);
              return;
            }
            }
        return response;
      }),
      catchError(this.catchException),
      finalize(() => {
        //console.log('Dismissing loader For ' + endpoint);
        //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
       // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
      })
    );
  }

  public putGlobal(
    api:string,
    endpoint: string,
    body:any,
    queryParams?:HttpParams
  )
  {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.put(api + endpoint, body, httpOptions)
    .pipe(
      tap(this.logResponse),
      map((response:any) => {
        let error = (response)?response.error:undefined;
        if(error)
        {
            if (error.errorCode == "8888" || error.errorCode == "7777"){
              //this.sessionError(error.errorCode);
              return;
            }
            }
        return response;
      }),
      catchError(this.catchException),
      finalize(() => {
        //console.log('Dismissing loader For ' + endpoint);
        //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
       // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
      })
    );
  }

  public deleteGlobal(api:string,endpoint: string, queryParams?:HttpParams){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };
    if (queryParams) {
      httpOptions = Object.assign(httpOptions, { params: queryParams });
    }

    return this.http.delete(api + endpoint, httpOptions)
    .pipe(
      tap(this.logResponse),
      map((response:any) => {
        let error = (response)?response.error:undefined;
        if(error)
        {
            if (error.errorCode == "8888" || error.errorCode == "7777"){
              //this.sessionError(error.errorCode);
              return;
            }
            }
        return response;
      }),
      catchError(this.catchException),
      finalize(() => {
        //console.log('Dismissing loader For ' + endpoint);
        //console.log("noPleaseWaitFlag = " +noPleaseWaitFlag + 'For ' + endpoint);
       // (isExcludedFromWait === false) && this.dismissWaitModal(noPleaseWaitFlag);
      })
    );
  }
  protected catchException(error: any) {
    //console.log("catch exception");
    console.log(error);
    return of({"error":error})
  }

  protected logResponse(res: any) {
    //console.log("response log");
    //console.log(res);
    return 1;
  }
}
