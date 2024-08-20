import RequestForm from "./RequestForm";

function RequestCreate() {
  return (
    <>
      <div className="container-fluid p-3">
        <h2 className="ms-5">New Request</h2>
        <hr />

        <RequestForm />
      </div>
    </>
  );
}
export default RequestCreate;
