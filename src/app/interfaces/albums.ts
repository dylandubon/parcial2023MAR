// To parse this data:
//
//   import { Convert, Albums } from "./file";
//
//   const albums = Convert.toAlbums(json);

export interface Albums {
    albums: AlbumsClass;
}

export interface AlbumsClass {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
}

export interface Item {
    album_type:             AlbumType;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   ItemType;
    uri:                    string;
}

export enum AlbumType {
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}
export interface Followers {
    href:  null;
    total: number;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export enum ItemType {
    Album = "album",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAlbums(json: string): Albums {
        return JSON.parse(json);
    }

    public static albumsToJson(value: Albums): string {
        return JSON.stringify(value);
    }
}

export interface Track {
    tracks: TrackElement[];
}

export interface TrackElement {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   string;
    track_number:  number;
    type:          TrackType;
    uri:           string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
}


export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}