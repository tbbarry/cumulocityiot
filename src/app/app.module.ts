import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';
import { HelloComponent } from './hello/hello.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HelloComponent}
]
@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes, { enableTracing: false, useHash: true }), CoreModule.forRoot()],
  bootstrap: [BootstrapComponent],
  declarations: [
    HelloComponent
  ]
})
export class AppModule {}
