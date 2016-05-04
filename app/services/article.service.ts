import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import { Article } from '../models/article';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ArticleService {

	private  articlesUrl = 'http://localhost:8000/articles/';

	constructor(private http: Http) {
	}

	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		;
		return body.results || {};
	}
	private handleError(error: any) {
		
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}


	getAllArticles(): Observable<any> {
		var options = new RequestOptions({
			method: RequestMethod.Get,
			url: this.articlesUrl,
		});
		var req = new Request(options);
		return this.http.request(req).map(this.extractData).catch(this.handleError);
	}

}



