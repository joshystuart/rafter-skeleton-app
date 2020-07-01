export default interface Mapper<S, T> {
  map(source: S, target: T): void;
}
