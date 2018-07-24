import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 Radiofood=false;
 Radiofood1=false;
 Radiofood2=false;
 Radiofood3=false; 
 Radiofood4=false;
 
 Radiolanguage=false;
 Radiolanguage1=false;
 Radiolanguage2=false;
 Radiolanguage3=false;
 Radiolanguage4=false;

 Radiotech=false;
 Radiotech1=false;
 Radiotech2=false;
 Radiotech3=false;
 Radiotech4=false;

//variables
 Alertfood:string;
 Alertfood1:string;
 Alertfood2:string;
 Alertfood3:string;
 Alertfood4:string;

 Alertlanguage:string;
 Alertlanguage1:string;
 Alertlanguage2:string;
 Alertlanguage3:string;
 Alertlanguage4:string;

 Alerttech:string;
 Alerttech1:string;
 Alerttech2:string;
 Alerttech3:string;
 Alerttech4:string;

 foodAnswer="Butter";
 foodPoints=0;
 food1Answer="Ice Cubes";
 food1Points=0;
 food2Answer="Molasses";
 food2Points=0;
 food3Answer="Japan";
 food3Points=0;
 food4Answer="White Castle";
 food4Points=0;

 totalFoodPoints=0;

 
 languageAnswer="11";
 languagePoints=0;
 language1Answer="Mandarin Chinese";
 language1Points=0;
 language2Answer="Portuguese";
 language2Points=0;
 language3Answer="Dinero";
 language3Points=0;
 language4Answer="Ti Amo";
 language4Points=0;

 totalLanguagePoints=0;


 techAnswer="2000";
 techPoints=0;
 tech1Answer="Steve Jobs";
 tech1Points=0;
 tech2Answer="Motherboard";
 tech2Points=0;
 tech3Answer="World Wide Web";
 tech3Points=0;
 tech4Answer="Mouse";
 tech4Points=0;

 totalTechPoints=0;




calcFoodPoints():void{
  if(this.Alertfood===this.foodAnswer){
    this.foodPoints=1;
  }
  }

calcFood1Points():void{
  if(this.Alertfood1===this.food1Answer){
    this.food1Points=1;
  }
  }

calcFood2Points():void{
  if(this.Alertfood2===this.food2Answer){
  this.food2Points=1;
  }
  }

calcFood3Points():void{
   if(this.Alertfood3===this.food3Answer){
   this.food3Points=1;
   }
   }

calcFood4Points():void{
  if(this.Alertfood4===this.food4Answer){
  this.food4Points=1;
  }
  }

checkFoodScore():void{
  this.calcFoodPoints();
  this.calcFood1Points();
  this.calcFood2Points();
  this.calcFood3Points();
  this.calcFood4Points();
  this.totalFoodPoints=this.foodPoints+this.food1Points+this.food2Points+this.food3Points+this.food4Points;;
  }

calcLanguagePoints():void{
  if(this.Alertlanguage===this.languageAnswer){
    this.languagePoints=1;
  }}

calcLanguage1Points():void{
  if(this.Alertlanguage1===this.language1Answer){
    this.language1Points=1;
  }}

calcLanguage2Points():void{
  if(this.Alertlanguage2===this.language2Answer){
  this.language2Points=1;
  }}

calcLanguage3Points():void{
  if(this.Alertlanguage3===this.language3Answer){
  this.language3Points=1;
  }}

calcLanguage4Points():void{
  if(this.Alertlanguage4===this.language4Answer){
    this.language4Points=1;
  }}

checkLanguageScore():void{
  this.calcLanguagePoints();
  this.calcLanguage1Points();
  this.calcLanguage2Points();
  this.calcLanguage3Points();
  this.calcLanguage4Points();
  this.totalLanguagePoints=this.languagePoints+this.language1Points+this.language2Points+this.language3Points+this.language4Points;;
 }


 calcTechPoints():void{
  if(this.Alerttech===this.techAnswer){
    this.techPoints=1;
  }
  }

calcTech1Points():void{
  if(this.Alerttech1===this.tech1Answer){
    this.tech1Points=1;
  }
  }

calcTech2Points():void{
  if(this.Alerttech2===this.tech2Answer){
  this.tech2Points=1;
  }
  }

calcTech3Points():void{
   if(this.Alerttech3===this.tech3Answer){
   this.tech3Points=1;
   }
   }

calcTech4Points():void{
  if(this.Alerttech4===this.tech4Answer){
  this.tech4Points=1;
  }
  }

checkTechScore():void{
  this.calcTechPoints();
  this.calcTech1Points();
  this.calcTech2Points();
  this.calcTech3Points();
  this.calcTech4Points();
  this.totalTechPoints=this.techPoints+this.tech1Points+this.tech2Points+this.tech3Points+this.tech4Points;;
  }

  constructor(public navCtrl: NavController , private alertCtrl: AlertController) {}
 
  food() {
  let alert = this.alertCtrl.create();
  alert.setTitle('In cooking, Margarine is used as a substitude for what ingridient?');

  alert.addInput({
  type: 'radio',
  label: 'Cooking Oil',
  value: 'Cooking Oil',
  });

  alert.addInput({
  type: 'radio',
  label: 'Butter',
  value: 'Butter'
  });

  alert.addInput({
  type: 'radio',
  label: 'Water',
  value: 'Water'
  });
  
  alert.addInput({
  type: 'radio',
  label: 'Cream',
  value: 'Cream'
  });

  alert.addButton({ text: 'Next', handler: data => { 
    this.Radiofood = false;
    this.Alertfood = data;
    this.checkFoodScore();
    this.food1();
  }
  });
  alert.present();}

food1() {
let alert = this.alertCtrl.create();
alert.setTitle('When a drink is served "on the rocks" it is served with?');

alert.addInput({
type: 'radio',
label: 'Alcohol',
value: 'Alcohol'
});

alert.addInput({
type: 'radio',
label: 'Ice Cubes',
value: 'Ice Cubes'
});

alert.addInput({
type: 'radio',
label: 'Hot Water',
value: 'Hot Water'
});

alert.addInput({
type: 'radio',
label: 'Cold Water',
value: 'Cold Water'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiofood1= false;
  this.Alertfood1= data;
  this.checkFoodScore();
  this.food2();
 }
});
alert.present();
}

food2() {
let alert = this.alertCtrl.create();
alert.setTitle('What ingridient is added to white sugar to make brown sugar?');

alert.addInput({
type: 'radio',
label: 'Glucose',
value: 'Glucose'
});

alert.addInput({
type: 'radio',
label: 'Sugar Cane',
value: 'Sugar'
});

alert.addInput({
type: 'radio',
label: 'Molasses',
value: 'Molasses'
});

alert.addInput({
type: 'radio',
label: 'Sugar Syrup',
value: 'Sugar Syrup'
})

alert.addButton({ text: 'Next', handler: data => {
  this.Radiofood2= false;
  this.Alertfood2= data;
  this.checkFoodScore();
  this.food3() }
});
alert.present();
}

food3() {
let alert = this.alertCtrl.create();
alert.setTitle('Sukiyaki is a popular hot pot dish from which country?');

alert.addInput({
type: 'radio',
label: 'Japan',
value: 'Japan'
});

alert.addInput({
type: 'radio',
label: 'Russia',
value: 'Russia'
});

alert.addInput({
type: 'radio',
label: 'China',
value: 'China'
});

alert.addInput({
type: 'radio',
label: 'Brazil',
value: 'Brazil'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiofood3 = false;
  this.Alertfood3 = data;
  this.checkFoodScore()
  this.food4()}
});
alert.present();
}

food4() {
let alert = this.alertCtrl.create();
alert.setTitle('Founded in 1921,this company was credited with being the first "fast food" chain!');

alert.addInput({
type: 'radio',
label: 'Burger King',
value: 'Burger King'
});

alert.addInput({
type: 'radio',
label: 'McDonalds',
value: 'McDonalds'
});

alert.addInput({
type: 'radio',
label: 'White Castle',
value: 'White Castle'
});

alert.addInput({
type: 'radio',
label: 'Taco Bell',
value: 'Taco Bell'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiofood4 = false;
  this.Alertfood4 = data;
  this.checkFoodScore();
  this.food5()   }
});
alert.present();
}

food5(){
const alert = this.alertCtrl.create({
title: 'SCORED',

subTitle: this.totalFoodPoints + '/5',
buttons: ['OK']
});
alert.present();
}


language() {
let alert = this.alertCtrl.create();
alert.setTitle('How many languages do we have in SOUTH AFRICA?');

alert.addInput({
type: 'radio',
label: '11',
value: '11'
});

alert.addInput({
type: 'radio',
label: '12',
value: '12'
});

alert.addInput({
type: 'radio',
label: '9',
value: '9'
});

alert.addInput({
type: 'radio',
label: '13',
value: '13'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiolanguage = false;
  this.Alertlanguage = data;
  this.checkLanguageScore();
  this.language1() }
});
alert.present();

}
  
language1() {
let alert = this.alertCtrl.create();
alert.setTitle('What is the most widely spoken language in the world?');

alert.addInput({
type: 'radio',
label: 'English',
value: 'English'
});

alert.addInput({
type: 'radio',
label: 'Hindi',
value: 'Hindi'
});

alert.addInput({
type: 'radio',
label: 'Mandarin Chinese',
value: 'Mandarin Chinese'
});

alert.addInput({
type: 'radio',
label: 'Spanish',
value: 'Spanish'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiolanguage1 = false;
  this.Alertlanguage1 = data;
  this.checkLanguageScore();
  this.language2() }
});
alert.present();
}

language2() {
let alert = this.alertCtrl.create();
alert.setTitle('What language do they speak in Brazil?');

alert.addInput({
type: 'radio',
label: 'Portuguese',
value: 'Portuguese'
});

alert.addInput({
type: 'radio',
label: 'Arabic',
value: 'Arabic'
});

alert.addInput({
type: 'radio',
label: 'English',
value: 'English'
});

alert.addInput({
type: 'radio',
label: 'Shona',
value: 'Shona'
});


alert.addButton({ text:'Next',handler: data => {
  this.Radiolanguage2 = false;
  this.Alertlanguage2 = data;
  this.checkLanguageScore();
  this.language3() }
});
alert.present();

}


language3() {
let alert = this.alertCtrl.create();
alert.setTitle('What is the word money in spanish?');

alert.addInput({
type: 'radio',
label: 'i soldi',
value: 'i soldi'
});

alert.addInput({
type: 'radio',
label: 'Argent',
value: 'Argent'
});

alert.addInput({
type:  'radio',
label: 'Dinero',
value: 'Dinero'
});

alert.addInput({
type:  'radio',
label: 'Mari',
value: 'Mari'
});


alert.addButton({ text: 'Next', handler: data => {
  this.Radiolanguage3 = false;
  this.Alertlanguage3 = data;
  this.checkLanguageScore();
  this.language4()}
});
alert.present();

}

language4() {
let alert = this.alertCtrl.create();
alert.setTitle('How to say "I love you" in italian?');

alert.addInput({
type: 'radio',
label: 'Te Amo',
value: 'Te Amo'
});

alert.addInput({
type: 'radio',
label: 'ich liebe dich',
value: 'ich liebe dich'
});

alert.addInput({
type: 'radio',
label: 'Ti Amo',
value: 'Ti Amo'
});

alert.addInput({
type: 'radio',
label: 'Ndinokuda',
value: 'Ndinokuda'
});


alert.addButton({ text: 'Next', handler: data => { 
  this.Radiolanguage4 = false;
  this.Alertlanguage4 = data;
  this.checkLanguageScore();
  this.language5()}
});
alert.present();
}

language5(){
const alert = this.alertCtrl.create({
title: 'SCORED',

subTitle: this.totalLanguagePoints + '/5', 
buttons: ['OK']
});
alert.present();
}



tech() {
let alert = this.alertCtrl.create();
alert.setTitle('How many computer languages are in use?');

alert.addInput({
type: 'radio',
label: '500',
value: 'value1'
});

alert.addInput({
type: 'radio',
label: '20',
value: '20'
});

alert.addInput({
type: 'radio',
label: '2000',
value: '2000'
});

alert.addInput({
type: 'radio',
label: '3000',
value: '3000'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiotech = false;
  this.Alerttech = data;
  this.checkTechScore();
  this.tech1()}
});
alert.present();
}
  
tech1() {
let alert = this.alertCtrl.create();
alert.setTitle('Who founded Apple computer?');

alert.addInput({
type: 'radio',
label: 'Bill Gates',
value: 'Bill Gates'
});

alert.addInput({
  type: 'radio',
  label: 'Stephen Hawking',
  value: 'Stephen Hawking'
});

alert.addInput({
type: 'radio',
label: 'Steve Jobs',
value: 'Steve Jobs'
});

alert.addInput({
type: 'radio',
label: 'Linus Torvalds',
value: 'Linus Torvalds'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiotech1 = false;
  this.Alerttech1 = data;
  this.checkTechScore();
  this.tech2()}
});
alert.present();
}

tech2() {
let alert = this.alertCtrl.create();
alert.setTitle('Which of these is not a peripheral, in computer terms?');

alert.addInput({
type: 'radio',
label: 'Keyboard',
value: 'Keyboard'
});

alert.addInput({
type: 'radio',
label: 'Monitor',
value: 'Monitor'
});

alert.addInput({
type: 'radio',
label: 'Motherboard',
value: 'Motherboard'
});

alert.addInput({
type: 'radio',
label: 'Mouse',
value: 'Mouse'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiotech2 = false;
  this.Alerttech2 = data;
  this.checkTechScore();
  this.tech3()}
});
alert.present();
}

tech3() {
let alert = this.alertCtrl.create();
alert.setTitle('What does the internet prefix WWW stand for?');

alert.addInput({
type: 'radio',
label: 'Worldwide Weather',
value: 'Worldwide Weather'
});

alert.addInput({
type: 'radio',
label: 'Wide width wickets',
value: 'Wide width wickets'
});

alert.addInput({
type: 'radio',
label: 'Western Washington World',
value: 'Western Washington World'
});

alert.addInput({
type: 'radio',
label: 'World Wide Web',
value: 'World Wide Web'
});

alert.addButton({ text: 'Next', handler: data => {
  this.Radiotech3 = false;
  this.Alerttech3 = data;
  this.checkTechScore();
  this.tech4()}
});
alert.present();
}

tech4() {
let alert = this.alertCtrl.create();
alert.setTitle('What is the name of a computer pointing device?');

alert.addInput({
type: 'radio',
label: 'Modem',
value: 'Modem'
});

alert.addInput({
type: 'radio',
label: 'Mouse',
value: 'Mouse'
});

alert.addInput({
type: 'radio',
label: 'Monitor',
value: 'Monitor'
});

alert.addInput({
type: 'radio',
label: 'Sound Card',
value: 'Sound Card'
});

alert.addButton({ text: 'Next', handler: data => { 
  this.Radiotech4 = false;
  this.Alerttech4 = data;
  this.checkTechScore();
  this.tech5()}
});
alert.present();
}

tech5(){
const alert = this.alertCtrl.create({
title: 'SCORED',

subTitle: this.totalTechPoints + '/5',
buttons: ['OK']
});
alert.present();
}

}
