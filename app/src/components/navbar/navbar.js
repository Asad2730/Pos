import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: "Sale", to: "/hodhome", current: false },
    { name: "Purchase", to: "/feedback", current: false },
    { name: "Stock", to: "/HodPlans",  current: false },
    { name: "Calculator", to: "/users",  current: false },
    { name: "Set Default Printer", to: "/taskhistoryHod",  current: false },
    { name: "Logout", to: "/taskhistoryHod",  current: false },
  ];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 ">
            
              <div className="flex flex-1">
              
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {
                    navigation.map((i)=>(                      
                  <a
                   className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                   {i.name}
                  </a>
                    ))
                  }
                </div>
              </div>
            
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  )
}
