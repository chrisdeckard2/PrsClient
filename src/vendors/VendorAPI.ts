
  import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Vendor } from "./Vendor";
  
  let url = `${BASE_URL}/vendors`;

  interface VendorCardProps {
    vendor: Vendor;
    onRemove: (vendor: Vendor) => void;
  }
  
  export const vendorAPI = {
    list(): Promise<Vendor[]> {
      return fetch(`${url}`)
        .then(delay(600))
        .then(checkStatus)
        .then(parseJSON);
    },
  
    find(id: number): Promise<Vendor> {
      return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
    },
  
    post(vendor: Vendor) {
      return fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(vendor),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(checkStatus)
        .then(parseJSON);
    },
  
    put(vendor: Vendor) {
      return fetch(`${url}/${vendor.id}`, {
        method: "PUT",
        body: JSON.stringify(vendor),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(checkStatus);
      // .then(parseJSON);
    },
  
    delete(id: number) {
      return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
    },
  };
  