({
    myAction : function(component, event, helper) {

    },
    //load contacts from Salesforce
    doInit : function(component, event, helper){
        console.log("Contact doInit called");
        //create the action
        let action = component.get("c.getContacts");
        //add callback behavior for when response is received
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                console.log("getContacts callback success");
                component.set("v.contactList", response.getReturnValue());
                //for inline debug
                //let returnedList = response.getReturnValue();
                //component.set("v.ownerContact", returnedList[0]);
            } else {
                console.log("Failed with state: " + state);
            }
        });
        //send the action off to be executed
        $A.enqueueAction(action);
    },
    /*saveCharSheet : function (component, charSheet, helper){
        console.log("Contact saveCharSheet called");
        let action = component.get("c.saveCharSheet");
        action.setParams({
            "charSheet" : charSheet
        });
        if(helper){
            action.setCallback(this, helper);
        }
        $A.enqueueAction(action);
    },*/
})
