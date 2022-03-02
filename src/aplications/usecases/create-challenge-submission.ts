import { Submission } from "../../domain/entities/submission"
import { ChallengesRepository } from "../repositories/ChallengesRepository"
import { StudentsRepository } from "../repositories/StudentsRepository"

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private stundentsRepository: StudentsRepository,
        private challengesRepository: ChallengesRepository,
    ) {}

    async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
       const student = await this.challengesRepository.findById(challengeId)

        if (!student) {
            throw new Error('Student does not exists')
        }

        const challenge = await this.stundentsRepository.findById(studentId)

        if (!challenge) {
            throw new Error('Challenge does not exists')
        }

        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission
    }
}