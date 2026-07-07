import ContainerLayout from "./components/layouts/ContainerLayout";
import Image from "next/image";
import SearchInput from "./components/home/SearchInput";
import ArticleSection from "./components/home/ArticleSection";

export default function Home() {
  return (
    <ContainerLayout>
      <h1 className="flex items-center gap-1">An Online Encyclopedia created by Tiv People about Tiv People
        <Image src="/Tiv Emoji.png" alt="Tiv Emoji" width={30} height={30} />
      </h1>
     <SearchInput/>
     <ArticleSection/>
    </ContainerLayout>
  );
}
