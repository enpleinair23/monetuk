import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch products from Stripe
      const products = await stripe.products.list({
        expand: ['data.default_price'], // To include price data
      });

      const formattedProducts = products.data.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: product.default_price.unit_amount / 100, // Price in dollars
        currency: product.default_price.currency.toUpperCase(),
      }));

      res.status(200).json(formattedProducts);
    } catch (error) {
      console.error('Error fetching products from Stripe:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
