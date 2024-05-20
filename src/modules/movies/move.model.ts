import { TReview,TMovie  } from './movies.interface';

import mongoose, { Schema, Document, Model, model } from 'mongoose';


// Define the Review schema
const ReviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

// Define the Movie schema
const MovieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, required: true, default: false },
  viewCount: { type: Number, required: true, default: 0 },
  reviews: { type: [ReviewSchema], required: true }, // Use the ReviewSchema here
  slug: { type: String, required: true },
});

// Create and export the models

export const Movie =model <TMovie> ("Movie",MovieSchema);
