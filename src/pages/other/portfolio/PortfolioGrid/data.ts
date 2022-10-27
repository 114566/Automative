// types
import { GalleryItem } from './portfolioGrid';


// images
import finanzen from '../../../../assets/images/features/finanzen.png';
import marketing_1 from '../../../../assets/images/features/marketing_1.png';


const galleryItems: GalleryItem[] = [
    {
        image: {
            src: finanzen,
            caption: 'Finanzen',
            click: '/risikobewertung'
        },
        title: 'Risikobewertung',
        description: 'Datenanreicherung durch internationale Medien',
        category: ['Finanzen'],
    },
    {
        image: {
            src: marketing_1,
            caption: 'Marketing',
            click:'/kampagnenplanung'
        },
        title: 'Kampagnenplanung',
        description: 'Integration von Influencer-Marketing',
        category: ['Marketing'],
    },
    // {
    //     image: {
    //         src: img3,
    //         caption: 'Portfolio Manager',
    //     },
    //     title: 'Portfolio Manager',
    //     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    //     category: ['web', 'photography'],
    // },
    // {
    //     image: {
    //         src: img4,
    //         caption: 'Smart Office v2.0',
    //     },
    //     title: 'Smart Office v2.0',
    //     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    //     category: ['illustrator'],
    // },
    // {
    //     image: {
    //         src: img5,
    //         caption: 'Online Conference',
    //     },
    //     title: 'Online Conference',
    //     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    //     category: ['web', 'photography'],
    // },
    // {
    //     image: {
    //         src: img6,
    //         caption: 'Virtual Receptionist',
    //     },
    //     title: 'Virtual Receptionist',
    //     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    //     category: ['graphic'],
    // },
];

export { galleryItems };
