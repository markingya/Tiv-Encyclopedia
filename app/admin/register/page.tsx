import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <h3>User Registration</h3>
      <form action="" className="space-y-5">
        <Input placeholder="Full Name"/>
        <Input placeholder="Email" type="text"/>
        <Input placeholder="Password" type="password" />
        <Button>Register</Button>
      </form>
      </div>
  )
}
