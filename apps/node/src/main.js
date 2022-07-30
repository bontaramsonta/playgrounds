const M = 4

let YOUTUBE_CHAT = []

let DB_CHAT = []

const _insertChat = (type) => {
  const index = YOUTUBE_CHAT.length
  const chat = {
    chat: `Hello${index + 1}`,
    type,
  }
  YOUTUBE_CHAT.push(chat)
}

const getChats = (pageIndex) => {
  return YOUTUBE_CHAT.slice(pageIndex * M, (pageIndex + 1) * M)
}
const getChatCount = () => {
  return YOUTUBE_CHAT.length
}

const getDbChatSlice = (pageIndex) => {
  return DB_CHAT.slice(pageIndex * M, (pageIndex + 1) * M)
}

let _status = 'liveStarting'
let _run_count = 0
let db_count = DB_CHAT.length
let changePage = false
let pageIndex = 0
const _l = (...args) => {
  console.log(`[${_run_count}]`, ...args)
}
function run() {
  _run_count++
  _l('------')
  const yt_count = getChatCount()
  const page_limit = M * (pageIndex + 1)
  _l(db_count, yt_count)
  if (_status == 'live' && yt_count > db_count) {
    _l('[get chats]')
    if (changePage) {
      _l('[next page fetched]')
      changePage = false
    }
    const chats = getChats(pageIndex)
    const dbchats = getDbChatSlice(pageIndex)
    const textchats = chats.filter((chat) => chat.type == 'text')
    const actual_yt_count = textchats.length
    const actual_db_count = dbchats.length
    _l('[text chats]', actual_yt_count, textchats)
    if (actual_yt_count > actual_db_count) {
      const slicedtextchats = textchats.slice(actual_db_count % M)
      _l('[sliced text chats]', actual_db_count % M, slicedtextchats)
      DB_CHAT.push(...slicedtextchats)
    }
    if (yt_count >= page_limit) {
      _l('[ready to change page]')
      ++pageIndex // inc pageIndex
      changePage = true
    }
    db_count = yt_count
    _l('[pI]', changePage, pageIndex)
    _l('[db]', db_count, DB_CHAT)
    _l('[yt]', yt_count, YOUTUBE_CHAT)
  } else if (_status != 'live') {
    _l('[not live]', _status)
  } else {
    _l('[nothing to do]')
  }
  _l('------\n')
}

//events timeline
run() // 1 --> not live
_status = 'live'
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
_insertChat('ended')
run() // 8
run() // 9
_status = 'complete'
run() // 10

console.log('[final yt state]', YOUTUBE_CHAT)
console.log('[final db state]', DB_CHAT)
