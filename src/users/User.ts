export class User {
  id: number | undefined;
  username = "";
  password = "";
  firstname = "";
  lastname = "";
  isReviewer = false;
  isAdmin = false;
  phone: string | undefined;
  email: string | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.username) this.username = initializer.username;
    if (initializer.password) this.password = initializer.password;
    if (initializer.firstname) this.firstname = initializer.firstname;
    if (initializer.lastname) this.lastname = initializer.lastname;
    if (initializer.isReviewer) this.isReviewer = initializer.isReviewer;
    if (initializer.isAdmin) this.isAdmin = initializer.isAdmin;
    if (initializer.phone) this.phone = initializer.phone;
    if (initializer.email) this.email = initializer.email;
  }
}
