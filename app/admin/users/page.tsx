import { Button } from "@/components/ui/button";
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "User" }
];

const UsersPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5 w-full">
        <h2>Users</h2>
        <Link href="/admin/register">
          <Button>+ Add User</Button>
        </Link>
      </div>

      {/* Table */}
      <div>
        <Table>
  <TableCaption>Manage all users and admins.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {initialUsers.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell className="font-medium">{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell><Button className="bg-transparent text-red-500">Delete</Button></TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
      </div>
    </div>
  )
}

export default UsersPage