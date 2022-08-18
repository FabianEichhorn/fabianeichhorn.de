import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
/*   @Input() darkMode = true; */
  hideDesktop  = true 

  constructor() { }

  ngOnInit(): void {
  }


  menuOnClick() {
    document.getElementById('menu-bar').classList.toggle('change');
    if(this.hideDesktop == true) {
    document.getElementById('links-wrap').classList.remove('hide-desktop');
    this.hideDesktop = false;
    } else {
      document.getElementById('links-wrap').classList.add('hide-desktop');
      this.hideDesktop = true;
    }
  }

  toMySkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  toMyWork() {
    document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' });
  }
  toAboutMe() {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  }
}
