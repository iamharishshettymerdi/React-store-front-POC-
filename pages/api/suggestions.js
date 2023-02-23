import { searchSuggestions } from '../../Connector_Files/react-storefront-salesforce-commerce-cloud-connector'

export default async function searchSuggestionsPage(req, res) {
  const { q } = req.query
  res.json(await searchSuggestions(q, req, res))
}
