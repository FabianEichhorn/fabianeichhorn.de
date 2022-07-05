import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: '', component: SkillsComponent},
  { path: '', component: MyWorkComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component:DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }