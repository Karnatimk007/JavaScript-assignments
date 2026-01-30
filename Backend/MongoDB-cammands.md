### Create database

use "database name"

### show databases

show dbs

### show collections

show collections

### create collection

db.createCollection("collection name")

### insert one document

db.collectionname.insertOne({})

### insert many documents

db.collectionname.insertMany([{},{}])

### Read documents

db.collectionname.find(condition)
db.collectionname.findOne(condition)

### Update documents

db.collectionname.updateOne(condition,{update})
db.collectionname.updateMany(condition,{update})

### Delete documents

db.collectionname.deleteOne(condition)
db.collectionname.deleteMany(condition)

### Query operations

{field:{operator:value}}

### Comparison operators

$eq,$ne,$gt,$gte,$lt,$lte,$in,$nin,$neq

### Logical operators

$and,$or,$not,$nor
