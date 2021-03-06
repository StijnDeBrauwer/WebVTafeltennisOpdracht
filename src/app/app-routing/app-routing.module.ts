import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NewsDataService } from '../news/news-data.service';
import { NewsComponent } from '../news/news.component';
import { NewsDetailComponent} from '../news/news-detail/news-detail.component';
import { SeriesComponent } from '../series/series.component';
import { BlogComponent } from '../blog/blog.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../user/login/login.component';
import { MatchesComponent } from '../series/matches/matches.component';
import { AddNewsComponent } from '../news/add-news/add-news.component';
import { AuthGuardService } from '../user/auth-guard.service';
import { UserComponent } from '../user/user.component';
import { RegisterComponent } from '../user/register/register.component';
import { AuthenticationService } from '../user/authentication.service';
import { AddPostComponent } from '../blog/add-post/add-post.component';
import { LogoutComponent } from '../user/logout/logout.component';
import { SerieService } from '../series/serie.service';
import { BlogService } from '../blog/blog.service';
import { NewsResolver } from '../news/add-news/news.resolver.service';
import { AddMatchComponent } from '../series/matches/add-match/add-match.component';
import { AddSerieComponent } from '../series/add-serie/add-serie.component';



const appRoutes: Routes = [
    { path: 'news', component: NewsComponent},
    { path: 'news/:id', component: NewsDetailComponent, resolve: { newsItem: NewsResolver}},
    { path: 'series', canActivate: [AuthGuardService], component: SeriesComponent},
    { path: 'series/:id', canActivate: [AuthGuardService], component: MatchesComponent },
    { path: 'blog',  canActivate: [ AuthGuardService ], component: BlogComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'logout', component: LogoutComponent},
    { path: '', redirectTo: 'news', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent},
  ];

  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      MaterializeModule,
      CommonModule,
      RouterModule.forRoot(
        appRoutes
      ),
      ChartsModule
    ],
    declarations: [
        NewsComponent,
        NewsDetailComponent,
        SeriesComponent,
        BlogComponent,
        PagenotfoundComponent,
        LoginComponent,
        MatchesComponent,
        AddNewsComponent,
        RegisterComponent,
        AddPostComponent,
        LogoutComponent,
        AddMatchComponent,
        AddSerieComponent
    ],
    exports: [
      RouterModule
    ],
    providers: [
    NewsDataService,
    SerieService,
    BlogService,
    AuthenticationService,
    AuthGuardService,
    NewsResolver
]
  })
export class AppRoutingModule {}
