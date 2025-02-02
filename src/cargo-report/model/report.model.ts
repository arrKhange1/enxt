interface FwbDetails {
  AWB_Prefix: string;
  AWB_Serial: string;
  AWB_Origin: string;
  AWB_Destination: string;
  Pieces: number;
  Weight_Actual: number;
  Weight_Identifier: string;
  Volume: number;
  Volume_Identifier: string | null;
  Goods_Description: string | null;
}

interface AgentDetails {
  Account_Number: string;
  IATA_Code: string;
  IATA_CASS_Adress: string;
  Participant_Identifier: string;
  Name: string;
  Place: string;
}

interface PersonDetails {
  Account_Number: string | null;
  Names: string;
  Addresses: string;
  Place: string;
  State: string | null;
  Country_Code: string;
  Post_Code: string;
}

type ShipperDetails = PersonDetails;

type ConsigneeDetails = PersonDetails;

interface FwbData {
  fWB_Details: FwbDetails;
  agent_Details: AgentDetails;
  shipper_Details: ShipperDetails;
  consignee_Details: ConsigneeDetails;
}

interface FwbReport {
  fwb_data: FwbData[];
  totalRecords: number;
}

interface ReportPageUrlParams {
  pageNumber: number;
  pageSize: number;
}

interface ReportTimeUrlParams {
  from: string | null;
  until: string | null;
}

interface ReportSortUrlParams {
  sortOrder: 'asc' | 'desc' | null;
  sortName: 'prefix' | 'serial' | 'origin' | 'destination' | 'act_weight' | 'unit' | null;
}

type ReportUrlParams = ReportPageUrlParams & ReportTimeUrlParams & ReportSortUrlParams;

export type { FwbData, FwbReport, ReportSortUrlParams, ReportUrlParams };
