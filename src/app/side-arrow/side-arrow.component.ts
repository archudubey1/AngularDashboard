import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-arrow',
  templateUrl: './side-arrow.component.html',
  styleUrls: ['./side-arrow.component.css']
})
export class SideArrowComponent {
  

  list=[
    {
      number:'1',
      name:'home',
      icon:'fa-solid fa-house',
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa-solid fa-chart-line',
    },
    {
      number:'3',
      name:'Producs',
      icon:'fa-solid fa-box',
    },
    {
      number:'4',
      name:'Order',
      icon:'fa-solid fa-cart-shopping',
    },
    {
      number:'5',
      name:'Settings',
      icon:'fa-solid fa-gear',
    },
    {
      number:'6',
      name:'About',
      icon:'fa-solid fa-circle-info',
    },
    {
      number:'7',
      name:'Contact',
      icon:'fa-solid fa-phone',
    },
    
  ];

 

}
