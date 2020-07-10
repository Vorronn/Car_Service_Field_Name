({
    init: function(component, event, helper){
        let pageReference =  {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepTwo',
            },
            state: {
                "c__title":"Director"
            }
        };
        component.set("v.pageReference", pageReference);
    },
    handleSuccess: function (component, event, helper) {
        //component.find("recordEditForm").submit();

        let navService = component.find("navService");
        let pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    },

/*
    navigateToCmp2:function(component, event, helper){
        let inputR = component.find("recordEditForm").submit();

            let navService = component.find("navService");
            let pageReference = component.get("v.pageReference");
            event.preventDefault();
            navService.navigate(pageReference);
        

        
    }
    
    clickCreate: function(component, event, helper) {
        var validExpense = component.find('cc').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
           
            console.log("Create expense: ");

        }
    }
    
    navigateToCmp2:function(component, event, helper){
        let inputR = component.find("recordEditForm").submit();
        let nn = inputnR.get("v.value");
        console.log(nn);
        if(isNaN(nn)){
            return;
        }else{
            let navService = component.find("navService");
            let pageReference = component.get("v.pageReference");
            event.preventDefault();
            navService.navigate(pageReference);
        }

        
    },
    
    navigateToCmp2: function(component, event, helper) {
        
        console.log('yyrryyy');

        let validExpense = component.find('recordEditForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            console.log('dnnn');
           // component.find("recordEditForm").submit();
            // Create the new expense
           // let navService = component.find("navService");
            //let pageReference = component.get("v.pageReference");
            //event.preventDefault();
           //navService.navigate(pageReference);
        } else {

            console.log('yyyyy');
        }
    }
    
    */
    
})