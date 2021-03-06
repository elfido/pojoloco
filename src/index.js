var PojoLoco = {
  utils: {
    getQualifiedName: function( property ){
      var u = "_";
      if ( property.indexOf( u ) === (property.length-1) ){
        property = property.replace( u , "");
      }
      if ( property.search(/[_][a..zA-Z]*/) > -1 ){
        var charPos = property.indexOf("_")+1,
            replace = ( u + property[charPos]);
            temp = property.replace(replace, property[charPos].toUpperCase());
        return( PojoLoco.utils.getQualifiedName( temp ) );
      } else{
        return( property );
      }
    },
    toPojoAttribute: function( property ){
      property = property.replace(/ /g,"");
      property = PojoLoco.utils.getQualifiedName( property.toLowerCase() );
      return( property );
    },
    getTableNames: function( text ){
      var regEx = /create table [a-z]*/ig,
          tnames = text.match(regEx);
      for(var i=0; i<tnames.length; i++){
        tnames[i] = tnames[i].replace(/create table /i,'');
      }
      return(tnames);
    }
  }
};

module.exports = PojoLoco;
