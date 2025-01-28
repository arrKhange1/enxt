export interface FwbDetails {
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

export interface AgentDetails {
  Account_Number: string;
  IATA_Code: string;
  IATA_CASS_Adress: string;
  Participant_Identifier: string;
  Name: string;
  Place: string;
}

export interface PersonDetails {
  Account_Number: string | null;
  Names: string;
  Addresses: string;
  Place: string;
  State: string | null;
  Country_Code: string;
  Post_Code: string;
}

export type ShipperDetails = PersonDetails;

export type ConsigneeDetails = PersonDetails;

export interface ReportData {
  fWB_Details: FwbDetails;
  agent_Details: AgentDetails;
  shipper_Details: ShipperDetails;
  consignee_Details: ConsigneeDetails;
}

export interface ReportResponse {
  fwb_data: ReportData[];
  totalRecords: number;
}

export interface ReportUrlParams {
  sortOrder?: 'asc' | 'desc';
  sortName?: 'prefix' | 'serial' | 'origin' | 'destination' | 'act_weight' | 'unit';
  pageNumber: number;
  pageSize: number;
  from: string;
  until: string;
}
