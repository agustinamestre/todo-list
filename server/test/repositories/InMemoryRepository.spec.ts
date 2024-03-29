import { assert } from "chai";
import sinon from "sinon";
import Task from "../../app/models/Task";
import InMemoryTaskRepository from "../../app/repositories/InMemoryRepository";
import TaskRepository from "../../app/repositories/TaskRepository";

describe("InMemoryRepository", () => {
  let inMemoryTaskRepository: TaskRepository;
  let now: sinon.SinonFakeTimers;

  beforeEach(() => {
    now = sinon.useFakeTimers(new Date("2015-03-25").getTime());
    inMemoryTaskRepository = new InMemoryTaskRepository();
  });

  afterEach(() => {
    now.restore();
  });

  it("should get all tasks", async () => {
    const expectedTasks = [
      new Task(0, "Limpieza", "limpiar habitacion"),
      new Task(1, "Ejercicio", "Ir la gimnasio"),
    ];

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.deepStrictEqual(tasks, expectedTasks);
  });

  it("should delete a task by id", async () => {
    const expectedTasks = [new Task(1, "Ejercicio", "Ir la gimnasio")];

    await inMemoryTaskRepository.deleteTask(0);

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.deepStrictEqual(tasks, expectedTasks);
  });

  it("should create a task", async () => {
    let id = Math.floor(Math.random() * 101);

    const actualNewTask = await inMemoryTaskRepository.saveTask(
      new Task(id, "?", "??")
    );

    let idExpected = actualNewTask.id;
    
    const expectedNewTask = new Task(idExpected, "?", "??");

    assert.deepStrictEqual(actualNewTask, expectedNewTask);

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.lengthOf(tasks, 3);
  });

  it("should update a task", async () => {
    const expectedUpdatedTask = new Task(0, "?", "??");

    const actualUpdatedTask = await inMemoryTaskRepository.updateTask(
      0,
      "?",
      "??"
    );

    assert.deepStrictEqual(actualUpdatedTask, expectedUpdatedTask);
  });

  it("should trow an exeption when the updated task does not exist", async () => {
    try {
      await inMemoryTaskRepository.updateTask(7, "?", "??");
      assert.fail();
    } catch (error: any) {
      assert(error instanceof Error);
      assert.equal(error.message, "Id not found");
    }
  });
});
