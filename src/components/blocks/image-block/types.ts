export interface img {
  title: string;
  alt: string;
  imageUrl: string;
  _id: string;
}

export interface divStyles {
  paddingBottom: string;
  paddingTop: string;
  background: string;
}

export type ImageProps = {
  id: string;
  images: img[];
  styles: {
    paddingTop: string;
    paddingBottom: string;
    background: string;
  };
};

export type ImageUploadModalProps = {
  id: string;
  imageIndex: number;
  images: img[];
};

export type ImageBlockProps = {
  divStyles: divStyles;
  updateBlock: (values: any) => void;
};

export type ImageContentProps = {
  data: img[];
  styles?: {};
  updateBlock: (values: any) => void;
};
