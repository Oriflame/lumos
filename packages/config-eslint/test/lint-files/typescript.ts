interface Interface {
  (a: string): void;
  test: string;
}

export const b: Interface = (a) => {
  console.log(a);
};

b.test = 'test string';

interface Item {
  maybe?: string;
}

const item: Item = {};

if (!item.maybe) {
  console.log('test');
}
