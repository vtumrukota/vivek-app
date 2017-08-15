import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public emailInput: string;

  constructor() { }

  ngOnInit() {
  }

  public saveEmail(): void {
    console.log('email input', this.emailInput);
  }

}
