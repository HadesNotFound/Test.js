function Player (name,score) {
	_this = this;
	_this._name = name;
	_this._score = score;
	_this.personSay = function personSay(something){
		return "Hello, I'm " + _this._name + " " + something;
	}
	_this.personSayAge = function personSayScore(){
		return "My score is " + _this._score;
	}
}
 
var vitosh = new Player("Vit",50);
console.log(vitosh.personSay("I like dragons."));
 
console.log(new Player("vityata",10).personSay("I want beer!"));
console.log(new Player("VitohAcademy",3000).personSayAge());
