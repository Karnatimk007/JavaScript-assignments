1.Generate package.json
npm init -y

2.create server.js file

3.install , import "express" and create HTTP server. Assign port

### Connect MongoDB database

        REST API ---------->mongodb native driver---------->mongodb server
        REST API ---------->mongodb ODM tool(mongoose)---------->mongodb server

        a.install and connect to MongoDB server
        b.create schema of resources
        c.create model of that schema
        d.perform DB operations on that model

### create product API

Product obj schema :{ pid,productName,price}
1.POST /products
2.GET /products
3.GET /products/:id
4.PUT /products/:id
5.DELETE /products/:id


Error handiling 
running validators during update
.gitignore
