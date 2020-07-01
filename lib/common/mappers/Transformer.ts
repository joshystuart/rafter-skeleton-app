export default interface Transformer<S, T> {
  convert(source: S): T;
}
