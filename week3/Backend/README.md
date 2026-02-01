### Steps to create Backend

    1.Generate package.json
            npm init -y
    2.Create HTTP Server
            a.Install & import "express" module



    HTTP Req types
    GET --Read resources
    POST --Create a new resouce
    PUT ---Update a resource
    DELETE --Delete a resource

GET http://127.0.0.1:3000/users

post http://127.0.0.1:3000/user

put http://127.0.0.1:3000/users/<id>

delete http://127.0.0.1:3000/users/<id>
http://localhost:3000

### Create products API in the same file

Description of Products obj:
{
productId,
name,
price,
brand
}

PRODUCT API:
GET http://localhost:3000/products
GET http://localhost:3000/products/<id>
GET http://localhost:3000/products/<brand>
POST http://localhost:3000/products
PUT http://localhost:3000/products/<id>
DELETE http://localhost:3000/products/<id>
