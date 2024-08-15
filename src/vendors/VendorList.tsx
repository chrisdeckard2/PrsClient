function VendorList() {

  function VendorList() {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [busy, setBusy] = useState(false);

    async function getVendors() {
      setBusy(true);
      let data = await vendorAPI.list();
      setVendors(data);
      setBusy(false);
    }

    useEffect(() => {
      getVendors();
    }, []);
  }


  return (
    <div className="container-fluid list bg-body-tertiary p-3">
      {/* <div className="row"> */}
        <div className="card col-3 m-4">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">AeroTech Solutions</h5>
                <h6 className="card-subtitle mb-2 badge bg-secondary">AERO-TS</h6>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default VendorList;
