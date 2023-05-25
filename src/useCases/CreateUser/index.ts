import { CreateUserUseCase } from './CreateUserUseCase'
import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'
import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository'
import { CreateUserController } from './CreateUserController'

const mailtrapMailProvider = new MailTrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
