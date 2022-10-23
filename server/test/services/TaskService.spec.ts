// import TaskRepository from "../../app/repositories/TaskRepository";
// import TaskService from "../../app/services/TaskService";
// import * as sinon from "sinon";
// import { assert } from "chai";

// describe("TaskService", () => {

//   const taskRepository = {} as TaskRepository;

//   const getTaskSpy = sinon.stub(taskRepository, "getTasks").resolves([]);
//   sinon.stub(taskRepository, "deleteTask").resolves();

//   const taskService = new TaskService(taskRepository);

//   it("should get all tasks", async () => {
//     const expectedTasks = [];
//     const actualTasks = await taskService.getTasks();

//     sinon.assert.calledOnce(getTaskSpy);
//   });

//   it("should delete task by id", async () => {
//     await taskService.deleteTask(2);

//     sinon.assert.calledOnceWithExactly(taskRepository.deleteTask, 2);
//   });
// });
