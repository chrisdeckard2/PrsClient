import UserForm from "./UserForm";

function UserCreate() {
  return (
    <>
      <div className="container-fluid p-3">
        <h2 className="ms-5">Create User</h2>
        <hr />

        <div className="ps-5">
          <UserForm />
        </div>
      </div>
    </>
  );
}
export default UserCreate;
