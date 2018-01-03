import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MapComponent } from './components/contact-us/map/map.component';
import { ScreenComponent } from './components/home/screen/screen.component';
import { BetaComponent } from './components/home/beta/beta.component';
import { CompanyComponent } from './components/home/company/company.component';
import { PartnerComponent } from './components/home/partner/partner.component';
import { ServiceComponent } from './components/home/service/service.component';
import { RequestComponent } from './components/home/request/request.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqStartComponent } from './components/faq/faq-start/faq-start.component';
import { FaqListComponent } from './components/faq/faq-list/faq-list.component';
import { FaqItemComponent } from './components/faq/faq-list/faq-item/faq-item.component';
import { FaqDetailComponent } from './components/faq/faq-detail/faq-detail.component';
import { SendEmailService } from './services/sendemail.service';
import { ChatboxComponent } from './components/home/chatbox/chatbox.component';
import { ChatboxService } from './services/chatbox.service';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FooterComponent,
        AboutUsComponent,
        ContactUsComponent,
        MapComponent,
        ScreenComponent,
        BetaComponent,
        CompanyComponent,
        PartnerComponent,
        ServiceComponent,
        RequestComponent,
        FaqComponent,
        FaqStartComponent,
        FaqListComponent,
        FaqItemComponent,
        FaqDetailComponent,
        ChatboxComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBXE7xcv4hjhyzq58-9KMLXykZhxrT0Xz8'
        }),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'faq', component: FaqComponent, children: [
                { path: '', component: FaqStartComponent },
                { path: ':id', component: FaqDetailComponent },
              ]},
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent },    
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        SendEmailService,
        ChatboxService
    ]
})
export class AppModuleShared {
}
