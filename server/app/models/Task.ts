export default class Task {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string,
    private readonly createdAt: Date = new Date(),
    private readonly updatedAt: Date = new Date()
  ) {}
}
