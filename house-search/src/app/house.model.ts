export class HouseModel {
    houseName: string;
    url: string;
    location: string;
    about: string;
  
    constructor(houseName: string, url: string, location: string, about: string) {
      this.houseName = houseName;
      this.url = url;
      this.location = location;
      this.about = about;
    }
  }