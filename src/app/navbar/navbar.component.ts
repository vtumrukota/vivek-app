import { Component, OnInit } from '@angular/core';

export const NAVBAR = {
  SOCIAL_MEDIA: [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/vtumrukota/',
      icon: '/assets/images/sf-bg.jpg',
    },
    {
      name: 'Angel List',
      link: 'https://angel.co/vivekt',
      icon: '/assets/images/sf-bg.jpg',
    },
    {
      name: 'Github',
      link: 'https://github.com/vtumrukota',
      icon: '/assets/images/sf-bg.jpg',
    }
  ]
};
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  socialMedia = NAVBAR.SOCIAL_MEDIA;

  constructor() {
    'ngInject';
  }

  ngOnInit() {
    console.log('test', this.socialMedia);
  }

}
