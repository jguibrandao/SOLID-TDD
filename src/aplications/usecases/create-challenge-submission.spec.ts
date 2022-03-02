import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.execute({
            studentId: 'test-student-id',
            challengeId: 'test-challenge-id'
        });

        expect(response).toBeTruthy()
    });
});