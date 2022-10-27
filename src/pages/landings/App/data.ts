// types
import { Feature, Feature2 } from './app';

import app1 from '../../../assets/images/features/app3.png';
import app2 from '../../../assets/images/features/app4.png';

const features: Feature[] = [
    {
        icon: 'cpu',
        variant: 'primary',
        title: 'Automatisiertes maschinelles Lernen',
        description:
            'Wir generieren produktionsreife KI-Modelle auf Basis Ihrer Daten – unsere Qualitätsprüfungen wählen das beste Modell für Ihre Anforderungen aus.',
    },
    {
        icon: 'shield',
        variant: 'primary',
        title: 'Sicherheit',
        description:
            'Wir hosten in Frankfurt, Deutschland. Unsere Server sind mit der bestmöglichen Sicherheit ausgestattet.',
    },
    {
        icon: 'tool',
        variant: 'primary',
        title: 'Datenqualität',
        description: 'Unsere Software erkennt und behebt Qualitätsprobleme automatisch, sodass Sie sich auf Ihr Geschäft konzentrieren können.',
    },
    {
        icon: 'zap',
        variant: 'primary',
        title: 'Rundumservice',
        description: "Wir machen aus Projekten Erfolge: mit umfassender Beratung, Schulungen & Unterstützung bei der Implementierung.",
    },
];

const features2: Feature2[] = [
    {
        image: app1,
        shapes: ['shape1', 'shape2'],
        title: 'Datenaufbereitung',
        description: 'automait behebt Datenfehler in Ihren Rohdaten und kategorisiert Ihre Daten zur Weiterverarbeitung.',
    },
    {
        image: app2,
        shapes: ['shape3', 'shape4'],
        title: 'Ihr Modelltraining',
        description: 'Wir unterstützen Sie bei der Auswahl der vertrauenswürdigsten und leistungsfähigsten Modelle und trainieren im Anschluss Ihre Modelle.'
    },
    {
        image: app2,
        shapes: ['shape5', 'shape6'],
        title: 'Überwachung und Betrieb',
        description: 'Unser qualifiziertes Personal überwacht Ihre Modelle und sorgt für einen einwandfreien Betrieb.',
    },
];

export { features, features2 };
