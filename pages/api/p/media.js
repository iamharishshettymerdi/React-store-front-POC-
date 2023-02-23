export { productMedia } from '../../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function(req, res) {
  const { productId, color } = req.query
  res.json(await productMedia({ id: productId, color }, req, res))
}
