import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DemoModule } from './demo/module';
import { DemoComponent } from './demo/component';
import { CalendarModule } from 'angular-calendar';
import { environment } from './environments/environment';
import {OnInit} from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule,CalendarModule.forRoot()
  ],
  bootstrap: [DemoComponent]
})
export class BootstrapModule {


ngAfterOnInit(){

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
   // Ensure Angular destroys itself on hot reloads.
   if (window['ngRef']) {
     window['ngRef'].destroy();
   }
   window['ngRef'] = ref;

   // Otherwise, log the boot error
 }).catch(err => console.error(err));

}


}

 

// platformBrowserDynamic().bootstrapModule(BootstrapModule)