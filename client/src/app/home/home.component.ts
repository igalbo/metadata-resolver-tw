import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ResolverService } from '../services/resolver.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  data = {};
  siteUrl = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private resolverService: ResolverService
  ) {}

  ngOnInit() {
    // load page based on 'page' query param or default to 1
    this.route.queryParams.subscribe((x) => this.loadPage());
    // this.route.queryParams.subscribe((x) => this.loadPage(x['page'] || 1));
  }

  private loadPage() {
    // get page of items from api
    this.http.get<any>(`/api/urlmeta`).subscribe((x) => {
      this.data = x.data;
    });
  }

  addUrl(siteUrl: string) {
    this.siteUrl = siteUrl;

    this.resolverService.getMetadata(this.siteUrl)?.subscribe((data) => {
      this.data = data || {};
      console.log(this.data);
    });
  }
}
