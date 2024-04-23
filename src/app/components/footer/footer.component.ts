import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

   fecha = new Date().getFullYear();
   fecha1:any = this.fecha + 1;
  ngOnInit() {
  }

}
