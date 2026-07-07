"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Link from "next/link";

const tabs = [
  "All",
  "History",
  "Culture",
  "Language",
  "Biography",
  "Clan",
  "Religion",
  "Arts",
  "Architecture",
  "Food",
  "Festival",
  "Place",
  "Literature",
];

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const articles = [
  {
    title: "Aistory of the Tiv People",
    category: "History",
    image: "https://picsum.photos/seed/history/600/400",
  },
  {
    title: "History of the Tiv People",
    category: "History",
    image: "https://picsum.photos/seed/history/600/400",
  },
  {
    title: "Tiv Cultural Heritage and Traditions",
    category: "Culture",
    image: "https://picsum.photos/seed/culture/600/400",
  },
  {
    title: "Introduction to the Tiv Language",
    category: "Language",
    image: "https://picsum.photos/seed/language/600/400",
  },
  {
    title: "Notable Tiv Personalities",
    category: "Biography",
    image: "https://picsum.photos/seed/people/600/400",
  },
  {
    title: "Major Tiv Clans and Lineages",
    category: "Clan",
    image: "https://picsum.photos/seed/clans/600/400",
  },
  {
    title: "Traditional Beliefs and Religion of the Tiv",
    category: "Religion",
    image: "https://picsum.photos/seed/religion/600/400",
  },
  {
    title: "Tiv Arts and Creative Expressions",
    category: "Arts",
    image: "https://picsum.photos/seed/arts/600/400",
  },
  {
    title: "Traditional Tiv Architecture",
    category: "Architecture",
    image: "https://picsum.photos/seed/architecture/600/400",
  },
  {
    title: "Traditional Tiv Cuisine",
    category: "Food",
    image: "https://picsum.photos/seed/food/600/400",
  },
  {
    title: "Festivals and Celebrations in Tivland",
    category: "Festival",
    image: "https://picsum.photos/seed/festivals/600/400",
  },
  {
    title: "Important Places in Tivland",
    category: "Place",
    image: "https://picsum.photos/seed/places/600/400",
  },
  {
    title: "Tiv Literature and Oral Traditions",
    category: "Literature",
    image: "https://picsum.photos/seed/literature/600/400",
  },
];

const GROUPS_PER_PAGE = 4;

export default function ArticleSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeLetter, setActiveLetter] = useState("All");
  const [page, setPage] = useState(1);

  const filteredArticles = useMemo(() => {
    let result = [...articles];

    if (activeTab !== "All") {
      result = result.filter(
        (article) => article.category === activeTab
      );
    }

    if (activeLetter !== "All") {
      result = result.filter((article) =>
        article.title
          .toUpperCase()
          .startsWith(activeLetter)
      );
    }

    return result.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }, [activeTab, activeLetter]);

  const groupedArticles = useMemo(() => {
    return filteredArticles.reduce((acc, article) => {
      const letter = article.title[0].toUpperCase();

      if (!acc[letter]) {
        acc[letter] = [];
      }

      acc[letter].push(article);

      return acc;
    }, {} as Record<string, typeof articles>);
  }, [filteredArticles]);

  const groups = Object.entries(groupedArticles);

  const totalPages = Math.ceil(
    groups.length / GROUPS_PER_PAGE
  );

  const visibleGroups = groups.slice(
    (page - 1) * GROUPS_PER_PAGE,
    page * GROUPS_PER_PAGE
  );

  return (
    <section className="space-y-8">

      {/* Category Filter */}

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">

          {tabs.map((tab) => (

            <CarouselItem
              key={tab}
              className="basis-auto pl-2"
            >

              <Button
                variant={
                  activeTab === tab
                    ? "default"
                    : "outline"
                }
                className="rounded-full"
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
              >
                {tab}
              </Button>

            </CarouselItem>

          ))}

        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>

      {/* Alphabet Filter */}

      <div className="flex flex-wrap gap-2">

        {alphabet.map((letter) => (

          <Button
            key={letter}
            size="sm"
            variant={
              activeLetter === letter
                ? "default"
                : "outline"
            }
            onClick={() => {
              setActiveLetter(letter);
              setPage(1);
            }}
          >
            {letter}
          </Button>

        ))}

      </div>

      {/* Articles */}

      <div className="space-y-12">

        {visibleGroups.map(([letter, items]) => (

          <div key={letter}>

            <h2 className="mb-6 text-4xl font-bold">
              {letter}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {items.map((article) => (

                <Link
  key={article.title}
  href="/article/slug"
>
  <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">

    <CardContent className="p-0">

      <div className="relative aspect-[3/2]">

        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="space-y-2 p-4">

        <h3 className="line-clamp-2 font-semibold">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {article.category}
        </p>

      </div>

    </CardContent>

  </Card>
</Link>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* Pagination */}

      {totalPages > 1 && (

        <Pagination>

          <PaginationContent>

            <PaginationItem>

              <PaginationPrevious
                href="#"
                className={
                  page === 1
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();

                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              />

            </PaginationItem>

            {Array.from(
              { length: totalPages },
              (_, i) => i + 1
            ).map((p) => (

              <PaginationItem key={p}>

                <PaginationLink
                  href="#"
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(p);
                  }}
                >
                  {p}
                </PaginationLink>

              </PaginationItem>

            ))}

            <PaginationItem>

              <PaginationNext
                href="#"
                className={
                  page === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();

                  if (page < totalPages) {
                    setPage(page + 1);
                  }
                }}
              />

            </PaginationItem>

          </PaginationContent>

        </Pagination>

      )}

    </section>
  );
}