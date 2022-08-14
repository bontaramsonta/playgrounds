import { ObjectId } from 'mongodb'
import dayjs from 'dayjs'
const docTypes = ['dl', 'hi', 'we', 'contract', 'passport', 'res_perm', 'edu_cert']
const _docTranslateEnglish = {
  'dl': 'driving license',
  'hi': 'health insurance',
  'we': 'work experience',
  'contract': 'contract',
  'passport': 'passport',
  'res_perm': 'residential permit',
  'edu_cert': 'educational certificate'
}

const emps = [{
  "_id": ObjectId("6236ec8682bacbf171f8f1c5"),
  "emp_name": "RAHMAH MAHDI AL KHOWAIT",
  "dl": [],
  "hi": [
    ObjectId("6236ec8682bacbf171f8f1c8")
  ],
  "we": [],
  "contract": [
    ObjectId("6236ec8682bacbf171f8f1c6"),
    ObjectId("625bd7f0aa6787b749f5f557")
  ],
  "edu_cert": [
    ObjectId("6236ec8682bacbf171f8f1cc")
  ],
  "res_perm": [
    ObjectId("6236ec8682bacbf171f8f1ca")
  ],
  "passport": []
},
{
  "_id": ObjectId("6237291882bacbf171f8f28a"),
  "emp_name": "MOHIB MUKHTAR HARNAIKAR",
  "dl": [],
  "hi": [
    ObjectId("6237291882bacbf171f8f28d")
  ],
  "we": [],
  "contract": [
    ObjectId("6237291882bacbf171f8f28b")
  ],
  "edu_cert": [
    ObjectId("6237291882bacbf171f8f293")
  ],
  "res_perm": [
    ObjectId("6237291882bacbf171f8f28f"),
    ObjectId("62f4a548375005877d84e684")
  ],
  "passport": [
    ObjectId("6237291882bacbf171f8f291"),
    ObjectId("62e7a4fa375005877d84de4b")
  ]
},
{
  "_id": ObjectId("6238268a82bacbf171f8f357"),
  "emp_name": "SAIJU SABU",
  "dl": [],
  "hi": [
    ObjectId("6238268a82bacbf171f8f35a")
  ],
  "we": [],
  "contract": [
    ObjectId("6238268a82bacbf171f8f358")
  ],
  "edu_cert": [
    ObjectId("6238268a82bacbf171f8f360")
  ],
  "res_perm": [
    ObjectId("6238268a82bacbf171f8f35c")
  ],
  "passport": [
    ObjectId("6238268a82bacbf171f8f35e")
  ]
},
{
  "_id": ObjectId("62567e674aab17cd79e88b49"),
  "emp_name": "LAILA ABDULAZIZ ALGHAMDI",
  "dl": [],
  "hi": [
    ObjectId("62567e674aab17cd79e88b4a")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("62567e674aab17cd79e88b4e")
  ],
  "res_perm": [
    ObjectId("62567e674aab17cd79e88b4c")
  ],
  "passport": []
},
{
  "_id": ObjectId("625690964aab17cd79e88bad"),
  "emp_name": "Sara Saad Abdulmohsen",
  "dl": [],
  "hi": [
    ObjectId("625690964aab17cd79e88bae")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("625690964aab17cd79e88bb2")
  ],
  "res_perm": [
    ObjectId("625690964aab17cd79e88bb0")
  ],
  "passport": []
},
{
  "_id": ObjectId("62569f474aab17cd79e88bed"),
  "emp_name": "Munirah ahmed alkhaldi",
  "dl": [],
  "hi": [
    ObjectId("62569f474aab17cd79e88bee")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("62569f474aab17cd79e88bf2")
  ],
  "res_perm": [
    ObjectId("62569f474aab17cd79e88bf0")
  ],
  "passport": []
},
{
  "_id": ObjectId("6256bfe6ed3d6bee3a893e3e"),
  "emp_name": "Shariafa Alawami",
  "dl": [],
  "hi": [
    ObjectId("6256bfe6ed3d6bee3a893e3f")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("6256bfe6ed3d6bee3a893e43")
  ],
  "res_perm": [
    ObjectId("6256bfe6ed3d6bee3a893e41")
  ],
  "passport": []
},
{
  "_id": ObjectId("6256dcfb2acac1641f76255d"),
  "emp_name": "red",
  "dl": [
    ObjectId("6256dcfb2acac1641f762560"),
    ObjectId("62f4c04e375005877d84e71b")
  ],
  "hi": [],
  "we": [],
  "contract": [],
  "edu_cert": [],
  "res_perm": [],
  "passport": []
},
{
  "_id": ObjectId("6257ca99b2afcd63f509b364"),
  "emp_name": "SYED ABDUL WAHAB",
  "dl": [],
  "hi": [
    ObjectId("6257ca99b2afcd63f509b367")
  ],
  "we": [],
  "contract": [
    ObjectId("6257ca99b2afcd63f509b365")
  ],
  "edu_cert": [
    ObjectId("6257ca99b2afcd63f509b36d")
  ],
  "res_perm": [
    ObjectId("6257ca99b2afcd63f509b369")
  ],
  "passport": [
    ObjectId("6257ca99b2afcd63f509b36b")
  ]
},
{
  "_id": ObjectId("6257d3acb2afcd63f509b3c5"),
  "emp_name": "SAHUL HAMEED",
  "dl": [],
  "hi": [
    ObjectId("6257d3acb2afcd63f509b3c6")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [],
  "res_perm": [
    ObjectId("6257d3acb2afcd63f509b3c8")
  ],
  "passport": [
    ObjectId("6257d3acb2afcd63f509b3ca"),
    ObjectId("62e7a1dd375005877d84de35")
  ]
},
{
  "_id": ObjectId("6257da3ab2afcd63f509b3fb"),
  "emp_name": "FAHEEM MEHBOOB KHAN",
  "dl": [],
  "hi": [
    ObjectId("6257da3ab2afcd63f509b3fc")
  ],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("6257da3ab2afcd63f509b402")
  ],
  "res_perm": [
    ObjectId("6257da3ab2afcd63f509b3fe")
  ],
  "passport": [
    ObjectId("6257da3ab2afcd63f509b400")
  ]
},
{
  "_id": ObjectId("625bcbb7aa6787b749f5f538"),
  "emp_name": "Md wazir khan",
  "dl": [],
  "hi": [],
  "we": [],
  "contract": [
    ObjectId("625bcbb7aa6787b749f5f539")
  ],
  "edu_cert": [],
  "res_perm": [],
  "passport": []
},
{
  "_id": ObjectId("625e6d44c26a1cdd1e4b9812"),
  "emp_name": "JAVID MUTHALEEF JALEEL",
  "dl": [],
  "hi": [],
  "we": [],
  "contract": [],
  "edu_cert": [
    ObjectId("625e6d44c26a1cdd1e4b9817")
  ],
  "res_perm": [
    ObjectId("625e6d44c26a1cdd1e4b9813")
  ],
  "passport": [
    ObjectId("625e6d44c26a1cdd1e4b9815")
  ]
}]

const docs = [
  { "_id": ObjectId("6231a89ccce712468fa41ba8"), "expiry": new Date("2023-08-21T00:00:00Z"), "issue": new Date("2014-08-12T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_7764743955258764", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:06:35.807Z"), "docType": "comp_reg_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231aa15cce712468fa41bba"), "expiry": new Date("2023-07-23T00:00:00Z"), "issue": new Date("2022-02-15T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_9272248393041496", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:12:52.770Z"), "docType": "municipalty_lc", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231aafccce712468fa41bca"), "expiry": new Date("2022-08-03T00:00:00Z"), "issue": new Date("2020-12-07T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_49075917337265085", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:16:44.559Z"), "docType": "chamber_of_commerce", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231ab8bcce712468fa41bd9"), "expiry": new Date("2021-04-22T00:00:00Z"), "issue": new Date("2022-03-16T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_7395518495948974", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:19:07.069Z"), "docType": "gosi", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231abe5cce712468fa41be3"), "expiry": new Date("2021-09-30T00:00:00Z"), "issue": new Date("2022-03-16T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_6741817926606501", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:20:37.005Z"), "docType": "comp_nat_add", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050401096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231ad8ecce712468fa41bed"), "expiry": new Date("2022-12-29T00:00:00Z"), "issue": new Date("2021-12-30T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_07607008624930733", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:27:42.159Z"), "docType": "office_rent", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231aea1cce712468fa41bf7"), "expiry": new Date("2021-01-28T00:00:00Z"), "issue": new Date("2021-01-01T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_10855818431252828", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:32:17.188Z"), "docType": "vat_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231af49cce712468fa41c01"), "expiry": new Date("2022-01-22T00:00:00Z"), "issue": new Date("2020-09-22T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_913618852897017", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:35:04.674Z"), "docType": "zakat_tax", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231b04bcce712468fa41c0b"), "expiry": new Date("2026-12-31T00:00:00Z"), "issue": new Date("2020-09-03T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_4661084625108083", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:39:23.575Z"), "docType": "comp_aoa", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231b0c2cce712468fa41c15"), "expiry": new Date("2022-12-29T00:00:00Z"), "issue": new Date("2021-12-30T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_07424812678862236", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T09:41:21.653Z"), "docType": "warehouse_rent", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231cfe4cce712468fa41c31"), "expiry": new Date("2030-01-27T00:00:00Z"), "issue": new Date("2018-03-16T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_08144434642090181", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T11:54:12.356Z"), "docType": "iso_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231d03dcce712468fa41c3b"), "expiry": new Date("2030-03-16T00:00:00Z"), "issue": new Date("2022-03-16T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_9505942083484344", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T11:55:41.611Z"), "docType": "fiata", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050401096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6231d418cce712468fa41c45"), "expiry": new Date("2023-07-23T00:00:00Z"), "issue": new Date("2021-08-14T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_7419269726082005", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-16T12:12:08.167Z"), "docType": "wca_gaa_lc", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232d07dcce712468fa41cb9"), "expiry": new Date("2023-08-21T00:00:00Z"), "issue": new Date("2014-08-12T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_4005228133765162", "owner": "Company", "ownerRef": ObjectId("622edb660a596d21f3a733ae"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T06:09:01.184Z"), "docType": "comp_reg_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104098", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232d118cce712468fa41cc3"), "expiry": new Date("2022-09-06T00:00:00Z"), "issue": new Date("2019-10-27T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_2534502576577169", "owner": "Company", "ownerRef": ObjectId("622edb660a596d21f3a733ae"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T06:11:35.566Z"), "docType": "municipalty_lc", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104098", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232d197cce712468fa41ccd"), "expiry": new Date("2022-09-03T00:00:00Z"), "issue": new Date("2021-09-03T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_8189934525494433", "owner": "Company", "ownerRef": ObjectId("622edb660a596d21f3a733ae"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T06:13:42.996Z"), "docType": "municipalty_lc", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104098", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232d272cce712468fa41cd7"), "expiry": new Date("2022-01-27T00:00:00Z"), "issue": new Date("2022-03-17T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_02921767241423545", "owner": "Company", "ownerRef": ObjectId("622edb660a596d21f3a733ae"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T06:17:22.049Z"), "docType": "marine_trans_lc", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050105098", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232e41acce712468fa41d88"), "expiry": new Date("2022-08-03T00:00:00Z"), "issue": new Date("2020-12-07T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_764062943186905", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T07:32:42.300Z"), "docType": "chamber_of_commerce", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232e4a0cce712468fa41da2"), "expiry": new Date("2021-01-28T00:00:00Z"), "issue": new Date("2021-01-01T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_508745566716649", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T07:34:51.126Z"), "docType": "vat_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6232e4e9cce712468fa41dbc"), "expiry": new Date("2021-01-28T00:00:00Z"), "issue": new Date("2021-01-01T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_5780010118851526", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T07:36:08.961Z"), "docType": "vat_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6233000ecce712468fa41e28"), "expiry": new Date("2023-05-31T00:00:00Z"), "issue": new Date("2023-03-17T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_33852322044273264", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-17T09:31:57.623Z"), "docType": "vat_cert", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6236ec8682bacbf171f8f1c6"), "expiry": new Date("2024-03-21T00:00:00Z"), "issue": new Date("2021-05-19T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/03_contract_0", "owner": "Employee", "ownerRef": ObjectId("6236ec8682bacbf171f8f1c5"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "CONTRACT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6236ec8682bacbf171f8f1c8"), "expiry": new Date("2022-12-18T00:00:00Z"), "issue": new Date("2021-12-18T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/03_hi_0", "owner": "Employee", "ownerRef": ObjectId("6236ec8682bacbf171f8f1c5"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6236ec8682bacbf171f8f1ca"), "expiry": new Date("2023-03-12T00:00:00Z"), "issue": new Date("2022-03-20T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/03_res_perm_0", "owner": "Employee", "ownerRef": ObjectId("6236ec8682bacbf171f8f1c5"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6237103c82bacbf171f8f235"), "expiry": new Date("2022-04-18T00:00:00Z"), "issue": new Date("2022-03-20T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_6496849121404453", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-20T11:30:03.219Z"), "docType": "gosi", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6237291882bacbf171f8f28b"), "expiry": new Date("2024-03-21T00:00:00Z"), "issue": new Date("2022-03-20T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_contract_0", "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "CONTRACT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6237291882bacbf171f8f28d"), "expiry": new Date("2022-12-18T00:00:00Z"), "issue": new Date("2021-12-18T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_hi_0", "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6237291882bacbf171f8f28f"), "expiry": new Date("2022-09-14T00:00:00Z"), "issue": new Date("2022-03-20T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_res_perm_0", "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6237291882bacbf171f8f291"), "expiry": new Date("2026-04-06T00:00:00Z"), "issue": new Date("2016-04-05T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_passport_0", "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-20T00:00:00Z"), "docType": "PASSPORT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6238268a82bacbf171f8f358"), "expiry": new Date("2023-03-14T00:00:00Z"), "issue": new Date("2020-11-01T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/6_contract_0", "owner": "Employee", "ownerRef": ObjectId("6238268a82bacbf171f8f357"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-21T00:00:00Z"), "docType": "CONTRACT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6238268a82bacbf171f8f35a"), "expiry": new Date("2022-12-18T00:00:00Z"), "issue": new Date("2022-12-18T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/6_hi_0", "owner": "Employee", "ownerRef": ObjectId("6238268a82bacbf171f8f357"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-21T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6238268a82bacbf171f8f35c"), "expiry": new Date("2023-01-05T00:00:00Z"), "issue": new Date("2022-01-06T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/6_res_perm_0", "owner": "Employee", "ownerRef": ObjectId("6238268a82bacbf171f8f357"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-21T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6238268a82bacbf171f8f35e"), "expiry": new Date("2025-05-17T00:00:00Z"), "issue": new Date("2015-05-18T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/6_passport_0", "owner": "Employee", "ownerRef": ObjectId("6238268a82bacbf171f8f357"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-03-21T00:00:00Z"), "docType": "PASSPORT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("6240178b82bacbf171f8f9cd"), "expiry": new Date("2023-05-31T00:00:00Z"), "issue": new Date("2020-09-22T00:00:00Z"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_36229727045026583", "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "uploadedBy": "New one", "uploadedAt": new Date("2022-03-27T07:51:39.157Z"), "docType": "zakat_tax", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": false, "isOptimized": false, "remarks": null, "isDeleted": false },
  { "_id": ObjectId("62567e674aab17cd79e88b4a"), "url": "https://bala-trs.s3.amazonaws.com/documents/4_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("62567e674aab17cd79e88b49"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62567e674aab17cd79e88b4c"), "url": "https://bala-trs.s3.amazonaws.com/documents/4_res_perm_0", "issue": new Date("2022-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("62567e674aab17cd79e88b49"), "expiry": new Date("2025-06-19T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625690964aab17cd79e88bae"), "url": "https://bala-trs.s3.amazonaws.com/documents/5_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625690964aab17cd79e88bad"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625690964aab17cd79e88bb0"), "url": "https://bala-trs.s3.amazonaws.com/documents/5_res_perm_0", "issue": new Date("2022-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625690964aab17cd79e88bad"), "expiry": new Date("2026-07-29T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62569f474aab17cd79e88bee"), "url": "https://bala-trs.s3.amazonaws.com/documents/9_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("62569f474aab17cd79e88bed"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62569f474aab17cd79e88bf0"), "url": "https://bala-trs.s3.amazonaws.com/documents/9_res_perm_0", "issue": new Date("2022-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("62569f474aab17cd79e88bed"), "expiry": new Date("2024-10-22T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6256a4cb4aab17cd79e88c21"), "url": "https://bala-trs.s3.amazonaws.com/documents/COMP_23601424786759018", "issue": new Date("2020-09-22T00:00:00Z"), "owner": "Company", "ownerRef": ObjectId("620c4ccfbd80c67b35e55c0a"), "expiry": new Date("2023-05-31T00:00:00Z"), "uploadedBy": "New one", "uploadedAt": new Date("2022-04-13T10:24:09.373Z"), "docType": "zakat_tax", "car_no": "", "model_no": "", "location": "King Faisal Bin Abdul Aziz Road, 2nd Floor , Office No 11, Dammam 32233", "country": "Saudi Arabia", "cr_no": "2050104096", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6256bfe6ed3d6bee3a893e3f"), "url": "https://bala-trs.s3.amazonaws.com/documents/10_hi_0", "issue": new Date("2022-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6256bfe6ed3d6bee3a893e3e"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6256bfe6ed3d6bee3a893e41"), "url": "https://bala-trs.s3.amazonaws.com/documents/10_res_perm_0", "issue": new Date("2019-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6256bfe6ed3d6bee3a893e3e"), "expiry": new Date("2023-08-17T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6256dcfb2acac1641f762560"), "url": "https://bala-trs.s3.amazonaws.com/documents/red_dl_0", "issue": new Date("2022-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6256dcfb2acac1641f76255d"), "expiry": new Date("2022-04-14T00:00:00Z"), "willExpire": true, "uploadedBy": "The reciprocal Solutions", "uploadedAt": new Date("2022-04-13T00:00:00Z"), "docType": "DL", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257ca99b2afcd63f509b365"), "url": "https://bala-trs.s3.amazonaws.com/documents/11_contract_0", "issue": new Date("2021-01-03T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257ca99b2afcd63f509b364"), "expiry": new Date("2024-01-03T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "CONTRACT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257ca99b2afcd63f509b367"), "url": "https://bala-trs.s3.amazonaws.com/documents/11_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257ca99b2afcd63f509b364"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257ca99b2afcd63f509b369"), "url": "https://bala-trs.s3.amazonaws.com/documents/11_res_perm_0", "issue": new Date("2021-11-12T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257ca99b2afcd63f509b364"), "expiry": new Date("2022-11-12T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257ca99b2afcd63f509b36b"), "url": "https://bala-trs.s3.amazonaws.com/documents/11_passport_0", "issue": new Date("2015-03-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257ca99b2afcd63f509b364"), "expiry": new Date("2025-03-15T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "PASSPORT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257d3acb2afcd63f509b3c6"), "url": "https://bala-trs.s3.amazonaws.com/documents/12_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257d3acb2afcd63f509b3c5"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257d3acb2afcd63f509b3ca"), "url": "https://bala-trs.s3.amazonaws.com/documents/12_passport_0", "issue": new Date("2021-07-02T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257d3acb2afcd63f509b3c5"), "expiry": new Date("2031-07-01T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "PASSPORT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257d3acb2afcd63f509b3c8"), "url": "https://bala-trs.s3.amazonaws.com/documents/12_res_perm_0", "issue": new Date("2022-03-30T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257d3acb2afcd63f509b3c5"), "expiry": new Date("2023-03-30T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": false, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257da3ab2afcd63f509b3fc"), "url": "https://bala-trs.s3.amazonaws.com/documents/13_hi_0", "issue": new Date("2021-12-18T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257da3ab2afcd63f509b3fb"), "expiry": new Date("2022-12-18T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "HI", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257da3ab2afcd63f509b3fe"), "url": "https://bala-trs.s3.amazonaws.com/documents/13_res_perm_0", "issue": new Date("2021-10-01T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257da3ab2afcd63f509b3fb"), "expiry": new Date("2022-10-01T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "RES_PERM", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("6257da3ab2afcd63f509b400"), "url": "https://bala-trs.s3.amazonaws.com/documents/13_passport_0", "issue": new Date("2021-07-02T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257da3ab2afcd63f509b3fb"), "expiry": new Date("2022-04-24T00:00:00Z"), "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-14T00:00:00Z"), "docType": "PASSPORT", "car_no": "", "model_no": "", "location": "", "country": "", "cr_no": "", "member_no": "", "inUse": true, "remarks": null, "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625bcbb7aa6787b749f5f539"), "url": "https://bala-trs.s3.amazonaws.com/documents/14_contract_0", "issue": new Date("2022-03-23T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625bcbb7aa6787b749f5f538"), "expiry": new Date("2023-03-23T00:00:00Z"), "willExpire": true, "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-17T00:00:00Z"), "docType": "CONTRACT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625bd7f0aa6787b749f5f557"), "url": "https://bala-trs.s3.amazonaws.com/documents/03_contract_1", "issue": new Date("2021-05-19T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6236ec8682bacbf171f8f1c5"), "expiry": new Date("2024-03-21T00:00:00Z"), "willExpire": false, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-04-17T00:00:00Z"), "docType": "CONTRACT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625e6d44c26a1cdd1e4b9813"), "url": "https://bala-trs.s3.amazonaws.com/documents/15_res_perm_0", "issue": new Date("2022-02-07T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625e6d44c26a1cdd1e4b9812"), "expiry": new Date("2023-02-06T00:00:00Z"), "willExpire": true, "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-19T00:00:00Z"), "docType": "RES_PERM", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625e6d44c26a1cdd1e4b9815"), "url": "https://bala-trs.s3.amazonaws.com/documents/15_passport_0", "issue": new Date("2013-02-07T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625e6d44c26a1cdd1e4b9812"), "expiry": new Date("2023-02-06T00:00:00Z"), "willExpire": true, "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-19T00:00:00Z"), "docType": "PASSPORT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("625e6d44c26a1cdd1e4b9817"), "url": "https://bala-trs.s3.amazonaws.com/documents/15_edu_cert_0", "issue": new Date("2013-04-05T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("625e6d44c26a1cdd1e4b9812"), "willExpire": false, "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-04-19T00:00:00Z"), "docType": "EDU_CERT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62e7a1dd375005877d84de35"), "url": "https://bala-trs.s3.amazonaws.com/documents/12_passport_1", "issue": new Date("2021-07-02T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257d3acb2afcd63f509b3c5"), "expiry": new Date("2031-07-01T00:00:00Z"), "willExpire": true, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-08-01T00:00:00Z"), "docType": "PASSPORT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62e7a1dd375005877d84de33"), "url": "https://bala-trs.s3.amazonaws.com/documents/12_res_perm_1", "issue": new Date("2022-03-30T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6257d3acb2afcd63f509b3c5"), "expiry": new Date("2023-03-30T00:00:00Z"), "willExpire": true, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-08-01T00:00:00Z"), "docType": "RES_PERM", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62e7a4fa375005877d84de4b"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_passport_1", "issue": new Date("2016-04-05T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "expiry": new Date("2026-04-06T00:00:00Z"), "willExpire": true, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-08-01T00:00:00Z"), "docType": "PASSPORT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62f3dc34375005877d84e5c4"), "url": "https://bala-trs.s3.amazonaws.com/documents/r_contract_0", "issue": new Date("2022-08-10T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("62f3dc34375005877d84e5c3"), "willExpire": false, "uploadedBy": "HR Admin", "uploadedAt": new Date("2022-08-10T00:00:00Z"), "docType": "CONTRACT", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62f4a548375005877d84e684"), "url": "https://bala-trs.s3.amazonaws.com/documents/2_res_perm_1", "issue": new Date("2022-03-20T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6237291882bacbf171f8f28a"), "expiry": new Date("2023-09-03T00:00:00Z"), "willExpire": true, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-08-11T00:00:00Z"), "docType": "RES_PERM", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
  { "_id": ObjectId("62f4c04e375005877d84e71b"), "url": "https://bala-trs.s3.amazonaws.com/documents/red_dl_1", "issue": new Date("2022-04-13T00:00:00Z"), "owner": "Employee", "ownerRef": ObjectId("6256dcfb2acac1641f76255d"), "expiry": new Date("2022-04-14T00:00:00Z"), "willExpire": true, "uploadedBy": "hr@abduiglobal.com", "uploadedAt": new Date("2022-08-11T00:00:00Z"), "docType": "DL", "location": "", "country": "", "cr_no": "", "inUse": true, "remarks": "", "isDeleted": false, "__v": 0 },
]

const _l = (...a) => 1/*console.log(a.join(','))*/
_l('employees,document,uploaded,expiry')
console.log(emps.length)
emps.forEach(e => {
  _l(e.emp_name, '', '', '')
  docTypes.forEach(docType => {
    let doc_id_arr = e[docType]
    if (Array.isArray(doc_id_arr) && doc_id_arr.length == 0) {
      _l('', _docTranslateEnglish[docType], 'FALSE', '-')
    } else {
      let latest_doc = docs.find(doc => doc._id.equals(doc_id_arr[doc_id_arr.length - 1]))
      // _l('[latest doc]', latest_doc)
      let expiry = (latest_doc?.willExpire || latest_doc?.expiry) ? dayjs(latest_doc.expiry).format('DD/MM/YYYY') : 'no expiry'
      let inUse = latest_doc?.inUse || true
      _l('', _docTranslateEnglish[docType], 'TRUE', expiry)
    }
  })
})