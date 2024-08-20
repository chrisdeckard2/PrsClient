import RequestForm from "./RequestForm";

function RequestEdit() {
  return (
    <>
      <div className="container-fluid p-3">
        <h2 className="ms-5">Edit Request</h2>
        <hr />

        <RequestForm />
        <h2 className="ms-1 mt-3"></h2>
      </div>
    </>
  );
}

export default RequestEdit;
