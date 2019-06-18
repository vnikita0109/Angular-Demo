import { Component } from '@angular/core';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers:[FoodService]
})
export class AppComponent {
  title = 'MyFoodApp';
  restaurants=[];

  constructor(private foodservice:FoodService){

  }

  ngOnInit(){
    this.foodservice.getAllRestaurants().subscribe((data:any)=>{
      console.log(data);
      data=data.restaurants.filter(e=>{
        return (e.restaurants.photos !== undefined)?e:null
      })
      console.log(data)
      this.restaurants=data;
    })
  }
}
