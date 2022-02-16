/** REPOSITORIO CUSTOMIZADO PARA A ENTIDADE User */
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"

//Referenciando esse repositorio a entidade User
@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories }