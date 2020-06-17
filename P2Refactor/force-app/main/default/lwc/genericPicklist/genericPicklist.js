//Template code taken from: https://medium.com/@aneudupi/custom-picklist-component-using-lwc-e6014a0de9c5#:~:text=A%20simple%20picklist%20component%20can,the%20fly%20during%20component%20rendering.
import {
	LightningElement,
	api,
	track
} from 'lwc';
import getPickListValues from '@salesforce/apex/PicklistController.getPickListValues';
import getFieldLabel from '@salesforce/apex/PicklistController.getFieldLabel';
export default class SelectComponent extends LightningElement {

    //only track objects and arrays and things that need to rerender when changed
    @track options;
	@track selectedOption;
    @track isAttributeRequired = false;
    @track fieldLabelName;
    
	@api fieldName;
    @api objectName;
    
    //LWC init method
	connectedCallback() {
		getPickListValues({
				objApiName: this.objectName,
				fieldName: this.fieldName
			})
			.then(data => {
				this.options = data;
			})
			.catch(error => {
				this.displayError(error);
            });
            
		getFieldLabel({
				objName: this.objectName,
				fieldName: this.fieldName
			})
			.then(data => {
				this.fieldLabelName = data;
			})
			.catch(error => {
				this.displayError(error);
			});
    }
    
    //event handler for picklist selection update
	selectionChangeHandler(event) {
		this.dispatchEvent(new CustomEvent('selected', {
			detail: event.target.value
		}));
    }
    
	displayError(error) {
		this.error = 'Unknown error';
		if (Array.isArray(error.body)) {
			this.error = error.body.map(e => e.message).join(', ');
        } 
        else if (typeof error.body.message === 'string') {
			this.error = error.body.message;
		}
    }
    
	get isPicklistDisabled() {
		return (this.options &&
			    this.contrFieldValue !== 'Select') ? false : true;
	}
}