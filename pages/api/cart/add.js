import { addToCart } from '../../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

async function handler(req, res) {
  const result = await addToCart(req.body, req, res)
  res.json(result)
}

export const config = {
  api: {
    bodyParser: true,
  },
}

export default handler
