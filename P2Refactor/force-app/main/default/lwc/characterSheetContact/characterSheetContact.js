import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const fields = [
    'Id', 
    'Name'
];
export default class CharacterSheetContact extends LightningElement {
    
    @api contactId;//array type from the aura attribute contactList, modified for one record
    @api contactSelected;//bool type set true when a bool is selected

    @wire(getRecord, {contactId: '$contactId', fields})
    contactRecord;

    //LWC init method
    connectedCallback(){
        contactSelected = false;
    }
}