import { useNavigate } from "react-router-dom"
import { DataTable, type Column, type DataItem } from "@/components/data-management/data-table"

// Mock data based on the designs
const productsData: DataItem[] = [
  {
    id: "1",
    productName: "Leather Jacket",
    vendor: "Alex Jackson",
    category: "Fashion",
    price: "10,000",
    status: "Approved",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    productName: "Birkin Bag",
    vendor: "Sophia Clark",
    category: "Fashion",
    price: "30,000",
    status: "Approved",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    productName: "iPhone 16",
    vendor: "Stewart Joe",
    category: "Gadget",
    price: "800,000",
    status: "Approved",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    productName: "Macbook Pro",
    vendor: "Emily Cole",
    category: "Gadget",
    price: "600,000",
    status: "Rejected",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    productName: "Lenovo M3",
    vendor: "Benjamin Rae",
    category: "Gadget",
    price: "300,000",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    productName: "Bikers Jacket",
    vendor: "Alex Jackson",
    category: "Fashion",
    price: "12,000",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "7",
    productName: "iPhone 15 Pro",
    vendor: "Stewart Joe",
    category: "Gadget",
    price: "1,200,000",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "8",
    productName: "Dining Set",
    vendor: "Kelvin Steve",
    category: "Home & Office",
    price: "200,000",
    status: "Rejected",
    image: "/placeholder.svg",
  },
  {
    id: "9",
    productName: "Panasonic TV",
    vendor: "Kelvin Steve",
    category: "Home & Office",
    price: "300,000",
    status: "Rejected",
    image: "/placeholder.svg",
  },
  {
    id: "10",
    productName: "Chandelier",
    vendor: "Kelvin Steve",
    category: "Home & Office",
    price: "40,000",
    status: "Approved",
    image: "/placeholder.svg",
  },
  {
    id: "11",
    productName: "Hermes Earrings",
    vendor: "Sophie Clarkson",
    category: "Accessories",
    price: "4,000",
    status: "Approved",
    image: "/placeholder.svg",
  },
  {
    id: "12",
    productName: "Chanel Bag",
    vendor: "Sophia Clarkk",
    category: "Fashion",
    price: "13,000",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "13",
    productName: "Dell Laptop",
    vendor: "Emily Cole",
    category: "Gadget",
    price: "290,000",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "14",
    productName: "Jean Jacket",
    vendor: "Alex Jackson",
    category: "Fashion",
    price: "5,900",
    status: "Pending",
    image: "/placeholder.svg",
  },
  {
    id: "15",
    productName: "Jean Jacket",
    vendor: "Alex Jackson",
    category: "Fashion",
    price: "5,900",
    status: "Approved",
    image: "/placeholder.svg",
  },
]

const columns: Column[] = [
  {
    key: "productName",
    label: "Product Name",
    sortable: true,
  },
  {
    key: "vendor",
    label: "Vendor",
    sortable: true,
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
  },
  {
    key: "price",
    label: "Price",
    sortable: true,
    render: (value) => `₦${value}`,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
]

export default function ProductsPage() {
  const navigate = useNavigate()

  const handleView = (product: DataItem) => {
    navigate(`/admin/products/${product.id}`)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Products</h1>
        <p className="text-slate-400 mt-2">Manage all products on your platform</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">All Products</h2>
        <DataTable data={productsData} columns={columns} searchPlaceholder="Search Product" onView={handleView} />
      </div>
    </div>
  )
}
