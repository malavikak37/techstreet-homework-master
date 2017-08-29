import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users: any[] = [
    { first_name: "Aesop",     last_name: "Hildebrand" },
    { first_name: "Aladdin",   last_name: "Tirzah" },
    { first_name: "Launce",    last_name: "Aspasia" },
    { first_name: "Sumati",    last_name: "Parthalan" },
    { first_name: "Cassia",    last_name: "Amalbert" },
    { first_name: "Mitra",     last_name: "Gemariah" },
    { first_name: "Josiah",    last_name: "Gershon" },
    { first_name: "Aelia",     last_name: "Ishmael" },
    { first_name: "Neasa",     last_name: "Yahveh" },
    { first_name: "Matthia",   last_name: "Jada" },
    { first_name: "Israel",    last_name: "Haidee" },
    { first_name: "Samuel",    last_name: "Rouben" },
    { first_name: "Laila",     last_name: "Jubal" },
    { first_name: "Reed",      last_name: "Herminio" },
    { first_name: "Eli",       last_name: "Errol" },
    { first_name: "Doretta",   last_name: "Trinity" },
    { first_name: "Dorothea",  last_name: "Trenton" },
    { first_name: "Scot",      last_name: "Catalina" },
    { first_name: "Sheena",    last_name: "Kiley" },
    { first_name: "Maybelle",  last_name: "Yishai" },
    { first_name: "Melisa",    last_name: "Kilian" },
    { first_name: "Ethelyn",   last_name: "Lora" },
    { first_name: "Carey",     last_name: "Elaine" },
    { first_name: "Danica",    last_name: "Niven" },
    { first_name: "Geordie",   last_name: "Flannan" },
    { first_name: "Esmeralda", last_name: "Lexy" },
    { first_name: "Vince",     last_name: "Jemmy" },
    { first_name: "Lincoln",   last_name: "Briseida" },
    { first_name: "Judy",      last_name: "Blaine" },
    { first_name: "Gerry",     last_name: "Darcy" }
  ]

  roles: string[] = [
    "admin",
    "editor",
    "purchaser",
    "service",
    "standard"
  ]

  constructor() {}

  index() {
    return this.users.map(user => {
      const email = user.first_name.toLowerCase().substring(0,3)
                  + user.last_name.toLowerCase().substring(0,4)
                  + "@test.com";
      const name_length = user.first_name.length + user.last_name.length;
      const role_index = name_length % this.roles.length;
      const role = this.roles[role_index];
      return Object.assign(user, { email: email, role: role });
    });
  }
}
