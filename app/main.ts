import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import { HTTP_PROVIDERS, RequestOptions } from '@angular/http';
import { MyBaseRequestOptions } from './providers/app.provider';
import {BookComponent} from './components/book.component';

bootstrap(BookComponent, [HTTP_PROVIDERS,  provide(RequestOptions, { useClass: MyBaseRequestOptions })]);
