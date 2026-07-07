import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const LoginPage = () => {
  return (
  
      
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <h3>Log in to Tiv Encyclopedia</h3>
      <form action="" className="space-y-5">
        <Input placeholder="Email" type="text"/>
        <Input placeholder="Password" type="password" />
        <Button>Log in</Button>
      </form>
      </div>
  
  )
}

export default LoginPage