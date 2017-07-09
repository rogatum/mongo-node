# NodeJS Rest API Starter - Mongoose - MongodB

## Settings

**config.json**
```javascript
{
  "db" : {
    "uri" : "mongodb://[user]:[pass]@[host]:[port]/[db]",
    "settings" : {
        "useMongoClient": true,
        "autoReconnect": true,
        "poolSize": 5,
        "reconnectTries": 20,
        "reconnectInterval": 3000
      }
  },
  "server" : {
    "port": 3000,
    "cors" : {
      "domains" : "*",
      "headers" : "Content-Type",
      "methods" : "GET,PUT,POST,DELETE,OPTIONS"
    }
  }
}
```

## Adding Collections

**collections/collection.js**

```javascript
[
    {
      model: require('./content/content.model'),
      routes: require('./content/content.routes')
    }
  ]
```

## Model Definition

Refer to **collections/content/content.model.js**

## Routing and Methods

* Create :  '/[collection]' - POST
* Read :  '/[collection]' - GET
* Update : '/[collection]/[id]' - PUT
* Delete : '/[collection]/[id]' - DELETE

* getOne: '/[collection]/[id]' - GET
* Search: '/[collection]/search/[string]' - GET ( currently searches on key 'name')

## Running
`npm run start`
