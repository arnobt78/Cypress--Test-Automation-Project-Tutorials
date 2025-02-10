
beforeEach(()=>{
    //runs once before all tests in this block
    cy.fixture('example').then(function(data)
    {
        this.data=data
  
    })

})