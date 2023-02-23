import { productSuggestions } from '../../../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function(req, res) {
  const { productId } = req.query
  res.json(await productSuggestions(productId, req, res))
}
