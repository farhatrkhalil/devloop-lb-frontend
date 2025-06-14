import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import { getMetadata } from '@/lib/metadata';
import { Team } from '@/types/Team';
import PeriodSelector from '@/components/Team.PeriodSelector';

const pageName = 'about--team';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return getMetadata(locale, pageName);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    // Use mock data instead of backend API
    const { MockApiService } = await import('@/lib/mock-data');
    const teams: Team[] = await MockApiService.getTeams();

    const [metadataTranslations] = await Promise.all([
        getTranslations({ locale, namespace: `metadata.${pageName}` }),
    ]);

    return (
        <PageLayout title={metadataTranslations('title')} description={metadataTranslations('description')}>
            <PeriodSelector teams={teams} />
        </PageLayout>
    );

}
