import { product } from '../../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function pdp(req, res) {
  const { productId } = req.query
  return res.json(await product({ id: productId }, req, res))
}
