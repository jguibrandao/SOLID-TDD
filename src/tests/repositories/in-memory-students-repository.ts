import { StudentsRepository } from "../../aplications/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

// getting data in memory so we can test
// the aplication appart of the infrastructure/db
export class inMemoryStudentsRepository implements StudentsRepository {
    public items: Student[] = []

    async findById(id: string): Promise<Student | null> {
        const student = this.items.find(student => student.id === id)

        if(!student) {
            // find method returns undefined
            // by default when it gets no result,
            // so here we are returning null if find doesnt get anything
            return null;
        }

        return student;
    }
}