Node 

JavaScript – Client-side scripting + Server-side scripting + Object Oriented Programming Language 

Runtime 

Java				JVM (Java Virtual Machine) 

C#/ VB.net			CLR (Common Language Runtime) 

C, C++				C Runtime 

Javascript			Node 

Node – conceptually there are 3 things 

Node.exe – runtime / platform 

Node.js – SDK, set of classes 

npm – Node Package Manager 

 

 

Package Manager 

npm – Node Package Manager – comes along with node installation. Responsible for managing both client-side and server-side packages. 

bower – responsible for managing only client-side packages, need to install explicitly. 

yarn – response for managing both client-side and server-side packages. Need to install it explicitly. 

 
Server-side packages – Database connectivity, ORM, ODM (Mongoose) etc. 

Client-side packages – jQuery, Angular etc. 

 
Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. 

 

Node.js uses a single threaded event loop to handle multiple connections concurrently. It doesn’t wait for tasks like file reading or database queries – it moves on and handle them asynchronously. 

 

The event loop is a queue-based scheduler that processes synchronous code first, then handles asynchronous callbacks when the call stack is clear. 

 

Fast Food restaurant 

 

Traditional Thread-based solution 

 

Reach the queue to place order. 

And wait until order is ready and delivered to you. 

Cashier is blocked. 

Provide another cashier – increase no of cashiers. 

Node.js is a non-blocking, asynchronous execution model that provides extremely scalable server solutions with minimal overhead. 

 

Event Driven Programming Model – flow of the program is determined by events mouse clicks, key presses, message from other programs/ threads. 

 

 

Event Driven Model (Pizza Shop) 

 

Place your order and step aside 

Cashier is free to serve others 

You get notification when your order is ready. 

An event is raised and you can collect your food, which is kind of callback. 

 

 

# Node Use cases 

Chat server more real-time, multiuser application 

Stock Trader’s dashboard 

Data Streaming 

System Monitoring dashboard 

Fast file upload client 

Command line utilities 

 

# Where not to use Node.js 

Server-side application with a relational database behind 

Heavy server-side computing / processing. 

# Why it really matters 

Non-blocking – Node doesn’t wait for tasks to finish. 

Scalable – Handle thousands of concurrent connections. 

Efficient – Ideal for I/O heavy apps like chat serves, APIs and real-time dashboards 

Rich Ecosystem – vast ecosystem of libraries and modules available. 

Javascript Everywhere – at client-side as well as at server-side. 


# Commands 

 

The check the node version 

 

Node version node –version / node -v 

NPM version npm –version /npm -v 

 

Globally installing package 

npm i -g <package-name> - global – wherever node is installed 

 

Locally installing package 

npm i <package-name> 

 

List global installations 

npm -g ls 

 

List local installations 

npm ls 

 

Install specific version of a package locally. 

npm i <package-name>@1.2.3 – locally installing specific version of a package. 

 

Install specific versions of a package globally. 

npm i -g <package-name>@1.2.3 – globally installing specific version of a package. 

 

 

Assignment 1 

 

employee.js – defines the employee class (ES2015) –  

id, name, city – properties 

getDetails – method – return all the details 

 

 

company.js – imports employee and creates a list of employees. 

name, 

employees – list of employees 

listEmployees – return list of employees with details 

filterByCity(city) – return list of employees by given city 

 

index.js 

which will create company – with certain default employees 

 

show list of employees 

show filtered employees by city 

 

 

// 3 types of modules 

// core module - comes along with node installation 

// custom module - you being a programmer creates them 

// third party module - need to explicitly install before use 

 

// It could be any module - core, custom or third party, to use it 

// you need to acquire it using CommonJS require function. 

 

 

npmjs.com – is the larget software registry in the world, especially for javascript developers. 

What does it offer? 

Package Registry – hosts over 2 million packages 

Search & Discovery 

Publish your own code / package 

Documentation and Tools 

 

npm init -y / npm init 

Create a package.json 

 

npm i <package-name> Install the package locally in the node_modules folder. 

Also add that as a runtime dependency in package.json. 

 

npm I -D <package-name> Install the package locally in the node_modules folder. 

Also add that as a development dependency i.e. devDependency in package.json. 

 

And there is one more file getting created 

package-lock.json – file is automatically generated in node.js projects that provides a detailed deterministic record of the dependency tree. 

Purpose of this file 

Dependency locking – protects accidental upgrades 

Version consistency - Guarantees that every developer. CI/CD pipeline and product environment install identical versions of dependencies. 

Improved installation speed – map of the dependency tree. 

 

 

npm i / npm install – install all dependencies and dev dependencies from package.json. 

 

 

Package Versions 

 

Major – Incremented for incompatible API changes. 

Minor – Incremented for adding functionality in a backward compatible manner. 

Patch – Increment for backwards compatible bug-fixes. 

 

Exact version – 1.2.3 – uses the exact version 

Caret [^] - ^1.2.3 compatible with version 1.2.3, allowing updates that do not change the leftmost non-zero digit (e.g. 1.2.4, 1.3.0) 

Tilde [~] - ~1.2.3 compatible with version 1.2.3, allowing updates to the rightmost non-zero digit (e.g. 1.2.4 but not with 1.3.0) 

 

 

# Unscoped modules / packages 

default type npm packages. 

They are published directly under npm registry without any namespace. 

e.g. express, lodash, moment etc. 

 

# Scoped modules / packages 

Are published under a namespace (scope), usually representing an organization or user. 

e.g. @angular/cli, @loadable/component, @babel/preset-env etc. 

 

 

 

Day II 

 

Publish a custom module / custom node.js package to npmjs.com. 

If it is public, anyone can use that, 

To achieve this, you need to prepare your project with a  

package.json 

test that locally 

and then publish it, to publish it you have to login to npmjs.com account. 

 

# Steps 

 

Create an npm Account 

Go to npmjs.com and signup. 

Enable two-factor authentication (2FA) for publishing security. 

Initialize your package 

npm init -y 

 

name – unique package name and in small letters 

version – starts with 1.0.0 (semantic versioning) 

main, author, description, license, keywords etc. 

 

Project / Package functionality 

Add supporting files 

README.md – explain the usage. 

LICENSE – choose an open-source license 

.npmignore – exclude unnecessary files (like tests or configs) 

Test locally 

Login to npm 

npm login 

Enter username and password and email 

Publish 

npm publish 

Verify it on https://www.npmjs.com/package/<your-package-name> 

 

 

 

Assignment 1 

 

zen-unique-name-my-math 

 

Provide functionality	add 

Publish it and consume it one application 

 

Re publish zen-unique-name-my-math 

By adding one more functionality mult 

Consume it in another application. 


# What about scoped packages? 

 

Scope would be name of a user or name of an organization. 

 

For scoped package 

 

Create a unique organization in npmjs.com as that would be the scope / namespace 

 

e.g. zenmay26 

create a package with @zenmay26/<your-package-name>  

 

and to publish 

npm publish –access public 

 

Assignment 2 

Create and publish a scoped package 

Create a scoped package, that would provide a simple function that reverse a string. 

 

@zenmay26/string-utils 

 

reverse(str) 

re publish it with additional functionality of capitalize 

capitalize(str) (first letter would be capital and rest all are small.) 

 

Core Modules 

This comes along with Node installation. 

e.g. file system, networking, streams and utilities without needing external packages. 

 

 

File system 

 

Assignment1 - try above readFile, writeFile and appendFile examples using async and await. 

 

Event Emitter 

Assignment 1 

Simulate a file download process using EventEmitter. Emit start, progress, and end events to represent different stages. 

 

Expected o/p would be 

 

Download started... 

Download progress: 25% 

Download progress: 50% 

Download progress: 75% 

Download progress: 100% 

Download completed! 

 

Assignment 2 

You are tasked with building a simple package delivery tracking system using Node.js. The system should simulate the journey of a package from dispatch to delivery. It must notify subscribers (listeners) about key events in the package’s lifecycle: 

Dispatched → Triggered immediately when tracking starts, showing the package ID and destination. 

In-Transit → Triggered after a short delay, indicating the package is on its way. 

Delivered → Triggered after a longer delay, confirming the package has reached its destination. 

The solution should use EventEmitter to emit these events and allow multiple listeners to respond to them. 

 

Expected o/p would be 

Package #123 dispatched to Pune 

Package #123 is in transit... 

Package #123 delivered to Pune 

 

Assignment 3 

Compare execution order of process.nextTick and Promise.resolve().then(). 

 

Assignment 4: 

You want an event to be emitted only after the current function finishes, ensuring listeners are attached before the event fires. Use process.nextTick to defer the emission. 

MVC – Model View Controller 

Java 

MVC			Spring, Spring boot 

 

.Net 

MVC			Asp.net MVC 

 

Node 

MVC			Express 

 

 

Model - Data Entity – Employee class 

View – Representation of that data – Pie Chart, Bar Chart, Tabular format. 

Controller – First class citizen. Controller pushes model’s data to the view. Controller is responsible for handling events associated with controls which are there on the view. 

 

Express – is a minimalist and flexible web application framework for node.js that makes building web applications and APIs fast and intuitive. 

 

Express.js is built on node.js 

Handles HTTP requests / responses 

Unopinionated – you can structure, your app however you like. 

Middleware support. 

 

Model 

View – html pages, views – view engines 

Why view engines? 

Separation of concerns 

Dynamic content rendering 

Reusable components 

Faster Development 

Server-Side Rendering 

Built-in support in Express. 

Controller logic 

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. 

 

Middleware functions can perform the following tasks: 

Execute any code. 

Make changes to the request and the response objects. 

End the request-response cycle. 

Call the next middleware in the stack. 

 
MVC App - CRUD operations with in-memory database 

PUG, 

EJS, 

Handlebars etc. 

 

 

RESTful Service - Express – providing CRUD operations with NoSQL database 

 

 

RDBMS 

NoSQL 

 

NoSQL databases are chosen over traditional RDBMS when applications need massive scalability, flexible schemas, and the ability to handle unstructured or rapidly changing data. 

RDBMS still excels at strict consistency and complex relationships, but NoSQL shines in cloud-native, high-growth environments like social media, IoT and real-time analytics. 

 

e.g. MongoDB, Cassandra, DynamoDB etc. 

 

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. 

It integrates smoothly with ODM library – Mongoose. 

 

Database – A named container for collections – EmpsDB, UsersDB etc. 

Collection – A group of documents (like a table in SQL) 

Document – A single record stored as JSON (e.g. {name:’Sachin’, city:’Mumbai’}) 

ObjectId – Unique Identifier automatically generated for each document. 

 

ORM – Object Relational Mapping – RDBMS 

Is a programming technique that lest you interact with a RDBMS using objects in your programming language instead of writing raw SQL queries. 

 

Java – Hibernate 

.Net – Entity Framework 

 

ODM – Object Data Mapping – NoSQL 

 

ODM is very similar in concept to ORM, but instead of mapping objects to relational database tables, it maps them to documents in NoSQL database. 

 

e.g.  

MongoDB – Mongoose 

Java – Morphia, Spring Data MongoDB 

CouchDB – Ektorp, PuchDB 

 

 

Benefits of MongoDB (NoSQL) 

Flexibility 

Scalability 

Performance 

Ease of Use 

Community and Eco System 

 

Use Cases 

Content Management Systems 

Real-time analytics 

Stores user data, comments, and meta data 

Manage chain data, optimize logistics. 

MongoDB Atlas – is a fully managed cloud database service. It’s where your MongoDB database lives and scale – hosted on platforms like AWS, Azure or Google Cloud. 

MongoDB Compass – Local GUI client / Desktop GUI tool that connects to MongoDB databases where local or hosted (including Atlas). 

MongoDB installed locally – through command prompt 

RDBMS			NoSQL 

Database			Database 

Table				Collection 

Row				Document 

Column			Field 

Table join			Embedded Documents 

Primary Key			Primary Key (default key - __id provided by MongoDB itself) 

 

Server 

RDBMS 	MySQL, Oracle, SQL Server etc. 

NoSQL 	Mongod 

 

Client 

RDBMS	mysql, sqlplus etc. 

NoSQL	mongosh 

 

 

To start mongodb server use following command 

 

mongod --dbpath "D:\MongoDB_Databases" (path of the folder where databases are getting created) 


mongosh – mongo shell, where you can try out certain mongodb commands. 

Download the mongo shell explicitly from https://www.mongodb.com/try/download/shell 

Unzip it set the path and run following command on another command prompt. 

mongosh 

D:\Technical Stuff\mongosh-1.10.1-win32-x64\bin>mongosh 

To show all databases 

show dbs 

To create or use any of the existing databases 

use <database-name> 

use usersDB_may26 

To see the current – selected database 

db 

 

To drop the database 

db.dropDatabase() 

 

Seeing the collections in the database 

show collections 

 

Create a collection 

db.createCollection(‘name’,’options’); 

db.createCollection(‘name’); 

e.g. db.createCollection(‘users’); 

 

list collections from the database 

show collections 

To drop collection 

db.<collection_name>.drop() 

db.users.drop() 

 

To see collection data 

db.<collection_name>.find().pretty() 

 

To insert the document inside the collection 

db.collectionName.insert(object) 

e.g. db.users.insert({name:'Virat',email:'virat@cricket.com',age:36}); 

 

To insert multiple documents inside the collection 

db.collectionName.insert([objects array]) 

e.g. 

db.users.insert( 

[ 

  { 

    name: 'Sachin', 

    email: 'sachin@cricket.com', 

    age: 52 

  }, 

  { 

    name: 'Rahul', 

    email: 'rahul@cricket.com', 

    age: 51 

  }, 

  { 

    name:'Sourav', 

    email: 'sourav@cricket.com', 

    age: 52 

  }, 

  { 

    name: 'Rohit Sharma', 

    email: 'hitman@cricket.com', 

    age: 35, 

  } 

]) 

 

 

RESTful service / Web APIs 

 

Service – A reusable component. 

Web Service – Service which is available over the web. (over the internet) 

 

Communication happens over HTTP protocol, but it also uses one more protocol from security perspective – SOAP – Simple Object Access Protocol. 

 

SOAP Message 

SOAP Header 

SOAP Body 

 

SOAP Header is faster than body, and things are getting encrypted and decrypted while sending over the network. 

 

SOAP Envelope 

Because of this encryption and decryption – things are little slower, that might be in a milli, macro, nano seconds but it is slower, so to overcome this slower ness of Web Services, what we have got 

RESTful Services – Representational State Transfer. 

 

REST – is kind of architectural style that treats everything as a resource – each identified by a unique URL. 

REST is lightweight and fast. 

It works on standard HTTP verbs like HTTP Get, HTTP Post, HTTP Put, HTTP Delete etc. and data is exchanged in JSON which is lighter and faster than XML used in a SOAP. 

No need for heavy envelopes or strict schemas WSDL. 

Stateless architecture – Each request contains all necessary information – no session tracking required. 

Make REST scalable and easier to cache. 

Flexible Data Formats. 

REST supports JSON, XML, HTML or plain text while SOPA is mostly limited to XML. 

 

 

REST supports Token Based Security 

 

OAuth – Open Authorization 

 

Social networking credentials and authorizing those credentials to access these kinds of sites. 

 

 

RESTful service – provide CRUD Operations and deal with MongoDB database through ODM – Mongoose. 

 

express, 

mongoose, 

cors (cross origin resource sharing) 

Model – Item 

name:String and required 

price:Number and required 

 

 

db.items.insert([ 

    {name:'Laptop', price: 12345.67}, 

    {name:'Tablet', price: 78900.12}, 

    {name:'Mobile', price: 34567.89}, 

]) 

 

 

Hapi (HTTP API) 

Hapi.js is a rich framework designed for building powerful and scalable web applications and services. (Walmart Labs) to handle high-traffic scenarios. 

 

Features 

Configuration over code 

Integration with input validation – using Joi – powerful schema-based validation library. 

Powerful plugin system. 

Advanced Routing – complex validation, authentication, response handling etc. 

Security Features – Validations, CSRF, XSS, out of the box taken case. 

Error Handling – Robust error handling mechanism. 

Extensive Ecosystem. 

 

When choosing Hapi over Express 

Large, Complex project – maintainability, consistency, modularity is critical. 

Security–First Development - Topmost concern. 

Standardization and Clear patterns are important. 

API-First Development. 

 

 

HAPI 

Routes 

Plugins 

Extensions 

RESTful Service with HAPI and MongoDB CRUD operations 
 

Microservices 

Microservices is an architectural style where an application is composed of small, loosely coupled services, each responsible for a specific business capability. 

 

These services 

Run independently 

Communicate via APIs (usually REST or messaging queues) 

Can be built and deployed separately. 

Often use different tech stacks or databases. 

 

Key Characteristics of Microservices 

Decentralized Governance 

Bounded Contexts 

Independent Deployment 

Technology Agnostic 

API-first approach 

 

Challenges of Microservices 

Complexity 

Overhead – communication between services 

Testing 

Deployment 


Pros 

Scalability, Resilience, Flexibility, Faster Deployment, Modular Deployment, Team autonomy. 

Cons 

Complexity, Data Consistency, Deployment overhead, Latency, Debugging difficult. 

 

Communication between Microservices 

Restful APIs 

HTTP based  

JSON or XML 

Message Queues 

Asynchronous Communication 

Decoupling – RabbitMQ, Apache Kafka, Amazon SQS etc. 

Event Driven Architecture 

Publisher Subscriber architecture – Events, Event Bus 

Apache Kafka, Amazon Kinesis 

RPC (Remote Procedure Calls) 

Synchronous Communication 

Protocol Buffers – gRPC, Thrift 

Shared Database 

Blog Service – Blogs 

Comment Service – Comments specific to blogs 

Blog service running at port 4001 

Comment service running at port 4002 

 

 

API Gateway 

API Gateway is like the front desk of your software system; it receives requests from clients and decides where t send those requests and manages how those requests are handled. 

 

It is vital in microservices architecture, where many small services need to work together seamlessly. 

 

What does API Gateway do? 

Simplified client interface – single entry point for clients. 

Routing 

Aggregation 

Security 

Caching 

Protocol Translation 

Load Balancing 


Popular API gateway implementations are available 

Kong 

Express API Gateway 

Ambassador API Gateway 

Tyk 

AWS API Gateway etc. 
 

HTTP-Proxy-Middleware – Node.js middleware that acts as a proxy server for http requests. It allows you to intercept and modify requests on response before they reach their intended destination, providing flexible ways to handle various HTTP related tasks. 
 
Express API Gateway 

 
JWT Auth 

JWT (Json Web Token) 

 

How do you implement Authentication and Authorization with the Node app. 

Typically combining middleware, tokens and role-based logic. 

Authentication – Verify who the user is – login with email/password. 

Authorization – Verify what the user can access / do – admin can delete users. 


JWT 

 

Alternatively 

Session-based authentication 

OAuth 2.0 (Open Authorization) 

Paseto(Platform-Agnostic Security Tokens) 

API Keys 

SAML (Security Assertion Markup Language) 

 

Choosing the right option 

 

Stateless APIs – JWT or Paseto 

Traditional Web apps – Session-based 

Enterprise SSO – SAML 

Third party login – OAuth 2.0 

Internal service communication – API Keys 

 

A JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information between parties. It is widely used for authentication and authorization in web applications – especially in Node.js apps. 

 

A JWT Token 

Consists of 3 parts 

Header – Specifies the signing algorithm (e.g. HS256) 

Payload – Contains user data (e.g. email, role, user ID) 

Signature – Verifies the token’s integrity using a secret key. 

 

e.g. 

{ 

  "header": { "alg": "HS256", "typ": "JWT" }, 

  "payload": { "email": "admin@example.com", "role": "admin" }, 

  "signature": "hashed_signature_here" 

} 

 

How JWT is used in Node app 

 

User logs in  

The server verifies the credentials. 

It is valid, it generates a JWT. 

Client stores the token 

Typically stored in localStorage or cookies. 

Used in future requests to prove the identity. 

Client sends toke with requests 

Sent in authorization header 

e.g.  

Authorization – Bearer<token> 

Server verifies the token 

Middleware checks the token 

 

Benefits of JWT 

Stateless – No need to store sessions on the server. 

Secure – Signed and optionally encrypted. 

Flexible – Can carry custom claims (e.g. roles, permissions) 

Scalable – Ideal for APIs and microservices. 

 
