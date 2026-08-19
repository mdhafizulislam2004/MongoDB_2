const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.port||3000;
app.use(express.json())
const cors = require("cors")
app.use(cors())

const uri = "mongodb+srv://simpleUSer:hafizul2004@cluster0.jdfwert.mongodb.net/?appName=Cluster0";

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const DBuser=client.db("DBuser")
        const UserCollection=DBuser.collection("User")

            // Add Database Related Api Here 

            app.post("/user",async (req,res)=>{
                const newUSer=req.body
                console.log("Hitting The User Post Api",newUSer);
                const result=await UserCollection.insertOne(newUSer)
                res.send(result)
                
            })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});