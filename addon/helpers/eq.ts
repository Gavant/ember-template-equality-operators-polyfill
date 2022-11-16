import Helper from '@ember/component/helper';

interface EqHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class EqHelper<T extends unknown[]> extends Helper<EqHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `eq` helper requires exactly two arguments');
    }

    return positional[0] === positional[1];
  }
}
