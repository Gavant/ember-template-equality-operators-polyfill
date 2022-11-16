import Helper from '@ember/component/helper';

interface NeqHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class NeqHelper<T extends unknown[]> extends Helper<NeqHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `neq` helper requires exactly two arguments');
    }

    return positional[0] !== positional[1];
  }
}
