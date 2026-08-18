import { getProductCatalog } from "../catalogService.js";

/**
 * Fetch Myntra product listings matching query and filters.
 * Returns normalized product objects for the "myntra" platform only.
 */
export async function fetchMyntraProducts({ query = "", category = "", minPrice = 0, maxPrice = Infinity }) {
  const catalog = await getProductCatalog();
  const results = [];

  for (const group of catalog) {
    if (category && group.category !== category) continue;

    const platformEntry = group.platforms.find((p) => p.platform === "myntra");
    if (!platformEntry || !platformEntry.in_stock) continue;

    if (platformEntry.price < minPrice || platformEntry.price > maxPrice) continue;

    if (query) {
      const searchStr = `${group.product_name} ${group.brand} ${group.category} ${JSON.stringify(group.specs)}`.toLowerCase();
      const queryWords = query.toLowerCase().split(" ").filter(Boolean);
      const matches = queryWords.some((word) => searchStr.includes(word));
      if (!matches) continue;
    }

    results.push({
      product_id: `${group.group_id}-myntra`,
      group_id: group.group_id,
      platform: "myntra",
      platform_product_id: platformEntry.platform_product_id,
      title: group.product_name,
      brand: group.brand,
      category: group.category,
      price: platformEntry.price,
      original_price: platformEntry.original_price,
      discount_percent: platformEntry.discount_percent,
      currency: "INR",
      rating: platformEntry.rating,
      review_count: platformEntry.review_count,
      image_url: platformEntry.image_url,
      images: group.images || [platformEntry.image_url],
      dimensions: group.dimensions,
      glbUrl: group.glbUrl || group.glb_url || null,
      glb_url: group.glbUrl || group.glb_url || null,
      usdzUrl: group.usdzUrl || group.usdz_url || null,
      usdz_url: group.usdzUrl || group.usdz_url || null,
      product_url: platformEntry.product_url,
      delivery_estimate: platformEntry.delivery_estimate,
      seller: platformEntry.seller,
      in_stock: platformEntry.in_stock,
      specs: group.specs,
      reviews: platformEntry.reviews || [],
      fetched_at: new Date().toISOString(),
    });
  }

  return results;
}
