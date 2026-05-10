import type { Book } from './books';

const SITE_URL = 'https://katfalls.com';
const PERSON_ID = `${SITE_URL}/#person`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BookPageOptions = {
  audience: {
    min: number;
    max: number;
  };
  breadcrumbs: BreadcrumbItem[];
  genre: string;
  seriesName: string;
  seriesPath: string;
};

type SeriesPageOptions = {
  ageRange: string;
  books: Book[];
  breadcrumbs: BreadcrumbItem[];
  coverImage: string;
  description: string;
  genre: string;
  name: string;
  path: string;
};

const toAbsoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

const toIsoDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
};

const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

const bookSchema = (book: Book, options: Omit<BookPageOptions, 'breadcrumbs'>) => ({
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': `${toAbsoluteUrl(`/books/${book.slug}`)}#book`,
  url: toAbsoluteUrl(`/books/${book.slug}`),
  name: book.title,
  description: book.shortSynopsis,
  image: toAbsoluteUrl(book.coverImage),
  author: { '@id': PERSON_ID },
  publisher: { '@type': 'Organization', name: book.publisher },
  isbn: book.isbn,
  datePublished: toIsoDate(book.pubDate),
  inLanguage: 'en-US',
  genre: options.genre,
  typicalAgeRange: book.ageRange,
  educationalLevel: book.gradeRange,
  award: book.awards,
  audience: {
    '@type': 'Audience',
    suggestedMinAge: options.audience.min,
    suggestedMaxAge: options.audience.max,
  },
  isPartOf: {
    '@type': 'BookSeries',
    '@id': `${toAbsoluteUrl(options.seriesPath)}#series`,
    name: options.seriesName,
    url: toAbsoluteUrl(options.seriesPath),
  },
});

const seriesSchema = (options: Omit<SeriesPageOptions, 'breadcrumbs'>) => ({
  '@context': 'https://schema.org',
  '@type': 'BookSeries',
  '@id': `${toAbsoluteUrl(options.path)}#series`,
  url: toAbsoluteUrl(options.path),
  name: options.name,
  description: options.description,
  image: toAbsoluteUrl(options.coverImage),
  author: { '@id': PERSON_ID },
  genre: options.genre,
  inLanguage: 'en-US',
  typicalAgeRange: options.ageRange,
  numberOfItems: options.books.length,
  hasPart: options.books.map((book) => ({
    '@type': 'Book',
    '@id': `${toAbsoluteUrl(`/books/${book.slug}`)}#book`,
    url: toAbsoluteUrl(`/books/${book.slug}`),
    name: book.title,
    position: book.seriesNumber,
  })),
});

export const buildBookPageSchema = (book: Book, options: BookPageOptions) => [
  breadcrumbSchema(options.breadcrumbs),
  bookSchema(book, options),
];

export const buildSeriesPageSchema = (options: SeriesPageOptions) => [
  breadcrumbSchema(options.breadcrumbs),
  seriesSchema(options),
];
