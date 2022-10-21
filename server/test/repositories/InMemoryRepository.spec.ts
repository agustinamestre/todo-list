import { assert } from "chai";
import sinon from "sinon";
import Task from "../../app/models/Task";
import InMemoryTaskRepository from "../../app/repositories/InMemoryRepository";
import TaskRepository from "../../app/repositories/TaskRepository";

describe("InMemoryRepository", () => {
  const mockNow = new Date();
  // usar algun valos hardcodeado dentro del constructor de new date

  let inMemoryTaskRepository: TaskRepository;

  sinon.useFakeTimers(mockNow.getTime());

  beforeEach(() => {
    inMemoryTaskRepository = new InMemoryTaskRepository();
  });

  afterEach(() => {
    // limpiar la fecha en el after each
  });

  it("should get all tasks", async () => {
    const expectedTasks = [
      new Task(0, "Limpieza", "limpiar habitacion", mockNow, mockNow),
      new Task(1, "Ejercicio", "Ir la gimnasio", mockNow, mockNow),
    ];

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.deepStrictEqual(tasks, expectedTasks);
  });

  it("should detele a task by id", async () => {
    const expectedTasks = [
      new Task(1, "Ejercicio", "Ir la gimnasio", mockNow, mockNow),
    ];

    await inMemoryTaskRepository.deleteTask(0);

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.deepStrictEqual(tasks, expectedTasks);
  });

  it("should create a task", async () => {
    const expectedNewTask = new Task(2, "?", "??", mockNow, mockNow);

    const actualNewTask = await inMemoryTaskRepository.saveTask(
      expectedNewTask
    );
    assert.deepStrictEqual(actualNewTask, expectedNewTask);

    const tasks = await inMemoryTaskRepository.getTasks();

    assert.lengthOf(tasks, 3);
  });

  it("should update a task", async () => {
    const expectedNewTask = new Task(0, "?", "??", mockNow, mockNow);

    const actualNewTask = await inMemoryTaskRepository.updateTask(0, "?", "??");

    assert.deepStrictEqual(actualNewTask, expectedNewTask);
  });

  it("should trow an exeption when the updated task does not exist", async () => {
    try {

      await inMemoryTaskRepository.updateTask(7, "?", "??");

      assert.fail();
    } catch (error: any) {
      
      assert(error instanceof Error);

      // verifica el contenido del error.

      assert.equal(error.message, "");
    }
  });
});
