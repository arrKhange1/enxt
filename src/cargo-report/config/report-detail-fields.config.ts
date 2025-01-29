type PersonalDetailFields = 'accountNumber' | 'name' | 'address' | 'place' | 'state' | 'countryCode' | 'postCode';

interface ReportFieldsConfig {
  fwbDetails: Record<
    | 'prefix'
    | 'serial'
    | 'origin'
    | 'destination'
    | 'pieces'
    | 'weight'
    | 'weightId'
    | 'volume'
    | 'volumeId'
    | 'goodsDescription',
    string
  >;
  agentDetails: Record<'accountNumber' | 'iataCode' | 'iataCassAddress' | 'participantId' | 'name' | 'place', string>;
  shipperDetails: Record<PersonalDetailFields, string>;
  consigneeDetails: Record<PersonalDetailFields, string>;
}

export const REPORT_FIELDS_CONFIG: ReportFieldsConfig = {
  fwbDetails: {
    prefix: 'Prefix',
    serial: 'Serial Nr',
    origin: 'Origin',
    destination: 'Destination',
    pieces: 'Pieces',
    weight: 'Actual Weight',
    weightId: 'Unit',
    volume: 'Volume',
    volumeId: 'Volume ID',
    goodsDescription: 'Goods Description',
  },
  agentDetails: {
    accountNumber: 'Account Number',
    name: 'Name',
    place: 'Place',
    iataCode: 'IATA Code',
    iataCassAddress: 'IATA CASS Address',
    participantId: 'Participant ID',
  },
  shipperDetails: {
    accountNumber: 'Account Number',
    name: 'Name',
    address: 'Address',
    place: 'Place',
    state: 'State',
    countryCode: 'Country Code',
    postCode: 'Post Code',
  },
  consigneeDetails: {
    accountNumber: 'Account Number',
    name: 'Name',
    address: 'Address',
    place: 'Place',
    state: 'State',
    countryCode: 'Country Code',
    postCode: 'Post Code',
  },
};
