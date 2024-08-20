import { User } from "../users/User";


export class Request {
  id: number | undefined;
  description = "";
  justification = "";
  rejectionreason = "";
  deliverymode = "";
  status = "NEW";
  total: number | undefined;
  userid: string | undefined;
  user: User | undefined;
  statusColor: any;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.description) this.description = initializer.description;
    if (initializer.justification) this.justification = initializer.justification;
    if (initializer.rejectionreason) this.rejectionreason = initializer.rejectionreason;
    if (initializer.deliverymode) this.deliverymode = initializer.deliverymode;
    if (initializer.status) this.status = initializer.status;
    if (initializer.total) this.total = initializer.total;
    if (initializer.userid) this.userid = initializer.userid;
    if (initializer.user) this.user = initializer.user;
  }
}
