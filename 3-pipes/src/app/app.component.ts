import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3-pipes';

  dateToday = new Date()

  showForm=false;


student={
  id:10374394,
  name:'Prveen',
  grade:'A'
}

employees=[{
  "id": 1,
  "first_name": "Stafford",
  "last_name": "Gregol",
  "email": "sgregol0@webnode.com",
  "gender": "Male"
}, {
  "id": 2,
  "first_name": "Bernelle",
  "last_name": "Atkin",
  "email": "batkin1@netvibes.com",
  "gender": "Female"
}, {
  "id": 3,
  "first_name": "Durante",
  "last_name": "Naisby",
  "email": "dnaisby2@howstuffworks.com",
  "gender": "Male"
}, {
  "id": 4,
  "first_name": "Delcine",
  "last_name": "Sheivels",
  "email": "dsheivels3@usda.gov",
  "gender": "Female"
}, {
  "id": 5,
  "first_name": "Ricoriki",
  "last_name": "Plaid",
  "email": "rplaid4@sourceforge.net",
  "gender": "Male"
}, {
  "id": 6,
  "first_name": "Chuck",
  "last_name": "Pulley",
  "email": "cpulley5@slashdot.org",
  "gender": "Male"
}, {
  "id": 7,
  "first_name": "Maury",
  "last_name": "Harlick",
  "email": "mharlick6@globo.com",
  "gender": "Male"
}, {
  "id": 8,
  "first_name": "Moise",
  "last_name": "Sanson",
  "email": "msanson7@dailymail.co.uk",
  "gender": "Male"
}, {
  "id": 9,
  "first_name": "Claudius",
  "last_name": "Potte",
  "email": "cpotte8@cisco.com",
  "gender": "Male"
}, {
  "id": 10,
  "first_name": "Martina",
  "last_name": "Buscher",
  "email": "mbuscher9@godaddy.com",
  "gender": "Female"
}, {
  "id": 11,
  "first_name": "Farra",
  "last_name": "Wiggall",
  "email": "fwiggalla@domainmarket.com",
  "gender": "Genderfluid"
}, {
  "id": 12,
  "first_name": "Davidson",
  "last_name": "Alessandrelli",
  "email": "dalessandrellib@bbc.co.uk",
  "gender": "Male"
}, {
  "id": 13,
  "first_name": "Casper",
  "last_name": "Hawker",
  "email": "chawkerc@wunderground.com",
  "gender": "Male"
}, {
  "id": 14,
  "first_name": "Maggee",
  "last_name": "Feria",
  "email": "mferiad@live.com",
  "gender": "Genderqueer"
}, {
  "id": 15,
  "first_name": "Gustavus",
  "last_name": "Neward",
  "email": "gnewarde@123-reg.co.uk",
  "gender": "Male"
}, {
  "id": 16,
  "first_name": "Deane",
  "last_name": "Cranmore",
  "email": "dcranmoref@yellowpages.com",
  "gender": "Female"
}, {
  "id": 17,
  "first_name": "Bar",
  "last_name": "Haworth",
  "email": "bhaworthg@mail.ru",
  "gender": "Male"
}, {
  "id": 18,
  "first_name": "Layton",
  "last_name": "Puddin",
  "email": "lpuddinh@51.la",
  "gender": "Male"
}, {
  "id": 19,
  "first_name": "Dorelle",
  "last_name": "Tiebe",
  "email": "dtiebei@discovery.com",
  "gender": "Female"
}, {
  "id": 20,
  "first_name": "Carole",
  "last_name": "Elves",
  "email": "celvesj@tripadvisor.com",
  "gender": "Female"
}]



}
