var assert = require('assert'),
    should = require('chai').should(),
    data = require('./data.json'),
    fs = require('fs'),
    pojoloco = require('../src/index.js');

describe('main library', function(){
  it('verifying that library is an object', function(){
    pojoloco.should.be.a('object');
  });

  it('verifying that library has toPojoAttribute function', function(){
    pojoloco.utils.toPojoAttribute.should.be.a('function');
  });

  it('verifying that library has getQualifiedName function', function(){
    pojoloco.utils.getQualifiedName.should.be.a('function');
  });
});

describe('getQualifiedName should return valid strings', function(){
  it('should return a valid qualified string', function(){
    var strings = data.qualifiedStrings;
    for (var i=0; i<strings.length; i++){
      pojoloco.utils.getQualifiedName( strings[i].source ).should.equal( strings[i].expected );
    }
  });
});

describe('toPojoAttribute function', function(){
  it('should return lower case strings', function(){
    var strings = data.caseStrings;
    for (var i=0; i<strings.length; i++){
      pojoloco.utils.toPojoAttribute( strings[i] ).should.equal( strings[i].toLowerCase() );
    }
  });

  it('should return strings without spaces', function(){
    var strings = data.spaceCheck;
    for (var i=0; i<strings.length; i++){
      pojoloco.utils.toPojoAttribute( strings[i].source ).should.equal( strings[i].expected );
    }
  });

  it('should replace underscore character with empty and capitalize next char', function(){
    var strings = data.underscore;
    for (var i=0; i<strings.length; i++){
      pojoloco.utils.toPojoAttribute( strings[i].source ).should.equal( strings[i].expected );
    }
  });
});

describe('getTableNames function', function(){
  it('should return simple table names', function(){
    var simplecases = fs.readFileSync('test/createtablesimple.sql', 'utf8'),
        tnames = pojoloco.utils.getTableNames( simplecases ),
        expectedNames = ['abc','bcd','cde','DEF','EfG','fgh','ghi'];
    for (var i=0; i<expectedNames.length; i++){
      expectedNames[i].should.equal( tnames[i] );
    }
  });
});
