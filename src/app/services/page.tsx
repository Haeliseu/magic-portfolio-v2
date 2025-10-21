import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, service, person } from "@/resources";

const services = [
    {
        title: "Développement web",
        description:
            "Création de sites et d’applications web personnalisés, du design à la mise en ligne. Intégration d’interfaces claires, performantes et adaptées à tout type d’écran.",
    },
    {
        title: "Applications mobiles",
        description:
            "Conception d’applications mobiles natives ou hybrides pour Android et iOS. Expérience fluide, design cohérent, intégration avec les systèmes existants.",
    },
    {
        title: "Automatisation et outils métiers",
        description:
            "Développement d’outils internes pour automatiser les tâches répétitives, centraliser les données et améliorer la productivité des équipes.",
    },
    {
        title: "Bases de données et API",
        description:
            "Conception, installation et optimisation de bases de données. Création d’interfaces de communication (API) pour connecter différents systèmes entre eux.",
    },
    {
        title: "Hébergement et déploiement",
        description:
            "Mise en place de serveurs, conteneurisation (Docker), déploiement et surveillance d’applications dans des environnements sécurisés.",
    },
    {
        title: "Sécurité et performance",
        description:
            "Protection des données, gestion des accès, conformité RGPD. Optimisation du temps de chargement et de la stabilité des services en ligne.",
    },
    {
        title: "Maintenance et accompagnement",
        description:
            "Suivi continu, corrections techniques, mises à jour régulières. Conseils sur les choix technologiques et accompagnement dans l’évolution du projet.",
    },
];

export async function generateMetadata() {
    return Meta.generate({
        title: service.title,
        description: service.description,
        baseURL: baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(service.title)}`,
        path: service.path,
    });
}

export default function Services() {
    return (
        <Column as="section" maxWidth="xs" gap="l">
            <Schema
                as="webPage"
                baseURL={baseURL}
                title={service.title}
                description={service.description}
                path={service.path}
                image={`/api/og/generate?title=${encodeURIComponent(service.title)}`}
                author={{
                    name: person.name,
                    url: `${baseURL}${service.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        headline: service.title,
                        description: service.description,
                        url: `${baseURL}${service.path}`,
                        image: `${baseURL}/api/og/generate?title=${encodeURIComponent(service.title)}`,
                        provider: {
                            "@type": "Person",
                            name: person.name,
                            image: { "@type": "ImageObject", url: `${baseURL}${person.avatar}` },
                        },
                        hasPart: {
                            "@type": "ItemList",
                            name: "Services",
                            itemListElement: services.map((s, index) => ({
                                "@type": "ListItem",
                                position: index + 1,
                                name: s.title,
                                description: s.description,
                            })),
                        },
                    }),
                }}
            />
            <Heading as="h1" variant="display-strong-s">
                Services
            </Heading>
            {services.map((s, i) => (
                <Column
                    key={i}
                    border="brand-alpha-medium"
                    padding="m"
                    radius="m"
                    background="brand-alpha-weak"
                >
                    <Heading as="h2" variant="heading-strong-xs">
                        {s.title}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        {s.description}
                    </Text>
                </Column>
            ))}
        </Column>
    );
}
