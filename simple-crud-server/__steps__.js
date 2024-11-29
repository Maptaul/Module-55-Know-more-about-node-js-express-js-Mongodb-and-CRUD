/***
 * --------------
 * Mongodb Connection 
 * 
 * 1. create ---Account
 * 2. Create an User with password 
 * 3. whitelist IP address 
 * 4. data base > connect > driver > Node > view full code
 * 5. change the password in the URI
 * ---------------
 *  1. create -- POST
 *  2. app.post('/users'/ async (req, res) =>{})
 * 3. make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body : const user = req.body 
 * 6. const result = await userCollection. insertOne(user);
 * 7. res.send(result)
 * 
 * Client side 
 * 1. crete fetch 
 * 2. add second parameter as an object 
 * 3. provide method : 'POST'
 * 4. add headers : {"content-type" : "application/json"}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * 
 * 
 * 
 * 
 * ----------------------
 * READ MANY
 * ---------------
 * 1. create a cursor = userCollection.find(
 * 2. const result = await cursor.toArray
 * 3. 
 * ------------------------
 * DELETE 
 * -------------------------
 * 1. create app.delete('/users/:id', async (req, res) =>{})
 * 2. specify unique ObjectID to delete the right user 
 * 3. const query = { _id: new ObjectID(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 5.
 * 
 * client 
 * 1. create dynamic url with id
 * 2. mention the DELETE Method
 * 3. 
 * 
 * 
 */


