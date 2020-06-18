import { LightningElement, api } from 'lwc';

export default class RestCalloutTest extends LightningElement {
    //on init
    @api jsonDisplay;
    connectedCallback(){
         //use fetch for client side callout
         fetch('http://www.dnd5eapi.co/api/classes/cleric/', 
         {method:"GET"})
         .then((response) => {return response.json();})
         .then((jsonResponse) => {
             let objData = {
                 //setup an object to bind json vars
                 name : '',
                 hit_die : undefined
             };

             jsonDisplay = JSON.stringify(jsonResponse);

             console.log('jsonResponse: ' + JSON.stringify(jsonResponse));

             /*objData.name = jsonResponse.name;
             objData.hit_die = jsonResponse.hit_die;*/
         });//see more in the link
         ///https://www.salesforcecodecrack.com/2019/08/make-rest-api-callout-in-lwc.html
    }
}