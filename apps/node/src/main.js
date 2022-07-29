const M = 4

let YOUTUBE_CHAT = []

let DB_CHAT = []

const _insertChat = () => {
  const index = YOUTUBE_CHAT.length
  const chat = {
    chat: `Hello${index + 1}`,
  }
  YOUTUBE_CHAT.push(chat)
}

const getChats = (pageIndex) => {
  return YOUTUBE_CHAT.slice(pageIndex * M, (pageIndex + 1) * M)
}
const getChatCount = () => {
  return YOUTUBE_CHAT.length
}

let pageIndex = 0
// let changePage = false
let db_count = DB_CHAT.length
let _run_count = 0
const _l = (...args) => {
  console.log(`[${_run_count}]`, ...args)
}
function run() {
  _run_count++
  _l('------')
  const yt_count = getChatCount()
  _l(db_count, yt_count)
  if (db_count < yt_count) {
    _l('[get chats]')
    const page_limit = M * (pageIndex + 1)
    const upper = Math.min(yt_count, page_limit)
    _l('[upper]', upper)
    let chats = getChats(pageIndex)
    _l('[chats]', pageIndex, chats)
    const lower = db_count % M
    let slicedchats = chats.slice(lower, upper)
    _l('[delta]', slicedchats.length)
    _l('[slicedchats]', lower, upper, slicedchats)
    db_count += slicedchats.length
    DB_CHAT.push(...slicedchats)
    // _l('[chats]', chats)
    if (yt_count >= page_limit) {
      _l('[next page]', ++pageIndex)
    }
  }
  _l('[pI]', pageIndex)
  _l('[db]', DB_CHAT.length)
  _l('[yt]', YOUTUBE_CHAT.length)
  _l('------\n')
}

//events timeline
_insertChat()
_insertChat()
run()
_insertChat()
_insertChat()
_insertChat()
run()
run()

console.log('[final yt state]', YOUTUBE_CHAT)
console.log('[final db state]', DB_CHAT)
