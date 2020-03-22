import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Hello world from template
  // cvcvcjkhkjvbh`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ecomapp';
  userType = 'Users';

  ngDoCheck(): void {
    console.log('this is do check');
  }
}
