import { LightningElement } from 'lwc';

export default class RestCalloutTest extends LightningElement {
    //on init
    connectedCallback(){
         //use fetch for client side callout
         fetch('http://www.dnd5eapi.co/api/classes/', 
         {method:"GET"})
         .then((response) => {return response.json();})
         .then((jsonResponse) => {
             let objData = {
                 //setup an object to bind json vars
                 count : undefined,
                 results : undefined
             };

             console.log('jsonResponse: ' + JSON.stringify(jsonResponse));

             objData.count = jsonResponse.count;
             objData.results = jsonResponse.results;
         });//see more in the link
         ///https://www.salesforcecodecrack.com/2019/08/make-rest-api-callout-in-lwc.html
    }
}