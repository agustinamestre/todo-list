export default class TaskModel {
    constructor(
        public readonly id: string | undefined,
        public name: string,
        public description: string,
    ) {}
}