import { Component, OnInit } from '@angular/core';

export const NAVBAR = {
  SOCIAL_MEDIA: [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/vtumrukota/',
      icon: '/assets/images/linkedin-logo.png',
    },
    {
      name: 'Github',
      link: 'https://github.com/vtumrukota',
      icon: '/assets/images/GitHub-logo.png',
    },
    {
      name: 'Angel List',
      link: 'https://angel.co/vivekt',
      icon: '/assets/images/angellist-icon.svg',
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
