import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from 'components/Button';

describe('Button', () => {
  it ('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Dismiss</Button>, div);
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Button>Dismiss</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})