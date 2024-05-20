
export type TReview = {
    email: string;
    rating: number;
    comment: string;
  };
  
  export type TMovie = {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    isDeleted: boolean;
    viewCount: number;
    reviews: [TReview];
    slug:string
   
  };