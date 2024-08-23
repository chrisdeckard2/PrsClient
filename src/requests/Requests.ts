import { Requestline } from "../requestlines/RequestLines";
import { User } from "../users/User";

export class Request {
  id: number | undefined;
  description = "";
  justification = "";
  rejectionreason = "";
  deliveryMode = "";
  status = "NEW";
  total: number | undefined;
  userId: number | undefined;
  users: User | undefined;
  statusColor: any;
  requestLines: Requestline[] = [];

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.description) this.description = initializer.description;
    if (initializer.justification) this.justification = initializer.justification;
    if (initializer.rejectionreason) this.rejectionreason = initializer.rejectionreason;
    if (initializer.deliveryMode) this.deliveryMode = initializer.deliveryMode;
    if (initializer.status) this.status = initializer.status;
    if (initializer.total) this.total = initializer.total;
    if (initializer.userId) this.userId = initializer.userId;
    // if (initializer.user) this.user = initializer.user;
  }
}
