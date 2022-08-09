import 'dotenv/config'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO)
// const local = new MongoClient('mongodb://localhost:27017')

client.once('connectionReady', async () => {
  console.log('[connected]')
  let users = client.db('atii').collection('users')
  let userdetails = client.db('atii').collection('userdetails')
  const userdocs = await users.aggregate(
    [
      {
        $match: {
          username: { $exists: true }
        }
      },
      // { $limit: 2 },
      {
        $lookup: {
          from: 'userdetails',
          localField: 'userDetails',
          foreignField: '_id',
          as: 'details',
        }
      },
      {
        $project: {
          details: 1,
          username: 1,
        }
      }
    ]).toArray()
  console.dir(userdocs, { depth: 10 })
  await Promise.all(userdocs.map(d => {
    return new Promise(async (resolve, reject) => {
      let name = d.username
      let linkarr = d.details[0].wishlistLink?.split('/shop/')
      if (linkarr && linkarr.at(linkarr?.length - 1)) {
        linkarr[linkarr?.length - 1] = name
        let newurl = encodeURI(`https://shop.baaz.live/shop/${name.trim()}`)
        console.log(`[${name}]`, newurl)
        // write to userdetails
        await userdetails.updateOne({ _id: d.details[0]._id }, {
          $set: {
            wishlistLink: newurl
          }
        }, { upsert: true })
        resolve(1)
      } else {
        console.log('[x]', d)
        resolve(0)
      }
    })
  }))
  setTimeout(() => { client.close() }, 10000) // 10 seconds grace time
})
client.once('connectionClosed', () => {
  console.log('[closed]')
})
// local.once('connectionReady', () => {
//   console.log('[local connected]')
// })
client.connect()
// local.once('error', () => {
//   console.log('[local err]')
// })
// local.connect()