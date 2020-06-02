// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
  async index (request: Request, response: Response) {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost/uploads/${item.image}`
      }
    })

    return response.json(serializedItems)
  }
}

export default ItemsController