import { Component, OnInit } from '@angular/core';
import { hasParentInjector } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bolt:boolean=true;
  gift:boolean=true;
  paypal:boolean=true;
  affirm:boolean=true;
  checked: boolean=false;
  showAlert:boolean=true;
  
  

  constructor() { }

  ngOnInit() {
    
    
    //This would be a good place to initialize DOM Variables and/or functions
  }

  termsFunc(){
    // alert("Thank you for selecting the terms and conditions")
    //COMPLETE THIS FUNCTION
    this.checked =! this.checked;

    
    //This function is ran when a user selects the final sale checkbox
  }


  boltCheckout(){
    if(this.checked){
    this.bolt = !this.bolt;
  }
  console.log("bolt clicked");
  }

  giftCheckout(){
    if(this.checked){
    this.gift = !this.gift;
    }
    console.log("gift clicked");

    //COMPLETE THIS FUNCTION
    // This function toggles the Gift Card overlay
  }

  paypalCheckout(){

    if(this.checked){
    this.paypal = !this.paypal;}
    console.log("paypal clicked")
    //COMPLETE THIS FUNCTION
    // This function toggles the paypal overlay
  }
  affirmCheckout(){
    if(this.checked){
    this.affirm= !this.affirm;}
    console.log("affirm clicked")
  }

  
  enableCheckout(){
    //COMPLETE THIS FUNCTION
    // This function enables the checkout buttons when a condition is met

  }

  disableCheckout(){
    //COMPLETE THIS FUNCTION
    
    // This disables the checkout buttons when a condition isn't met

  }

  alertUser(){
    //COMPLETE THIS FUNCTION
    // This function needs to alert the user when try to click one of the checkout buttons without agreeing to the terms.
    if(!this.checked){
      alert("Terms not accepted, please accept")
    }

    else{

    }

  }
}