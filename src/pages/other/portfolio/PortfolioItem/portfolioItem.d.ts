export interface ImageType {
    src: string;
    caption: string;
}

export interface GalleryItem {
    id?: number;
    image: ImageType;
}

export interface WorkImages {
    icon: string;
    title: string;
}
