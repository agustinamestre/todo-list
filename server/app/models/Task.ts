export default class Task {
    constructor(
        private readonly id: number,
        private readonly name: string,
        private readonly description: string,
        private readonly createdAt: Date= new Date(),
        private readonly updatedAt: Date = new Date()
    ) {}
}