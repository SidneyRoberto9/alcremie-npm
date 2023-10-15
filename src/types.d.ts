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
  url: string;
  size: number;
  isNsfw: boolean;
}
