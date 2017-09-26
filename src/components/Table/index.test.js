import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() })

import Table from 'components/Table';

describe('Table', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
  }

  function onDismiss(id) {
    
  };

  it ('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props } onDismiss={onDismiss(1)} />, div);
  })

  it('show two items in the list', () => {
    const component = shallow(
      <Table { ...props } onDismiss={onDismiss(1)} />
    );

    expect(component.find('.table-row').length).toBe(2)
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Table { ...props } onDismiss={onDismiss(1)} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})