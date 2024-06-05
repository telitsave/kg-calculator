export interface BaseResources<T> {
  clone(): T

  add(otherResources: T): void

  substract(otherResources: T): void
}
