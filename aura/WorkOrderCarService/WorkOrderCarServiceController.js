({
    init: function(component, event, helper){
        let pageReference =  {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepOneWorkOrder',
            },
            state: {
                "c__title":"Director"
            }
        };
        component.set("v.pageReference", pageReference);
    },
    
    navigateToCmp1:function(component, event, helper){
        let navService = component.find("navService");
        let pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    }
})