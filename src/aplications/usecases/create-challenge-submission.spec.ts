import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { inMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { inMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new inMemoryStudentsRepository();
        const challengesRepository = new inMemoryChallengesRepository();

        const student = Student.create({
            name: 'João',
            email: 'example@example.com'
        })

        const challenge = Challenge.create({
            title: 'Test challenge',
            instructionsUrl: 'www.example.com'
        })

        studentsRepository.items.push(student)
        challengesRepository.items.push(challenge)

        const sut = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository
        );

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        });

        expect(response).toBeTruthy()
    });
});