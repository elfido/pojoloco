# Pojo Loco Utils
## Transform multiple objects to Java Pojos

For now, only SQL text is supported.

### Functions:
#### getTableNames
**Input** Property:String

Returns an array of tables names. The input is a SQL DDL text.

Usage:

```javascript
var ddl = 'create table abc(myint integer primary key, text varchar(2)); create table bcd(myint2 integer, text2 varchar(3));';
var tables = pojoloco.util.getTableNames( ddl ); // Returns ['abc', 'bcd']
```

#### toPojoAttribute
**Input** Property:String

Returns a Java Bean Property String, removes underscores and capitalizes the next char.

Usage:

```javascript
var beanProperty = pojoloco.util.toPojoAttribute("my_table_id"); // Returns myTableId
```
