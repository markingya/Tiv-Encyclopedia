import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import Link from "next/link"

const initialArticles = [
    {
    id:1,    
    title: "Aistory of the Tiv People",
    category: "History",
    status: "Published"
  },
  {
    id:2,
    title: "History of the Tiv People",
    category: "History",
    status: "Published"
    
  },
  {
    id:3,
    title: "Tiv Cultural Heritage and Traditions",
    category: "Culture",
    status: "Draft"
  },
  {
    id:4,
    title: "Introduction to the Tiv Language",
    category: "Language",
    status: "Draft"
  },
  {
    id:5,
    title: "Notable Tiv Personalities",
    category: "Biography",
    status: "Draft"
    
  },
  {
    id:6,
    title: "Major Tiv Clans and Lineages",
    category: "Clan",
    status: "Published"
  }
    
]

export default function ArticlesPage() {
  return (
    <div>

 <div className="flex justify-between items-center mb-5 w-full">
        <h2>Articles</h2>
        <Link href="/admin/create-article">
          <Button>+ Create article</Button>
        </Link>
      </div>


        <Table>
  <TableCaption>Manage all articles.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Title</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {initialArticles.map((article) => (
      <TableRow key={article.id}>
        <TableCell className="font-medium">{article.title}</TableCell>
        <TableCell className="font-medium">{article.category}</TableCell>
        <TableCell>{article.status}</TableCell>
        <TableCell><Button className="bg-transparent text-red-500">Delete</Button></TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  )
}
