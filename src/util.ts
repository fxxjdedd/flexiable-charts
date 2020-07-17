import { DataSource } from "./service";
import { isValidElement as isValidReactElement } from "react";
import { VNode } from "vue";

export function isValidVueElement(mayBeVNode: object): mayBeVNode is VNode {
  return (
    mayBeVNode &&
    ["tag", "data", "children", "text", "elm", "ns", "context", "key"].every(
      key => key in mayBeVNode
    )
  );
}

export function isDataSource(
  mayBeDataSource: any
): mayBeDataSource is DataSource {
  return ["id", "from"].every(key => key in mayBeDataSource);
}

export function isAllElement(arr: any[]): arr is any {
  return arr.every(
    item => isValidReactElement(item) || isValidVueElement(item)
  );
}

export function isAllObject(arr: any[]): arr is object[] {
  return arr.every(item => typeof item === "object");
}

export function isAllFunction(arr: any[]): arr is Function[] {
  return arr.every(item => typeof item === "function");
}

export function assertUnreachable(msg?: string): never {
  throw new Error(msg);
}

export function assertExist(value: unknown, msg?: string): asserts value {
  if (value == null || (Array.isArray(value) && !value.length)) {
    throw new Error(msg);
  }
}
