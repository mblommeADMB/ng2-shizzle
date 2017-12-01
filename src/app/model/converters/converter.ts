export interface Converter<S,T> {
  to(source: S): T;
  from(target: T): S
}
