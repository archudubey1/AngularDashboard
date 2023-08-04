import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HeaderSideNav';
  
  sideNavStatus: boolean = false;
 

  // ***********sideArrow**************

  // showMe:boolean=true;

  // toggleMe(){
  //   this.showMe=!this.showMe
  //   this.hideMe=!this.hideMe

  //   const contElement = document.getElementsByClassName('main-card');
  //     if(contElement){
  //       contElement.style.margin-left = '185px';
  //     }
  // }


  showMe: boolean = true;
  // hideMe: boolean = false;
  
  toggleMe() {
    this.showMe = !this.showMe;
    this.hideMe = !this.hideMe;
  
    const contElements = document.getElementsByClassName('main-card');
  
    if (contElements) {
      // Loop through each element and apply the marginLeft change.
      for (let i = 0; i < contElements.length; i++) {
        const element = contElements[i] as HTMLElement; // Cast to HTMLElement for type safety
        element.style.marginLeft = this.showMe ? '185px' : '0'; // Set the desired marginLeft based on the showMe value
        // Add other styles as needed.
      }
    }
  }

  hiddenButton(x:any){
    x.style.display='none';
    
  }

  
  // hideMe:boolean=true;
  // toggleMe2(){
  //   this.hideMe=!this.hideMe
  //   this.showMe=!this.showMe
  //   const contElement = document.getElementsByClassName('main-card');
  //   if(contElement){
  //     contElement.style.margin-left = '-15px';
  //   }

   
  // }

  hideMe: boolean = true;

toggleMe2() {
  this.hideMe = !this.hideMe;
  this.showMe = !this.showMe; // Assuming you also have showMe as a boolean variable that you initialized properly.

  const contElements = document.getElementsByClassName('main-card');

  if (contElements) {
    // Loop through each element and apply the marginLeft change.
    for (let i = 0; i < contElements.length; i++) {
      const element = contElements[i] as HTMLElement; // Cast to HTMLElement for type safety
      element.style.marginLeft = this.hideMe ? '-15px' : '0'; // Set the desired marginLeft based on the hideMe value
      // Add other styles as needed.
    }
  }
}
  
  
}

