import { Injectable } from '@angular/core';
import { ARTICLES } from '../mocks/mock-article';
import { Http, Response, Headers } from '@angular/http';
import { Article } from '../models/article';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JSONP_PROVIDERS, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ArticleService {

	private articlesUrl = 'http://127.0.0.1:8000/articles/';
	private headers = new Headers();

	constructor(private http: Http, private jsonp: Jsonp) {
		console.log('ArticleService created.', http);
	//	this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
	//	this.headers.append('Content-Type', 'application/json');
		this.headers.append('Access-Control-Allow-Origin', '*');
	}

	private extractData(res: Response) {
		
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		;
		return body.data || {};
	}
	private handleError(error: any) {
		
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}


	getAllArticles(): Observable<any> {
		
		//return this.http.get(this.articlesUrl, { headers: this.headers }).map(this.extractData).catch(this.handleError);
		return Promise.resolve(ARTICLES);
	}

}



