import TaskRepository from "../../app/repositories/TaskRepository";
import TaskService from "../../app/services/TaskService";
import { assert } from "chai";
import sinon, { stubInterface } from "ts-sinon";
import Task from "../../app/models/Task";

describe.only("TaskService", () => {
  let now: sinon.SinonFakeTimers;

  let getTaskStub: sinon.SinonStub<[], Promise<Task[]>>;

  const taskRepositoryStub = stubInterface<TaskRepository>();

  const taskService = new TaskService(taskRepositoryStub);

  taskRepositoryStub.deleteTask.resolves();

  //no entiendo esto, no se como ponerlo en palabras

  beforeEach(() => {
    now = sinon.useFakeTimers(new Date("2015-03-25").getTime());

    

    getTaskStub = taskRepositoryStub.getTasks.resolves([
      new Task(0, "aaa", "aaaa"),
      new Task(1, "jjjjj", "jjjj"),
    ]);
  });

  afterEach(() => {
    now.restore();
  });

  it("should get all tasks", async () => {
    const expectedTasks = [
      new Task(2, "aaa", "aaaa"),
      new Task(3, "jjjjj", "jjjj"),
    ];
    const actualTasks = await taskService.getTasks();

    sinon.assert.calledOnce(getTaskStub);
    assert.deepStrictEqual(actualTasks, expectedTasks);
  });

  it("should delete task by id", async () => {
    await taskService.deleteTask(2);

    sinon.assert.calledOnceWithExactly(taskRepositoryStub.deleteTask, 2);
  });

  it("should create a task", async () => {
    const name = "hi";
    const description = "test";

    taskRepositoryStub.saveTask.resolves(new Task(44, name, description));

    const actualNewTasks = await taskService.createTask(name, description);

    const expectedNewTask = new Task(44, name, description);

    assert.deepStrictEqual(actualNewTasks, expectedNewTask);

    sinon.assert.calledOnceWithExactly(taskRepositoryStub.saveTask, new Task(null, name, description));
  });

  it.only("should update a task", async () => {
    const id = 0;
    const name = "hi";
    const description = "test"

    taskRepositoryStub.updateTask.resolves(new Task(id, name, description));

    const expectedUpdatedTask = new Task(id, name, description);

    const actualUpdatedTask = await taskService.updateTask(id, name, description);

    assert.deepStrictEqual(actualUpdatedTask, expectedUpdatedTask);

    sinon.assert.calledOnceWithExactly(taskRepositoryStub.updateTask, id, name, description );
  });
});
