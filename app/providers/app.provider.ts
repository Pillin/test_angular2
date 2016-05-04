import { BaseRequestOptions, Headers } from '@angular/http';



export class MyBaseRequestOptions extends BaseRequestOptions {
	headers: Headers = new Headers({
		'X-Requested-With': 'XMLHttpRequest'
	});
	withCredentials: boolean = true;
}