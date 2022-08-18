import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
  submit() {
    document.getElementById('name').innerHTML = '';
    document.getElementById('e-mail').innerHTML = '';
    document.getElementById('message').innerHTML = '';
  }
}