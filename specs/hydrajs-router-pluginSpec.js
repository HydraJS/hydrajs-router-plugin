describe( 'Hydra router', function () {

  it( 'should check that router is defined', function () {
    expect( Hydra.router ).toBeDefined();
    expect( typeof Hydra.router ).toEqual( 'object' );
  } );

} );

describe( 'Hydra router add', function () {

  it( 'should check that router.add is a function', function () {
    expect( typeof Hydra.router.add ).toEqual( 'function' );
  } );

  it( 'should check that router.add must receive two arguments', function () {
    expect( Hydra.router.add.length ).toEqual( 2 );
  } );

  it( 'should execute the added callback if the id of the body is the same as defined', function () {
    var oStub = sinon.stub();
    document.body.id = 'test';

    Hydra.router.add( 'test', oStub );

    window.onload = function () {
      expect( oStub.callCount ).toEqual( 1 );
    };
  } );

} );

describe( 'Hydra router setDefault', function () {

  it( 'should check that router.setDefault is a function', function () {
    expect( typeof Hydra.router.setDefault ).toEqual( 'function' );
  } );

  it( 'should check that rotuer.setDefault must receive one argument', function () {
    expect( Hydra.router.setDefault.length ).toEqual( 1 );
  } );

  it( 'should execute the default callback if the id of the body has not match', function () {
    var oStub = sinon.stub(),
      oStub2 = sinon.stub();
    document.body.id = 'invalid';
    Hydra.router.add( 'home', oStub2 );

    Hydra.router.setDefault( 'test', oStub );

    window.onload = function () {
      expect( oStub.callCount ).toEqual( 1 );
    };
  } );

} );