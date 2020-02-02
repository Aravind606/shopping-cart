import { Component, OnInit } from '@angular/core';
 import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 userData:FormGroup;
data = [
  {
       "id":1,
       "productName" : "T-Shirt",
       "basePrice" : 500,
       "image" : "http://placehold.it/200x200",
       "description" : "Des",
       "varients" : [
            {
                 "type" : "Size",
                 "values" : ["xl","xxl"]
            },
            {
                 "type" : "Meterial",
                 "values" : ["cotton","silk"]
            },
            {
                 "type" : "Color",
                 "values" : ["yellow","red"]
            }
       ],
       "varientDetails" : [
            {
                 "size" : "xl",
                 "meterial" : "cotton",
                 "color" : "red",
                 "addOnprice" : 30
            },
            {
                 "size" : "xl",
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 40
            },
            {
                 "size" : "xl",
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 50
            },
            {
                 "size" : "xl",
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 60
            },
            {
                 "size" : "xxl",
                 "meterial" :
                  "cotton",
                 "color" : "red",
                 "addOnprice" : 70
            },
            {
                 "size" : "xxl",
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 80
            },
            {
                 "size" : "xxl",
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 90
            },
            {
                 "size" : "xxl",
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 100
            }
       ],
       "selectedVariants":{
          "size" : "xxl",
          "meterial" : "silk",
          "color" : "yellow",
       }
  },
 
  {
       "id": 2,
       "productName" : "Saree",
       "basePrice" : 5000,
       "image" : "http://placehold.it/200x200",
       "description" : "Des",
       "varients" : [
            {
                 "type" : "Meterial",
                 "values" : ["cotton","silk"]
            },
            {
                 "type" : "Color",
                 "values" : ["yellow","red"]
            }
       ],
       "varientDetails" : [
            {
                 "meterial" : "cotton",
                 "color" : "red",
                 "addOnprice" : 30
            },
            {
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 40
            },
            {
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 50
            },
            {
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 60
            }
       ]
  }
]
  constructor() {
     this.userData = new FormGroup({
       'productName': new FormControl(),
       'Size' : new FormControl(),
       'Meterial' : new FormControl(),
       'Color' : new FormControl()
     })
   }

  ngOnInit() {
  }
  selectedVariants =[];
 
  fnchange(id,type,value){
      // alert(`${id} ${type} ${value}`)
      
       this.selectedVariants.push(
            {
                 id:id,
                 type:type,
                 value:value
            }
            );
    
 
  }
      
 onsubmit(){
     console.log(this.selectedVariants)
 }  
 
}
