export default class TaskModel {
  constructor(
    public readonly id: number | undefined,
    public name: string,
    public description: string
  ) {}
}
