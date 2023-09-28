import { MongoClient } from 'mongodb'
async function handler(req, res) {

    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' })
            return;

        }
        // Store it in a database
        const newMessage = {
            email,
            name,
            message,
        }

        let client

        // const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ntrwp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        try {
            client = await MongoClient.connect('mongodb+srv://Rorisang:Hehr0qvu2mi3xnde@cluster0.vwomhxk.mongodb.net/my-site?retryWrites=true&w=majority')
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' })
            return
        }

        const db = client.db()

        try {

            const result = db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Storing message failed', message: newMessage })
            return
        }

        client.close()

        res.status(201).json({ message: 'Successfully stored message!', message: newMessage })
    }
}
export default handler;