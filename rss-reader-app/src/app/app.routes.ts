import { Routes, RouterModule } from "@angular/router";
import { FeedsComponent } from "./feeds/feeds.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ArticleComponent } from "./article/article.component";

export const routes: Routes = [
  {
    path: 'feeds/:category',
    component: FeedsComponent
  },
  {
    path: 'feeds/article/:category/:guid',
    component: ArticleComponent
  },  
  { path: '', redirectTo: '/feeds/:category', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);