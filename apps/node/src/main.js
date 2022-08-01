const PAGE_SIZE = 8

let YOUTUBE_CHAT = []

let DB_CHAT = []

const _insertChat = (type) => {
  const index = YOUTUBE_CHAT.length
  const chat = {
    id: Math.random().toString(36).substring(2, 15),
    chat: `Hello${index + 1}`,
    type,
  }
  YOUTUBE_CHAT.push(chat)
}

const getChats = (pageIndex) => {
  return {
    totalResultsPerPage: PAGE_SIZE,
    totalResults: YOUTUBE_CHAT.length,
    chats: YOUTUBE_CHAT.slice(
      pageIndex * PAGE_SIZE,
      (pageIndex + 1) * PAGE_SIZE
    ),
  }
}

const getDbChatSlice = (pageIndex) => {
  return DB_CHAT.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE).map(
    (i) => i.id
  )
}

let _run_count = 0
let db_count = 0
let changePage = false
let pageIndex = 0
const _l = (...args) => {
  console.log(`[${_run_count}]`, ...args)
}
function run() {
  _run_count++
  _l('------')
  if (changePage) {
    // include next page token in chat input
    _l('fetch new chats', pageIndex)
    changePage = false
  }
  const LiveChatresponse = getChats(pageIndex)
  const yt_count = LiveChatresponse.chats.length + pageIndex * PAGE_SIZE
  _l(
    'un-filtered chats',
    LiveChatresponse.chats.map((c) => `${c.type}:${c.chat}`)
  )
  let chats = LiveChatresponse.chats
    .filter((i) => i.type == 'text')
    .map((i) => ({
      chatId: i.id,
      broadcastId: 'example-broadcast-id',
      message: i.chat,
      source: '1',
      username: '2',
      timestamp: new Date(),
    }))
  _l(
    'filtered',
    chats.map((c) => c.message)
  )
  const seperator = db_count
  const new_chats = chats.slice(seperator)
  _l({ new_chats, l: new_chats.length, seperator })
  if (new_chats.length > 0) {
    // convert to id array
    const new_ids = new_chats.map((c) => c.message)
    DB_CHAT.push(...new_ids)
    // increment db counter
    db_count += new_ids.length
    // send new chats to users
  } else {
    _l('===> no new chats')
  }
  const page_limit = (pageIndex + 1) * PAGE_SIZE
  _l(db_count, yt_count, page_limit)
  if (yt_count >= page_limit) {
    changePage = true
    pageIndex++
    // reset count
    db_count = 0
    _l('change page next request', pageIndex)
  }
  // save all saves to db
  _l('db_count', db_count)
  _l('changePage', changePage)
  _l('pageIndex', pageIndex)
  // _l('nextChatToken', 'example-next-chat-token')

  _l('------\n')
}

//events timeline
run() // 1 --> not live
_insertChat('text')
_insertChat('delete')
run() // 2 --> live with mixed chats
_insertChat('text')
_insertChat('text')
_insertChat('supchat')
run() // 3 --> overflow page
_insertChat('banned')
_insertChat('sticker')
run() // 4  --> no text chats
run() // 5  --> no chats
_insertChat('text')
_insertChat('text')
_insertChat('supchat')
run() // 6  --> next page logic
_insertChat('banned')
_insertChat('sticker')
run() // 7
_insertChat('text')
_insertChat('text')
_insertChat('supchat')
run() // 3 --> overflow page
_insertChat('banned')
_insertChat('sticker')
run() // 4  --> no text chats
run() // 5  --> no chats
_insertChat('text')
_insertChat('text')
_insertChat('supchat')
run() // 6  --> next page logic
_insertChat('banned')
_insertChat('sticker')
run() // 7
_insertChat('text')
_insertChat('ended')
run() // 8
run() // 10

console.log(
  '[final yt state]',
  YOUTUBE_CHAT.map((i) => `${i.type}:${i.chat}`)
)
console.log('[final db state]', DB_CHAT)
