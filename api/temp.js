const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://isikoltu:isikoltu123@cluster0.maxd1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('test');
    const movies = database.collection('testmain');

    const query = { name: 'test' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {

    await client.close();
  }
}

run().catch(console.dir);