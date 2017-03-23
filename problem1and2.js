// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

// structure:
function Photo(fileName, location) {
  this.fileName = fileName;
  this.location = location;
}

function Album() {
  this.photos = [];
}

Album.prototype.addPhoto = function(photo) {
  this.photos.push(photo);
}

// instantiation:
var christmasPhoto = new Photo("tree.jpg", "home");
var thanksgivingPhoto = new Photo("turkey.jpg", "park");
var birthdayPhoto = new Photo("cake.jpg", "bar");

var album2 = new Album();
album2.addPhoto(christmasPhoto);
album2.addPhoto(thanksgivingPhoto);
album2.addPhoto(birthdayPhoto);

console.log(album2);
console.log(album2.photos[0]);
console.log(album2.photos[1]);
console.log(album2.photos[2]);


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

// structure:

// this is the parent
function Person(gender, age, name, occupation) {
  this.gender = gender;
  this.age = age;
  this.name = name;
  this.occupation = occupation;
}

Person.prototype.personDescripor = function () {
  return this.name + " is " + this.gender + ", " + this.age + " years old " + "and a " + this.occupation + ".";
}

// this is the parent's child
function Teacher(gender, age, name, occupation) {
  Person.call(this, gender, age, name, occupation);
}

Teacher.prototype = Object.create(Person.prototype);

// this is the parent's child
function Student(gender, age, name, occupation) {
  Person.call(this, gender, age, name, occupation);
}

Student.prototype = Object.create(Person.prototype);


function School() {
  this.schoolPeeps = [];
}

School.prototype.addSchoolPeeps = function(person) {
  this.schoolPeeps.push(person);
}

// objects are created/defined
var bob = new Person("male", 12, "Bob", "student");
var sue = new Person("female", 5, "Sue", "student");
var tammy = new Person("female", 45, "Tammy", "science teacher");
var patrick = new Person("male", 58, "Patrick", "grammar teacher")
var kelly = new Person("female", 29, "Kelly", "history teacher");

var hamiltonMiddle = new School();

hamiltonMiddle.addSchoolPeeps(bob);
hamiltonMiddle.addSchoolPeeps(sue);
hamiltonMiddle.addSchoolPeeps(tammy);
hamiltonMiddle.addSchoolPeeps(patrick);
hamiltonMiddle.addSchoolPeeps(kelly);


console.log(hamiltonMiddle);
console.log(bob.personDescripor());
console.log(sue.personDescripor());
console.log(tammy.personDescripor());
console.log(patrick.personDescripor());
console.log(kelly.personDescripor());
