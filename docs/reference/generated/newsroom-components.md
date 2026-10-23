---
generated: 2026-10-22T01:40:22+08:00
source: newsroom origin/main@02d770f
---

# Newsroom: components by tier

> Built from the code by `npm run gen`. Don't edit by hand: change the code and it updates overnight.



The tier rule (imports flow `features → shared → common`, never sideways between features) is in the newsroom's `BIBLE.md`. The full import graph, with every importer, is in [`COMPONENTS.toon`](https://github.com/krischan-acn/newsroom/blob/02d770f/COMPONENTS.toon).

### `common/`: on every page (17)

- [src/components/common/Footer/Footer.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/Footer/Footer.tsx)
- [src/components/common/ab/AbHiddenTrigger.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/ab/AbHiddenTrigger.tsx)
- [src/components/common/ab/AbOverlay.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/ab/AbOverlay.tsx)
- [src/components/common/nav/MainNav/Company/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Company/index.tsx)
- [src/components/common/nav/MainNav/Country/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Country/index.tsx)
- [src/components/common/nav/MainNav/Industry/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Industry/index.tsx)
- [src/components/common/nav/MainNav/Language/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Language/index.tsx)
- [src/components/common/nav/MainNav/MegaMenuNav.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/MegaMenuNav.tsx)
- [src/components/common/nav/MainNav/Region/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Region/index.tsx)
- [src/components/common/nav/MainNav/Sector/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/Sector/index.tsx)
- [src/components/common/nav/MainNav/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/MainNav/index.tsx)
- [src/components/common/nav/TopNav/ClientLinks.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/TopNav/ClientLinks.tsx)
- [src/components/common/nav/TopNav/DateDisplay.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/TopNav/DateDisplay.tsx)
- [src/components/common/nav/TopNav/DateTimeDisplay.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/TopNav/DateTimeDisplay.tsx)
- [src/components/common/nav/TopNav/LanguageSelector.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/TopNav/LanguageSelector.tsx)
- [src/components/common/nav/TopNav/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/TopNav/index.tsx)
- [src/components/common/nav/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/common/nav/index.tsx)

### `shared/`: used by two or more feature areas (6)

- [src/components/shared/LanguageTag.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/LanguageTag.tsx)
- [src/components/shared/NavPending.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/NavPending.tsx)
- [src/components/shared/PressReleaseItem.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/PressReleaseItem.tsx)
- [src/components/shared/Rail.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/Rail.tsx)
- [src/components/shared/Skeleton.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/Skeleton.tsx)
- [src/components/shared/SocialLinks.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/shared/SocialLinks.tsx)

### `features/`: one feature area each (29)

- [src/components/features/article/ArticleFooterLink.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/ArticleFooterLink.tsx)
- [src/components/features/article/ArticleMeta.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/ArticleMeta.tsx)
- [src/components/features/article/ArticleSidebar.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/ArticleSidebar.tsx)
- [src/components/features/article/Body.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/Body.tsx)
- [src/components/features/article/Company.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/Company.tsx)
- [src/components/features/article/Hero.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/Hero.tsx)
- [src/components/features/article/InfiniteArticleFeed.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/InfiniteArticleFeed.tsx)
- [src/components/features/article/MoreFromCompany.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/MoreFromCompany.tsx)
- [src/components/features/article/PressRelease.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/PressRelease.tsx)
- [src/components/features/article/ShareBar.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/ShareBar.tsx)
- [src/components/features/article/index.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/article/index.tsx)
- [src/components/features/company/CompanyPagination.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/company/CompanyPagination.tsx)
- [src/components/features/company/CompanySidebar.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/company/CompanySidebar.tsx)
- [src/components/features/company/FeedUnavailable.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/company/FeedUnavailable.tsx)
- [src/components/features/events/EventCountdown.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/events/EventCountdown.tsx)
- [src/components/features/events/EventListCard.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/events/EventListCard.tsx)
- [src/components/features/events/EventReleaseItem.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/events/EventReleaseItem.tsx)
- [src/components/features/events/EventStatusPill.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/events/EventStatusPill.tsx)
- [src/components/features/home/CategoryRow.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/CategoryRow.tsx)
- [src/components/features/home/EventsRow.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/EventsRow.tsx)
- [src/components/features/home/FeaturedReleases.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/FeaturedReleases.tsx)
- [src/components/features/home/HomeHero.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/HomeHero.tsx)
- [src/components/features/home/HomeSkeletons.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/HomeSkeletons.tsx)
- [src/components/features/home/ShelfScrollBar.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/home/ShelfScrollBar.tsx)
- [src/components/features/search/CompanyResults.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/search/CompanyResults.tsx)
- [src/components/features/search/NestedCheckbox.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/search/NestedCheckbox.tsx)
- [src/components/features/search/Pagination.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/search/Pagination.tsx)
- [src/components/features/search/SearchResults.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/search/SearchResults.tsx)
- [src/components/features/search/SearchSidebar.tsx](https://github.com/krischan-acn/newsroom/blob/02d770f/src/components/features/search/SearchSidebar.tsx)
