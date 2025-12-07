import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  counterValue=signal(0);
  increment(){
    // this.counterValue.set(this.counterValue()+1)
    this.counterValue.update((num)=> num+1);
    
  }
  decrement(){
    
    this.counterValue.update((val)=> val-1);
    
  }
  reset(){
    
    
    this.counterValue.set(0);

    
  }


}
