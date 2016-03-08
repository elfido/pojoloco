# Pojo Loco Utils
## Transform multiple objects to Java Pojos

For now, only SQL text is supported.

### Functions:
#### toPojoAttribute
**Input** Property:String

Returns a Java Bean Property String, removes underscores and capitalizes the next char.

Usage:

```javascript
var beanProperty = pojoloco.util.toPojoAttribute("my_table_id"); // Returns myTableId
```
