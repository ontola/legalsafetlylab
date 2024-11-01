/* -----------------------------------
 * GENERATED WITH @tomic/cli
 * For more info on how to use ontologies: https://github.com/atomicdata-dev/atomic-server/blob/develop/browser/cli/readme.md
 * -------------------------------- */

import type { BaseProps } from '@tomic/lib';

export const website = {
  classes: {
    blogIndexPage:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/blog-index-page',
    blogpost:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/blogpost',
    cardSection:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/card-section',
    cardSectionBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/card-section-block',
    easstTeamMember:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/easst-team-member',
    footer:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/footer',
    founderMessageBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/founder-message-block',
    heroBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/hero-block',
    homepage:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/homepage',
    imageGalleryBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/image-gallery-block',
    menuItem:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/menu-item',
    page: 'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/page',
    socialLink:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/social-link',
    teamBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/team-block',
    textBlock:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/text-block',
    website:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/class/website',
  },
  properties: {
    blocks:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/blocks',
    boardOfDirectors:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/board-of-directors',
    cardSections:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/card-sections',
    columnLayout:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/column-layout',
    contactInfo:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/contact-info',
    coverImage:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/cover-image',
    externalLink:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/external-link',
    footer:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/footer',
    homepage:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/homepage',
    href: 'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/path',
    images:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/images',
    jobDescription:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/job-title',
    linksTo:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/links-to',
    menuItems:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/menu-items',
    publishedAt:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/published-at',
    socials:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/socials',
    subItems:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/sub-items',
    supervisoryBoard:
      'https://atomicdata.dev/01j9kkhn5h8h4rjmyk9hq0cwmj/website/property/supervisory-board',
  },
} as const;

export type BlogIndexPage = typeof website.classes.blogIndexPage;
export type Blogpost = typeof website.classes.blogpost;
export type CardSection = typeof website.classes.cardSection;
export type CardSectionBlock = typeof website.classes.cardSectionBlock;
export type EasstTeamMember = typeof website.classes.easstTeamMember;
export type Footer = typeof website.classes.footer;
export type FounderMessageBlock = typeof website.classes.founderMessageBlock;
export type HeroBlock = typeof website.classes.heroBlock;
export type Homepage = typeof website.classes.homepage;
export type ImageGalleryBlock = typeof website.classes.imageGalleryBlock;
export type MenuItem = typeof website.classes.menuItem;
export type Page = typeof website.classes.page;
export type SocialLink = typeof website.classes.socialLink;
export type TeamBlock = typeof website.classes.teamBlock;
export type TextBlock = typeof website.classes.textBlock;
export type Website = typeof website.classes.website;

declare module '@tomic/lib' {
  interface Classes {
    [website.classes.blogIndexPage]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description'
        | typeof website.properties.href;
      recommends: never;
    };
    [website.classes.blogpost]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description'
        | typeof website.properties.href
        | typeof website.properties.coverImage
        | typeof website.properties.publishedAt;
      recommends: never;
    };
    [website.classes.cardSection]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description'
        | 'https://atomicdata.dev/ontology/data-browser/property/image';
      recommends: never;
    };
    [website.classes.cardSectionBlock]: {
      requires: BaseProps | typeof website.properties.cardSections;
      recommends: 'https://atomicdata.dev/properties/name';
    };
    [website.classes.easstTeamMember]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description';
      recommends:
        | typeof website.properties.jobDescription
        | 'https://atomicdata.dev/ontology/data-browser/property/image';
    };
    [website.classes.footer]: {
      requires:
        | BaseProps
        | typeof website.properties.contactInfo
        | typeof website.properties.socials;
      recommends: never;
    };
    [website.classes.founderMessageBlock]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/ontology/data-browser/property/image'
        | 'https://atomicdata.dev/properties/description';
      recommends: never;
    };
    [website.classes.heroBlock]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description';
      recommends: never;
    };
    [website.classes.homepage]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description'
        | typeof website.properties.blocks
        | typeof website.properties.href;
      recommends: never;
    };
    [website.classes.imageGalleryBlock]: {
      requires: BaseProps | typeof website.properties.images;
      recommends: 'https://atomicdata.dev/properties/name';
    };
    [website.classes.menuItem]: {
      requires: BaseProps | 'https://atomicdata.dev/properties/name';
      recommends:
        | typeof website.properties.subItems
        | typeof website.properties.linksTo
        | typeof website.properties.externalLink;
    };
    [website.classes.page]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | 'https://atomicdata.dev/properties/description'
        | typeof website.properties.href;
      recommends:
        | typeof website.properties.blocks
        | 'https://atomicdata.dev/ontology/data-browser/property/image';
    };
    [website.classes.socialLink]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | typeof website.properties.externalLink;
      recommends: 'https://atomicdata.dev/ontology/data-browser/property/image';
    };
    [website.classes.teamBlock]: {
      requires:
        | BaseProps
        | 'https://atomicdata.dev/properties/name'
        | typeof website.properties.boardOfDirectors
        | typeof website.properties.supervisoryBoard;
      recommends: never;
    };
    [website.classes.textBlock]: {
      requires: BaseProps | 'https://atomicdata.dev/properties/description';
      recommends: typeof website.properties.columnLayout;
    };
    [website.classes.website]: {
      requires:
        | BaseProps
        | typeof website.properties.homepage
        | 'https://atomicdata.dev/properties/name'
        | typeof website.properties.footer;
      recommends: typeof website.properties.menuItems;
    };
  }

  interface PropTypeMapping {
    [website.properties.blocks]: string[];
    [website.properties.boardOfDirectors]: string[];
    [website.properties.cardSections]: string[];
    [website.properties.columnLayout]: boolean;
    [website.properties.contactInfo]: string;
    [website.properties.coverImage]: string;
    [website.properties.externalLink]: string;
    [website.properties.footer]: string;
    [website.properties.homepage]: string;
    [website.properties.href]: string;
    [website.properties.images]: string[];
    [website.properties.jobDescription]: string;
    [website.properties.linksTo]: string;
    [website.properties.menuItems]: string[];
    [website.properties.publishedAt]: number;
    [website.properties.socials]: string[];
    [website.properties.subItems]: string[];
    [website.properties.supervisoryBoard]: string[];
  }

  interface PropSubjectToNameMapping {
    [website.properties.blocks]: 'blocks';
    [website.properties.boardOfDirectors]: 'boardOfDirectors';
    [website.properties.cardSections]: 'cardSections';
    [website.properties.columnLayout]: 'columnLayout';
    [website.properties.contactInfo]: 'contactInfo';
    [website.properties.coverImage]: 'coverImage';
    [website.properties.externalLink]: 'externalLink';
    [website.properties.footer]: 'footer';
    [website.properties.homepage]: 'homepage';
    [website.properties.href]: 'href';
    [website.properties.images]: 'images';
    [website.properties.jobDescription]: 'jobDescription';
    [website.properties.linksTo]: 'linksTo';
    [website.properties.menuItems]: 'menuItems';
    [website.properties.publishedAt]: 'publishedAt';
    [website.properties.socials]: 'socials';
    [website.properties.subItems]: 'subItems';
    [website.properties.supervisoryBoard]: 'supervisoryBoard';
  }
}
