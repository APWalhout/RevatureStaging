({
    myAction : function(component, event, helper) {

    },
    //load classes from api
    doInit : function(component, event, helper){
        console.log("Form doInit called");
        //create the action
        let action = component.get("c.classListCallout");
        //add callback behavior for when response is received
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                console.log("classListCallout api callback success");
                component.set("v.classes", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });
        //send the action off to be executed
        $A.enqueueAction(action);
    },
    /*saveCharSheet : function (component, charSheet, helper){
        console.log("Form saveCharSheet called");
        let action = component.get("c.saveCharSheet");
        action.setParams({
            "charSheet" : charSheet
        });
        if(helper){
            action.setCallback(this, helper);
        }
        $A.enqueueAction(action);
    },*/
    clickCreate : function(component, event, helper){
        console.log("Form clickCreate called");
        //set the class from the picklist to the object field
        let getClassChoice = component.find("classChoice").get("v.value");
        console.log("class: " + component.find("classChoice").get("v.value"));
        component.set("v.newCharSheet.Class__c", getClassChoice);
        //make a new event from the component's registered events
        let saveEvent = component.getEvent("saveCharSheetEvent");
        //set the necessary parameters of the event
        //saveEvent.setParams({ "charSheet" : event });
        saveEvent.setParams({ "charSheet" : component.get("v.newCharSheet") });
        //fire the event to be caught by a listener
        saveEvent.fire();
        //clear the form for a new entry
        component.set("v.newCharSheet.Name", "");
        component.set("v.newCharSheet.Class__c", "");
        component.set("v.newCharSheet.Level__c", 1);
        component.set("v.newCharSheet.Strength__c", 10);
        component.set("v.newCharSheet.Dexterity__c", 10);
        component.set("v.newCharSheet.Constitution__c", 10);
        component.set("v.newCharSheet.Intelligence__c", 10);
        component.set("v.newCharSheet.Wisdom__c", 10);
        component.set("v.newCharSheet.Charisma__c", 10);
        component.set("v.newCharSheet.Inspiration__c", false);
        //launch the embedded flow
        let flow = component.find("flowTag");
        flow.startFlow("Charme_Character_Sheet_Created_Screen");
    }
})
