import AdminDashboardPage from "./AdminDashboardPage";

const ordersData = [
  { id: "1", product: "Product A", price: 5000, inventory: 2, status: "Completed" },
  { id: "2", product: "Product B", price: 12000, inventory: 1, status: "Pending" },
];

const Orders = () => (
  <AdminDashboardPage
    header="Orders Dashboard"
    description="View and manage all orders."
    productListings={ordersData}
    showProducts={true}
  />
);

export default Orders;
