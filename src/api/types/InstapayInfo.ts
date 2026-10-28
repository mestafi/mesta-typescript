
export interface InstapayInfo {
    /** Channel subject - specifies the bank or payment service provider */
    channelSubject: InstapayInfo.ChannelSubject;
    extendInfo: InstapayInfo.ExtendInfo;
}

export namespace InstapayInfo {
    /** Channel subject - specifies the bank or payment service provider */
    export const ChannelSubject = {
        Allbank: "allbank",
        Guinobatan: "guinobatan",
        Aub: "aub",
        Bananapay: "bananapay",
        Bangkomabuhay: "bangkomabuhay",
        Bankofchina: "bankofchina",
        Bankofcommerce: "bankofcommerce",
        Bpibanko: "bpibanko",
        Bdouni: "bdouni",
        Bdo: "bdo",
        Binangonan: "binangonan",
        Bpi: "bpi",
        Camalig: "camalig",
        Cardbank: "cardbank",
        Sme: "sme",
        Cebuanal: "cebuanal",
        Chinabank: "chinabank",
        Chinabanksavings: "chinabanksavings",
        Cimb: "cimb",
        Cisbayad: "cisbayad",
        Ctbc: "ctbc",
        Coins: "coins",
        Dbp: "dbp",
        Dumaguetebankx: "dumaguetebankx",
        Dungganon: "dungganon",
        Eastwest: "eastwest",
        Easypay: "easypay",
        Ecash: "ecash",
        Equicom: "equicom",
        Gcash: "gcash",
        Gotyme: "gotyme",
        Grabpay: "grabpay",
        Iremit: "iremit",
        Isla: "isla",
        Zybi: "zybi",
        EastwestRural: "eastwest_rural",
        Landbank: "landbank",
        Lazada: "lazada",
        Legazpi: "legazpi",
        LuLuMoney: "LuLuMoney",
        Malayan: "malayan",
        Marcopay: "marcopay",
        Mayabank: "mayabank",
        Maybank: "maybank",
        Metrobank: "metrobank",
        Mcb: "mcb",
        Netbank: "netbank",
        Omnipay: "omnipay",
        Ownb: "ownb",
        Palawanpay: "palawanpay",
        Partnerrb: "partnerrb",
        Paymaya: "paymaya",
        PayMongo: "PayMongo",
        Pbcom: "pbcom",
        Pdax: "pdax",
        Veterans: "veterans",
        Philtrust: "philtrust",
        Pnb: "pnb",
        Producers: "producers",
        Psbank: "psbank",
        Queenbank: "queenbank",
        Quezonbank: "quezonbank",
        Rcbc: "rcbc",
        Robinsons: "robinsons",
        Seabank: "seabank",
        Security: "security",
        Security2: "security2",
        Shopeepay: "shopeepay",
        Speedypay: "speedypay",
        StandardChartered: "standard_chartered",
        Starpay: "starpay",
        Sterling: "sterling",
        Sunsavings: "sunsavings",
        Tayocash: "tayocash",
        Tonik: "tonik",
        Traxionpay: "traxionpay",
        Ucpb: "ucpb",
        Unionbank: "unionbank",
        Uniondigital: "uniondigital",
        Ussc: "ussc",
        Wealth: "wealth",
    } as const;
    export type ChannelSubject = (typeof ChannelSubject)[keyof typeof ChannelSubject];

    export interface ExtendInfo {
        /** Recipient account number */
        recipientAccountNumber: string;
        /** Recipient name */
        recipientName: string;
        /** Recipient address */
        recipientAddress?: string | undefined;
        /** Remarks */
        remarks?: string | undefined;
    }
}
