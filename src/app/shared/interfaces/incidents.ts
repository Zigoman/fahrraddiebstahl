export interface Source {
  name: string;
  html_url: string;
  api_url: string;
}

export interface Media {
  image_url: string;
  image_url_thumb: string;
}

export interface IIncident {
  id: number;
  title: string;
  description: string;
  address: string;
  occurred_at: number;
  updated_at: number;
  url: string;
  source: Source;
  media: Media;
  location_type?: string;
  location_description?: string;
  type: string;
  type_properties?: string;
  geo?: IGeometry | null;
}

export declare type IIncidents = IIncident[];

export interface IIncidentsObject {
  incidents: IIncidents;
}

export interface IProperties {
  id: number;
  type: string;
  occurred_at: number;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IFeature {
  type: string;
  properties: IProperties;
  geometry: IGeometry;
}

export declare type IFeatures = IFeature[];

export interface IIncidentsGeoObject {
  type: string;
  features: IFeatures;
}
