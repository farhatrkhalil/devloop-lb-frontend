import {getTranslations, setRequestLocale} from "next-intl/server";
import PageLayout from "@/components/PageLayout";
import {Announcement} from "@/types/Announcement";
import {Suspense} from "react";
import {getMetadata} from "@/lib/metadata";

const pageName = "announcements";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return getMetadata(locale, pageName);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    setRequestLocale(locale);

    const [metadataTranslations, contentTranslations] = await Promise.all([
        getTranslations({locale, namespace:`metadata.${pageName}`}),
        getTranslations({locale, namespace:`pages.${pageName}`})
    ]);

    // Use mock data instead of backend API
    const { MockApiService } = await import('@/lib/mock-data');
    const announcements: Announcement[] = await MockApiService.getAnnouncements();

    return (
        <PageLayout title={metadataTranslations("title")} description={metadataTranslations("description")}>
            <Suspense fallback={<p>Loading feed...</p>}>
                {announcements.map((announcement) => (
                    <div
                        key={announcement._id}
                        className="bg-white px-6 py-8 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap w-full"
                    >
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">
                                {announcement.type[locale]}
                            </span>
                            <span className="mt-1 text-gray-500 text-sm">
                                {new Date(announcement.date).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                {announcement.title[locale]}
                            </h2>
                            <p className="leading-relaxed">
                                {announcement.description[locale]}
                            </p>
                            <a href="#" className="text-indigo-500 inline-flex items-center mt-4">
                                {contentTranslations("learnMore")}
                                <svg
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </Suspense>
        </PageLayout>
    )
}
