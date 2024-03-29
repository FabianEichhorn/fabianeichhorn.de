import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  { path: '', component: IntroduceComponent },
  { path: '', component: SkillsComponent},
  { path: '', component: MyWorkComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'contact-me', component: ContactMeComponent}, 
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component:DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }