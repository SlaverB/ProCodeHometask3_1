function Human() {
    this.firstname = 'Oleg';
    this.lastname = 'Vadiko';
    this.age = 32;
    this.height = 180;
    this.weight = 75;
}

function Men() {
    Human.call(this);
    European.call(this);

    this.adams_apple = true;
    this.sex = "men";
    this.shoulders = "wide";
    this.skill = "force";
}

function European() {
    this.faceShape = "orthogonal";
    this.hairShape = "straight_OR_wave";
    let _body_hair_range = "middle";

    this.getBody_hair_range = function() {
        return _body_hair_range;
      };

    this.setBody_hair_range = function(newValue) { 
        _body_hair_range = newValue;
    }
    
}

function Asian(){
    this.eyeIncision = "narrow";
    this.hairShape= "straight";
    this.hairColor = "black";
    this.hairStiffness = "tight";
    this.epicanthus = true; 
}

Men.prototype.eyeIncision = (new Asian()).eyeIncision;

const menObj = new Men();
Object.defineProperty(menObj, "getBody_hair_range", {enumerable: false});
Object.defineProperty(menObj, "setBody_hair_range", {enumerable: false});

let charList = '';
for (let att in menObj){
    const val = menObj[att];
    console.log(`${att}: ${val}`);
    charList = `${charList}<li>${att}: ${val}</li>`;
}

console.log(`body_hair_range: ${menObj.getBody_hair_range()}`); 
charList = `${charList}<li>body_hair_range: ${menObj.getBody_hair_range()}</li>`;

let character = document.querySelector('.character');
character.innerHTML = charList;