// IMAGE INTERFACE TYPE DEFINITION

export interface DefaultImage {
  id: string;
  assetId: string;
  isNsfw: boolean;
  size: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  id: string;
  url: string;
  size: number;
  isNsfw: boolean;
}

export interface GetImageResponse {
  content: ImageContent;
}

export interface ImageContent {
  page: number;
  totalPage: number;
  hasNext: boolean;
  data: DefaultImage[];
}

export interface ImageContentResponse {
  page: number;
  totalPage: number;
  hasNext: boolean;
  data: Image[];
}

// TAG INTERFACE TYPE DEFINITION

export interface Tag {
  id: string;
  name: string;
}

export interface DefaultTag {
  id: string;
  name: string;
  slug: string;
}

export interface GetTagResponse {
  tag: DefaultTag[];
  total: number;
}

export interface TagResponse {
  tags: Tag[];
  total: number;
}

// STATUS INTERFACE TYPE DEFINITION

export interface GetStatusResponse {
  statistics: Status;
}
export interface Status {
  image: number;
  tag: number;
  request: number;
}
