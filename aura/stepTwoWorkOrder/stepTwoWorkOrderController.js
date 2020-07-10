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
    navigateToCmp2:function(component, event, helper){
        component.find("recordEditForm").submit();
        let navService = component.find("navService");
        let pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
        
    }
    
})