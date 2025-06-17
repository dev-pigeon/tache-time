import { act, renderHook } from "@testing-library/react";
import useTaskList from "../hooks/useTaskList";
import useAddTask from "../hooks/useAddTask";
import dayjs, { Dayjs } from "dayjs";

function createMockChangeEvent(
  value: string,
  id: string
): React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
  return {
    target: { value, id },
    currentTarget: { value },
    preventDefault: jest.fn(),
  } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}

function createMockDayjs(dateStr: string): Dayjs {
  const actual = dayjs(dateStr, "MM/DD/YYYY");

  return {
    ...actual,
    format: jest.fn((formatStr?: string) => actual.format(formatStr)),
    toString: jest.fn(() => actual.toString()),
  } as unknown as Dayjs;
}

const mockDisplayValidation = (
  _message: string,
  _status: "success" | "error"
): void => {};

describe("handleStringElementChange targets correct elements", () => {
  let addTaskHook: { current: any };
  beforeEach(() => {
    const taskListHook = renderHook(() => useTaskList()).result;
    addTaskHook = renderHook(() =>
      useAddTask({
        taskListHook: taskListHook.current,
        displayValidation: mockDisplayValidation,
      })
    ).result;
  });

  test("handleStringElementChange correctly modifies task name", () => {
    const expectedTaskName = "Test Add Task Feature";
    const taskNameEvent = createMockChangeEvent(
      "Test Add Task Feature",
      "task-name"
    );
    act(() => {
      addTaskHook.current.handleStringElementChange(taskNameEvent);
    });
    expect(addTaskHook.current.taskName).toBe(expectedTaskName);
  });

  test("handleStringElementChange correctly modifies task estimated time", () => {
    const expectedEstTime = "0";
    const estTimeEvent = createMockChangeEvent("0", "task-est-time");
    act(() => {
      addTaskHook.current.handleStringElementChange(estTimeEvent);
    });
    expect(addTaskHook.current.estimatedHours).toBe(expectedEstTime);
  });

  test("handleStringElementChange correctly modifies task description", () => {
    const expectedTaskDesc =
      "I am testing to see if the description text box functions correctly";
    const estTimeEvent = createMockChangeEvent(
      "I am testing to see if the description text box functions correctly",
      "task-desc"
    );
    act(() => {
      addTaskHook.current.handleStringElementChange(estTimeEvent);
    });
    expect(addTaskHook.current.taskDescription).toBe(expectedTaskDesc);
  });
});

test("Task due date updates correcly", () => {
  const taskListHook = renderHook(() => useTaskList()).result;
  const addTaskHook = renderHook(() =>
    useAddTask({
      taskListHook: taskListHook.current,
      displayValidation: mockDisplayValidation,
    })
  ).result;
  const expectedDate = "06/10/2025";
  const mockObject = createMockDayjs("06/10/2025");
  act(() => {
    addTaskHook.current.setTaskDueDate(mockObject);
  });
  expect(addTaskHook.current.taskDueDate?.format("MM/DD/YYYY")).toBe(
    expectedDate
  );
});

test("Task time due updates correctly", () => {
  const taskListHook = renderHook(() => useTaskList()).result;
  const addTaskHook = renderHook(() =>
    useAddTask({
      taskListHook: taskListHook.current,
      displayValidation: mockDisplayValidation,
    })
  ).result;
  const expectedTime = "11:00 AM";
  const mockObject = createMockDayjs("06/10/2025 11:00 AM");

  act(() => {
    addTaskHook.current.setTaskTimeDue(mockObject);
  });

  expect(addTaskHook.current.taskTimeDue?.format("hh:mm A")).toBe(expectedTime);
});
