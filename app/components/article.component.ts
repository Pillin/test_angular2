import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'
import { Article } from '../models/article';

@Component({
    selector: 'article',
    template: `
    <md-card>
	   	<md-card-header>
	     	<md-card-title>{{art.title}}</md-card-title>
	     	<md-card-subtitle></md-card-subtitle>
	   	</md-card-header>
	   	<img md-card-image src="https://pixabay.com/static/uploads/photo/2014/12/17/21/30/wild-flowers-571940_960_720.jpg">
	   	<md-card-content>
	   	  <p>{{art.introduction}}</p>
	      <p>{{art.content}}</p>
	   	</md-card-content>
	   	<md-card-actions>
        	<button md-button>LIKE</button>
        	<button md-button>SHARE</button>
   		</md-card-actions>
	   	<md-card-footer>
   			<img md-card-avatar src="https://pixabay.com/static/uploads/photo/2014/12/17/21/30/wild-flowers-571940_960_720.jpg">
   			<b>{{art.owner}}</b>
 		</md-card-footer>
	</md-card>`,
	directives: [ MD_CARD_DIRECTIVES]
})
export class ArticleComponent {
	@Input() 
	art: Article
}