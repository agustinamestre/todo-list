import TaskService from "../../app/services/TaskService";
import sinon, { stubInterface } from "ts-sinon";
import Task from "../../app/models/Task";
import * as express from "express";
import TaskController from "../../app/controllers/TaskController";
import { mockRequest, mockResponse } from "mock-req-res";
import { assert, expect } from "chai";
import { json } from "body-parser";

describe("TaskController", () => {
  const taskServiceStub = stubInterface<TaskService>();

  const taskController = new TaskController(taskServiceStub);
  let now: sinon.SinonFakeTimers;

  beforeEach(() => {
    now = sinon.useFakeTimers(new Date("2015-03-25").getTime());
  });

  afterEach(() => {
    now.restore();
  });

  it("shoud get all tasks", async () => {
    const getTaskStub = taskServiceStub.getTasks.resolves([
      new Task(0, "aaa", "aaaa"),
      new Task(1, "jjjjj", "jjjj"),
    ]);

    const expectedTasks = [
      new Task(0, "aaa", "aaaa"),
      new Task(1, "jjjjj", "jjjj"),
    ];

    const response = mockResponse();

    await taskController.getTasks(response);

    sinon.assert.calledOnce(getTaskStub);
    sinon.assert.calledOnceWithExactly(response.send, expectedTasks);
  });

  it("should create a task", async () => {
    let name = "hi";
    let description = "test";

    const request = mockRequest({ body: { name, description } });

    const response = mockResponse();

    taskServiceStub.createTask.resolves(new Task(1, name, description));

    await taskController.createTask(request, response);

    sinon.assert.calledOnceWithExactly(
      taskServiceStub.createTask,
      name,
      description
    );

    sinon.assert.calledOnceWithExactly(
      response.send,
      new Task(1, name, description)
    );
  });

  it("should delete a task", async () => {
    const request = mockRequest({ params: { id: 1 } });
    const response = mockResponse();

    taskServiceStub.deleteTask.resolves();

    await taskController.deleteTask(request, response);

    sinon.assert.calledOnce(response.send);
  });

  it("should trow an exeption when the deleted task does not exist", async () => {
    const request = mockRequest({ params: { id: 1 } });
    const response = mockResponse();

    taskServiceStub.deleteTask.throws(new Error("Id not found"));

    await taskController.deleteTask(request, response);

    sinon.assert.calledOnceWithExactly(response.status, 404);
    sinon.assert.calledOnceWithExactly(response.json, {
      message: "Id not found",
    });
  });


  it("should update a task", async () => {
    let id = 0;
    let name = "hi";
    let description = "test";

    const request = mockRequest({
      body: { name, description },
      params: { id },
    });

    const response = mockResponse();

    taskServiceStub.updateTask.resolves(new Task(id, name, description));

    await taskController.updateTask(request, response);

    sinon.assert.calledOnceWithExactly(
      response.send,
      new Task(id, name, description)
    );
  });

  it("should trow an exeption when the updated task does not exist", async () => {
    const request = mockRequest({
      body: { name: "hi", description: "test" },
      params: { id: 100 },
    });

    const response = mockResponse();

    taskServiceStub.updateTask.throws(new Error("Id not found"));

    await taskController.updateTask(request, response);

    sinon.assert.calledOnceWithExactly(response.status, 404);
    sinon.assert.calledOnceWithExactly(response.json, {
      message: "Id not found",
    });
  });
});
