export type ICharacter = {
  info: {
    count: number;
    pages: number;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
      };
      location: {
        name: string;
      };
      image: string;
      created: string;
    }
  ];
};

export type ICard = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
};

export type ISingleCard = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name: string;
  };
  location?: {
    name: string;
  };
  image?: string;
  created?: string;
};
