import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS }    from '@angular/http';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service'
import { ArticleComponent } from './article.component';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <article [art]="art" *ngFor="let art of articles" ></article>`,
    directives: [ArticleComponent],
    providers: [HTTP_PROVIDERS, JSONP_PROVIDERS, ArticleService]
})

export class BookComponent implements OnInit {
    articles: Article[];
    errorMessage = "";
    title = "Articulos de la semana";

    constructor(private articleService: ArticleService) { }

    getArticles() {
        /*this.articleService.getAllArticles().subscribe(
            (articles:any) => this.articles = articles
        );*/
        this.articleService.getAllArticles().then(articles => this.articles = articles);
    }

    ngOnInit() {
        this.getArticles();
    }
}
