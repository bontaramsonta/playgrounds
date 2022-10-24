import { readdir, readFile, writeFile, rm } from 'fs/promises';
import { resolve } from 'node:path'
import Papa from 'papaparse'
import * as R from 'ramda'

const INPUT_DIR = 'data/input'
const OUTPUT_DIR = 'data/output'

const keyTranslation = {
  'EMPID': 'emp_code',
  'NAME': 'emp_name',
  'CONTRACT_START': 'contract_start',
  'CONTRACT_END': 'contract_end',
  'DATE_OF_JOINING': 'doj',
  'DATE_OF_BIRTH': 'dob',
  'RESIDENTIAL_NO': 'res_no',
  'WORK_PHONE': 'work_phone',
  'WORK_LOCATION': 'work_location',
  'JOB_TITLE': 'job_title',
  'PARENT_PHONE': 'parent_phone',
  'MOBILE_PHONE': 'mobile_phone',
  'MARITAL_STATUS': 'marital_status',
  'GENDER': 'gender',
  'EMAIL': 'email',
  'NATIONALITY': 'nationality',
  'SPOUSE_PHONE': 'spouse_phone',
  'EMERGENCY_PHONE': 'emergency_phone',
  'DEPENDENTS': 'dependents',
  'ADDRESS_LINE': 'address_line',
  'BANK': 'banks',
  'CONTRACT': 'contract',
  'DRIVING_LICENSE': 'dl',
  'HEALTH_INSURANCE': 'hi',
  'WORK_EXPERIENCE': 'we',
  'RESIDENTIAL_PERMIT/IQMA': 'res_perm',
  'PASSPORT': 'passport',
  'EDUCATIONAL_CERTIFICATE': 'edu_cert',
}

const parseConfig = {
  // delimiter: "",	// auto-detect
  // newline: "",	// auto-detect
  quoteChar: '"',
  escapeChar: '"',
  header: true,
  transformHeader: undefined,
  dynamicTyping: false,
  preview: 0,
  encoding: "utf-8",
  worker: false,
  comments: false,
  step: undefined,
  complete: undefined,
  error: undefined,
  download: false,
  downloadRequestHeaders: undefined,
  downloadRequestBody: undefined,
  skipEmptyLines: false,
  chunk: undefined,
  chunkSize: undefined,
  fastMode: undefined,
  beforeFirstChunk: undefined,
  withCredentials: undefined,
  transform: undefined,
  delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
}

const pipeline = (data) => {
  return data.map(d => {
    let obj = {}
    Object.keys(d)
      .filter(k => ['DOCUMENT_PREVIEWS (READONLY)'].indexOf(k) === -1)
      .forEach(key => {
        const keys = key.split(':').map(k => /^[0-9]$/.test(k) ? Number(k) : keyTranslation[k] ?? k)
        // console.log(keys[0])
        obj = R.assocPath(keys, d[key], obj)
      })
    return obj
  })
}


try {
  const files = await readdir(resolve(INPUT_DIR));
  for (const file of files) {
    console.log('[for]', file)
    // read the file
    const contents = await readFile(resolve(INPUT_DIR, file), { encoding: 'utf-8' })
    try {
      const parsed = Papa.parse(contents, parseConfig)
      console.log('[parse row errors]', parsed.errors)
      // console.log('[parsed data]', parsed.data)
      const data = pipeline(parsed.data)
      console.log('[transformed data]')
      console.dir(data, { depth: 10 })

      // write output
      await rm(resolve(OUTPUT_DIR, "*"), { recursive: true, force: true })
      await writeFile(resolve(OUTPUT_DIR, file.split('.')[0] + '.json'), JSON.stringify(data, null, 2))
    } catch (err) {
      console.error('[parse global error]', err)
    }
  }
} catch (err) {
  console.error(err)
}