import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import {BookComponent} from './components/book.component';

bootstrap(BookComponent, [HTTP_PROVIDERS, JSONP_PROVIDERS]);
