import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    text: { type: String, required: true },
    date: { type: String },
  },
  { _id: false }
);

const PlatformListingSchema = new mongoose.Schema(
  {
    platform: { type: String, required: true, enum: ["amazon", "flipkart", "myntra"] },
    platform_product_id: { type: String, required: true },
    price: { type: Number, required: true },
    original_price: { type: Number, required: true },
    discount_percent: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    review_count: { type: Number, default: 0 },
    delivery_estimate: { type: String },
    seller: { type: String },
    in_stock: { type: Boolean, default: true },
    image_url: { type: String },
    product_url: { type: String },
    reviews: [ReviewSchema],
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    group_id: { type: String, required: true, unique: true, index: true },
    product_name: { type: String, required: true, index: "text" },
    category: { type: String, required: true, index: true },
    brand: { type: String, required: true, index: true },
    specs: { type: Map, of: mongoose.Schema.Types.Mixed },
    glbUrl: { type: String },
    usdzUrl: { type: String },
    platforms: [PlatformListingSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
