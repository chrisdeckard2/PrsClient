import VendorList from "./VendorList";

function VendorsPage() {
  return (
    <section className="mt-4 container-fluid mx-5">
      <div className="border-bottom d-flex justify-content-between p-3 mb-4">
        <h3>Vendors</h3>
        <a className="btn btn-primary" href="vendor-create.html">
          Create Vendor
        </a>
      </div>
      {/* Everything in the body goes here */}
      <VendorList />
    </section>
  );
}

export default VendorsPage;
