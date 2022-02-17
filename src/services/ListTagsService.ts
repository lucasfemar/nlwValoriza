import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer"; // Para eu poder usar os atributos personalizados

class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();
        return classToPlain(tags);
    }
}

export { ListTagsService };