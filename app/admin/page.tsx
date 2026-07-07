import Link from "next/link"

const DashboardPage = () => {
  return (
    <div>
        <h1 className="mb-5">Dashboard</h1>
        
        <div className="grid grid-cols-2 gap-5 w-full">
            
          <div className="flex flex-col items-center justify-center p-5 border rounded-2xl gap-2">
            <h2>Articles</h2>
            <p>12</p>
          </div>

          <div className="flex flex-col items-center justify-center p-5 border rounded-2xl gap-2">
            <h2>Users</h2>
            <p>3</p>
          </div>
          
          <div className="flex  items-center justify-between p-5 border rounded-2xl gap-2 col-span-2">
            <h2>Recent Articles</h2>
            <Link href="/admin/articles" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="flex items-center  justify-between p-5 border rounded-2xl gap-2 col-span-2">
            <div>
                <p>Tiv Encyclopedia History</p>
                <p className="text-sm text-gray-500">History</p>
            </div>
            <span className="text-sm text-gray-500">Draft</span>
          </div>
          
          <div className="flex items-center  justify-between p-5 border rounded-2xl gap-2 col-span-2">
            <div>
                <p>Tiv Encyclopedia History</p>
                <p className="text-sm text-gray-500">History</p>
            </div>
            <span className="text-sm text-green-500">Published</span>
          </div>
            
            
        </div>
    </div>
  )
}

export default DashboardPage