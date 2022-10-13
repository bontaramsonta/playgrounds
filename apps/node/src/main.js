import _ from 'lodash'

const products = [
  {
    "_id": "632d929e1e4be52d7819bdab",
    "title": "Silk Blend Woven Kurta Skirt and Dupatta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663930214612.png"
      }
    ]
  },
  {
    "_id": "632d95721e4be52d7819bdd7",
    "title": "Silk Blend Woven Kurta Palazzo's and Dupatta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663931268153.png"
      }
    ]
  },
  {
    "_id": "632d97b31e4be52d7819bdff",
    "title": "Women Block Print Anarkali Kurta-Brown",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663931944467.png"
      }
    ]
  },
  {
    "_id": "632d9a191e4be52d7819be1f",
    "title": "Women Block Print Anarkali Kurta ",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663932463372.png"
      }
    ]
  },
  {
    "_id": "632de9ac4e3d77dcfb68a01e",
    "title": "Flutter Blobs - Organic & Natural Dye - Newborn Baby Homecoming Gift Bundle - Set of 5",
    "categoryId": "632aeef3d8aef607db2ab502",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663951222143.png"
      }
    ]
  },
  {
    "_id": "632e29c54e3d77dcfb68a03e",
    "title": "‘Bee Gees’ Baby Onesie",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663969423138.png"
      }
    ]
  },
  {
    "_id": "632e2ae84e3d77dcfb68a069",
    "title": "Humming Dots - Newborn Baby Cap & Mittens Set",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663969804382.png"
      }
    ]
  },
  {
    "_id": "632e2bd84e3d77dcfb68a07d",
    "title": "Flutter Blobs - Newborn Baby Cap & Mittens Set",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663970089032.png"
      }
    ]
  },
  {
    "_id": "632e2df14e3d77dcfb68a08f",
    "title": "Playful Baby Mittens (Set of 4) - Assorted",
    "categoryId": "632aeef3d8aef607db2ab502",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663970579250.png"
      }
    ]
  },
  {
    "_id": "632e2eca4e3d77dcfb68a09b",
    "title": "Madder Moon Sheep Wool Baby Blanket",
    "categoryId": "632aeeedd8aef607db2ab501",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663970869123.png"
      }
    ]
  },
  {
    "_id": "632e2f8d4e3d77dcfb68a0a7",
    "title": "Vintage Sheep Wool Baby Blanket - Grey & Off White",
    "categoryId": "632aeeedd8aef607db2ab501",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663971085001.png"
      }
    ]
  },
  {
    "_id": "632e982e4e3d77dcfb68a167",
    "title": "Women Kurta and Palazzo Set Georgette",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663997959780.png"
      }
    ]
  },
  {
    "_id": "632e9a864e3d77dcfb68a191",
    "title": "White Kurta Palazzo Dupatta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663998131054.png"
      }
    ]
  },
  {
    "_id": "632e9f4e4e3d77dcfb68a1db",
    "title": "Womens Gathered BlockPrinted Kurta-Blue",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663998780449.png"
      }
    ]
  },
  {
    "_id": "632ea38b4e3d77dcfb68a21d",
    "title": "Womens Gathered BlockPrinted Kurta- Pink",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1663999978119.png"
      }
    ]
  },
  {
    "_id": "632ea63d4e3d77dcfb68a257",
    "title": "Divik handloom Cotton Yellow Shirt with Camp Collar",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664001092731.jpeg"
      }
    ]
  },
  {
    "_id": "632ea6db4e3d77dcfb68a2bb",
    "title": "Hand Sequinned Kurta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664001092458.png"
      }
    ]
  },
  {
    "_id": "632eb1534e3d77dcfb68a2ef",
    "title": "Block Print Kurta and Pant Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664002656585.png"
      }
    ]
  },
  {
    "_id": "632eb5fd4e3d77dcfb68a3bb",
    "title": "Aaradh handloom Cotton shaded blue/green ombre shirt",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664005272734.jpeg"
      }
    ]
  },
  {
    "_id": "632eb8d34e3d77dcfb68a3fc",
    "title": "Aagastya handloom Cotton Rust printed Shirt with camp collar",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664006029293.jpeg"
      }
    ]
  },
  {
    "_id": "632ebb2b4e3d77dcfb68a43f",
    "title": "Shravani handloom Orange Stripe Sundress with Floral embroidery",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664006642983.jpeg"
      }
    ]
  },
  {
    "_id": "632ebe524e3d77dcfb68a47b",
    "title": "Multicolored Long Tiered Dress with Tassels",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664007118999.jpeg"
      }
    ]
  },
  {
    "_id": "632ec0824e3d77dcfb68a4b7",
    "title": "Guldasta Embroidered handloom silk black Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664008018340.jpeg"
      }
    ]
  },
  {
    "_id": "632ec7584e3d77dcfb68a4f5",
    "title": "Zari Border Kurta Palazzo Dupatta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664004541988.png"
      }
    ]
  },
  {
    "_id": "632ec7bf4e3d77dcfb68a525",
    "title": "Vanya Burgundy Embroidered Cotton Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664009707267.jpeg"
      }
    ]
  },
  {
    "_id": "632ecac04e3d77dcfb68a577",
    "title": "Embroidered Kurta Pant Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664010164640.png"
      }
    ]
  },
  {
    "_id": "632ecac04e3d77dcfb68a597",
    "title": "Maahi Dark Pink Ombre handloom Tunic",
    "categoryId": "6333f88e98cf637e0b759d67",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664010524799.jpeg"
      }
    ]
  },
  {
    "_id": "632ecc954e3d77dcfb68a5e5",
    "title": "Kashish Brown Block Printed handloom Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664011299005.jpeg"
      }
    ]
  },
  {
    "_id": "632ece6f4e3d77dcfb68a624",
    "title": "Mish handloom Cotton Pale Olive Shirt with Band Collar",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664011574824.jpeg"
      }
    ]
  },
  {
    "_id": "632ecfb64e3d77dcfb68a665",
    "title": "Cotton Block Print Kurta and Pant Set ",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664011106349.png"
      }
    ]
  },
  {
    "_id": "632ecfc34e3d77dcfb68a697",
    "title": "Piyush handloom Cotton Lunar Grey Shirt Kurta",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664012023824.jpeg"
      }
    ]
  },
  {
    "_id": "632ed1eb4e3d77dcfb68a6de",
    "title": "Burgundy Flare Dress with sequin work",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664012408366.png"
      }
    ]
  },
  {
    "_id": "632ed5a34e3d77dcfb68a70e",
    "title": "Hemp Hearts (250gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664012489482.jpeg"
      }
    ]
  },
  {
    "_id": "632ed6ac4e3d77dcfb68a745",
    "title": "Yellow & Off White Floral Print Ruffles Georgette Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664013065355.png"
      }
    ]
  },
  {
    "_id": "632ed8e44e3d77dcfb68a777",
    "title": "Hemp Hearts (500gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664013984851.jpeg"
      }
    ]
  },
  {
    "_id": "632edae94e3d77dcfb68a7ac",
    "title": "Navy Blue Georgette Maxi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664014314560.png"
      }
    ]
  },
  {
    "_id": "632edbe34e3d77dcfb68a7e0",
    "title": "Hemp Protein Powder(250gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664014839085.jpeg"
      }
    ]
  },
  {
    "_id": "632ee02e4e3d77dcfb68a84b",
    "title": "Burgundy Georgette Maxi Dress\nVENDOR",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664015691941.png"
      }
    ]
  },
  {
    "_id": "632ee0904e3d77dcfb68a867",
    "title": "Hemp Protein Powder(500gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664016142851.jpeg"
      }
    ]
  },
  {
    "_id": "632ee28d4e3d77dcfb68a89e",
    "title": "Hemp Protein Powder(2kg)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664016760747.jpeg"
      }
    ]
  },
  {
    "_id": "632ee3da4e3d77dcfb68a8cf",
    "title": "Hemp Seed Trail Mix(250gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664017170396.jpeg"
      }
    ]
  },
  {
    "_id": "632ee5184e3d77dcfb68a900",
    "title": "Hemp Seed Trail Mix(500gms)",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664017582448.jpeg"
      }
    ]
  },
  {
    "_id": "632ee6834e3d77dcfb68a937",
    "title": "Good Doggo Hemp Treats",
    "categoryId": "6333f6e798cf637e0b759d4e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664017821520.jpeg"
      }
    ]
  },
  {
    "_id": "632eef274e3d77dcfb68a97c",
    "title": "Front Knot Ombre Jumpsuit",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/webp",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664019202020.webp"
      }
    ]
  },
  {
    "_id": "632ef6744e3d77dcfb68a98e",
    "title": "Trusty Tusky Baby Cot Set",
    "categoryId": "6333f78198cf637e0b759d5b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664019805957.jpeg"
      }
    ]
  },
  {
    "_id": "632ef79e4e3d77dcfb68a9bf",
    "title": "Marshmallow Snuggly Blanket",
    "categoryId": "6333f78198cf637e0b759d5b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664022291197.jpeg"
      }
    ]
  },
  {
    "_id": "632ef7f04e3d77dcfb68a9ee",
    "title": "The Onyx Origami Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664020560920.jpeg"
      }
    ]
  },
  {
    "_id": "632ef8b44e3d77dcfb68aa02",
    "title": "I love my Stripes Blue Organic Cotton Bodysuit",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664022541521.jpeg"
      }
    ]
  },
  {
    "_id": "632ef9bc4e3d77dcfb68aa51",
    "title": "Winter Fresh Knit Throw",
    "categoryId": "6333f78198cf637e0b759d5b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664022946070.jpeg"
      }
    ]
  },
  {
    "_id": "632efbd14e3d77dcfb68aa80",
    "title": "Rainbow Print Organic Cotton Bodysuit",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664023483845.jpeg"
      }
    ]
  },
  {
    "_id": "632efc0c4e3d77dcfb68aaa7",
    "title": "The Cuff of Kindness",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664022597425.jpeg"
      }
    ]
  },
  {
    "_id": "632efd6f4e3d77dcfb68aad9",
    "title": "Pastel Pink Pixiedust Frock",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664023790842.jpeg"
      }
    ]
  },
  {
    "_id": "632eff004e3d77dcfb68ab1a",
    "title": "Organic Cotton Rainbow Swaddle Bag",
    "categoryId": "6333f78198cf637e0b759d5b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664024089550.jpeg"
      }
    ]
  },
  {
    "_id": "632f00184e3d77dcfb68ab54",
    "title": "No Eyes on Me Neckpiece",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664023680860.jpeg"
      }
    ]
  },
  {
    "_id": "632f01414e3d77dcfb68ab70",
    "title": "Happy Duck Powder Pink & Green 2-in-1 Reversible Dress",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664024458742.jpeg"
      }
    ]
  },
  {
    "_id": "632f02cc4e3d77dcfb68abbc",
    "title": "Green Bumblebee Organic Cotton Onesie",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664025023756.jpeg"
      }
    ]
  },
  {
    "_id": "632f04b94e3d77dcfb68abfd",
    "title": "Tall Tales Organic Cotton Onesie - Set of 2",
    "categoryId": "6333f83098cf637e0b759d66",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664025404889.jpeg"
      }
    ]
  },
  {
    "_id": "632f05604e3d77dcfb68ac36",
    "title": "The Unbasic Cuff",
    "categoryId": "6326d18f7bcf5275590a0715",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664024762249.jpeg"
      }
    ]
  },
  {
    "_id": "632f05de4e3d77dcfb68ac3e",
    "title": "Dreamy Love Newborn Set",
    "categoryId": "6333f78198cf637e0b759d5b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664025935297.jpeg"
      }
    ]
  },
  {
    "_id": "632f421ae2317e7e1799c425",
    "title": "White Double layered chikankari Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664040161259.jpeg"
      }
    ]
  },
  {
    "_id": "632f43dbe2317e7e1799c457",
    "title": "Tea Green Cotton Chikankari Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664041678448.jpeg"
      }
    ]
  },
  {
    "_id": "632f45ace2317e7e1799c487",
    "title": "Handloom cotton checkered kurta with keel embroidery",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664042162316.jpeg"
      }
    ]
  },
  {
    "_id": "632f46aee2317e7e1799c4c6",
    "title": "Mint hand embroidered kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664042498275.jpeg"
      }
    ]
  },
  {
    "_id": "632fcf52e2317e7e1799c573",
    "title": "Green Tie Dye Coordinate",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664077256351.jpeg"
      }
    ]
  },
  {
    "_id": "632fd18ae2317e7e1799c5a1",
    "title": "The Beach Kaftan Coord",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664078012330.jpeg"
      }
    ]
  },
  {
    "_id": "632fe5cae2317e7e1799c5f7",
    "title": "Ivory summer coordinates",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664082997018.jpeg"
      }
    ]
  },
  {
    "_id": "632fe631e2317e7e1799c614",
    "title": "Anya Block Printed Top - Moss",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664080716935.jpeg"
      }
    ]
  },
  {
    "_id": "632fe71ce2317e7e1799c648",
    "title": "The handloom (khadi) Coordinate",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664083572532.jpeg"
      }
    ]
  },
  {
    "_id": "632ff002e2317e7e1799c6e7",
    "title": "Set of 2: Sakura and Sage - Oatmeal",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664084470113.png"
      }
    ]
  },
  {
    "_id": "632ff06de2317e7e1799c71c",
    "title": "Son of Agate Neckpiece",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664085869380.jpeg"
      }
    ]
  },
  {
    "_id": "632ff1f6e2317e7e1799c730",
    "title": "Crystal Ball Neckpiece",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664086251552.jpeg"
      }
    ]
  },
  {
    "_id": "632ff220e2317e7e1799c742",
    "title": "Set of 2: Sakura and Sage - Yellow",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664086207419.png"
      }
    ]
  },
  {
    "_id": "632ff254e2317e7e1799c777",
    "title": "Mahogany Kimono Dress - Oatmeal",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664086205910.png"
      }
    ]
  },
  {
    "_id": "632ff275e2317e7e1799c79a",
    "title": "Mesa Sunrise Quilted Cotton Block Print Jacke\n",
    "categoryId": "6333f8b598cf637e0b759d6d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664085169535.jpeg"
      }
    ]
  },
  {
    "_id": "632ff3a3e2317e7e1799c7cc",
    "title": "Metamorphosis Kurta - White",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664086859553.png"
      }
    ]
  },
  {
    "_id": "632ff422e2317e7e1799c7f7",
    "title": "White Madhubani Hand-painted Folk Lady Linen Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664086855162.jpeg"
      }
    ]
  },
  {
    "_id": "632ff551e2317e7e1799c813",
    "title": "White & Cream Hand Painted Madhubani Linen Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664087219589.jpeg"
      }
    ]
  },
  {
    "_id": "632ff6f3e2317e7e1799c837",
    "title": "Blue Madhubani Hand painted Tussar Silk Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664087539426.jpeg"
      }
    ]
  },
  {
    "_id": "632ff997e2317e7e1799c881",
    "title": "Sea Blue & Yellow Shibori Pants",
    "categoryId": "6333f8b598cf637e0b759d6d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664087918689.jpeg"
      }
    ]
  },
  {
    "_id": "632ff9fce2317e7e1799c8d0",
    "title": "Jacquard Blue Embroidered top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664087749274.png"
      }
    ]
  },
  {
    "_id": "632ffb01e2317e7e1799c90b",
    "title": "Powder Blue Parallel Pants",
    "categoryId": "6333f8b598cf637e0b759d6d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664088590072.jpeg"
      }
    ]
  },
  {
    "_id": "632ffbc2e2317e7e1799c91f",
    "title": "Set of 2: Sequoia and Bonzai - Oatmeal and Deep Green",
    "categoryId": "6333f98e98cf637e0b759d75",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664088878328.png"
      }
    ]
  },
  {
    "_id": "632ffc53e2317e7e1799c948",
    "title": "Round Cane Table Mat",
    "categoryId": "6333f51398cf637e0b759d39",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664088562303.jpeg"
      }
    ]
  },
  {
    "_id": "632ffcb0e2317e7e1799c971",
    "title": "Grey-Pink Shibori Kaftan Gown",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664088975517.jpeg"
      }
    ]
  },
  {
    "_id": "632ffdf6e2317e7e1799c9b8",
    "title": "Ajrak Handcrafted Organic Cotton Cushion cover (18\" x 18\")",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/5def4a_fe9007eeef1f4658ad9a8284d33d8918_mv2.jpg"
      }
    ]
  },
  {
    "_id": "632ffe4ce2317e7e1799c9c8",
    "title": "Blue Printed Short Kurta",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664089458267.jpeg"
      }
    ]
  },
  {
    "_id": "632fff8ce2317e7e1799ca27",
    "title": "Maroon and White Printed Short Kurta",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664089786506.jpeg"
      }
    ]
  },
  {
    "_id": "63300067e2317e7e1799ca3b",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-18â€³ x W- 18â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090062298.jpeg"
      }
    ]
  },
  {
    "_id": "63300082e2317e7e1799ca47",
    "title": "Peach jaal printed half shirt",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090085055.jpeg"
      }
    ]
  },
  {
    "_id": "633000d1e2317e7e1799ca72",
    "title": "Blue Kantha Stitch Hand Embroidered Tussar Silk Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664089968158.jpeg"
      }
    ]
  },
  {
    "_id": "6330013ce2317e7e1799caaf",
    "title": "Black motif print half shirt",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090329532.jpeg"
      }
    ]
  },
  {
    "_id": "633002a4e2317e7e1799cae0",
    "title": "Craftsman Deep Burned Perfection Clay Handi/Pot with Lid for Cooking and serving (KM10BL)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090566910.png"
      }
    ]
  },
  {
    "_id": "633002abe2317e7e1799cafb",
    "title": "Emerald Blazer & Pants set",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090621357.jpeg"
      }
    ]
  },
  {
    "_id": "63300338e2317e7e1799cb3a",
    "title": "White Madhubani Painted Linen Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090732863.jpeg"
      }
    ]
  },
  {
    "_id": "633003d1e2317e7e1799cb55",
    "title": "Ottoman Islamic Yemen Silver inlay Arabian Jambiya Dagger Koftgari worked",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090929155.png"
      }
    ]
  },
  {
    "_id": "633003d1e2317e7e1799cb61",
    "title": "White & Blue Shibori Tie and Dye Cover-up Set",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664090908753.jpeg"
      }
    ]
  },
  {
    "_id": "63300478e2317e7e1799cbbe",
    "title": "White Madhubani Shibori Tie & Dye Linen Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091082595.jpeg"
      }
    ]
  },
  {
    "_id": "6330054be2317e7e1799cbf7",
    "title": "Indigo Block Printed Midi",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091301020.jpeg"
      }
    ]
  },
  {
    "_id": "63300653e2317e7e1799cc42",
    "title": "Pink Bandhani Poncho",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091551539.jpeg"
      }
    ]
  },
  {
    "_id": "63300664e2317e7e1799cc86",
    "title": "Natural Frankincense Resin Sticks",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091535736.jpeg"
      }
    ]
  },
  {
    "_id": "633007b2e2317e7e1799cc98",
    "title": "Purple Shibori Linen Madhubani Hand-painted Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091910062.jpeg"
      }
    ]
  },
  {
    "_id": "633007e0e2317e7e1799cca9",
    "title": "Cotton Red&Blue Embroidered Kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091796906.png"
      }
    ]
  },
  {
    "_id": "63300807e2317e7e1799ccbd",
    "title": "Handmade Ayurvedic Neem Comb: Great for Hair Salons",
    "categoryId": "6333f55d98cf637e0b759d3d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664091890154.jpeg"
      }
    ]
  },
  {
    "_id": "6330089ae2317e7e1799ccea",
    "title": "Tussar Silk Hand painted Madhubani Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092182969.jpeg"
      }
    ]
  },
  {
    "_id": "6330099ee2317e7e1799cd06",
    "title": "Kavia Bohemian Peasant Wood Block Printed dress - Hazel wood",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092275051.jpeg"
      }
    ]
  },
  {
    "_id": "633009a0e2317e7e1799cd24",
    "title": "Fernweh Kilim Bohemian Tote",
    "categoryId": "6333f56998cf637e0b759d3f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092455502.jpeg"
      }
    ]
  },
  {
    "_id": "633009e0e2317e7e1799cd48",
    "title": "Blue Ajrakh Linen Hand Block Printed Saree",
    "categoryId": "6333f89e98cf637e0b759d69",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092396645.jpeg"
      }
    ]
  },
  {
    "_id": "63300aa9e2317e7e1799cd63",
    "title": "Floral Linen Handpainted Madhubani Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092697998.jpeg"
      }
    ]
  },
  {
    "_id": "63300aade2317e7e1799cd6c",
    "title": "Niko Patina Earrings\n",
    "categoryId": "6333f5b198cf637e0b759d46",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092716750.jpeg"
      }
    ]
  },
  {
    "_id": "63300bcfe2317e7e1799cdb4",
    "title": "Madhubani Hand-painted Cotton Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092965571.jpeg"
      }
    ]
  },
  {
    "_id": "63300c00e2317e7e1799cdc3",
    "title": "Block printed Rumi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664092968843.jpeg"
      }
    ]
  },
  {
    "_id": "63300c6be2317e7e1799ce18",
    "title": "Lapis Blue Quilted Block Print Jacket",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093019050.jpeg"
      }
    ]
  },
  {
    "_id": "63300c80e2317e7e1799ce42",
    "title": "Madhubani Hand-painted Tussar Silk Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093192155.jpeg"
      }
    ]
  },
  {
    "_id": "63300c91e2317e7e1799ce53",
    "title": "Jute Pink Embroidered Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093021970.png"
      }
    ]
  },
  {
    "_id": "63300dcae2317e7e1799ce89",
    "title": "Isra Block printed Top-Mustard",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093425419.jpeg"
      }
    ]
  },
  {
    "_id": "63300ef1e2317e7e1799cea9",
    "title": "Red Kantha Stitch Hand Embroidered Tussar Silk Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093809726.jpeg"
      }
    ]
  },
  {
    "_id": "63300f75e2317e7e1799ceca",
    "title": "Isra Block Printed Top-Teal",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/striped.png"
      }
    ]
  },
  {
    "_id": "63300faae2317e7e1799cee0",
    "title": "Isra Block printed Top - Tea rose",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664094005442.jpeg"
      }
    ]
  },
  {
    "_id": "633011b4e2317e7e1799cf31",
    "title": "Spark Scented Candle",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664094330207.jpeg"
      }
    ]
  },
  {
    "_id": "633011ffe2317e7e1799cf6b",
    "title": "Shot Scented Candle",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664094381432.jpeg"
      }
    ]
  },
  {
    "_id": "63301319e2317e7e1799cf90",
    "title": "Wingleaf Bracelet",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664094183620.jpeg"
      }
    ]
  },
  {
    "_id": "63301919e2317e7e1799cfc7",
    "title": "Silk Moss Green embroidered top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664096195352.png"
      }
    ]
  },
  {
    "_id": "63301d6ee2317e7e1799cff4",
    "title": "Jacquard Rose Embroidered shirt",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664097415131.png"
      }
    ]
  },
  {
    "_id": "63302815e2317e7e1799d024",
    "title": "Soapberry Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664095292020.jpeg"
      }
    ]
  },
  {
    "_id": "633028b2e2317e7e1799d033",
    "title": "Daisy Valley Vest",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664100019055.png"
      }
    ]
  },
  {
    "_id": "63302a96e2317e7e1799d04f",
    "title": "Walnut Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664100464521.jpeg"
      }
    ]
  },
  {
    "_id": "63302c3be2317e7e1799d06a",
    "title": "Berry Loop",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664101094218.jpeg"
      }
    ]
  },
  {
    "_id": "63302c84e2317e7e1799d07b",
    "title": "Buttercup Wide Leg Pants",
    "categoryId": "6333f8b598cf637e0b759d6d",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664100693378.png"
      }
    ]
  },
  {
    "_id": "63302e1fe2317e7e1799d098",
    "title": "Acacia Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664101599947.jpeg"
      }
    ]
  },
  {
    "_id": "63303043e2317e7e1799d0a9",
    "title": "Bubble Bush Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664102032662.jpeg"
      }
    ]
  },
  {
    "_id": "6330339de2317e7e1799d0d6",
    "title": "Pine Bracelet",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664102848151.jpeg"
      }
    ]
  },
  {
    "_id": "633035a4e2317e7e1799d0e2",
    "title": "Star Studs",
    "categoryId": "6333f5b198cf637e0b759d46",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664103392850.jpeg"
      }
    ]
  },
  {
    "_id": "633037bde2317e7e1799d119",
    "title": "Butterfly Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664104004559.jpeg"
      }
    ]
  },
  {
    "_id": "63303986e2317e7e1799d12a",
    "title": "Bora Flower Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664104506209.jpeg"
      }
    ]
  },
  {
    "_id": "63303b1be2317e7e1799d139",
    "title": "Lucky Bean Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664104969805.jpeg"
      }
    ]
  },
  {
    "_id": "63303c7ce2317e7e1799d14c",
    "title": "Cardamom Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664105331851.jpeg"
      }
    ]
  },
  {
    "_id": "63303e18e2317e7e1799d15b",
    "title": "All spice chain",
    "categoryId": "6333f58798cf637e0b759d42",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664105732885.jpeg"
      }
    ]
  },
  {
    "_id": "63303f32e2317e7e1799d16c",
    "title": "Black Pepper Hoops",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664106151567.jpeg"
      }
    ]
  },
  {
    "_id": "633040d3e2317e7e1799d18b",
    "title": "All Spice Bracelet",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664106497202.jpeg"
      }
    ]
  },
  {
    "_id": "63304204e2317e7e1799d197",
    "title": "Spicy Pearl Loop",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664106766921.jpeg"
      }
    ]
  },
  {
    "_id": "6330556ee2317e7e1799d1b4",
    "title": "Spanish Cherry Bracelet",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664111654464.jpeg"
      }
    ]
  },
  {
    "_id": "63305688e2317e7e1799d1ca",
    "title": "Pomegranate Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664112211124.jpeg"
      }
    ]
  },
  {
    "_id": "63312d07e2317e7e1799d233",
    "title": "Fruit Round Cane Basket",
    "categoryId": "6333f50498cf637e0b759d37",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664166090059.jpeg"
      }
    ]
  },
  {
    "_id": "63312db8e2317e7e1799d24b",
    "title": "Mint on a Petal Earrings",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664166186324.jpeg"
      }
    ]
  },
  {
    "_id": "63313123e2317e7e1799d26f",
    "title": "Statement Drop Earring",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664167389616.jpeg"
      }
    ]
  },
  {
    "_id": "63313283e2317e7e1799d285",
    "title": "Branch of Love Earrings",
    "categoryId": "6333f5b198cf637e0b759d46",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664168294248.jpeg"
      }
    ]
  },
  {
    "_id": "6331348fe2317e7e1799d291",
    "title": "My Moon & Stone Neckpiece",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664168603068.jpeg"
      }
    ]
  },
  {
    "_id": "63313743e2317e7e1799d299",
    "title": "Ivory Patchwork Shirt",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664093615509.png"
      }
    ]
  },
  {
    "_id": "6331399be2317e7e1799d2aa",
    "title": "Anar print wrap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664169153397.jpeg"
      }
    ]
  },
  {
    "_id": "63313fdae2317e7e1799d2e5",
    "title": "Black-Blue Tie-Dye Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664171008964.jpeg"
      }
    ]
  },
  {
    "_id": "63314187e2317e7e1799d319",
    "title": "Hot PinkTie Dye Knot Up Set",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664172062901.jpeg"
      }
    ]
  },
  {
    "_id": "6331436ae2317e7e1799d339",
    "title": "Green Tie back Tye Dye Jumpsuit",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664172447087.jpeg"
      }
    ]
  },
  {
    "_id": "63314567e2317e7e1799d359",
    "title": "Round Cane Table Mat",
    "categoryId": "6333f51398cf637e0b759d39",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664172164480.jpeg"
      }
    ]
  },
  {
    "_id": "63314588e2317e7e1799d38a",
    "title": "Blue Lagoon Coordinate",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664172939294.jpeg"
      }
    ]
  },
  {
    "_id": "63314838e2317e7e1799d3b2",
    "title": "Mandarin Collared Jungle Shirt",
    "categoryId": "6333f8da98cf637e0b759d71",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664173555694.png"
      }
    ]
  },
  {
    "_id": "63314907e2317e7e1799d3bc",
    "title": "Stripped Organic Cotton Cushion cover (14\" x 35\")",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664173675728.jpeg"
      }
    ]
  },
  {
    "_id": "63314bace2317e7e1799d3e9",
    "title": "Stripped Organic Cotton Cushion cover with Fringes (12\" x 20\")",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664174662577.jpeg"
      }
    ]
  },
  {
    "_id": "63315455e2317e7e1799d411",
    "title": "Indigo Blue Sabai Planter",
    "categoryId": "632aed6ed8aef607db2ab4d3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664176794224.jpeg"
      }
    ]
  },
  {
    "_id": "633156d3e2317e7e1799d421",
    "title": "Desert Sand Dinner Plates Set of 4",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664177343769.jpeg"
      }
    ]
  },
  {
    "_id": "633157b4e2317e7e1799d42f",
    "title": "Red Madhurkathi Table Runner",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664177298626.jpeg"
      }
    ]
  },
  {
    "_id": "63315850e2317e7e1799d439",
    "title": "Coaster Round Wooden Handcrafted with Tribal Art (Set of 4)",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664177935370.jpeg"
      }
    ]
  },
  {
    "_id": "63315960e2317e7e1799d459",
    "title": "Coaster Mangowood Handcrafted with Madhubani Art (Set of 4)",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664178308452.jpeg"
      }
    ]
  },
  {
    "_id": "63315a1de2317e7e1799d467",
    "title": "Silk Embroidered Tent Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664178402543.png"
      }
    ]
  },
  {
    "_id": "63315adce2317e7e1799d487",
    "title": "Desert Sand Sweet Bowls set of 4",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664178584280.jpeg"
      }
    ]
  },
  {
    "_id": "63315c32e2317e7e1799d49b",
    "title": "Woven Storage Basket- Single Piece",
    "categoryId": "632aee97d8aef607db2ab4f8",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664178484977.jpeg"
      }
    ]
  },
  {
    "_id": "63315c48e2317e7e1799d4a3",
    "title": "Cotton flower Embroidered kurta",
    "categoryId": "6333f88e98cf637e0b759d67",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179009354.png"
      }
    ]
  },
  {
    "_id": "63315c61e2317e7e1799d4ab",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-22â€³ x W- 14â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664175171895.png"
      }
    ]
  },
  {
    "_id": "63315db8e2317e7e1799d4bb",
    "title": "Jute Silk Pink embroidered dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179367139.png"
      }
    ]
  },
  {
    "_id": "63315e10e2317e7e1799d4ca",
    "title": "Wheels Of Joy Placemat- set of 2",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179331693.jpeg"
      }
    ]
  },
  {
    "_id": "63315e5de2317e7e1799d4d2",
    "title": "Floral Cane Basket",
    "categoryId": "6333f50498cf637e0b759d37",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179623159.jpeg"
      }
    ]
  },
  {
    "_id": "63315ed2e2317e7e1799d4e4",
    "title": "Jute Red Flower Embroidered Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179724823.jpeg"
      }
    ]
  },
  {
    "_id": "63315f75e2317e7e1799d528",
    "title": "Sunbeams Mirror",
    "categoryId": "632aed7ed8aef607db2ab4d6",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179749207.jpeg"
      }
    ]
  },
  {
    "_id": "6331603ae2317e7e1799d53e",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-20â€³ x W- 20â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664179914113.jpeg"
      }
    ]
  },
  {
    "_id": "6331607ee2317e7e1799d54a",
    "title": "Indigo Patchwork Top (ix)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180134979.png"
      }
    ]
  },
  {
    "_id": "63316192e2317e7e1799d557",
    "title": "Sabai Indigo Laundry Basket",
    "categoryId": "632aee97d8aef607db2ab4f8",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180619199.jpeg"
      }
    ]
  },
  {
    "_id": "633161bbe2317e7e1799d55d",
    "title": "Indigo Patchwork Top (viii)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180497520.png"
      }
    ]
  },
  {
    "_id": "63316281e2317e7e1799d565",
    "title": "Kauna Basket with Cane Handles",
    "categoryId": "632aee97d8aef607db2ab4f8",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180645896.jpeg"
      }
    ]
  },
  {
    "_id": "633162e3e2317e7e1799d56f",
    "title": "Indigo Patchwork Top (vii)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180958148.png"
      }
    ]
  },
  {
    "_id": "633163ece2317e7e1799d577",
    "title": "Diagonal Pattern Yoga Mat- Banana Fiber ",
    "categoryId": "632d39c49c94a11363ed9bc5",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180888540.jpeg"
      }
    ]
  },
  {
    "_id": "63316417e2317e7e1799d57d",
    "title": "Indigo Patchwork Top (vi)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181148761.png"
      }
    ]
  },
  {
    "_id": "633164e9e2317e7e1799d585",
    "title": "Indigo Patchwork Top (v)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181341069.png"
      }
    ]
  },
  {
    "_id": "633164f9e2317e7e1799d592",
    "title": "Off-White Antique Organic Cotton Throw ( L-120cm x W- 170)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664180695597.jpeg"
      }
    ]
  },
  {
    "_id": "63316528e2317e7e1799d5a2",
    "title": "Chakra Date Palm Storage Basket",
    "categoryId": "632aee97d8aef607db2ab4f8",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181244832.png"
      }
    ]
  },
  {
    "_id": "633165efe2317e7e1799d5ac",
    "title": "Desert Sand Dinner Set of 4 Plates, 2 Serving Bowl and 4 Sweet Bowls",
    "categoryId": "632aeeb3d8aef607db2ab4fc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181525708.jpeg"
      }
    ]
  },
  {
    "_id": "63316624e2317e7e1799d5cb",
    "title": "Indigo Patchwork Top (iv)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181603728.png"
      }
    ]
  },
  {
    "_id": "633166d0e2317e7e1799d5e4",
    "title": "Kauna Straw Hobo Crescent Bag",
    "categoryId": "6326d7ce7bcf5275590a073a",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181667807.jpeg"
      }
    ]
  },
  {
    "_id": "6331674be2317e7e1799d612",
    "title": "Bookend Handcrafted Wooden Owl (Set of 2)",
    "categoryId": "632aeda8d8aef607db2ab4dc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181885668.jpeg"
      }
    ]
  },
  {
    "_id": "63316795e2317e7e1799d622",
    "title": "Indigo Patchwork Top (iii)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/webp",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664182101736.webp"
      }
    ]
  },
  {
    "_id": "633167f6e2317e7e1799d62c",
    "title": "Stone Tea Light Holder",
    "categoryId": "6333f6f598cf637e0b759d4f",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664181940495.png"
      }
    ]
  },
  {
    "_id": "63316908e2317e7e1799d671",
    "title": "Indigo Patchwork Top (i)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664182411493.png"
      }
    ]
  },
  {
    "_id": "633169dde2317e7e1799d680",
    "title": "Indigo Patchwork Top (ii)",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664182607672.png"
      }
    ]
  },
  {
    "_id": "63316aa4e2317e7e1799d68d",
    "title": "Hemp Scrunchies",
    "categoryId": "6333f55d98cf637e0b759d3d",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664182501070.png"
      }
    ]
  },
  {
    "_id": "63316ad9e2317e7e1799d6bc",
    "title": "Black Polka Dot Embroidered Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664182823840.png"
      }
    ]
  },
  {
    "_id": "63316f0ae2317e7e1799d707",
    "title": "Round Candie Cane Basket, Set of 2",
    "categoryId": "6333f50498cf637e0b759d37",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664183745142.png"
      }
    ]
  },
  {
    "_id": "63316f27e2317e7e1799d72b",
    "title": "Hemp Hairband",
    "categoryId": "632d36d09c94a11363ed9bb8",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664183197874.png"
      }
    ]
  },
  {
    "_id": "63316f2ae2317e7e1799d756",
    "title": "Teakwood Mirror in Walnut Finish (20x2x30)",
    "categoryId": "632aed7ed8aef607db2ab4d6",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664183877676.jpeg"
      }
    ]
  },
  {
    "_id": "63317047e2317e7e1799d785",
    "title": "Teakwood Mirror in Teak Finish ",
    "categoryId": "632aed7ed8aef607db2ab4d6",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184166950.jpeg"
      }
    ]
  },
  {
    "_id": "633170ebe2317e7e1799d796",
    "title": "Craftsman Deep Burned Perfection Clay Handi/Pot for Cooking and serving(KM)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184245454.png"
      }
    ]
  },
  {
    "_id": "63317122e2317e7e1799d7af",
    "title": "Teakwood Mirror in Walnut Finish adorned with Brass Frames",
    "categoryId": "632aed7ed8aef607db2ab4d6",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184450203.jpeg"
      }
    ]
  },
  {
    "_id": "6331715de2317e7e1799d7b7",
    "title": "Grey Pampas Grass- 5 stems, TALL PAMPAS GRASS | Grand Sale | Dry Flora",
    "categoryId": "6333f70d98cf637e0b759d53",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184251678.png"
      }
    ]
  },
  {
    "_id": "633171fd1f854fc2b182918f",
    "title": "Banyan Gender Fluid Jacket - Black",
    "categoryId": "6333f81098cf637e0b759d62",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184449497.png"
      }
    ]
  },
  {
    "_id": "6331723e1f854fc2b18291a9",
    "title": "Craftsman Traditional Clay Handi for Cooking and serving Combo 1,2 & 3Liter(MCH 123R)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184656993.png"
      }
    ]
  },
  {
    "_id": "633173541f854fc2b18291bd",
    "title": "Vanchai | Fluffy Pampas Grass | 55cm Natural Colour | 10 Stems | Dried Flowers",
    "categoryId": "6333f70d98cf637e0b759d53",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184887673.png"
      }
    ]
  },
  {
    "_id": "633173c91f854fc2b18291eb",
    "title": "Craftsman Deep Burned Perfection Clay Handi/Pot for Cooking and serving (KM12 2B)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185151471.png"
      }
    ]
  },
  {
    "_id": "633173d71f854fc2b18291f9",
    "title": "Earth Classic Kurta - Beige",
    "categoryId": "6333f99498cf637e0b759d76",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664184917768.png"
      }
    ]
  },
  {
    "_id": "633174761f854fc2b1829218",
    "title": "Off White Natural Pampas - 5 stems",
    "categoryId": "6333f70d98cf637e0b759d53",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185246788.png"
      }
    ]
  },
  {
    "_id": "633174d81f854fc2b182923c",
    "title": "Hancarved Elephants In Jade Stone (Set of 2)",
    "categoryId": "632aeda8d8aef607db2ab4dc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185224362.jpeg"
      }
    ]
  },
  {
    "_id": "633175021f854fc2b182924c",
    "title": "Craftsman Deep Burned Clay Tawa/Pan for Cooking and Serving (FACB)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185419120.png"
      }
    ]
  },
  {
    "_id": "633175901f854fc2b182925a",
    "title": "Baobab Bomber Shirt - Sage Green",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185383259.png"
      }
    ]
  },
  {
    "_id": "6331762d1f854fc2b1829289",
    "title": "Neutral Rust tone Bridal Bouquet/ Bride and Bridesmaid bouquet",
    "categoryId": "6333f70d98cf637e0b759d53",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185510676.png"
      }
    ]
  },
  {
    "_id": "6331777c1f854fc2b18292a3",
    "title": "Palm Resort Collar Shirt - Blue Melange",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664185955496.png"
      }
    ]
  },
  {
    "_id": "633177a51f854fc2b18292b3",
    "title": "Craftsman Deep Burned Clay Kadai for Cooking and Serving 1 Liter(ACB)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186270281.png"
      }
    ]
  },
  {
    "_id": "633177a51f854fc2b18292bd",
    "title": "Jute Embellished Brown Earthen Planter on a Round Wall Hook",
    "categoryId": "632aed6ed8aef607db2ab4d3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186045825.jpeg"
      }
    ]
  },
  {
    "_id": "6331786d1f854fc2b18292d5",
    "title": "Ajrak Handcrafted Organic Cotton Cushion cover (12\" x 24\")",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186083098.png"
      }
    ]
  },
  {
    "_id": "633178e31f854fc2b18292e1",
    "title": "Blue Pig Earthen Planter on a Round Wall Hook",
    "categoryId": "632aed6ed8aef607db2ab4d3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186359943.jpeg"
      }
    ]
  },
  {
    "_id": "633179751f854fc2b18292ed",
    "title": "Palm Resort Collar Shirt - White",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186413623.png"
      }
    ]
  },
  {
    "_id": "633179c61f854fc2b182930c",
    "title": "Blue Hanging Planter",
    "categoryId": "632aed6ed8aef607db2ab4d3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186676070.jpeg"
      }
    ]
  },
  {
    "_id": "63317ab91f854fc2b182931a",
    "title": "Craftsman Deep Burned Clay Handi/Pot With Handle for Cooking and serving(BH)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186941494.png"
      }
    ]
  },
  {
    "_id": "63317b041f854fc2b1829332",
    "title": "Celebrated Ceramics Planter Bottles",
    "categoryId": "632aed6ed8aef607db2ab4d3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186866611.jpeg"
      }
    ]
  },
  {
    "_id": "63317b231f854fc2b1829348",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-16â€³ x W- 16â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186849472.png"
      }
    ]
  },
  {
    "_id": "63317b3c1f854fc2b1829366",
    "title": "Cypress Colour Blocked Shirt - Sage Green",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664186902978.png"
      }
    ]
  },
  {
    "_id": "63317b891f854fc2b182938d",
    "title": "Craftsman Deep Burned Clay Biryani Handi/Pot for Cooking and Serving(BP B)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187152613.png"
      }
    ]
  },
  {
    "_id": "63317c4b1f854fc2b18293a6",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-22â€³ x W- 22â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187262260.png"
      }
    ]
  },
  {
    "_id": "63317c7d1f854fc2b18293b2",
    "title": "Craftsman Clay Handi/Pot for Cooking and serving Combo 1, 2 & 3 Liter(MC 123R)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187450684.png"
      }
    ]
  },
  {
    "_id": "63317dc71f854fc2b18293ce",
    "title": "Off-White Antique Organic Cotton Cushion Cover ( L-20â€³ x W- 12â€³)",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187677468.png"
      }
    ]
  },
  {
    "_id": "63317dee1f854fc2b18293da",
    "title": "Craftsman Clay Handi/Pot for Cooking and serving Combo 1 & 2 Liter(MC2R KC1R)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187794228.png"
      }
    ]
  },
  {
    "_id": "63317eed1f854fc2b18293ec",
    "title": "Love Birds Wall Clock",
    "categoryId": "6333f71298cf637e0b759d54",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187255107.jpeg"
      }
    ]
  },
  {
    "_id": "63317fb21f854fc2b18293fe",
    "title": "Baobab Bomber Shirt - White",
    "categoryId": "6333f99998cf637e0b759d77",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664187941990.jpeg"
      }
    ]
  },
  {
    "_id": "63317ff01f854fc2b182941d",
    "title": "Craftsman Clay Tawa/Pan for Cooking and Serving(FACR)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664188393801.png"
      }
    ]
  },
  {
    "_id": "633180651f854fc2b1829433",
    "title": "Handcrafted Kitty Kat Bookend in Rosewood",
    "categoryId": "632aeda8d8aef607db2ab4dc",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664188315149.jpeg"
      }
    ]
  },
  {
    "_id": "633180c01f854fc2b1829443",
    "title": "Craftsman Clay Kadai for Cooking and Serving 1 Liter(ACR)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664188540093.png"
      }
    ]
  },
  {
    "_id": "633181ee1f854fc2b1829451",
    "title": "3 Star Chandelier with Dome Shaped Metal Hanging Lamps",
    "categoryId": "632aee72d8aef607db2ab4f3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664188576129.jpeg"
      }
    ]
  },
  {
    "_id": "633182dc1f854fc2b182945f",
    "title": "3 Moon Chandelier With Metal Hanging Lamps In Simmering Gold",
    "categoryId": "632aee72d8aef607db2ab4f3",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664188992114.jpeg"
      }
    ]
  },
  {
    "_id": "6331838d1f854fc2b182948d",
    "title": "Handcrafted Evil -Eye Wall Lamp",
    "categoryId": "632aee7dd8aef607db2ab4f5",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189227263.jpeg"
      }
    ]
  },
  {
    "_id": "633184491f854fc2b182949d",
    "title": "Gilded Gold Table Lamp",
    "categoryId": "632aee77d8aef607db2ab4f4",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189399511.jpeg"
      }
    ]
  },
  {
    "_id": "6331845b1f854fc2b18294ab",
    "title": "Craftsman Clay Handi/Pot for Cooking and serving",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189055870.png"
      }
    ]
  },
  {
    "_id": "633185411f854fc2b18294c4",
    "title": "Craftsman Deep Burned Perfection Clay Handi/Pot for Cooking and serving (KM 10B)",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189621084.png"
      }
    ]
  },
  {
    "_id": "633185e11f854fc2b18294e4",
    "title": "Dancing Peacock Table Lamp",
    "categoryId": "6333f6f598cf637e0b759d4f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189570644.jpeg"
      }
    ]
  },
  {
    "_id": "633186af1f854fc2b1829512",
    "title": "Blue Maroon Fabric Pendant",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189779881.jpeg"
      }
    ]
  },
  {
    "_id": "633186d91f854fc2b182951f",
    "title": "Birds in Tree Pillar Table Lamp",
    "categoryId": "6333f6f598cf637e0b759d4f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664189973349.jpeg"
      }
    ]
  },
  {
    "_id": "6331884f1f854fc2b1829533",
    "title": "Wall Clock Handcrafted Wooden Tribal Art with Fish Motif ",
    "categoryId": "6333f71298cf637e0b759d54",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190375686.jpeg"
      }
    ]
  },
  {
    "_id": "633189291f854fc2b1829545",
    "title": "Wall Clock Handcrafted Wooden Log Dial",
    "categoryId": "6333f71298cf637e0b759d54",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190612764.jpeg"
      }
    ]
  },
  {
    "_id": "633189dd1f854fc2b182955a",
    "title": "Tranquil Eyes Wall Clock",
    "categoryId": "6333f71298cf637e0b759d54",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190809484.jpeg"
      }
    ]
  },
  {
    "_id": "63318a731f854fc2b1829566",
    "title": "Serene Eyes Wall Clock",
    "categoryId": "6333f71298cf637e0b759d54",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664191002370.jpeg"
      }
    ]
  },
  {
    "_id": "63318a8f1f854fc2b1829572",
    "title": "LINKED ZODIAC RINGS FOR MEN AND WOMEN",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190440587.jpeg"
      }
    ]
  },
  {
    "_id": "63318c6b1f854fc2b18295a1",
    "title": "ARIES ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664191261762.jpeg"
      }
    ]
  },
  {
    "_id": "63318e571f854fc2b18295aa",
    "title": "Kantha Scarf",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190213032.jpeg"
      }
    ]
  },
  {
    "_id": "63318e5f1f854fc2b18295b2",
    "title": "Sky Corset",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664191642818.png"
      }
    ]
  },
  {
    "_id": "63318eb31f854fc2b18295cd",
    "title": "Peek-a-Boo Wrap Jamdani Set",
    "categoryId": "6331895297745ba940c24e59",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664190867576.png"
      }
    ]
  },
  {
    "_id": "6331913f1f854fc2b182961a",
    "title": "Soak Drawstring Baby/Toddler Shirt",
    "categoryId": "632721d7ac7f0bb67a21263e",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664192409375.png"
      }
    ]
  },
  {
    "_id": "6331927a1f854fc2b182963c",
    "title": "Cream Flared Cotton Dress with Tie-ups.",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664192756867.jpeg"
      }
    ]
  },
  {
    "_id": "633194251f854fc2b1829665",
    "title": "Maroon Checkered Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664193336154.jpeg"
      }
    ]
  },
  {
    "_id": "633194861f854fc2b1829678",
    "title": "Indigene Everyday Shirt & Pant Set",
    "categoryId": "6331895297745ba940c24e59",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664193075245.png"
      }
    ]
  },
  {
    "_id": "6331959e1f854fc2b182969d",
    "title": "Navy Blue V-neck Cotton dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664193727202.jpeg"
      }
    ]
  },
  {
    "_id": "633196eb1f854fc2b18296bf",
    "title": "Flutter Blobs Drawstring Baby/Toddler Shirt",
    "categoryId": "632d39929c94a11363ed9bc1",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194268903.png"
      }
    ]
  },
  {
    "_id": "633197291f854fc2b18296dd",
    "title": "Off white and blue checkered cotton dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194192702.jpeg"
      }
    ]
  },
  {
    "_id": "6331980a1f854fc2b1829700",
    "title": "Dark Pink Checkered Cotton Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194466978.jpeg"
      }
    ]
  },
  {
    "_id": "633198ec1f854fc2b1829712",
    "title": "Indigo Harmony Raglan T-shirt",
    "categoryId": "632d39929c94a11363ed9bc1",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194359257.png"
      }
    ]
  },
  {
    "_id": "633199b61f854fc2b182972d",
    "title": "Cay Top",
    "categoryId": "6333f8da98cf637e0b759d71",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194704480.png"
      }
    ]
  },
  {
    "_id": "63319a0a1f854fc2b182974b",
    "title": "Beige-White Striped Co-ord Set",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194999496.jpeg"
      }
    ]
  },
  {
    "_id": "63319ad51f854fc2b182976d",
    "title": "Soak Summer Baby Jhabla Wrap",
    "categoryId": "632d39929c94a11363ed9bc1",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664194979565.png"
      }
    ]
  },
  {
    "_id": "63319b671f854fc2b182978e",
    "title": "Deep Green Striped Co-ord Set",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664195415635.jpeg"
      }
    ]
  },
  {
    "_id": "63319b791f854fc2b182979c",
    "title": "Buttercup Wrap Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664195102665.png"
      }
    ]
  },
  {
    "_id": "63319d491f854fc2b18297d0",
    "title": "Cottage Checks Bodycon Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664195555647.png"
      }
    ]
  },
  {
    "_id": "63319e241f854fc2b18297f6",
    "title": "White Striped Checkered Shirt",
    "categoryId": "6333f8a498cf637e0b759d6a",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196115160.jpeg"
      }
    ]
  },
  {
    "_id": "63319ea61f854fc2b1829817",
    "title": "Buttercup Bralette",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196044416.png"
      }
    ]
  },
  {
    "_id": "63319ef51f854fc2b1829834",
    "title": "Sunshine Yellow Reversible Baby Jhabla Wrap",
    "categoryId": "632d39929c94a11363ed9bc1",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664195456715.png"
      }
    ]
  },
  {
    "_id": "6331a0061f854fc2b1829851",
    "title": "Sky Shirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196347951.png"
      }
    ]
  },
  {
    "_id": "6331a0731f854fc2b1829872",
    "title": "Teal Cotton Kurta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196570660.jpeg"
      }
    ]
  },
  {
    "_id": "6331a0771f854fc2b1829889",
    "title": "TAURUS ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196191666.jpeg"
      }
    ]
  },
  {
    "_id": "6331a1451f854fc2b1829899",
    "title": "Buttercup Resort Shirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196707692.png"
      }
    ]
  },
  {
    "_id": "6331a2401f854fc2b18298b8",
    "title": "Sunshine Resort Shirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197009897.png"
      }
    ]
  },
  {
    "_id": "6331a2841f854fc2b18298e7",
    "title": "Embryo Daywear Baby Jhabla",
    "categoryId": "632d39929c94a11363ed9bc1",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196742960.png"
      }
    ]
  },
  {
    "_id": "6331a28f1f854fc2b1829908",
    "title": "GEMINI ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664196900253.jpeg"
      }
    ]
  },
  {
    "_id": "6331a32c1f854fc2b182991a",
    "title": "Maroon Cotton Kurta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197368561.jpeg"
      }
    ]
  },
  {
    "_id": "6331a4111f854fc2b1829944",
    "title": "Meadow Wrap Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197273123.png"
      }
    ]
  },
  {
    "_id": "6331a4911f854fc2b1829965",
    "title": "CANCER ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197331125.jpeg"
      }
    ]
  },
  {
    "_id": "6331a5121f854fc2b182997b",
    "title": "Brown Cotton Kurta Set",
    "categoryId": "6333f8cc98cf637e0b759d6f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197778272.jpeg"
      }
    ]
  },
  {
    "_id": "6331a5541f854fc2b182999c",
    "title": "Pansy Mock Neck Top",
    "categoryId": "6333f8da98cf637e0b759d71",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197709095.png"
      }
    ]
  },
  {
    "_id": "6331a5b21f854fc2b18299bb",
    "title": "Red Chikankari Linen Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197901175.jpeg"
      }
    ]
  },
  {
    "_id": "6331a5c81f854fc2b18299ce",
    "title": "LEO ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197828320.jpeg"
      }
    ]
  },
  {
    "_id": "6331a6261f854fc2b18299da",
    "title": "Humming Dots Bodysuit",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664197821049.png"
      }
    ]
  },
  {
    "_id": "6331a6341f854fc2b18299fb",
    "title": "Dusty pink Cotton Jumpsuit",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198076691.jpeg"
      }
    ]
  },
  {
    "_id": "6331a68e1f854fc2b1829a1e",
    "title": "Cottage Checks Co-ord",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198032746.png"
      }
    ]
  },
  {
    "_id": "6331a6a51f854fc2b1829a39",
    "title": "Dark Rose Chikankari Yoke Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198164657.jpeg"
      }
    ]
  },
  {
    "_id": "6331a6fd1f854fc2b1829a55",
    "title": "VIRGO ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198143161.jpeg"
      }
    ]
  },
  {
    "_id": "6331a7121f854fc2b1829a5d",
    "title": "Applique Stole with Kantha",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198311448.jpeg"
      }
    ]
  },
  {
    "_id": "6331a7991f854fc2b1829a6a",
    "title": "Blush hand embroidered kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198419145.jpeg"
      }
    ]
  },
  {
    "_id": "6331a7f21f854fc2b1829a86",
    "title": "Sky 3 pc Co-ord",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198327718.png"
      }
    ]
  },
  {
    "_id": "6331a87f1f854fc2b1829aaf",
    "title": "CAPRICORN ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198776608.jpeg"
      }
    ]
  },
  {
    "_id": "6331a8e41f854fc2b1829ab7",
    "title": "White Chikankari Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198746467.jpeg"
      }
    ]
  },
  {
    "_id": "6331a9951f854fc2b1829ad3",
    "title": "Begum chanderi kurta with chikankari",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198961489.jpeg"
      }
    ]
  },
  {
    "_id": "6331aa101f854fc2b1829aed",
    "title": "Green Chikankari Stripe Stole",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198985827.jpeg"
      }
    ]
  },
  {
    "_id": "6331aa111f854fc2b1829afc",
    "title": "AQUARIUS ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198928252.jpeg"
      }
    ]
  },
  {
    "_id": "6331aa701f854fc2b1829b0a",
    "title": "Buttercup Overshirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198723689.png"
      }
    ]
  },
  {
    "_id": "6331aa7b1f854fc2b1829b29",
    "title": "Burgandy pure silk chikankari kurta set",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199180362.jpeg"
      }
    ]
  },
  {
    "_id": "6331aabc1f854fc2b1829b43",
    "title": "White Chikankari Dupatta",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199342679.jpeg"
      }
    ]
  },
  {
    "_id": "6331ab3e1f854fc2b1829b4d",
    "title": "Blue Relaxed chambray dress",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199360349.jpeg"
      }
    ]
  },
  {
    "_id": "6331ab801f854fc2b1829b5d",
    "title": "PISCES ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199547723.jpeg"
      }
    ]
  },
  {
    "_id": "6331ac2f1f854fc2b1829b69",
    "title": "Daisy Valley Vest & Wide Leg Pants",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199390805.png"
      }
    ]
  },
  {
    "_id": "6331ac9c1f854fc2b1829b86",
    "title": "Lavender Mulmul Kaftan",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199742597.jpeg"
      }
    ]
  },
  {
    "_id": "6331aca41f854fc2b1829b99",
    "title": "LIBRA ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199839264.jpeg"
      }
    ]
  },
  {
    "_id": "6331ad491f854fc2b1829ba7",
    "title": "Coral MULMUL Kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199947043.jpeg"
      }
    ]
  },
  {
    "_id": "6331adeb1f854fc2b1829bc6",
    "title": "Buttercup 3 pc Co-ord",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664199821418.png"
      }
    ]
  },
  {
    "_id": "6331af1f1f854fc2b1829be7",
    "title": "Pansy Co-ord",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664200219666.png"
      }
    ]
  },
  {
    "_id": "6331afab1f854fc2b1829c06",
    "title": "SCORPIO ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664200613525.jpeg"
      }
    ]
  },
  {
    "_id": "6331b0cb1f854fc2b1829c10",
    "title": "Sunshine Wrap Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664200588793.png"
      }
    ]
  },
  {
    "_id": "6331b1041f854fc2b1829c31",
    "title": "SAGITTARIUS ZODIAC CANDLE",
    "categoryId": "6333f6de98cf637e0b759d4d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664200673509.jpeg"
      }
    ]
  },
  {
    "_id": "6331c4991f854fc2b1829c5d",
    "title": "Arabian Jambiya Dagger Silver koftgari work with Bone handle",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664205671813.png"
      }
    ]
  },
  {
    "_id": "6331d1611f854fc2b1829c6d",
    "title": "Handcrafted Indian Rajput Wedding Sword with Mahroon color wedding fabric sheath 35 inches",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664208438799.png"
      }
    ]
  },
  {
    "_id": "6331d82b1f854fc2b1829c84",
    "title": "Ottoman Mughal Damascus Silver Koftgari worked dagger 12 inch elephant face",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664210835980.png"
      }
    ]
  },
  {
    "_id": "6331da121f854fc2b1829c92",
    "title": "Handcrafted decorative shield 16 inches",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664211203820.png"
      }
    ]
  },
  {
    "_id": "6331dba51f854fc2b1829c9c",
    "title": "Handcrafted decorative shield 19 inches with Arabic engraving",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664211738648.png"
      }
    ]
  },
  {
    "_id": "6331e0831f854fc2b1829ca4",
    "title": "Antique Reproduction Indian betel nut cutter/cracker Brass made Indian Sarota",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664212501420.png"
      }
    ]
  },
  {
    "_id": "6331e2c91f854fc2b1829cc0",
    "title": "Golden look Ceremonial Indian Rajput / Sikh Wedding Sword with sheath Lion carved Hilt 24 inches",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664213384251.png"
      }
    ]
  },
  {
    "_id": "6331ed9a1f854fc2b1829cec",
    "title": "Rep-tile Earrings",
    "categoryId": "6333f58198cf637e0b759d41",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664216066878.png"
      }
    ]
  },
  {
    "_id": "6331ef7c1f854fc2b1829cf6",
    "title": "Noir earrings",
    "categoryId": "6333f58198cf637e0b759d41",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664216886088.png"
      }
    ]
  },
  {
    "_id": "6331f0401f854fc2b1829d00",
    "title": "Mono Earrings",
    "categoryId": "6333f58198cf637e0b759d41",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664217014154.png"
      }
    ]
  },
  {
    "_id": "6331f1281f854fc2b1829d0a",
    "title": "Amethyst Earrings",
    "categoryId": "6333f58198cf637e0b759d41",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664217218265.png"
      }
    ]
  },
  {
    "_id": "6331f2821f854fc2b1829d22",
    "title": "Scaffolding Earrings",
    "categoryId": "6333f58198cf637e0b759d41",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664217509087.png"
      }
    ]
  },
  {
    "_id": "6331f6c01f854fc2b1829d4a",
    "title": "Echo Geisha Scarf",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664218534740.png"
      }
    ]
  },
  {
    "_id": "63323e171f854fc2b1829d7e",
    "title": "Labradorite, Aventurine and Moss Agate set in Sterling Silver 92.5% Nickel Free",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664236629297.jpeg"
      }
    ]
  },
  {
    "_id": "63323eee1f854fc2b1829d8a",
    "title": "Old Coin, Black Onyx, Pearl and Lava set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664237162181.jpeg"
      }
    ]
  },
  {
    "_id": "633240861f854fc2b1829d92",
    "title": "Green Amethyst, Moonstone, Tourmaline and Morrocan Fossilised Mud Crack set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664237332880.jpeg"
      }
    ]
  },
  {
    "_id": "633240ed1f854fc2b1829d9c",
    "title": "Rainbow Moonstone Bracelet in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664237741362.jpeg"
      }
    ]
  },
  {
    "_id": "6332426e1f854fc2b1829da4",
    "title": "Rainbow Moonstone set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664237949598.jpeg"
      }
    ]
  },
  {
    "_id": "6332440c1f854fc2b1829dc6",
    "title": "Pearl and Jasper set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664238244545.jpeg"
      }
    ]
  },
  {
    "_id": "633244fa1f854fc2b1829dd4",
    "title": "Meteorite set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664238659079.jpeg"
      }
    ]
  },
  {
    "_id": "633246141f854fc2b1829de0",
    "title": "Rough Black Tourmaline set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664238873975.jpeg"
      }
    ]
  },
  {
    "_id": "633246e51f854fc2b1829de8",
    "title": "Uncut Kynite and Meteorite set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664239170164.jpeg"
      }
    ]
  },
  {
    "_id": "633247491f854fc2b1829df6",
    "title": "Green Amethyst and Pearl set in Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664239361937.jpeg"
      }
    ]
  },
  {
    "_id": "633248391f854fc2b1829dfe",
    "title": "Pearl set in Gold Plated Textured Sterling Silver 92.5%",
    "categoryId": "6333f5a398cf637e0b759d44",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664239466908.jpeg"
      }
    ]
  },
  {
    "_id": "6332613e1f854fc2b1829e17",
    "title": "The Wishing Tree' Baby Bodysuit",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664198340957.png"
      }
    ]
  },
  {
    "_id": "633263211f854fc2b1829e37",
    "title": "EXOTIC MOODS CHARM",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664246325331.jpeg"
      }
    ]
  },
  {
    "_id": "633264351f854fc2b1829e3f",
    "title": "MODERN GLORY CHARM",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664246671030.jpeg"
      }
    ]
  },
  {
    "_id": "633267661f854fc2b1829e4f",
    "title": "BLUES OF STYLE CHARM",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664247455684.jpeg"
      }
    ]
  },
  {
    "_id": "633273351f854fc2b1829e57",
    "title": "POWER GODDESS BRACELET",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664250412503.png"
      }
    ]
  },
  {
    "_id": "6332746d1f854fc2b1829e6b",
    "title": "SILK BLOOM CUFF",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664250762658.jpeg"
      }
    ]
  },
  {
    "_id": "633275941f854fc2b1829e7a",
    "title": "SWINGING NEST BANGLE",
    "categoryId": "6333f58d98cf637e0b759d43",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664251033275.jpeg"
      }
    ]
  },
  {
    "_id": "633277ed1f854fc2b1829e8e",
    "title": "EYE PROTECT STUD EARRINGS",
    "categoryId": "6333f5b198cf637e0b759d46",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664251460562.jpeg"
      }
    ]
  },
  {
    "_id": "633278371f854fc2b1829e96",
    "title": "White Bokeh Printed Crop Top",
    "categoryId": "63272100ac7f0bb67a212634",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664247671120.jpeg"
      }
    ]
  },
  {
    "_id": "633278741f854fc2b1829ec9",
    "title": "Amethyst Pocket Square",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664251881646.png"
      }
    ]
  },
  {
    "_id": "633278a31f854fc2b1829ed5",
    "title": "CHEERY BUDS EARRINGS",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664251910233.jpeg"
      }
    ]
  },
  {
    "_id": "633279391f854fc2b1829edd",
    "title": "ORCHID TOUCH HOOPS",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252085328.jpeg"
      }
    ]
  },
  {
    "_id": "633279801f854fc2b1829ef1",
    "title": "Lanterns and Arches Pocket Square",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252109410.png"
      }
    ]
  },
  {
    "_id": "633279841f854fc2b1829efb",
    "title": "Heather Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252024528.png"
      }
    ]
  },
  {
    "_id": "633279971f854fc2b1829f28",
    "title": "Mul Cotton Saree | Ecru",
    "categoryId": "632720f1ac7f0bb67a212632",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252048172.png"
      }
    ]
  },
  {
    "_id": "633279fe1f854fc2b1829f3e",
    "title": "MAGIC MOVES HOOP EARRINGS",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252280678.jpeg"
      }
    ]
  },
  {
    "_id": "63327a531f854fc2b1829f46",
    "title": "Aztec Calcite Pocket Square",
    "categoryId": "6333f56298cf637e0b759d3e",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252370934.png"
      }
    ]
  },
  {
    "_id": "63327a601f854fc2b1829f52",
    "title": "Handwoven Mul Cotton Saree with Barati Print | Ivory",
    "categoryId": "632720f1ac7f0bb67a212632",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252344551.png"
      }
    ]
  },
  {
    "_id": "63327aaa1f854fc2b1829f68",
    "title": "Dusky Rose Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/webp",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252376117.webp"
      }
    ]
  },
  {
    "_id": "63327ad11f854fc2b1829f85",
    "title": "RESHAM EARRINGS",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252457958.jpeg"
      }
    ]
  },
  {
    "_id": "63327bae1f854fc2b1829f91",
    "title": "Vintage reproduction Brass wall hanging candle holder",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664251212200.png"
      }
    ]
  },
  {
    "_id": "63327bef1f854fc2b1829f9d",
    "title": "A TOUCH OF ROSE QUARTZ STONE GOLD NECKLACE",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252655918.jpeg"
      }
    ]
  },
  {
    "_id": "63327c621f854fc2b1829fa5",
    "title": "Earth Yellow Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/webp",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252704741.webp"
      }
    ]
  },
  {
    "_id": "63327c891f854fc2b1829fc8",
    "title": "Handwoven Mul Cotton Saree with Barati Print | Red",
    "categoryId": "632720f1ac7f0bb67a212632",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252566060.png"
      }
    ]
  },
  {
    "_id": "63327cf41f854fc2b1829fde",
    "title": "TREASURES OF THAR NECKLACE",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664252934442.jpeg"
      }
    ]
  },
  {
    "_id": "63327d9e1f854fc2b1829fe6",
    "title": "Powder Blue Cotton Silk Kurta Set",
    "categoryId": "632d39a09c94a11363ed9bc2",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253104059.jpeg"
      }
    ]
  },
  {
    "_id": "63327e191f854fc2b1829ff4",
    "title": "WEAR PRAY LOVE GREEN AMETHYST GREEN QUARTZ NECKLACE",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253192574.jpeg"
      }
    ]
  },
  {
    "_id": "63327eb31f854fc2b182a00e",
    "title": "Moss Green Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253485476.jpeg"
      }
    ]
  },
  {
    "_id": "63327f361f854fc2b182a035",
    "title": "Sage Green Block Printed Kurta Set\n\n",
    "categoryId": "632d39a09c94a11363ed9bc2",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253385697.jpeg"
      }
    ]
  },
  {
    "_id": "63327f5d1f854fc2b182a052",
    "title": "EYE CHARM LINK NECKLACE",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253547266.jpeg"
      }
    ]
  },
  {
    "_id": "633280961f854fc2b182a05a",
    "title": "Flutter Blobs Baby Bodysuit",
    "categoryId": "632d39659c94a11363ed9bc0",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253699580.png"
      }
    ]
  },
  {
    "_id": "6332809a1f854fc2b182a087",
    "title": "SKY FULL OF STARS TWO-LAYERED CZ NECKLACE",
    "categoryId": "6333f5f198cf637e0b759d49",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253897982.jpeg"
      }
    ]
  },
  {
    "_id": "633280a21f854fc2b182a091",
    "title": "White & Green Printed Slip Dress",
    "categoryId": "632720afac7f0bb67a21262d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253790820.jpeg"
      }
    ]
  },
  {
    "_id": "633281891f854fc2b182a0ac",
    "title": "BALANCING ACT STATEMENT EARRINGS",
    "categoryId": "6333f5ac98cf637e0b759d45",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254122192.jpeg"
      }
    ]
  },
  {
    "_id": "633282301f854fc2b182a0b4",
    "title": "White Printed Asymmetrical Dress",
    "categoryId": "632720afac7f0bb67a21262d",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254212457.jpeg"
      }
    ]
  },
  {
    "_id": "633282681f854fc2b182a0cf",
    "title": "Aasmani Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664253900441.jpeg"
      }
    ]
  },
  {
    "_id": "6332830d1f854fc2b182a0f4",
    "title": "STONE STRUCK LAYERED NECKLACE",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254391006.jpeg"
      }
    ]
  },
  {
    "_id": "6332836b1f854fc2b182a0fc",
    "title": "Sage Green Cotton Silk Jacket",
    "categoryId": "632fec49141868b5b70c915b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254559781.jpeg"
      }
    ]
  },
  {
    "_id": "633284341f854fc2b182a117",
    "title": "SUNKISSED BLOOMS NECKLACE",
    "categoryId": "6333f58798cf637e0b759d42",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254868656.jpeg"
      }
    ]
  },
  {
    "_id": "6332846f1f854fc2b182a11f",
    "title": "Neel Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254950853.jpeg"
      }
    ]
  },
  {
    "_id": "633284931f854fc2b182a140",
    "title": "White & Green Printed Top",
    "categoryId": "63272100ac7f0bb67a212634",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254919632.jpeg"
      }
    ]
  },
  {
    "_id": "633285321f854fc2b182a150",
    "title": "Indigene Vintage Jumpsuit - Red",
    "categoryId": "632721c2ac7f0bb67a21263b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664254203983.png"
      }
    ]
  },
  {
    "_id": "633285631f854fc2b182a185",
    "title": "Shiroi Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255304655.jpeg"
      }
    ]
  },
  {
    "_id": "633286471f854fc2b182a1ae",
    "title": "HARAPPA TALES STATION NECKLACE",
    "categoryId": "6333f58798cf637e0b759d42",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255205249.jpeg"
      }
    ]
  },
  {
    "_id": "633286511f854fc2b182a1b6",
    "title": "Zen Baby Romper",
    "categoryId": "63272222ac7f0bb67a212643",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255412313.png"
      }
    ]
  },
  {
    "_id": "633286b21f854fc2b182a1db",
    "title": "GARDEN OF PEARLS NECKLACE",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255215760.jpeg"
      }
    ]
  },
  {
    "_id": "633286be1f854fc2b182a1e3",
    "title": "Warm Grey Baby Onesie",
    "categoryId": "6327224bac7f0bb67a212648",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255539448.jpeg"
      }
    ]
  },
  {
    "_id": "633286f71f854fc2b182a204",
    "title": "ETERNAL LOVE NECKLACE",
    "categoryId": "6333f5eb98cf637e0b759d48",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255224939.jpeg"
      }
    ]
  },
  {
    "_id": "633287441f854fc2b182a20e",
    "title": "Milky White Baby Romper",
    "categoryId": "63272222ac7f0bb67a212643",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255691235.png"
      }
    ]
  },
  {
    "_id": "6332882f1f854fc2b182a233",
    "title": "Flutter Blobs Baby Romper",
    "categoryId": "63272222ac7f0bb67a212643",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664255926274.png"
      }
    ]
  },
  {
    "_id": "633288b91f854fc2b182a256",
    "title": "Humming Dots Baby Romper",
    "categoryId": "6327223fac7f0bb67a212646",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664256043957.jpeg"
      }
    ]
  },
  {
    "_id": "633288cc1f854fc2b182a277",
    "title": "Soak Baby Romper",
    "categoryId": "63272222ac7f0bb67a212643",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664256108296.png"
      }
    ]
  },
  {
    "_id": "63328e561f854fc2b182a2cd",
    "title": "Handcrafted Indian Sikh Wedding Kirpan Maroon color",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664257499815.png"
      }
    ]
  },
  {
    "_id": "63328f5a1f854fc2b182a2d9",
    "title": "Blue Patchwork Indian Pouf Ottoman Cover",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664257231296.png"
      }
    ]
  },
  {
    "_id": "6332900d1f854fc2b182a2e7",
    "title": "Cast Feather Earrings\n",
    "categoryId": "6333f5b198cf637e0b759d46",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664257745149.jpeg"
      }
    ]
  },
  {
    "_id": "633290551f854fc2b182a2f3",
    "title": "Indian Hand Embroidered Ottoman Cover",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258004742.png"
      }
    ]
  },
  {
    "_id": "6332915e1f854fc2b182a303",
    "title": "Mahogany Kimono Dress - Sage Green",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664257029142.png"
      }
    ]
  },
  {
    "_id": "6332917f1f854fc2b182a322",
    "title": "Craftsman Deep Burned Clay Pot and Kadai for Cooking and serving Combo",
    "categoryId": "6333f50a98cf637e0b759d38",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258264233.png"
      }
    ]
  },
  {
    "_id": "633291a91f854fc2b182a332",
    "title": "22\" Green Patchwork Indian Ottoman Cover",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258329954.png"
      }
    ]
  },
  {
    "_id": "633292c91f854fc2b182a34c",
    "title": "Indian Hand Embroidered Ottoman Cover",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258603076.png"
      }
    ]
  },
  {
    "_id": "633293c91f854fc2b182a35f",
    "title": "Bohemian Ottoman cover ",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258898455.png"
      }
    ]
  },
  {
    "_id": "6332969d1f854fc2b182a371",
    "title": "Blue Kantha Quilt King Size Hand Stitch ",
    "categoryId": "632722e19daf6882035f3b37",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664259338655.png"
      }
    ]
  },
  {
    "_id": "6332975b1f854fc2b182a381",
    "title": "White Tropical Fruit Print Kantha Quilt ",
    "categoryId": "632aede3d8aef607db2ab4e2",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664259899694.png"
      }
    ]
  },
  {
    "_id": "6332976f1f854fc2b182a397",
    "title": "22\" Blue Ottoman Patchwork ",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664259900454.png"
      }
    ]
  },
  {
    "_id": "633298661f854fc2b182a3a5",
    "title": "Indian Handmade Pouf Cover",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664260100981.png"
      }
    ]
  },
  {
    "_id": "633299e51f854fc2b182a3b9",
    "title": "Beautiful Indian Pouf in Red Stool Vintage Patchwork Living Room Ottoman ",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258795159.png"
      }
    ]
  },
  {
    "_id": "63329a181f854fc2b182a3c3",
    "title": "Yellow Pouf ottoman Ethnic Embroidered Ottoman ",
    "categoryId": "632aedaed8aef607db2ab4dd",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664258767481.png"
      }
    ]
  },
  {
    "_id": "63342d2c1f854fc2b182a4d8",
    "title": "Set of 2: Palm and Bonzai - Grey and Oatmeal",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664361404593.png"
      }
    ]
  },
  {
    "_id": "63342fb21f854fc2b182a56e",
    "title": "Balloon Sleeve Buttoned Midaxi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664363777493.jpeg"
      }
    ]
  },
  {
    "_id": "633431ca1f854fc2b182a5ab",
    "title": "Solid Balloon Sleeve Midaxi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664364505949.jpeg"
      }
    ]
  },
  {
    "_id": "633437511f854fc2b182a5d7",
    "title": "Floral Puff Sleeve Belted Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664365104613.jpeg"
      }
    ]
  },
  {
    "_id": "633437b31f854fc2b182a5fb",
    "title": "CLASSIC STRIATIONS GOLD HAND EMBROIDERED CHAINSTITCH CUSHION COVER",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664365573881.png"
      }
    ]
  },
  {
    "_id": "6334387e1f854fc2b182a607",
    "title": "Set of 2: Cider and Sage - Yellow\n",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664366427865.png"
      }
    ]
  },
  {
    "_id": "633439001f854fc2b182a6db",
    "title": "GALLARDIA CHAINSTITCH EMBROIDERED CUSHION COVER BEIGE",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664366567048.png"
      }
    ]
  },
  {
    "_id": "633439261f854fc2b182a6e7",
    "title": "Front Ruffle All Over Floral Printed Top-Yellow",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664366480113.jpeg"
      }
    ]
  },
  {
    "_id": "63343a471f854fc2b182a709",
    "title": "Multicolor floral printed voluminous short dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664366953034.jpeg"
      }
    ]
  },
  {
    "_id": "63343ab51f854fc2b182a735",
    "title": "Nargis Hand Embroidered Woollen Cushion Cover",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664366965857.png"
      }
    ]
  },
  {
    "_id": "63343c9d1f854fc2b182a73f",
    "title": "One Shoulder Yellow Tiered Midaxi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664367257376.jpeg"
      }
    ]
  },
  {
    "_id": "63343d541f854fc2b182a763",
    "title": "Black Floral Balloon Sleeve Midaxi Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664367807216.jpeg"
      }
    ]
  },
  {
    "_id": "63343db21f854fc2b182a787",
    "title": "NARGIS CHAINSTITCH EMBROIDERED CUSHION COVER PERSIAN BLUE",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664367322512.jpeg"
      }
    ]
  },
  {
    "_id": "63343f681f854fc2b182a7a3",
    "title": "Long Balloon Sleeve Short Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664368015642.jpeg"
      }
    ]
  },
  {
    "_id": "63343fef1f854fc2b182a7c7",
    "title": "Set of 2: Banyan and Savannah - Sage and Deep Green\n",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664368306548.png"
      }
    ]
  },
  {
    "_id": "633440f01f854fc2b182a7e6",
    "title": "Pleasted Puff Sleeve Flair Short Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664368534408.jpeg"
      }
    ]
  },
  {
    "_id": "633442e01f854fc2b182a819",
    "title": "Long Sleeve Wrap Crop Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664368941867.jpeg"
      }
    ]
  },
  {
    "_id": "633444791f854fc2b182a83d",
    "title": "Green Layered Bell Sleeve Smocked Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664369435809.jpeg"
      }
    ]
  },
  {
    "_id": "633445e41f854fc2b182a861",
    "title": "Front Ruffle All Over Floral Printed Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664369832979.jpeg"
      }
    ]
  },
  {
    "_id": "633447471f854fc2b182a885",
    "title": "Black Floral Printed Full Sleeve Ruffle Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664370191451.jpeg"
      }
    ]
  },
  {
    "_id": "633448171f854fc2b182a8a7",
    "title": "POPPY HAND EMBROIDERED CHAIN STITCH CUSHION COVER GREY",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664368245666.png"
      }
    ]
  },
  {
    "_id": "6334499c1f854fc2b182a8b3",
    "title": "Blue Floral Printed Full Sleeve Ruffle Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664370558091.jpeg"
      }
    ]
  },
  {
    "_id": "633449eb1f854fc2b182a8e1",
    "title": "CREAM HAND EMBROIDERED CHAINSTITCH RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664370779766.png"
      }
    ]
  },
  {
    "_id": "63344ad51f854fc2b182a8ef",
    "title": "LUSH BLUE GREEN HAND EMBROIDERED CHAINSTITCH RUNNER RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371213252.png"
      }
    ]
  },
  {
    "_id": "63344b671f854fc2b182a8ff",
    "title": "Multicolor Floral Printed Open Back Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371160448.jpeg"
      }
    ]
  },
  {
    "_id": "63344c1d1f854fc2b182a929",
    "title": "OFF WHITE AND CINNAMON HAND EMBROIDERED CHAINSTITCH RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371441568.png"
      }
    ]
  },
  {
    "_id": "63344cb81f854fc2b182a937",
    "title": "Multicolor peasant sleeve button down long dress with lace",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371617414.jpeg"
      }
    ]
  },
  {
    "_id": "63344d181f854fc2b182a959",
    "title": "LILY CHAINSTITCH EMBROIDERED CUSHION COVER NAVY BLUE",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371774535.png"
      }
    ]
  },
  {
    "_id": "63344d481f854fc2b182a965",
    "title": "Orange One Shoulder Floral Short Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664371923226.jpeg"
      }
    ]
  },
  {
    "_id": "63344e671f854fc2b182a989",
    "title": "PANSY CHAINSTITCH EMBROIDERED CUSHION COVER CREAM",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664372036521.png"
      }
    ]
  },
  {
    "_id": "63344fa31f854fc2b182a999",
    "title": "HOLLYHOCK CHAINSTITCH EMBROIDERED CUSHION COVER CREAM",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664372392824.png"
      }
    ]
  },
  {
    "_id": "633450bd1f854fc2b182a9a6",
    "title": "ROSE CHAINSTITCH EMBROIDERED CUSHION COVER NAVY BLUE",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664372688121.png"
      }
    ]
  },
  {
    "_id": "633455541f854fc2b182a9e8",
    "title": "COCOA BROWN HAND EMBROIDERED CHAINSTITCH RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664373025747.png"
      }
    ]
  },
  {
    "_id": "6334565c1f854fc2b182a9f7",
    "title": "CLASSIC STRIATIONS AZURE HAND EMBROIDERED CHAINSTITCH CUSHION COVER",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374142086.png"
      }
    ]
  },
  {
    "_id": "6334570c1f854fc2b182aa03",
    "title": "Set of 2: Sakura and Sage - Deep Green",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664369045158.png"
      }
    ]
  },
  {
    "_id": "6334573f1f854fc2b182aabd",
    "title": "CLASSIC STRIATIONS MAROON HAND EMBROIDERED CHAINSTITCH CUSHION COVER",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374404257.png"
      }
    ]
  },
  {
    "_id": "6334599e1f854fc2b182aacb",
    "title": "GALLARDIA CHAINSTITCH EMBROIDERED CUSHION COVER PERSIAN BLUE",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374638702.png"
      }
    ]
  },
  {
    "_id": "633459d91f854fc2b182aad7",
    "title": "NARGIS CHAINSTITCH EMBROIDERED CUSHION COVER CARAMEL",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374656235.png"
      }
    ]
  },
  {
    "_id": "63345a171f854fc2b182aae3",
    "title": "TULIP - WOOL HAND FELTED KASHMIR NAMDA ROUND RUG",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374673143.jpeg"
      }
    ]
  },
  {
    "_id": "63345afc1f854fc2b182aaed",
    "title": "Set of 2: Canopy and Savannah - Grey and Oatmeal",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664374770298.png"
      }
    ]
  },
  {
    "_id": "63345b481f854fc2b182ab01",
    "title": "MARSHMALLOW WHITE HAND EMBROIDERED CHAINSTITCH RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664375353491.png"
      }
    ]
  },
  {
    "_id": "63345c1d17dc3285610ed8d2",
    "title": "OFF WHITE AND RASBERRY PINK HAND EMBROIDERED CHAINSTITCH RUG",
    "categoryId": "6333f76c98cf637e0b759d58",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664375666244.png"
      }
    ]
  },
  {
    "_id": "6334674617dc3285610ed93b",
    "title": "Button down purple puff sleeve midaxi dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664378214180.jpeg"
      }
    ]
  },
  {
    "_id": "6334678717dc3285610ed967",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334678817dc3285610ed977",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334678b17dc3285610ed98b",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334678b17dc3285610ed993",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334678b17dc3285610ed996",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334678b17dc3285610ed98e",
    "title": "Set of 2: Elm and Savannah - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664377750420.png"
      }
    ]
  },
  {
    "_id": "6334698c17dc3285610ed9fd",
    "title": "Pink Ruffle Tiered Short Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664378865002.jpeg"
      }
    ]
  },
  {
    "_id": "6334699617dc3285610eda1f",
    "title": "Set of 2: Koa and Sage - Grey and Oatmeal",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664379267523.png"
      }
    ]
  },
  {
    "_id": "63346a7817dc3285610edadb",
    "title": "Peach Neck Tie Up Blouson Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664378912819.jpeg"
      }
    ]
  },
  {
    "_id": "63346ac817dc3285610edafd",
    "title": "Ayla- Silk Gathered Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664379178063.png"
      }
    ]
  },
  {
    "_id": "63346b1c17dc3285610edb23",
    "title": "Set of 3: Elm, Savannah and Banyan - White",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664379552313.png"
      }
    ]
  },
  {
    "_id": "63346c8517dc3285610edbdf",
    "title": "Eunice- Tie Around Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664379670693.png"
      }
    ]
  },
  {
    "_id": "63346de117dc3285610edbfd",
    "title": "Buttercup Bralette & Wide Leg Pants",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380165685.png"
      }
    ]
  },
  {
    "_id": "63346e0617dc3285610edc83",
    "title": "Darla- Oversized Cotton Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380132681.png"
      }
    ]
  },
  {
    "_id": "63346eec17dc3285610edc99",
    "title": "Printed Printed Off-White Abstract Blackout Door Curtains ",
    "categoryId": "6333f76798cf637e0b759d57",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380185451.jpeg"
      }
    ]
  },
  {
    "_id": "63346f1f17dc3285610edca5",
    "title": "Amaya- Basic A-Line Fine Cotton Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380465787.png"
      }
    ]
  },
  {
    "_id": "63346f9d17dc3285610edcc0",
    "title": " Multicolour Printed Cream Abstract Blackout Door Curtains ",
    "categoryId": "6333f76798cf637e0b759d57",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380576479.jpeg"
      }
    ]
  },
  {
    "_id": "6334702b17dc3285610edccc",
    "title": "Eli -  Handwoven cotton gathered top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380748181.png"
      }
    ]
  },
  {
    "_id": "633470a017dc3285610edce0",
    "title": "Grey Matka Silk Curtain for Window ",
    "categoryId": "6333f76798cf637e0b759d57",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664380877387.jpeg"
      }
    ]
  },
  {
    "_id": "6334714617dc3285610edcec",
    "title": "Margot- Handwoven Silk Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664381003795.png"
      }
    ]
  },
  {
    "_id": "633471d117dc3285610edd0e",
    "title": " Light Beige Matka Silk Curtain For Living Room",
    "categoryId": "6333f76798cf637e0b759d57",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664381154010.jpeg"
      }
    ]
  },
  {
    "_id": "633472cf17dc3285610edd2c",
    "title": "Holly- Block Printed Gathered Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664381346406.png"
      }
    ]
  },
  {
    "_id": "6334745617dc3285610edd4e",
    "title": "White Zebra Skin Printed Cushion Covers (Pack of 2)\n",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664381736650.jpeg"
      }
    ]
  },
  {
    "_id": "6334749517dc3285610edd56",
    "title": "Liana- Box Pleated Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664381772714.png"
      }
    ]
  },
  {
    "_id": "6334754017dc3285610edd76",
    "title": "Sofa Cotton Cushion Covers Online with Foil Printed ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382104372.jpeg"
      }
    ]
  },
  {
    "_id": "633475ac17dc3285610edd8a",
    "title": "Agnes- Full Sleeves Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382131819.png"
      }
    ]
  },
  {
    "_id": "6334766a17dc3285610edd9c",
    "title": "Off- White Thick Velvet Cushion Cover ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382312900.jpeg"
      }
    ]
  },
  {
    "_id": "633476da17dc3285610edda8",
    "title": "Cindy- Front Tie-Up Top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382412999.png"
      }
    ]
  },
  {
    "_id": "6334772317dc3285610eddc3",
    "title": " Brown Thick Velvet Cushion Cover ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382624746.jpeg"
      }
    ]
  },
  {
    "_id": "633477c917dc3285610eddcf",
    "title": " Light Beige Thick Velvet Cushion Cover ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382829337.jpeg"
      }
    ]
  },
  {
    "_id": "6334780117dc3285610edde9",
    "title": "Hailey- Handwoven Cotton A-Line Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664382433844.png"
      }
    ]
  },
  {
    "_id": "6334795017dc3285610ede14",
    "title": "Smooth Cream Velvet Cushion Covers with Metallic Oomph ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664383003050.jpeg"
      }
    ]
  },
  {
    "_id": "63347a1617dc3285610ede20",
    "title": "Ruby- Handwoven Silk Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664383089390.png"
      }
    ]
  },
  {
    "_id": "63347a2017dc3285610ede38",
    "title": "Printed Chair Pads Cushion ",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664383344109.jpeg"
      }
    ]
  },
  {
    "_id": "63347af017dc3285610ede44",
    "title": "Off White Cotton Dinning Chair Cushions",
    "categoryId": "6333f78898cf637e0b759d5c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664383566846.jpeg"
      }
    ]
  },
  {
    "_id": "63347c4117dc3285610ede5e",
    "title": "Martha- A-Line Silk Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664383590649.png"
      }
    ]
  },
  {
    "_id": "63347e5f17dc3285610ede80",
    "title": "Ava- Silk Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664384217576.png"
      }
    ]
  },
  {
    "_id": "63347fc717dc3285610ede9a",
    "title": "Jacquard Dining Table Runner with Polyester Border",
    "categoryId": "6333f51398cf637e0b759d39",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664384777968.jpeg"
      }
    ]
  },
  {
    "_id": "6334800017dc3285610edeaa",
    "title": "Daphne- Block Printed Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664384673593.png"
      }
    ]
  },
  {
    "_id": "6334810917dc3285610edebc",
    "title": "Light Green Cotton Table Runner with Ladder Lace",
    "categoryId": "6333f51398cf637e0b759d39",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664385009146.jpeg"
      }
    ]
  },
  {
    "_id": "6334818317dc3285610edf12",
    "title": "Amelia- Silk Gathered Dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664385071866.png"
      }
    ]
  },
  {
    "_id": "633481be17dc3285610edf2d",
    "title": "Beige Cotton Dining Table Runner with Ladder Lace ",
    "categoryId": "6333f51398cf637e0b759d39",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664385038440.jpeg"
      }
    ]
  },
  {
    "_id": "6334991b923dc5f0a56135b9",
    "title": "Bora- Natural color Woven Design 1",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664391203609.jpeg"
      }
    ]
  },
  {
    "_id": "63349b38923dc5f0a56135e1",
    "title": "Ankara Fabric",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664391786225.png"
      }
    ]
  },
  {
    "_id": "63349beb923dc5f0a56135ef",
    "title": "Azer Fabric",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664392051805.png"
      }
    ]
  },
  {
    "_id": "63349f5d923dc5f0a5613613",
    "title": "Benin - White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664392233678.png"
      }
    ]
  },
  {
    "_id": "6334a09e923dc5f0a561363b",
    "title": "Bora- Bleached white",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664393093388.png"
      }
    ]
  },
  {
    "_id": "6334a37c923dc5f0a5613657",
    "title": "Tosh- Unfinished Woven",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664393501134.jpeg"
      }
    ]
  },
  {
    "_id": "6334a4ce923dc5f0a5613667",
    "title": "New Zealand- Bleached White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664394164293.png"
      }
    ]
  },
  {
    "_id": "6334a60d923dc5f0a5613675",
    "title": "Lago- Unfinished Woven",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664394482664.jpeg"
      }
    ]
  },
  {
    "_id": "6334a6d9923dc5f0a5613683",
    "title": "Iraq- Bleached White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664394799116.jpeg"
      }
    ]
  },
  {
    "_id": "6334a7a8923dc5f0a56136bd",
    "title": "Bora- Natural color Woven Design 2",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664395021946.png"
      }
    ]
  },
  {
    "_id": "6334a870923dc5f0a56136c9",
    "title": "Grifa White- Bleached White\n",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664395208290.jpeg"
      }
    ]
  },
  {
    "_id": "6334a97d923dc5f0a56136d7",
    "title": "England- Bleached White Herringbone weave",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664395417148.jpeg"
      }
    ]
  },
  {
    "_id": "6334aa65923dc5f0a56136e5",
    "title": "Denmark-Bleached White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664395681648.jpeg"
      }
    ]
  },
  {
    "_id": "6334ab67923dc5f0a56136f3",
    "title": "Cuba- Bleached White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664395916904.jpeg"
      }
    ]
  },
  {
    "_id": "6334ac6f923dc5f0a56136ff",
    "title": "Bora- Natural color Woven Design 3",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664396191017.png"
      }
    ]
  },
  {
    "_id": "6334b066a49b54f6341b175d",
    "title": "Nora Kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664396946963.jpeg"
      }
    ]
  },
  {
    "_id": "6334b1f0a49b54f6341b178e",
    "title": "Elsa A-line dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664397609127.jpeg"
      }
    ]
  },
  {
    "_id": "6334b341a49b54f6341b17b2",
    "title": "Amanda A-line dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664397914145.jpeg"
      }
    ]
  },
  {
    "_id": "6334b444a49b54f6341b17d3",
    "title": "Grace Wrap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664398280944.jpeg"
      }
    ]
  },
  {
    "_id": "6334b4fda49b54f6341b17f2",
    "title": "Alice Maxi strap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664398473857.jpeg"
      }
    ]
  },
  {
    "_id": "6334b629a49b54f6341b1811",
    "title": "Audrey Gathered dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664398675387.jpeg"
      }
    ]
  },
  {
    "_id": "6334b6e3a49b54f6341b1832",
    "title": "Olivia Halter neck top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664398961273.jpeg"
      }
    ]
  },
  {
    "_id": "6334b938a49b54f6341b1859",
    "title": "Pearl Strap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664399409583.jpeg"
      }
    ]
  },
  {
    "_id": "6334b9e0a49b54f6341b1878",
    "title": "Naomi Shrug",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664399699698.jpeg"
      }
    ]
  },
  {
    "_id": "6334baa2a49b54f6341b1897",
    "title": "Nelly Full sleeve shirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664399873894.jpeg"
      }
    ]
  },
  {
    "_id": "6334bb24a49b54f6341b18b6",
    "title": "Myra Boxy top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664400057843.jpeg"
      }
    ]
  },
  {
    "_id": "6334c0a0a49b54f6341b18de",
    "title": "Multi-purpose Terracotta Tray with Lid",
    "categoryId": "6333f50498cf637e0b759d37",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664401172751.jpeg"
      }
    ]
  },
  {
    "_id": "6334c176a49b54f6341b18ea",
    "title": "Molela Craft Ganpati Idol",
    "categoryId": "6333f70698cf637e0b759d52",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664401603554.jpeg"
      }
    ]
  },
  {
    "_id": "6334c279a49b54f6341b18f2",
    "title": "Food, Oven and Microwave Safe Dry Fruit Container with Lid",
    "categoryId": "6333f50498cf637e0b759d37",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664401825084.jpeg"
      }
    ]
  },
  {
    "_id": "6334c403a49b54f6341b1902",
    "title": "Longpi Black Pottery \"Cabernet\" Wine Glass",
    "categoryId": "6333f51998cf637e0b759d3a",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664402091197.jpeg"
      }
    ]
  },
  {
    "_id": "6334c59ea49b54f6341b1914",
    "title": "Longpi Black Pottery Tea-Cups Set of 4",
    "categoryId": "6333f51998cf637e0b759d3a",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664402486955.jpeg"
      }
    ]
  },
  {
    "_id": "6334c6b6a49b54f6341b191e",
    "title": "Kutch Lippan Mud Work Wall Panel",
    "categoryId": "6333f70198cf637e0b759d51",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664402883852.jpeg"
      }
    ]
  },
  {
    "_id": "6334c794a49b54f6341b192c",
    "title": "Kutch Painted Pottery Donut Bottle with strap",
    "categoryId": "6333f51998cf637e0b759d3a",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664403165618.jpeg"
      }
    ]
  },
  {
    "_id": "6334c847a49b54f6341b193a",
    "title": "Kutch Painted Pottery Diffuser Lamp",
    "categoryId": "6333f6f598cf637e0b759d4f",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664403369477.jpeg"
      }
    ]
  },
  {
    "_id": "63368319684f239cc37fe376",
    "title": " Lotus Veda Indigo dabu printed mulmul dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664515447401.jpeg"
      }
    ]
  },
  {
    "_id": "633687f2684f239cc37fe3ab",
    "title": " Lotus Veda Indigo dabu printed mulmul gathered kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664517516568.jpeg"
      }
    ]
  },
  {
    "_id": "6336957b684f239cc37fe41a",
    "title": "Kaneri Fresh Green",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/png",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664520993614.png"
      }
    ]
  },
  {
    "_id": "63369722684f239cc37fe428",
    "title": "Kaneri Sand",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664521684456.jpeg"
      }
    ]
  },
  {
    "_id": "633697e0684f239cc37fe45e",
    "title": "Kaneri Blueberry",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664522083680.jpeg"
      }
    ]
  },
  {
    "_id": "6336984a684f239cc37fe471",
    "title": "Kaneri Wheat",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664522233075.jpeg"
      }
    ]
  },
  {
    "_id": "633698d3684f239cc37fe47b",
    "title": "Pune Blueberry ",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664522345181.jpeg"
      }
    ]
  },
  {
    "_id": "63369956684f239cc37fe487",
    "title": "Pune Olive ",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664522497615.jpeg"
      }
    ]
  },
  {
    "_id": "63369c18684f239cc37fe4a1",
    "title": "Benin Black",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664522630604.jpeg"
      }
    ]
  },
  {
    "_id": "63369d93684f239cc37fe4b3",
    "title": "Benin Navy Blue",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664523506891.jpeg"
      }
    ]
  },
  {
    "_id": "63369f6d684f239cc37fe4cb",
    "title": "Ghatkopar White",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664523963685.jpeg"
      }
    ]
  },
  {
    "_id": "6336a03e684f239cc37fe514",
    "title": "Pune Black",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664524249147.jpeg"
      }
    ]
  },
  {
    "_id": "6336a0c1684f239cc37fe539",
    "title": "Pune Milk Chi",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664524410444.jpeg"
      }
    ]
  },
  {
    "_id": "6336a2e2684f239cc37fe551",
    "title": "Lotus Veda Indigo printed mulmul dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664524643549.jpeg"
      }
    ]
  },
  {
    "_id": "6336a422684f239cc37fe57b",
    "title": "Lotus Veda Indigo dabu printed mulmul kaftaan",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664525074274.jpeg"
      }
    ]
  },
  {
    "_id": "6336a675684f239cc37fe58e",
    "title": "Lotus Veda Indigo dabu printed mulmul top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664525403212.jpeg"
      }
    ]
  },
  {
    "_id": "6336b00d784603846de28e62",
    "title": "Lotus Veda Red cotton yard dyed V neck kaftan ",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664526105377.jpeg"
      }
    ]
  },
  {
    "_id": "6336b4e0784603846de28e7d",
    "title": "Lotus Veda Red cotton yarn dyed gathered kaftan",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664528852626.jpeg"
      }
    ]
  },
  {
    "_id": "6336b92c784603846de28ed8",
    "title": "Bonsai overlay",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664530394347.jpeg"
      }
    ]
  },
  {
    "_id": "6336bb72784603846de28eef",
    "title": "Noir Overlay",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664531087787.jpeg"
      }
    ]
  },
  {
    "_id": "6336bdde784603846de28f4b",
    "title": "Space grey overlay",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664531783160.jpeg"
      }
    ]
  },
  {
    "_id": "6336c4ee784603846de28f7f",
    "title": "Pune Milk Chi",
    "categoryId": "6333f82498cf637e0b759d65",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664533116278.jpeg"
      }
    ]
  },
  {
    "_id": "6336c8fe784603846de28fa4",
    "title": "Lotus Veda Red cotton yarn dyed dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664534513289.jpeg"
      }
    ]
  },
  {
    "_id": "6336ca31784603846de28fcc",
    "title": "Lotus Veda Green cotton yarn dyed gathered dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664534822141.jpeg"
      }
    ]
  },
  {
    "_id": "6336cd1e784603846de29011",
    "title": "Lotus Veda Red cotton yarn dyed sleeveless dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664535179153.jpeg"
      }
    ]
  },
  {
    "_id": "6336cfc3784603846de29087",
    "title": "Lotus Veda Green cotton yarn dyed yoke kurta",
    "categoryId": "6333f8d498cf637e0b759d70",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664536344086.jpeg"
      }
    ]
  },
  {
    "_id": "6336d0bf784603846de290b2",
    "title": "Lotus Veda Red cotton yarn dyed tie-up top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664536564374.jpeg"
      }
    ]
  },
  {
    "_id": "6336d1fa784603846de290fa",
    "title": "Lotus Veda Harda Cotton silk gathered dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664536845815.jpeg"
      }
    ]
  },
  {
    "_id": "6336d35b784603846de29129",
    "title": "Lotus Veda Harda Cotton silk dress with 70's bell sleeves",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664537141207.jpeg"
      }
    ]
  },
  {
    "_id": "6336d3f8784603846de2914d",
    "title": "Lotus Veda Harda cotton silk V neck dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664537493894.jpeg"
      }
    ]
  },
  {
    "_id": "6336d48f784603846de29171",
    "title": "Lotus Veda Harda cotton silk gathered kaftan with V neck",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664537646125.jpeg"
      }
    ]
  },
  {
    "_id": "6336d52b784603846de2917d",
    "title": "Harda hand block dabu printed cotton silk pintucks kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664537803195.jpeg"
      }
    ]
  },
  {
    "_id": "6336d5bf784603846de29189",
    "title": "Harda cotton silk \"V\" neck strap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664537943811.jpeg"
      }
    ]
  },
  {
    "_id": "6336d865784603846de291b9",
    "title": "Lotus Veda Harda cotton silk strap top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664538334157.jpeg"
      }
    ]
  },
  {
    "_id": "6336d937784603846de291dd",
    "title": "Lotus Veda Harda cotton silk gathered skirt",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664538769604.jpeg"
      }
    ]
  },
  {
    "_id": "6336da07784603846de29201",
    "title": "Lotus Veda Harda cotton silk asymmetrical sleeves dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664538988902.jpeg"
      }
    ]
  },
  {
    "_id": "6336da90784603846de29227",
    "title": "Lotus Veda Harda dabu printed cotton silk pintucks kurta dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664539183909.jpeg"
      }
    ]
  },
  {
    "_id": "6336de4c784603846de29271",
    "title": "Lotus Veda Handblock print strap V neck dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664539428686.jpeg"
      }
    ]
  },
  {
    "_id": "6336df23784603846de29295",
    "title": "Lotus Veda Stripe handblock print Cowl Kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664540280943.jpeg"
      }
    ]
  },
  {
    "_id": "6336e015784603846de292a1",
    "title": "Lotus Veda Handblock print halterneck dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664540498091.jpeg"
      }
    ]
  },
  {
    "_id": "6336e0b34f04ae4f80140538",
    "title": "Lotus Veda Handblock print gathered dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664540749865.jpeg"
      }
    ]
  },
  {
    "_id": "6336e15f4f04ae4f8014056a",
    "title": "Lotus Veda Handblock print gathered strap top with front opening",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664540891778.jpeg"
      }
    ]
  },
  {
    "_id": "6336e35e4f04ae4f801405f9",
    "title": "Lotus Veda Polka handblock print shirt",
    "categoryId": "6333f95c98cf637e0b759d74",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664541170939.jpeg"
      }
    ]
  },
  {
    "_id": "6336e3fe4f04ae4f8014066c",
    "title": "Lotus Veda Handblock print dress with very 70s bell sleeves",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664541597080.jpeg"
      }
    ]
  },
  {
    "_id": "6336e4d34f04ae4f801406d6",
    "title": "Lotus Veda Handblock print cross cut V neck kaftan",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664541750119.jpeg"
      }
    ]
  },
  {
    "_id": "6336e5cb4f04ae4f801406e2",
    "title": "Lotus Veda Handblock print co-ord set ",
    "categoryId": "6333f8b098cf637e0b759d6c",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664541974391.jpeg"
      }
    ]
  },
  {
    "_id": "6336e7984f04ae4f8014070c",
    "title": " Lotus Veda Kala cotton overlay",
    "categoryId": "6333f8bb98cf637e0b759d6e",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664542354814.jpeg"
      }
    ]
  },
  {
    "_id": "6336e8974f04ae4f80140730",
    "title": "Lotus Veda Handblock polka print tube top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664542663018.jpeg"
      }
    ]
  },
  {
    "_id": "6336e9814f04ae4f80140752",
    "title": "Lotus Veda Blue cotton yarn dyed patched kaftan top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664542915671.jpeg"
      }
    ]
  },
  {
    "_id": "633812059a6d81228c9ec4a8",
    "title": "Blue cotton yarn dyed dress with 70's bell sleeves",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664618574126.jpeg"
      }
    ]
  },
  {
    "_id": "633812b19a6d81228c9ec502",
    "title": "Blue cotton yard dyed gathered dress ",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664619059469.jpeg"
      }
    ]
  },
  {
    "_id": "6338132b9a6d81228c9ec54a",
    "title": "Blue cotton yarn dyed gathered kaftan ",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664619220541.jpeg"
      }
    ]
  },
  {
    "_id": "633813ac9a6d81228c9ec582",
    "title": "Blue cotton yarn gathered top",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664619340344.jpeg"
      }
    ]
  },
  {
    "_id": "633814149a6d81228c9ec5b4",
    "title": "Lotus Veda Blue handspun and hand woven cotton fabric kaftan ",
    "categoryId": "6333f89798cf637e0b759d68",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664619466535.jpeg"
      }
    ]
  },
  {
    "_id": "633815aa9a6d81228c9ec62e",
    "title": "Lotus Veda Blue tie up patched top ",
    "categoryId": "6333f95698cf637e0b759d73",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664619575039.jpeg"
      }
    ]
  },
  {
    "_id": "633816519a6d81228c9ec665",
    "title": "Lotus Veda Blue cotton yard dyed cotton strap dress",
    "categoryId": "6333f8a998cf637e0b759d6b",
    "assets": [
      {
        "mimeType": "data:image/jpeg",
        "url": "https://baaz-marketplace-media.s3.us-east-2.amazonaws.com/data%3Aimage/1664620005309.jpeg"
      }
    ]
  }
]

let selectedIds = []
// generate selectedIds
let c = 6
while (c > 0) {
  const r = Math.floor(Math.random() * products.length)
  selectedIds.push(products[r]._id)
  c--
}
//----
console.log(selectedIds)

// complexity O(m*n)
const result = selectedIds.map(i => products.find(p => p._id === i))

console.log(_.toPairs(selectedIds, result.map(r => r._id)))