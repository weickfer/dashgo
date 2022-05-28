import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from 'faker'

type UserModel = {
  name: string;
  email: string;
  created_at: Date;
}

faker.setLocale('pt_BR')

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend({} as Partial<UserModel>)
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          const isPair = i % 2 === 0
          
          const name = faker.name.firstName(isPair ? 0 : 1)
          const surname = faker.name.lastName(isPair ? 0 : 1)

          return `${name} ${surname}`
        },
        email() {
          const [name, surname] = this.name.split(' ')
          
          return faker.internet.email(name, surname).toLocaleLowerCase()
        },
        createdAt(i: number) {
          return faker.date.recent(3 * 30)
        }
      })
    },

    seeds(server) {
      server.createList('user', 20)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', async function(schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams
        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user'))
          .users
          .slice(pageStart, pageEnd)

        return new Response(
          200, 
          { 'x-total-count': String(total) }, 
          { users }
        )
      })
      this.get('/users/:id')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}