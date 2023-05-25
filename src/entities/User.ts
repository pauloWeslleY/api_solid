import { uuid } from 'uuidv4'

export class User {
  public readonly id: string

  public name: string
  public email: string
  public password: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    /*
     * Aqui ele pega todas a propriedades
     * que estão dentro do objeto (props)
     * e passa uma por uma pra dentro do this
     */
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
