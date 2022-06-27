export abstract class InterfaceUseCases<T> {
  constructor() {}
  abstract execute(data: Partial<T>);
}
