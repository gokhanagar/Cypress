describe('describe',( ) => {
    
    context('production environment',( ) => {
        beforeEach(() => {
            console.log('go to production environment');
        });       

    it('test 1', () => {
        console.log('canli test 1');
    });
    it('test 2', () => {
        console.log('canli test 2');
    })

    });

    context('test environment',( ) => {

    beforeEach(() => {
        console.log('go to test environment');
    });    

    it('test 3', () => {
        console.log('test environmet test 1');
    });

    it('test 4', () => {
        console.log('test environmet test 2');
    })

    });

})