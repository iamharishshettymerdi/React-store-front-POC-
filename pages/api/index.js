import { home } from '../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function(req, res) {
  res.json(await home(req, res))
}
