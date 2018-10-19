import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has correct snapshot', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Search', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search onChange={() => {}} onSubmit={() => {}}>Поиск</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has correct snapshot', () => {
    const component = renderer.create(
      <Search onChange={() => {}} onSubmit={() => {}}>Поиск</Search>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={() => {}}>Дай мне больше</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has correct snapshot', () => {
    const component = renderer.create(
      <Button onClick={() => {}}>Дай мне больше</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: '1', points: 2, objectID: 'y'},
      { title: '2', author: '2', num_comments: '2', points: 2, objectID: 'z'},
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
  }

  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} onClick={() => {}} onDismiss={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has correct snapshot', () => {
    const component = renderer.create(
      <Table {...props} onClick={() => {}} onDismiss={() => {}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(<Table {...props} onClick={() => {}} onDismiss={() => {}} />);
    expect(element.find('.table-row').length).toBe(2);
  });
});