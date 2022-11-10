/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Account } from 'algosdk';

type Page = any;
type SaveScreenshotCallback = any;

export type BuyAssetProps = {
  asset: AssetToBuy;
  page: Page;
  isTest: boolean;
  isReload?: boolean;
  setupUser?: boolean;
  saveScreenshot: SaveScreenshotCallback;
};

export type AssetToBuy = {
  name: string;
  assetId: number;
  quantity: number;
  actualPrice?: number;
  initialPrice: number;
  maxPrice: number;
  startDate: string;
  endDate: string;
  buyer: Account;
  buyer_: string;
  supplier: string | { supplier: string; cut: number }[];
  fee: number;
  sellerAddress: string;
  auctionAddress: string;
  websiteFee: number;
  ownerBefore: string[];
  retryCount: number;
  id: number;
};
export type AssetBuyStatus =
  | 'Error occured'
  | 'Auction finished'
  | 'Invalid Price'
  | 'Pending'
  | 'Success'
  | 'Auction not started';
export type AssetBuyResult = {
  assetId: number;
  status: AssetBuyStatus;
  canRetry: boolean;
};

export type AssetById = {
  accounts: any[];
  'current-round': 16365734;
  'next-token': '2BLMTU6HQASKV46HZOZNB2WXFERXO6TEZSJCQKWONCAEB2BO4U76OA4SRQ';
};

export type RandGallerySale = {
  price: number;
  supplier: string | { supplier: string; cut: number }[];
  fee: number;
  sellerAddress: string;
};

export type AssetBalance = {
  balances: [
    {
      address: string;
      amount: 1;
      deleted: false;
      'is-frozen': false;
      'opted-in-at-round': number;
    },
  ];
  'current-round': number;
  'next-token': string;
};

export const canRetryAuction = (status: AssetBuyStatus) => {
  switch (status) {
    case 'Invalid Price':
    case 'Auction not started':
    case 'Error occured':
    case 'Pending':
      return true;
    case 'Auction finished':
    case 'Success':
      return false;
  }
};

const b = {
  asset: {
    'created-at-round': 16665575,
    deleted: false,
    index: 358640066,
    params: {
      clawback: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ',
      creator: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      decimals: 0,
      'default-frozen': false,
      freeze: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ',
      manager: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      name: 'M.N.G.O #866',
      'name-b64': 'TS5OLkcuTyAjODY2',
      reserve: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      total: 1,
      'unit-name': 'MNGO866',
      'unit-name-b64': 'TU5HTzg2Ng==',
      url: 'ipfs://QmVtVymu8cdpwSURq1Mk4Mc4uU9tRBi3spd1JTpYfftGXd',
      'url-b64':
        'aXBmczovL1FtVnRWeW11OGNkcHdTVVJxMU1rNE1jNHVVOXRSQmkzc3BkMUpUcFlmZnRHWGQ=',
    },
  },
  'current-round': 16881849,
};
const a = {
  'current-round': 16881925,
  'next-token': '50v-AAAAAAAAAAAA',
  transactions: [
    {
      'asset-config-transaction': {
        'asset-id': 0,
        params: {
          creator: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
          decimals: 0,
          'default-frozen': false,
          manager: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
          name: 'M.N.G.O #866',
          'name-b64': 'TS5OLkcuTyAjODY2',
          reserve: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
          total: 1,
          'unit-name': 'MNGO866',
          'unit-name-b64': 'TU5HTzg2Ng==',
          url: 'ipfs://QmVtVymu8cdpwSURq1Mk4Mc4uU9tRBi3spd1JTpYfftGXd',
          'url-b64':
            'aXBmczovL1FtVnRWeW11OGNkcHdTVVJxMU1rNE1jNHVVOXRSQmkzc3BkMUpUcFlmZnRHWGQ=',
        },
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16665575,
      'created-asset-index': 358640066,
      fee: 1000,
      'first-valid': 16665572,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      id: 'TSZHW3LL4AKJC2BIXUSVDEXBFQPEKME67DLCOMPVNEZTXNRKSXUA',
      'intra-round-offset': 0,
      'last-valid': 16666572,
      note:
        'eyJzdGFuZGFyZCI6ImFyYzY5IiwiZXh0ZXJuYWxfdXJsIjoiaHR0cHM6Ly93d3cubW5nby54eXoiLCJhdHRyaWJ1dGVzIjpbIHsidHJhaXRfdHlwZSI6ICJCYWNrZ3JvdW5kIiwidmFsdWUiOiAiWWVsbG93In0gLCB7InRyYWl0X3R5cGUiOiAiQm9keSIsInZhbHVlIjogIkNsYXNzaWMgUGluayJ9ICwgeyJ0cmFpdF90eXBlIjogIlRhdHRvbyIsInZhbHVlIjogIk5vbmUifSAsIHsidHJhaXRfdHlwZSI6ICJCZWFrIiwidmFsdWUiOiAiTm9uZSJ9ICwgeyJ0cmFpdF90eXBlIjogIkNsb3RoaW5nIiwidmFsdWUiOiAiTm9uZSJ9ICwgeyJ0cmFpdF90eXBlIjogIk5lY2siLCJ2YWx1ZSI6ICJIT0RMIn0gLCB7InRyYWl0X3R5cGUiOiAiTW91dGgiLCJ2YWx1ZSI6ICJTdGFuZGFyZCJ9ICwgeyJ0cmFpdF90eXBlIjogIkVhcnJpbmciLCJ2YWx1ZSI6ICJBY29ybiJ9ICwgeyJ0cmFpdF90eXBlIjogIkV5ZXMiLCJ2YWx1ZSI6ICJTdGFuZGFyZCJ9ICwgeyJ0cmFpdF90eXBlIjogIkhhdCIsInZhbHVlIjogIkJ1Y2tldCJ9IF19',
      'receiver-rewards': 0,
      'round-time': 1633559096,
      sender: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      'sender-rewards': 0,
      signature: {
        sig:
          '9wrPXU6jY5Xo5AonSwXoCwOhoseXYdps3ubgZRBouRg6qNx2CCDFESjCsEzXw6dQlskxbZtSTRDaWQO7NNErBw==',
      },
      'tx-type': 'acfg',
    },
  ],
};
const c = {
  'current-round': 16889249,
  'next-token': 'qqsBAQAAAAAQAAAA',
  transactions: [
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'UKN6Q5KVACIGOHLQK5OADAVILSGTWTMQUCB2LGNB7YQTEPX6KAJ3OA4G4E',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879306,
      fee: 1000,
      'first-valid': 16879281,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'nkINeSyUFyNkDYic5+wpw6iJiyB0YNeQbd5pm16IAmI=',
      id: 'MNUAPJL7JY5WIRMWS54SHZ2QBYG3ZYXVM4DHOZD2XSUMJV7LJP2A',
      'intra-round-offset': 46,
      'last-valid': 16880281,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634495333,
      sender: 'UKN6Q5KVACIGOHLQK5OADAVILSGTWTMQUCB2LGNB7YQTEPX6KAJ3OA4G4E',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBtquj7IBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 1,
        'close-to': 'FVWV6U52JQ45CY5YEQRLNCIJ7F5SGRSEC7SUAEUVQI6SWB57BTZ6P7VHVM',
        receiver: 'UKN6Q5KVACIGOHLQK5OADAVILSGTWTMQUCB2LGNB7YQTEPX6KAJ3OA4G4E',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879424,
      fee: 1000,
      'first-valid': 16879419,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'sKO9GPLLluP/E9GQx2LWSQvDJIHFnrHvARK0cLoRtYw=',
      id: '26BTOAQRKDHW24L6HGQIPRBZMEJK34GKTNC6YUX2CKBJ4T5FXA5Q',
      'intra-round-offset': 38,
      'last-valid': 16880419,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634495855,
      sender: 'UKN6Q5KVACIGOHLQK5OADAVILSGTWTMQUCB2LGNB7YQTEPX6KAJ3OA4G4E',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBtquj7IBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'LJREQFCIBUVJO2QCPNACZEMHFM2EROMG7WHDDAPJCNXZWDCHA2FUMOFJHY',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879452,
      fee: 1000,
      'first-valid': 16879429,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'xsHuAr4pl6ZruSdNsY+j/l6kkFq/zcF0Bm2dmMF3LZg=',
      id: '7LGLMJJYFOQSFZEXTZ56QDD5WL5OCBDQXUYUZOXWDQZWLT2MSI7Q',
      'intra-round-offset': 12,
      'last-valid': 16880429,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634495979,
      sender: 'LJREQFCIBUVJO2QCPNACZEMHFM2EROMG7WHDDAPJCNXZWDCHA2FUMOFJHY',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBtz8j7IBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 1,
        'asset-id': 358640066,
        'close-amount': 0,
        'close-to': 'FVWV6U52JQ45CY5YEQRLNCIJ7F5SGRSEC7SUAEUVQI6SWB57BTZ6P7VHVM',
        receiver: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879538,
      fee: 1000,
      'first-valid': 16879533,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'auGRC/hfDD6WGCW6r3BJ6L3fB3oaNaploNpiIDONEQ8=',
      id: 'PQK2S3QA57O426MPAXQCGVIGBBMHLQSQ6HXIMMD7XC77W6TLSZNQ',
      'intra-round-offset': 46,
      'last-valid': 16880533,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634496359,
      sender: 'LJREQFCIBUVJO2QCPNACZEMHFM2EROMG7WHDDAPJCNXZWDCHA2FUMOFJHY',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBtz8j7IBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'R7C5B7XZR7KO5GIVJWOJES6VPRPGADQXTQJ4YTU2PVKBXHTXVFCVZ4KDVY',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879701,
      fee: 1000,
      'first-valid': 16879688,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'CvjOvv/BFoxiQB2bMC82eF5fXINwlbzw9HDnt0v5R1k=',
      id: 'FUAZUCTDLPGRZVF3DAQNDOUUPB4ADHQZG3YRJTBWCA4MZOCUWMTQ',
      'intra-round-offset': 23,
      'last-valid': 16880688,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634497079,
      sender: 'R7C5B7XZR7KO5GIVJWOJES6VPRPGADQXTQJ4YTU2PVKBXHTXVFCVZ4KDVY',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBo6mkbIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 1,
        'close-to': 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
        receiver: 'R7C5B7XZR7KO5GIVJWOJES6VPRPGADQXTQJ4YTU2PVKBXHTXVFCVZ4KDVY',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879896,
      fee: 1000,
      'first-valid': 16879890,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'Jhs5DvX09GaDeWOjqpKAhOJ2++8wbl08t0BHZeg/Y7Y=',
      id: 'V2XZQRPQVU2HYKDCDS6FN4KAEUQV4JSYPAMCCGPYQJZ6VK5TRTNA',
      'intra-round-offset': 17,
      'last-valid': 16880890,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634497933,
      sender: 'R7C5B7XZR7KO5GIVJWOJES6VPRPGADQXTQJ4YTU2PVKBXHTXVFCVZ4KDVY',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBo6mkbIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'WWJGPDC2NBPZT4JKVK6FPJCXPHYIYAD7HVKICTUPHOODRZ2AMO7MGNZ7F4',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16879919,
      fee: 1000,
      'first-valid': 16879904,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'UFI0miOlPCYR+fXEKpbvc5TJR2K9qUljHFVqkvYvN+E=',
      id: '5TOHFLFRBRZSN3IC26FHHVVACYGHIC4QWMCN3VDABBRGKI2KZQLA',
      'intra-round-offset': 40,
      'last-valid': 16880904,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634498033,
      sender: 'WWJGPDC2NBPZT4JKVK6FPJCXPHYIYAD7HVKICTUPHOODRZ2AMO7MGNZ7F4',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBp2jkrIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 1,
        'close-to': 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
        receiver: 'WWJGPDC2NBPZT4JKVK6FPJCXPHYIYAD7HVKICTUPHOODRZ2AMO7MGNZ7F4',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886676,
      fee: 1000,
      'first-valid': 16886670,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'Z8RQPU4SI8q+ayDUShq2qxTaXuTfcCz9Gz14f5hms1s=',
      id: 'JJMSH4JLTSPTZWMP4LDXJBAZHQJCBVQP7KVKUKM52GVBROCZLYXA',
      'intra-round-offset': 49,
      'last-valid': 16887670,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527620,
      sender: 'WWJGPDC2NBPZT4JKVK6FPJCXPHYIYAD7HVKICTUPHOODRZ2AMO7MGNZ7F4',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBp2jkrIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: '5P5C72AQ4MCYPYGZHWXM7MASIYFCV7PQVVVSXNXBMCPT63YR2PRA',
      'intra-round-offset': 16,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBvG8rbIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
  ],
};
const d = {
  balances: [
    {
      address: 'FVWV6U52JQ45CY5YEQRLNCIJ7F5SGRSEC7SUAEUVQI6SWB57BTZ6P7VHVM',
      amount: 0,
      deleted: false,
      'is-frozen': false,
      'opted-in-at-round': 16879227,
    },
    {
      address: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      amount: 0,
      deleted: false,
      'is-frozen': false,
      'opted-in-at-round': 16665575,
    },
    {
      address: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      amount: 0,
      deleted: false,
      'is-frozen': false,
      'opted-in-at-round': 16879538,
    },
    {
      address: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      amount: 1,
      deleted: false,
      'is-frozen': false,
      'opted-in-at-round': 16886698,
    },
    {
      address: 'YZBZ2AWVA7PLV7JAKXMS4AN7WY5EFENHZE2J5TJ4RWKXGZEVXLGHWP2MH4',
      amount: 0,
      deleted: false,
      'is-frozen': false,
      'opted-in-at-round': 16888421,
    },
  ],
  'current-round': 16889366,
  'next-token': 'YZBZ2AWVA7PLV7JAKXMS4AN7WY5EFENHZE2J5TJ4RWKXGZEVXLGHWP2MH4',
};
const e = {
  'current-round': 16889554,
  'next-token': 'qqsBAQAAAAARAAAA',
  transactions: [
    {
      'asset-transfer-transaction': {
        amount: 1,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: 'NMCJKFV7U73V4GP7FYRA7GYE76ZTDJU2JUUOC54YETMC25Q56BVQ',
      'intra-round-offset': 17,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      'sender-rewards': 0,
      signature: {
        sig:
          '6ftlXXpKOWbLxaxRBwXlC8wK8Ks0nJfsKlVTHWDL2qc/172GNmnyaXiMgOObnlJB7chAvaEdvEaZnwdbeSk+Dw==',
      },
      'tx-type': 'axfer',
    },
  ],
};
const f = {
  'current-round': 16889853,
  'next-token': 'qqsBAQAAAAAaAAAA',
  transactions: [
    {
      'application-transaction': {
        accounts: [],
        'application-args': [],
        'application-id': 374015423,
        'foreign-apps': [],
        'foreign-assets': [],
        'global-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'on-completion': 'delete',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886694,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'MP19iA/0iwYPO1E4bPVjzokZL6IOn3C0/TxKz8tgDTs=',
      id: 'TMEJM7S7ARM6DUXZAPED22FBCPIPECGB23I3WVSDP6UTNIN4CQQA',
      'intra-round-offset': 9,
      'last-valid': 16887694,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'WE5PBAJOKECATUNZYQA3F53UY5ILSGBRIDRLJ23ZYIOJIYIVTR5APCCW3I',
      'sender-rewards': 0,
      signature: {
        sig:
          '7Q9fsaI+QAa/09zUTJ6mdZ16Nf2WwPcC9+M5w6jkSaDiTYsQL+tKZUi3Wshywz2so2be+e5Db+G1v/9OkYglBg==',
      },
      'tx-type': 'appl',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358582232,
        'close-amount': 1,
        'close-to': 'WE5PBAJOKECATUNZYQA3F53UY5ILSGBRIDRLJ23ZYIOJIYIVTR5APCCW3I',
        receiver: 'N46XA7GEHDKOASJFHTKYMSTJ7FYZCFHI4E6AVNKHBUHCNEJSEA7A7SGIKE',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886694,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'MP19iA/0iwYPO1E4bPVjzokZL6IOn3C0/TxKz8tgDTs=',
      id: 'TOBXIO4ZRW7YJQ7BOQCKJPK3OZA4BPLXZUCF4WXRIYUMZIKE7IBQ',
      'intra-round-offset': 10,
      'last-valid': 16887694,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'N46XA7GEHDKOASJFHTKYMSTJ7FYZCFHI4E6AVNKHBUHCNEJSEA7A7SGIKE',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBr+LrLIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'close-rewards': 0,
      'closing-amount': 200000,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886694,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'MP19iA/0iwYPO1E4bPVjzokZL6IOn3C0/TxKz8tgDTs=',
      id: 'O7O4E5T6L3TLEJAVTLRDRMKDBFHW24G5RU2BNSZOANDTQ52FF3HA',
      'intra-round-offset': 11,
      'last-valid': 16887694,
      note: 'YWIyLmdhbGxlcnk=',
      'payment-transaction': {
        amount: 0,
        'close-amount': 200000,
        'close-remainder-to':
          'WE5PBAJOKECATUNZYQA3F53UY5ILSGBRIDRLJ23ZYIOJIYIVTR5APCCW3I',
        receiver: 'MNGOLDXO723TDRM6527G7OZ2N7JLNGCIH6U2R4MOCPPLONE3ZATOBN7OQM',
      },
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'N46XA7GEHDKOASJFHTKYMSTJ7FYZCFHI4E6AVNKHBUHCNEJSEA7A7SGIKE',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBr+LrLIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'pay',
    },
    {
      'application-transaction': {
        accounts: [],
        'application-args': [],
        'application-id': 374038129,
        'foreign-apps': [],
        'foreign-assets': [],
        'global-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'on-completion': 'noop',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      'global-state-delta': [
        {
          key: 'ZWE=',
          value: {
            action: 1,
            bytes: 'o75IbPameXMe5kcGzhCMctq/PyKa+9AhMKUcEySlu+M=',
            uint: 0,
          },
        },
      ],
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: '24LWHTC27F5VSXFBDKZFH5NZF4EJXNTGNHLPN22KOIZVSA5B4JBQ',
      'intra-round-offset': 14,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      'sender-rewards': 0,
      signature: {
        sig:
          '36FXMrosNIhbSt8nSYA097idWx7B5rauirS0vHqP4Gye8LSqWIDPqrhRj/xXLKa1cyOCURaVJffJ+0mcfzYyAw==',
      },
      'tx-type': 'appl',
    },
    {
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: 'G6JUWXPIIBE3CDN3F4K27JOQUMYUWE6ML4RW4BRXRZM7KDY5UIDQ',
      'intra-round-offset': 15,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'payment-transaction': {
        amount: 203000,
        'close-amount': 0,
        receiver: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      },
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      'sender-rewards': 0,
      signature: {
        sig:
          'm1aGaZhQEmI1SqC+XfOhOTeHWcSfcKAcVvpdgIaM5AlCDcHoTKU+Exv6Vlcs4kJtsK7uGxDNJ89f9CWltXNQBA==',
      },
      'tx-type': 'pay',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: '5P5C72AQ4MCYPYGZHWXM7MASIYFCV7PQVVVSXNXBMCPT63YR2PRA',
      'intra-round-offset': 16,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBvG8rbIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 1,
        'asset-id': 358640066,
        'close-amount': 0,
        receiver: 'UO7EQ3HWUZ4XGHXGI4DM4EEMOLNL6PZCTL55AIJQUUOBGJFFXPRZYB2VVA',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'uNrYubaUkFo69PO1XVcBfbgT1YVsLf8zBqWQZR+6HBg=',
      id: 'NMCJKFV7U73V4GP7FYRA7GYE76ZTDJU2JUUOC54YETMC25Q56BVQ',
      'intra-round-offset': 17,
      'last-valid': 16887685,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      'sender-rewards': 0,
      signature: {
        sig:
          '6ftlXXpKOWbLxaxRBwXlC8wK8Ks0nJfsKlVTHWDL2qc/172GNmnyaXiMgOObnlJB7chAvaEdvEaZnwdbeSk+Dw==',
      },
      'tx-type': 'axfer',
    },
    {
      'application-transaction': {
        accounts: [],
        'application-args': [],
        'application-id': 374038179,
        'foreign-apps': [],
        'foreign-assets': [],
        'global-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'on-completion': 'noop',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886687,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      'global-state-delta': [
        {
          key: 'ZWE=',
          value: {
            action: 1,
            bytes: 'OjndYi7X3T4DJ6qkfEfxKKB4zSXNzypKReRRavn4mKY=',
            uint: 0,
          },
        },
      ],
      group: 'k9uvCXP1Y3VK/4xE6uaSkXeF3IlRMetVlu3qbhASdRg=',
      id: 'WZPHJE7XHFCSPYGUWZK7VKDETN26QH56WSKD5KG6X2IRSSGAHOLQ',
      'intra-round-offset': 23,
      'last-valid': 16887687,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'YZBZ2AWVA7PLV7JAKXMS4AN7WY5EFENHZE2J5TJ4RWKXGZEVXLGHWP2MH4',
      'sender-rewards': 0,
      signature: {
        sig:
          'fLOy0fgTetBLcl3UegqMt/zZIaJSbwK7TrBSbmz1DyanqLFJ1Svm1YGC6uq+1Rw8jracfkEIuJeGhVb6WE/QDw==',
      },
      'tx-type': 'appl',
    },
    {
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886687,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'k9uvCXP1Y3VK/4xE6uaSkXeF3IlRMetVlu3qbhASdRg=',
      id: '26TJG54MYRRW5KHYCKRWHWUKVD4NOC5EGRPGELHOSHXM4FPWVX5Q',
      'intra-round-offset': 24,
      'last-valid': 16887687,
      note: 'YWIyLmdhbGxlcnk=',
      'payment-transaction': {
        amount: 227000,
        'close-amount': 0,
        receiver: 'HI452YRO27OT4AZHVKSHYR7RFCQHRTJFZXHSUSSF4RIWV6PYTCTC2OEJBM',
      },
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'YZBZ2AWVA7PLV7JAKXMS4AN7WY5EFENHZE2J5TJ4RWKXGZEVXLGHWP2MH4',
      'sender-rewards': 0,
      signature: {
        sig:
          '5/JszGd28rGJr8EAGBoZ6hmr3lUUaHbQHNsyDOlemOcZfdIonvrIKH3gN4YEbmsbWLXhp4NSr/bnNEJIKA+wDw==',
      },
      'tx-type': 'pay',
    },
    {
      'asset-transfer-transaction': {
        amount: 0,
        'asset-id': 374036129,
        'close-amount': 0,
        receiver: 'HI452YRO27OT4AZHVKSHYR7RFCQHRTJFZXHSUSSF4RIWV6PYTCTC2OEJBM',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886687,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'k9uvCXP1Y3VK/4xE6uaSkXeF3IlRMetVlu3qbhASdRg=',
      id: 'R4RDUEHUAN4QOOXFYGOOOWUZMUVNNAMT756JCTZBIT7JTNN3VRXQ',
      'intra-round-offset': 25,
      'last-valid': 16887687,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'HI452YRO27OT4AZHVKSHYR7RFCQHRTJFZXHSUSSF4RIWV6PYTCTC2OEJBM',
      'sender-rewards': 0,
      signature: {
        logicsig: {
          args: [],
          logic:
            'AiAFBqO9rbIBAwQFMwAQIhIzABgjEhAyBCQSEEAAazMAECISMwAYIxIQMgQlEhBAADozABAiEjMAGCMSEDIEIQQSEEAAAQAzACAyAxIzASAyAxIQMwIgMgMSEDMDIDIDEhAzBCAyAxIQQgAyMwAgMgMSMwEgMgMSEDMCIDIDEhAzAyAyAxIQQgAUMwAgMgMSMwEgMgMSEDMCIDIDEhA=',
        },
      },
      'tx-type': 'axfer',
    },
    {
      'asset-transfer-transaction': {
        amount: 25,
        'asset-id': 374036129,
        'close-amount': 0,
        receiver: 'HI452YRO27OT4AZHVKSHYR7RFCQHRTJFZXHSUSSF4RIWV6PYTCTC2OEJBM',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886698,
      fee: 1000,
      'first-valid': 16886687,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      group: 'k9uvCXP1Y3VK/4xE6uaSkXeF3IlRMetVlu3qbhASdRg=',
      id: 'N3Y75UAWMLMNQHMYHXKGRYX46JL2JOZXIIOSNFBNOT6U3VQZIUOA',
      'intra-round-offset': 26,
      'last-valid': 16887687,
      note: 'YWIyLmdhbGxlcnk=',
      'receiver-rewards': 0,
      'round-time': 1634527718,
      sender: 'YZBZ2AWVA7PLV7JAKXMS4AN7WY5EFENHZE2J5TJ4RWKXGZEVXLGHWP2MH4',
      'sender-rewards': 0,
      signature: {
        sig:
          'I4cZLs5BNsemq0MnjOjxvOau+nddCA4M89A0WPu42kysrXGK1olIXXv5rPM084Rz1Z+p6CVpetbJncyktu8CDg==',
      },
      'tx-type': 'axfer',
    },
  ],
};
const g = {
  'current-round': 16891093,
  'next-token': 'pKsBAQAAAAAoAAAA',
  transactions: [
    {
      'application-transaction': {
        accounts: [],
        'application-args': [
          'Y0zlju7+tzHFnu6+b7s6b9K2mEg/qajxjhPetzSbyCY=',
          'FWBpwg==',
          'BRD/QA==',
          'AQ==',
          'AQ==',
        ],
        'application-id': 0,
        'approval-program':
          'AiAJAAUEAegHCgOQqgyQTiYIAmVhAmNhAmlkAm1xAnVzAnVwAnVhAnJhMRgiEkADNiIoZTUCNQM0AhQxGSISEEACgzEZIxIpZDEAEhBAAfIxGSISMRkjEhFAAAEAIipkcAA1BjUHNAZAAP4zARAkEjMCECUSEDMDECQSEDMDEiUPEDMDEitkDhBAAAEAJwQnBGQzAxIIZzMBADMBFBIzAREqZBIQMwESIhIQMwETMgMSEDMBFTIDEhAzAgAzAxQSEDMCByhkEhAzAwAoZBIQMwMRKmQSEDMCCDMDEicFZAsSEDMDEzIDEhAzAwEhBA4QJwRkJwZkEkAACTMDFTIDEkIABjMDFSlkEhBAAAEAJwRkJwZkEkAAEDEZIhIyBCQSEEAAAQBCAD8xGSMSMgQjEhAzBBAlEhAzBAAoZBIQMwQHJwdkEhAzBAgnBGQnBWQLIQUKEhAzBAkpZBIQMwQBIQQOEEAAAQAlQzMBECUSMwIQJBIQMwISJQ8QMwISK2QOEEAAAQAnBCcEZDMCEghnMwEAMwIUEjMBByhkEhAzAgAoZBIQMwIRKmQSEDMBCDMCEicFZAsSEDMCEzIDEhAzAgEhBA4QJwRkJwZkEkAACTMCFTIDEkIABjMCFSlkEhBAAAEAJwRkJwZkEkAAETEZIhIyBCEGEhBAAAEAQgA/MRkjEjIEJBIQMwMQJRIQMwMAKGQSEDMDBycHZBIQMwMIJwRkJwVkCyEFChIQMwMJKWQSEDMDASEEDhBAAAEAJUNCAakiKGU1BDUFNARAABAyBCUSMSAyAxIQQAABACVDMgQhBhIzARAkEhAzAQAoZBIQMwEUKGQSEDMBESpkEhAzARIiEhAzARMyAxIQMwEVMQASEDMCECUSEDMCAChkEhAzAgcnB2QSEDMCCCcEZCcFZAshBQoSEDMCCTEAEhBAAAEAJUNCASUyBCQSKWQxABIQMwEQJRIQMwIQJBIQMwMQJBIQQAABACgzAQdnMwEAMQASMwEIIQchBCcGZAsIEhAzAQkyAxIQMwIAKGQSEDMCFChkEhAzAhEqZBIQMwISIhIQMwITMgMSEDMCFTIDEhAzAgEhBA4QMwMAMQASEDMDFChkEhAzAxEqZBIQMwMSJwZkEhAzAxMyAxIQMwMVMgMSEEAAAQAlQzEZIhIyBCUSEDEbIxIQMSAyAxIQQAABACkxAGcnBzYaAGcqNhoBF2cnBTYaAhdnJwY2GgMXZys2GgQXZycEImcnBmQlDycGZCEEDhAnBWQhCA8QJwVkIQgYIhIQK2QlDxArZCcGZA4QQAABACIqZHAANQA1ATQANAEnBmQPEEAAAQAlQw==',
        'clear-state-program': 'AiACAwExGSISQAABACND',
        'foreign-apps': [],
        'foreign-assets': [],
        'global-state-schema': { 'num-byte-slice': 3, 'num-uint': 5 },
        'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        'on-completion': 'noop',
      },
      'close-rewards': 0,
      'closing-amount': 0,
      'confirmed-round': 16886692,
      'created-application-index': 374038129,
      fee: 1000,
      'first-valid': 16886685,
      'genesis-hash': 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      'genesis-id': 'mainnet-v1.0',
      'global-state-delta': [
        {
          key: 'Y2E=',
          value: {
            action: 1,
            bytes: 'kx6gsm+NpzY8JBfNz8EInrzegKRMpfeqXwsZ9io/tQY=',
            uint: 0,
          },
        },
        { key: 'aWQ=', value: { action: 2, uint: 358640066 } },
        { key: 'bXE=', value: { action: 2, uint: 1 } },
        {
          key: 'cmE=',
          value: {
            action: 1,
            bytes: 'Y0zlju7+tzHFnu6+b7s6b9K2mEg/qajxjhPetzSbyCY=',
            uint: 0,
          },
        },
        { key: 'dWE=', value: { action: 2, uint: 1 } },
        { key: 'dXA=', value: { action: 2, uint: 85000000 } },
        { key: 'dXM=', value: { action: 2, uint: 0 } },
      ],
      id: 'LMPXKC2AYQ4V4A5MQW6KSX7LNVBIIEK6FDFYF5KCAIFBVCSDQN6A',
      'intra-round-offset': 40,
      'last-valid': 16887685,
      note:
        'YWIyLmdhbGxlcnl7InZlcnNpb24iOjIsImRpc3BsYXlVcmwiOiJpcGZzOi8vYmFma3JlaWJyamxia2d4anAzb3dsZHNpcnJ1c2JpZjdoanhldGN5b2xzcG56dmlsNWw3aGE2aXFtam0iLCJzZW5zaXRpdmVDb250ZW50IjpmYWxzZX0=',
      'receiver-rewards': 0,
      'round-time': 1634527691,
      sender: 'SMPKBMTPRWTTMPBEC7G47QIIT26N5AFEJSS7PKS7BMM7MKR7WUDE7Q4QVY',
      'sender-rewards': 0,
      signature: {
        sig:
          'VL+TMuKcUHHl9bbiPk042JDwSv8gZ5+uflXouZx4fxy5GUpphRZheTOElGCxY5Y+J4HGvlkb4ZZaTsZfNvibBA==',
      },
      'tx-type': 'appl',
    },
  ],
};
const h = {
  account: {
    address: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
    amount: 509279544,
    'amount-without-pending-rewards': 509262747,
    'apps-total-schema': { 'num-byte-slice': 6, 'num-uint': 10 },
    assets: [
      {
        amount: 0,
        'asset-id': 242346016,
        creator: '',
        deleted: false,
        'is-frozen': true,
        'opted-in-at-round': 16676595,
      },
      {
        amount: 0,
        'asset-id': 357072416,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16676664,
      },
      {
        amount: 0,
        'asset-id': 357074861,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16676681,
      },
      {
        amount: 0,
        'asset-id': 242345487,
        creator: '',
        deleted: false,
        'is-frozen': true,
        'opted-in-at-round': 16677039,
      },
      {
        amount: 0,
        'asset-id': 359199669,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16677091,
      },
      {
        amount: 0,
        'asset-id': 360558214,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16699467,
      },
      {
        amount: 0,
        'asset-id': 360581221,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16699824,
      },
      {
        amount: 1,
        'asset-id': 359223587,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16715816,
      },
      {
        amount: 0,
        'asset-id': 360717205,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16734779,
      },
      {
        amount: 0,
        'asset-id': 360687194,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16734799,
      },
      {
        amount: 1,
        'asset-id': 361978773,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16734831,
      },
      {
        amount: 1,
        'asset-id': 365132070,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16762242,
      },
      {
        amount: 0,
        'asset-id': 367038330,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16782058,
      },
      {
        amount: 0,
        'asset-id': 368563762,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16802434,
      },
      {
        amount: 1,
        'asset-id': 358788694,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16949825,
      },
      {
        amount: 0,
        'asset-id': 378935287,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16957834,
      },
      {
        amount: 0,
        'asset-id': 378936898,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16957870,
      },
      {
        amount: 0,
        'asset-id': 378938654,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16957908,
      },
      {
        amount: 0,
        'asset-id': 379064401,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16960197,
      },
      {
        amount: 0,
        'asset-id': 379067040,
        creator: '',
        deleted: false,
        'is-frozen': false,
        'opted-in-at-round': 16960250,
      },
    ],
    'created-apps': [
      {
        'created-at-round': 16782081,
        deleted: false,
        id: 367040144,
        params: {
          'approval-program':
            'AiAJAAUEAegHCgOQqgyQTiYIAmVhAmNhAmlkAm1xAnVzAnVwAnVhAnJhMRgiEkADNiIoZTUCNQM0AhQxGSISEEACgzEZIxIpZDEAEhBAAfIxGSISMRkjEhFAAAEAIipkcAA1BjUHNAZAAP4zARAkEjMCECUSEDMDECQSEDMDEiUPEDMDEitkDhBAAAEAJwQnBGQzAxIIZzMBADMBFBIzAREqZBIQMwESIhIQMwETMgMSEDMBFTIDEhAzAgAzAxQSEDMCByhkEhAzAwAoZBIQMwMRKmQSEDMCCDMDEicFZAsSEDMDEzIDEhAzAwEhBA4QJwRkJwZkEkAACTMDFTIDEkIABjMDFSlkEhBAAAEAJwRkJwZkEkAAEDEZIhIyBCQSEEAAAQBCAD8xGSMSMgQjEhAzBBAlEhAzBAAoZBIQMwQHJwdkEhAzBAgnBGQnBWQLIQUKEhAzBAkpZBIQMwQBIQQOEEAAAQAlQzMBECUSMwIQJBIQMwISJQ8QMwISK2QOEEAAAQAnBCcEZDMCEghnMwEAMwIUEjMBByhkEhAzAgAoZBIQMwIRKmQSEDMBCDMCEicFZAsSEDMCEzIDEhAzAgEhBA4QJwRkJwZkEkAACTMCFTIDEkIABjMCFSlkEhBAAAEAJwRkJwZkEkAAETEZIhIyBCEGEhBAAAEAQgA/MRkjEjIEJBIQMwMQJRIQMwMAKGQSEDMDBycHZBIQMwMIJwRkJwVkCyEFChIQMwMJKWQSEDMDASEEDhBAAAEAJUNCAakiKGU1BDUFNARAABAyBCUSMSAyAxIQQAABACVDMgQhBhIzARAkEhAzAQAoZBIQMwEUKGQSEDMBESpkEhAzARIiEhAzARMyAxIQMwEVMQASEDMCECUSEDMCAChkEhAzAgcnB2QSEDMCCCcEZCcFZAshBQoSEDMCCTEAEhBAAAEAJUNCASUyBCQSKWQxABIQMwEQJRIQMwIQJBIQMwMQJBIQQAABACgzAQdnMwEAMQASMwEIIQchBCcGZAsIEhAzAQkyAxIQMwIAKGQSEDMCFChkEhAzAhEqZBIQMwISIhIQMwITMgMSEDMCFTIDEhAzAgEhBA4QMwMAMQASEDMDFChkEhAzAxEqZBIQMwMSJwZkEhAzAxMyAxIQMwMVMgMSEEAAAQAlQzEZIhIyBCUSEDEbIxIQMSAyAxIQQAABACkxAGcnBzYaAGcqNhoBF2cnBTYaAhdnJwY2GgMXZys2GgQXZycEImcnBmQlDycGZCEEDhAnBWQhCA8QJwVkIQgYIhIQK2QlDxArZCcGZA4QQAABACIqZHAANQA1ATQANAEnBmQPEEAAAQAlQw==',
          'clear-state-program': 'AiACAwExGSISQAABACND',
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          'global-state': [
            { key: 'bXE=', value: { bytes: '', type: 2, uint: 10 } },
            {
              key: 'cmE=',
              value: {
                bytes: 'fPwQGBzOpIEOTcPD1SlzsKiNjsGYoglOtVfM19JC9Kk=',
                type: 1,
                uint: 0,
              },
            },
            { key: 'dWE=', value: { bytes: '', type: 2, uint: 10 } },
            { key: 'dXA=', value: { bytes: '', type: 2, uint: 20000000 } },
            { key: 'dXM=', value: { bytes: '', type: 2, uint: 5 } },
            {
              key: 'Y2E=',
              value: {
                bytes: 'fPwQGBzOpIEOTcPD1SlzsKiNjsGYoglOtVfM19JC9Kk=',
                type: 1,
                uint: 0,
              },
            },
            { key: 'aWQ=', value: { bytes: '', type: 2, uint: 367038330 } },
            {
              key: 'ZWE=',
              value: {
                bytes: 'cMlo8t7u7XOLq8rR78O0xAi9AjIBZmZeYB1HHGeqIpg=',
                type: 1,
                uint: 0,
              },
            },
          ],
          'global-state-schema': { 'num-byte-slice': 3, 'num-uint': 5 },
          'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        },
      },
      {
        'created-at-round': 16802457,
        deleted: false,
        id: 368566069,
        params: {
          'approval-program':
            'AiAJAAUEAegHCgOQqgyQTiYIAmVhAmNhAmlkAm1xAnVzAnVwAnVhAnJhMRgiEkADNiIoZTUCNQM0AhQxGSISEEACgzEZIxIpZDEAEhBAAfIxGSISMRkjEhFAAAEAIipkcAA1BjUHNAZAAP4zARAkEjMCECUSEDMDECQSEDMDEiUPEDMDEitkDhBAAAEAJwQnBGQzAxIIZzMBADMBFBIzAREqZBIQMwESIhIQMwETMgMSEDMBFTIDEhAzAgAzAxQSEDMCByhkEhAzAwAoZBIQMwMRKmQSEDMCCDMDEicFZAsSEDMDEzIDEhAzAwEhBA4QJwRkJwZkEkAACTMDFTIDEkIABjMDFSlkEhBAAAEAJwRkJwZkEkAAEDEZIhIyBCQSEEAAAQBCAD8xGSMSMgQjEhAzBBAlEhAzBAAoZBIQMwQHJwdkEhAzBAgnBGQnBWQLIQUKEhAzBAkpZBIQMwQBIQQOEEAAAQAlQzMBECUSMwIQJBIQMwISJQ8QMwISK2QOEEAAAQAnBCcEZDMCEghnMwEAMwIUEjMBByhkEhAzAgAoZBIQMwIRKmQSEDMBCDMCEicFZAsSEDMCEzIDEhAzAgEhBA4QJwRkJwZkEkAACTMCFTIDEkIABjMCFSlkEhBAAAEAJwRkJwZkEkAAETEZIhIyBCEGEhBAAAEAQgA/MRkjEjIEJBIQMwMQJRIQMwMAKGQSEDMDBycHZBIQMwMIJwRkJwVkCyEFChIQMwMJKWQSEDMDASEEDhBAAAEAJUNCAakiKGU1BDUFNARAABAyBCUSMSAyAxIQQAABACVDMgQhBhIzARAkEhAzAQAoZBIQMwEUKGQSEDMBESpkEhAzARIiEhAzARMyAxIQMwEVMQASEDMCECUSEDMCAChkEhAzAgcnB2QSEDMCCCcEZCcFZAshBQoSEDMCCTEAEhBAAAEAJUNCASUyBCQSKWQxABIQMwEQJRIQMwIQJBIQMwMQJBIQQAABACgzAQdnMwEAMQASMwEIIQchBCcGZAsIEhAzAQkyAxIQMwIAKGQSEDMCFChkEhAzAhEqZBIQMwISIhIQMwITMgMSEDMCFTIDEhAzAgEhBA4QMwMAMQASEDMDFChkEhAzAxEqZBIQMwMSJwZkEhAzAxMyAxIQMwMVMgMSEEAAAQAlQzEZIhIyBCUSEDEbIxIQMSAyAxIQQAABACkxAGcnBzYaAGcqNhoBF2cnBTYaAhdnJwY2GgMXZys2GgQXZycEImcnBmQlDycGZCEEDhAnBWQhCA8QJwVkIQgYIhIQK2QlDxArZCcGZA4QQAABACIqZHAANQA1ATQANAEnBmQPEEAAAQAlQw==',
          'clear-state-program': 'AiACAwExGSISQAABACND',
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          'global-state': [
            { key: 'dXM=', value: { bytes: '', type: 2, uint: 30 } },
            {
              key: 'Y2E=',
              value: {
                bytes: 'fPwQGBzOpIEOTcPD1SlzsKiNjsGYoglOtVfM19JC9Kk=',
                type: 1,
                uint: 0,
              },
            },
            { key: 'aWQ=', value: { bytes: '', type: 2, uint: 368563762 } },
            { key: 'bXE=', value: { bytes: '', type: 2, uint: 100 } },
            {
              key: 'cmE=',
              value: {
                bytes: 'fPwQGBzOpIEOTcPD1SlzsKiNjsGYoglOtVfM19JC9Kk=',
                type: 1,
                uint: 0,
              },
            },
            { key: 'dWE=', value: { bytes: '', type: 2, uint: 100 } },
            { key: 'dXA=', value: { bytes: '', type: 2, uint: 2000000 } },
            {
              key: 'ZWE=',
              value: {
                bytes: '6Bv27jrdUZ5MJ8XsQ7aewBfIsduiW5ou39PdwuvYYk4=',
                type: 1,
                uint: 0,
              },
            },
          ],
          'global-state-schema': { 'num-byte-slice': 3, 'num-uint': 5 },
          'local-state-schema': { 'num-byte-slice': 0, 'num-uint': 0 },
        },
      },
    ],
    'created-assets': [
      {
        'created-at-round': 16677091,
        deleted: false,
        index: 359199669,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Mexican Skull',
          'name-b64': 'TWV4aWNhbiBTa3VsbA==',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 10,
          url:
            'https://ipfs.io/ipfs/bafybeifqykpfmlpkwjxop4b6rloacqep37xb67gauwnpvv7aox5tug7y4a',
          'url-b64':
            'aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFmeWJlaWZxeWtwZm1scGt3anhvcDRiNnJsb2FjcWVwMzd4YjY3Z2F1d25wdnY3YW94NXR1Zzd5NGE=',
        },
      },
      {
        'created-at-round': 16699467,
        deleted: false,
        index: 360558214,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'F U',
          'name-b64': 'RiBV',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 10,
          url:
            'https://ipfs.io/ipfs/bafybeicquxx37xvka764inyfduwxg2o33474okfy4v64fvtvgbs6vuyzny',
          'url-b64':
            'aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFmeWJlaWNxdXh4Mzd4dmthNzY0aW55ZmR1d3hnMm8zMzQ3NG9rZnk0djY0ZnZ0dmdiczZ2dXl6bnk=',
        },
      },
      {
        'created-at-round': 16699824,
        deleted: false,
        index: 360581221,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Cardboard Kid',
          'name-b64': 'Q2FyZGJvYXJkIEtpZA==',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 10,
          url:
            'https://ipfs.io/ipfs/bafybeidsofealpmsb3dqadepb5egl3uamdevkyw3jfw4a4bwltsdhq37oa',
          'url-b64':
            'aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFmeWJlaWRzb2ZlYWxwbXNiM2RxYWRlcGI1ZWdsM3VhbWRldmt5dzNqZnc0YTRid2x0c2RocTM3b2E=',
        },
      },
      {
        'created-at-round': 16782058,
        deleted: false,
        index: 367038330,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Peruvian Torito',
          'name-b64': 'UGVydXZpYW4gVG9yaXRv',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 10,
          url: 'ipfs://bafybeidvnsep45h2xsbu7ggxsf4mte3kba7h5w77men3jyx4lhjoyqmtay',
          'url-b64':
            'aXBmczovL2JhZnliZWlkdm5zZXA0NWgyeHNidTdnZ3hzZjRtdGUza2JhN2g1dzc3bWVuM2p5eDRsaGpveXFtdGF5',
        },
      },
      {
        'created-at-round': 16802434,
        deleted: false,
        index: 368563762,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'A warm welcome!',
          'name-b64': 'QSB3YXJtIHdlbGNvbWUh',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 100,
          url: 'ipfs://bafybeihukmhdiivhkqmyxgotuivztdjxy6rqf3z46gvzzlh5zfkzyxtmme',
          'url-b64':
            'aXBmczovL2JhZnliZWlodWttaGRpaXZoa3FteXhnb3R1aXZ6dGRqeHk2cnFmM3o0Nmd2enpsaDV6Zmt6eXh0bW1l',
        },
      },
      {
        'created-at-round': 16957834,
        deleted: false,
        index: 378935287,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Leather Brown Mask 01',
          'name-b64': 'TGVhdGhlciBCcm93biBNYXNrIDAx',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 1,
          url: 'ipfs://bafybeieazme3u62kp3ucqfxsgxpntf65gbdbttkqk5dzq7meh54j5m2o54',
          'url-b64':
            'aXBmczovL2JhZnliZWllYXptZTN1NjJrcDN1Y3FmeHNneHBudGY2NWdiZGJ0dGtxazVkenE3bWVoNTRqNW0ybzU0',
        },
      },
      {
        'created-at-round': 16957870,
        deleted: false,
        index: 378936898,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: '7th Wave Orange Mask',
          'name-b64': 'N3RoIFdhdmUgT3JhbmdlIE1hc2s=',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 1,
          url: 'ipfs://bafybeid4h26ha2ct222s4rbfsm7cc3cdaxrmpe7nzlncphae5ls37cghyi',
          'url-b64':
            'aXBmczovL2JhZnliZWlkNGgyNmhhMmN0MjIyczRyYmZzbTdjYzNjZGF4cm1wZTduemxuY3BoYWU1bHMzN2NnaHlp',
        },
      },
      {
        'created-at-round': 16957908,
        deleted: false,
        index: 378938654,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Metalized Teju Purple Mask',
          'name-b64': 'TWV0YWxpemVkIFRlanUgUHVycGxlIE1hc2s=',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 1,
          url: 'ipfs://bafybeiaycij2ft3chm3qbfa6ngvhvlifw63z6fh7hdymj46s4pywugel7i',
          'url-b64':
            'aXBmczovL2JhZnliZWlheWNpajJmdDNjaG0zcWJmYTZuZ3ZodmxpZnc2M3o2Zmg3aGR5bWo0NnM0cHl3dWdlbDdp',
        },
      },
      {
        'created-at-round': 16960197,
        deleted: false,
        index: 379064401,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Rose Gold Woven Mask 01',
          'name-b64': 'Um9zZSBHb2xkIFdvdmVuIE1hc2sgMDE=',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 1,
          url: 'ipfs://bafybeic2ab7wnwlohtpt5g6yv4qttk4pco6jrgjwuldnwgbbscjuawiulu',
          'url-b64':
            'aXBmczovL2JhZnliZWljMmFiN3dud2xvaHRwdDVnNnl2NHF0dGs0cGNvNmpyZ2p3dWxkbndnYmJzY2p1YXdpdWx1',
        },
      },
      {
        'created-at-round': 16960250,
        deleted: false,
        index: 379067040,
        params: {
          creator: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          decimals: 0,
          'default-frozen': false,
          manager: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          name: 'Suzhou Peacock Blue Mask',
          'name-b64': 'U3V6aG91IFBlYWNvY2sgQmx1ZSBNYXNr',
          reserve: 'PT6BAGA4Z2SICDSNYPB5KKLTWCUI3DWBTCRASTVVK7GNPUSC6SUTJC52OA',
          total: 1,
          url: 'ipfs://bafybeif7olggnee47tsbgnkk7k3raduwoo5aqynf5hmyho2g4fimhfhbk4',
          'url-b64':
            'aXBmczovL2JhZnliZWlmN29sZ2duZWU0N3RzYmdua2s3azNyYWR1d29vNWFxeW5mNWhteWhvMmc0ZmltaGZoYms0',
        },
      },
    ],
    'created-at-round': 16676361,
    deleted: false,
    'pending-rewards': 16797,
    'reward-base': 208354,
    rewards: 276734,
    round: 16972249,
    'sig-type': 'sig',
    status: 'Offline',
  },
  'current-round': 16972249,
};
export type GetItemsForSale = Partial<typeof a>;
export type GetAssetInfo = Partial<typeof b>;
export type GetAssetSender = Partial<typeof c>;
export type GetAssetBalances = Partial<typeof d>;
export type GetSmartContract = Partial<typeof e>;
export type GetApplicationId = Partial<typeof f>;
export type GetApplicationDetails = Partial<typeof g>;
export type GetAccountInfo = Partial<typeof h>;
export type GetApplicationIdRequests =
  | GetItemsForSale
  | GetAssetSender
  | GetAssetBalances
  | GetSmartContract
  | GetApplicationId
  | GetApplicationDetails;

export type AccountAsset = GetAccountInfo['account']['assets'][0] & {
  potentialOwner?: string;
  price?: number;
};
export type AssetApi = GetAssetInfo['asset'] & AccountAsset;
export type UserApplication = GetAccountInfo['account']['created-apps'][0];
