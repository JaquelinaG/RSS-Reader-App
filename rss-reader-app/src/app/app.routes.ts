import { Routes, RouterModule } from "@angular/router";
import { FeedsComponent } from "./feeds/feeds.component";

export const routes: Routes = [
    {
        path: 'feeds/:category',
        component: FeedsComponent
      },
];

export const routing = RouterModule.forRoot(routes);