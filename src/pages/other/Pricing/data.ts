// types
import { PlanItem } from '../../../components/pricing/pricing';
import { Benefit } from '../Career/career';

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Basic',
        price: '49',
        duration: '/ monatlich *',
        features: [
            'Produktionsreife KI-Modelle',
            'Automatische Bereinigung Ihrer Daten',
            'Support per E-Mail',
            '1 verfügbares Modell',
        ],
        isRecommended: false,
        isPopular: false,
    },
    {
        id: 2,
        name: 'Professional',
        price: '99',
        duration: '/ monatlich *',
        features: [
            'inkl. Basicpaket',
            'Auswahl der Top-KI-Modelle',
            'Support per Telefon (Geschäftszeiten)',
            'Integrations- und Visualisierungshilfe',
            'Beratung bei der Use Case Auswahl',
            'Beratung für die Datensammlung',
            'bis zu 4 parallel verfügbare Modelle',
        ],
        isRecommended: false,
        isPopular: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: '599',
        duration: '/ monatlich *',
        features: [
            'inkl. Proffessionalpaket',
            'Schulungen',
            'Support per Telefon (24/7)',
            '24h-Verfügbarkeit der Modelle',
            'On-Prem-Hosting',
            'bis zu 10 parallel verfügbare Modelle',
        ],
        isRecommended: false,
        isPopular: false,
    },
];

const benefits: Benefit[] = [
    {
        icon: 'phone-call',
        title: 'Technischer Support',
        description: 'Unser professionelles Support-Team hilft Ihnen bei jedem Schritt.',
    },
    {
        icon: 'shield',
        title: 'Sicherheit',
        description: 'Unsere Server sind mit der bestmöglichen Sicherheit ausgestattet.',
    },
    {
        icon: 'bar-chart-2',
        title: 'Visualisierung',
        description: 'Dashboard zur Visualisierung des Modellverhaltens',
    },
    {
        icon: 'tool',
        title: 'Datenbereinigung',
        description: 'Automatische Datenbereinigung Ihrer bereitgestellten Daten.',
    },
];

export { plans, benefits };
