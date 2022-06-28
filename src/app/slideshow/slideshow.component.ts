import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['laptop_color.jpg', 'developer_desk.jpg', 'work_desk.jpg'];
  headlines = ['Bring engineering to the next level', 'I dont make mistakes! I build features!', 'Stay hungry. Stay foolish'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage(); //this. bc of singelton pattern
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      },1)
    }, 8000)
  }
}

