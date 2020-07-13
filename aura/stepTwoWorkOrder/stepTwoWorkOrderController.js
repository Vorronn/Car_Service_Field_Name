({
    init: function(component, event, helper) {
        let myPageRef = component.get("v.pageReference");
        let workOrder = myPageRef.state.c__workOrderId;
        component.set("v.workOrderId", workOrder);

    },
    
    handleSuccess: function(component, event, helper) {
        let navService = component.find("navService");
        let payload = event.getParams().response;
        component.set("v.workOrederLineItemId", payload.id);
        let pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__WorkOrderCarService',
            },
            state: {
                //"c__workOrederLineItemId": component.get("v.workOrederLineItemId")
            }
        };
        event.preventDefault();

        //выводим сообщение о создании объекта
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "title": "SUCCESS!",
            type : 'success',
            "message": "The new WorkOrder was created."
        });
        $A.get("e.force:closeQuickAction").fire();
        resultsToast.fire();
        $A.get("e.force:refreshView").fire();
        navService.navigate(pageReference);
    },
    handleError: function(component, event, helper){
                //выводим сообщение об ошибке
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "ERROR!",
                    type : 'error',
                    "message": "Check that the fields are filled in correctly."
                });
                $A.get("e.force:closeQuickAction").fire();
                resultsToast.fire();
                $A.get("e.force:refreshView").fire();
    }

})