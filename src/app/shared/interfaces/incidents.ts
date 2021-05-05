import { LngLatLike } from 'mapbox-gl';

export interface Source {
  name: string;
  html_url: string;
  api_url: string;
}

export interface Media {
  image_url: string | null;
  image_url_thumb: string | null;
}

export interface IIncident {
  id: number;
  title: string;
  description: string | null;
  address: string;
  occurred_at: number;
  updated_at: number;
  date: string | null | undefined;
  dateOfReport: string | undefined;
  url: string;
  source: Source;
  media: Media;
  location_type: string | null | undefined;
  location_description: string | null | undefined;
  type: string;
  type_properties: string | null | undefined;
  geo: IGeometry | null;
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
  coordinates: LngLatLike;
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
