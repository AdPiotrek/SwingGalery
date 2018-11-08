export interface Photo {
  datetaken?: string;
  description?: { _content: string };
  farm: number;
  id: string;
  owner: string;
  ownername?: string;
  secret: string;
  server: string;
  title: string;
  longitude?: string;
  latitude?: string;
}
