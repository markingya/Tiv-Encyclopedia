"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

import { useRef, useState, useMemo } from "react";
import JoditEditor from 'jodit-react';

interface FormState {
  title: string,
  content: string,
  category: string,
  status: "draft" | "published",
  image: File | null
}

const categories = [
  {
    name: "History",
    slug: "history",
  },
  {
    name: "Culture",
    slug: "culture",
  },
  {
    name: "Language",
    slug: "language",
  },
  {
    name: "Biography",
    slug: "biography",
  },
  {
    name: "Clan",
    slug: "clan",
  },
  {
    name: "Religion",
    slug: "religion",
  },
  {
    name: "Arts",
    slug: "arts",
  },
  {
    name: "Architecture",
    slug: "architecture",
  },
  {
    name: "Food",
    slug: "food",
  },
  {
    name: "Festival",
    slug: "festival",
  },
  {
    name: "Place",
    slug: "place",
  },
  {
    name: "Literature",
    slug: "literature",
  },
];


export default function CreateArticlePage() {
  const editor = useRef(null);
  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>({
    title: "",
    content: "",
    category: "",
    status: "draft",
    image: null
  });

  const[previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (field:keyof FormState, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));};

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return;
    if(previewImage) URL.revokeObjectURL(previewImage);
    const url = URL.createObjectURL(file);

    setForm(prev => ({
      ...prev,
      image: file
    }));
    setPreviewImage(url);
  };

  const removeImage = () => {
    if(previewImage) URL.revokeObjectURL(previewImage);
    setForm(prev => ({
      ...prev,
      image: null
    }));
    setPreviewImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }


  };

  const config = useMemo(
    () => ({
      
      placeholder: "Start writing your article...",
    }),
    []
  );

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold">Create Article</h1>
      <p>Write and publish a new article.</p>
      <form action="" className="space-y-5">
       
          <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <Select
  value={form.category}
  onValueChange={(value) => handleChange("category", value)}
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select article category" />
  </SelectTrigger>

  <SelectContent>
    {categories.map((category) => (
      <SelectItem key={category.slug} value={category.slug}>
        {category.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
        
    
        
       <Select
  value={form.status}
  onValueChange={(value) => handleChange("status", value)}
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select article status" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="draft">Draft</SelectItem>
    <SelectItem value="published">Published</SelectItem>
  </SelectContent>
</Select>

<div className="space-y-2">
  <Input onChange={handleImageChange} ref={fileInputRef} type="File"/>
  {previewImage && (<div>
    <Image src={previewImage} alt="Preview" width={100} height={64} className="m-2 rounded-lg object-cover"/>
    <Button onClick={removeImage} className="bg-red-500">Remove Image</Button>
  </div>
    
  )}
  
</div>

<JoditEditor
      ref={editor}
      value={form.content}
      config={config}
      onChange={(content) => handleChange("content", content)}
    />

<div><Button>Publish Article</Button></div>

      </form>
    </div>
  )
}
