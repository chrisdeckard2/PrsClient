import VendorForm from "./VendorForm";

function VendorEdit() {
  return (
    <>
      <div className="container-fluid p-3">
        <h2 className="ms-5">Edit Vendor</h2>
        <hr />

        <VendorForm />
        <h2 className="ms-1 mt-3"></h2>
        <hr />
      </div>
    </>
  );
}

export default VendorEdit;
