export class Book {

  public selected: boolean;
  public image: string = 'http://lorempixel.com/640/480/abstract';
  public description = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident optio voluptas. Voluptatibus omnis odio harum laudantium cumque fugit exercitationem.
  `;

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public copies?: number,
  ) {
    this.copies = this.copies || 0;
  }

  public get available() {
    return !!this.copies;
  }
}
