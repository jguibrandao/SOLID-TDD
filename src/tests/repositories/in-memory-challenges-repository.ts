import { ChallengesRepository } from "../../aplications/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

// getting data in memory so we can test
// the aplication appart of the infrastructure/db
export class inMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = []

    async findById(id: string): Promise<Challenge | null> {
        const challenge = this.items.find(challenge => challenge.id === id)

        if(!challenge) {
            // find method returns undefined
            // by default when it gets no result,
            // so here we are returning null if find doesnt get anything
            return null;
        }

        return challenge;
    }
}