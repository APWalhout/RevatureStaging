import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Name';
import CLASS__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Class__c';
import STRENGTH__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Strength__c';
import DEXTERITY__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Dexterity__c';
import CONSTITUTION__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Constitution__c';
import INTELLIGENCE__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Intelligence__c';
import WISDOM__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Wisdom__c';
import CHARISMA__C_FIELD from '@salesforce/schema/Character_Stat_Sheet__c.Charisma__c';

export default class CharacterSheetForm extends LightningElement {

    //variables for field assignment
    sheetObjectFields = [NAME_FIELD, 
                         CLASS__C_FIELD, 
                         STRENGTH__C_FIELD,
                         DEXTERITY__C_FIELD,
                         CONSTITUTION__C_FIELD,
                         INTELLIGENCE__C_FIELD,
                         WISDOM__C_FIELD,
                         CHARISMA__C_FIELD]; 
    characterName;
    characterClass;
    characterLevel;
    characterStr;
    characterDex;
    characterCon;
    characterInt;
    characterWis;
    characterCha;
    characterInsp;

    //holds the array of classes from the api
    apiClassList;

    //LWC init method
    connectedCallback(){
        /*
        
        //callout to the api
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
        //create the action
        //set callback behavior handling state SUCCESS by setting apiClassList
        //enqueue the action

        */
    }

    //handles successful creation/edit of a record from the form element
    handleUpsertSuccess(event){
        console.log('creating success');
        const successEvt = new ShowToastEvent({
            title: "Sheet Record Created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });

        this.dispatchEvent(successEvt);
        console.log('success dispatched');
    }

    //handles generic failure on upsert
    handleUpsertError(){
        const errorEvt = new ShowToastEvent({
            title: "Record Error",
            message: "Something went wrong, record was unable to upsert.",
            variant: "error"
        });

        this.dispatchEvent(errorEvt);
    }
}