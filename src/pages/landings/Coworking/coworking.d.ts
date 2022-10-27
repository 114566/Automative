export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface SpaceOption {
    image: string;
    title: string;
    description: string;
    space: {
        icon: string;
        value: string;
    };
}

export interface Testimonial {
    statement: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo: string;
}
