import { removeCartItem } from '../../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function handler(req, res) {
  const { item } = req.body || {}
  res.json(await removeCartItem(item, req, res))
}

export const config = {
  api: {
    bodyParser: true,
  },
}
