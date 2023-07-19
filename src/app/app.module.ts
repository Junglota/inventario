import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DashComponent } from './dash/dash.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashProductComponent } from './dash-product/dash-product.component';
import { IndexStockComponent } from './index-stock/index-stock.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';

const appRoutes: Routes = [
  {path: '',component:PaginaPrincipalComponent},
  {path: 'dash',component:DashComponent},
  {path: 'usuarios',component:DashUserComponent},
  {path: 'productos',component:DashProductComponent},
  {path: 'stock',component:IndexStockComponent},
  {path: 'recuperacion',component:RecuperacionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    DashComponent,
    DashUserComponent,
    DashProductComponent,
    IndexStockComponent,
    RecuperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
