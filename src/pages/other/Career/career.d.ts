export interface Benefit {
    icon: string;
    title: string;
    description: string;
}

export interface ImageType {
    src: string;
    caption: string;
}

export interface GalleryItem {
    id?: number;
    image: ImageType;
}

export interface Vacancy {
    category: string;
    jobs: {
        designation: string;
        type: string;
    }[];
}
