import { Component, Input } from '@angular/core';

import { Article } from '../models/article';

@Component({
    selector: 'article',
    template: `
    <md-card>
	   <md-card-header>
	      <img md-card-avatar src="https://pixabay.com/static/uploads/photo/2014/12/17/21/30/wild-flowers-571940_960_720.jpg">
	      <md-card-title>Header title</md-card-title>
	      <md-card-subtitle>Header subtitle</md-card-subtitle>
	   </md-card-header>
	   <img md-card-image src="https://pixabay.com/static/uploads/photo/2014/12/17/21/30/wild-flowers-571940_960_720.jpg">
	   <md-card-content>
	      <p>Here is some more content</p>
	   </md-card-content>
	</md-card>`
})
export class ArticleComponent {
	@Input() 
	art: Article
}