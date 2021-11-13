import { NgModule, OnInit } from '@angular/core';
import { Router, Routes, RouterModule, RouteConfigLoadEnd, PreloadAllModules } from '@angular/router';
import { addDynamicPath } from './classes/dynamic-path';
import { NotFoundComponent } from './notfound/not-found.component';
import { DynamicPathGuard } from './guards/dynamic-path.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'general', loadChildren: './modules/general/general.module#GeneralModule' },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', canActivate: [DynamicPathGuard], component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {

    this.router.events.subscribe(async routerEvent => {

      if (routerEvent instanceof RouteConfigLoadEnd) {      
        addDynamicPath(this.router.config, routerEvent.route.path);
        // Don't reset the router, if you deeplink the next navigation 
        // will act as full page refresh when router is reset
        // if (newConfig) {
        //   this.router.resetConfig(newConfig);
        // }
      }      
    });
  }
}
