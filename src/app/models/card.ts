export class Card {
  public id: string;
  public name: string;
  public supertype: string;
  public subtypes: string[];
  public types: string[];
  public images: {
    small: string,
    large: string
  };
  public price: number;

  public static FromApiToModel(data): Card {
    const card = new Card();
    card.id = data.id;
    card.name = data.name;
    card.supertype = data.supertype;
    card.subtypes = data.subtypes;
    card.types = data.types;
    card.images = data.images;
    card.price = 25;
    if (data?.tcgplayer) {
      // Get the key of all the types of card
      const key = Object.keys(data.tcgplayer.prices)[0];
      if (data?.tcgplayer.prices[key]) {
        // Get the market price of the first type of card
        card.price = data.tcgplayer.prices[key].market;
      }
    }
    return card;
  }
}
