export default class Hero {
  constructor(params) {

    const { name } = params;

    this.heroNameDisplay = document.getElementById("heroName");
    this.heroNameDisplay.innerText = "Héros"

    this._name = name;
  }

  set name(value) {
    this._name = value;
    this.heroNameDisplay.innerText = this._name 
  }
}
