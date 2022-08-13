import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  allWork() {
    document.getElementById('1').classList.remove('d-none');
    document.getElementById('2').classList.remove('d-none');
    document.getElementById('3').classList.remove('d-none');
    document.getElementById('4').classList.remove('d-none');
    document.getElementById('5').classList.remove('d-none');
    document.getElementById('6').classList.remove('d-none');
  }

  showAngular(){
    document.getElementById('5').classList.remove('d-none');
    document.getElementById('6').classList.remove('d-none');
    document.getElementById('1').classList.add('d-none');
    document.getElementById('2').classList.add('d-none');
    document.getElementById('3').classList.add('d-none');
    document.getElementById('4').classList.add('d-none');
  }

  showJavaScript() {
    document.getElementById('1').classList.remove('d-none');
    document.getElementById('2').classList.remove('d-none');
    document.getElementById('3').classList.remove('d-none');
    document.getElementById('4').classList.remove('d-none');
    document.getElementById('5').classList.add('d-none');
    document.getElementById('6').classList.add('d-none');
  }
}
