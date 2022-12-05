import { home } from '../../custom-storefront'

export default async function(req, res) {
  res.json(await home(req, res))
}
