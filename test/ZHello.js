import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { ZHello } from '../src/ZHello';

test('Rendering', (t) => {
  const msg = 'ZHello should render a greeting text';
  const expected = 'Hello!';
  const rendered = shallow(<ZHello />);
  const actual = rendered.children().children().text();
  t.deepEqual(actual, expected, msg);
});
