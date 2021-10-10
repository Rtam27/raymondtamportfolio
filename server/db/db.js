// // const Sequelize = require('sequelize')
// // const pkg = require('../../package.json')

// // const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// // const config = {
// //   logging: false
// // };

// // if(process.env.LOGGING === 'true'){
// //   delete config.logging
// // }

// // //https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
// // if(process.env.DATABASE_URL){
// //   config.dialectOptions = {
// //     ssl: {
// //       rejectUnauthorized: false
// //     }
// //   };
// // }

// // const db = new Sequelize(
// //   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config)
// // module.exports = db

// const {MongoClient} = require('mongodb')
// const newthings = [
//   {name: "test1",
// summary: "summary test1",
// bedrooms:2,
// bathrooms:25,
// beds:42},
// {name: "test2",
// summary: "summary test2",
// bedrooms:4,
// bathrooms:235,
// beds:112},
// {name: "test3",
// summary: "summary test3",
// bedrooms:4,
// bathrooms:5,
// beds:2},
// {name: "test4",
// summary: "summary test4",
// bedrooms:22,
// bathrooms:225,
// beds:421}]

// const findParams = {
//   bedrooms: { $gte:2}
// }

// async function main(){
//   const uri = "mongodb+srv://demo:node1234@cluster0.3jrxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   const client = new MongoClient(uri)
//   try{
//   await client.connect();
//   // await listDatabases(client);

//   // createListing(client,{
//   //   name: "new Loft",
//   //   summary: "test summary",
//   //   bedrooms: 1,
//   //   bathrooms: 1
//   // })

//   // await findOneListingByName(client, "test1")


//   // await createMultipleListing(client,newthings)
//   }
//   catch(e){
//     console.error(e);
//   }
//   finally{
//     await client.close
//   }
// }
// async function createListing(client,newListing){
//   const result = await client.db("testdb").collection("testcollection").insertOne(newListing)

//   console.log(`${result.insertedCount} listing id: ${result.insertedId}`)
// }

// async function createMultipleListing(client, newListings){
//   const result = await client.db("testdb").collection("testcollection").insertMany(newListings)

//   console.log(` listing id: ${result.insertedId}`)
// }

// async function findOneListingByName(client, nameofListing){
//   const result = await client.db("testdb").collection("testcollection").findOne({name:nameofListing})
//   console.log('find result', result)
// }

// async function listDatabases(client){
//   const databasesList = await client.db().admin().listDatabases()
//   console.log("databases:");
//   databasesList.databases.forEach(db=>
//     console.log(`- ${db.name}`))
// }

// // async function customFind(client,param){
// //   console.log('param',param)
// //   const results = await client.db("testdb").collection("testcollection").find(param)
// //   console.log('test', results)
// // }
// main().catch(console.error)