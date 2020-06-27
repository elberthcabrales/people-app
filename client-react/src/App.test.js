import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { renderHook } from '@testing-library/react-hooks'
import  Header from './components/Header';
import usePeople from './hooks/People'
import { peopleMock } from './mock/people.json'
import Person from './components/Person';
import frequencyChar from './lib/frequencyChar'
import similarityRank from './lib/similarityRank'

Enzyme.configure({ adapter: new Adapter() });

describe('Test App Component', ()=>{
  const app = shallow(<App />);
  test('should render header without error', () => {
    expect(app.find(Header).length).toBe(1)
  });

  test('Render hook use people', ()=>{
    const { result }  = renderHook(() => usePeople(peopleMock))
    expect(result.current.people).toBe(peopleMock)
  });
});

describe('Header test render title', () => {
  const title="Testing"
  const header = shallow(<Header title={title}/>);
  test('shold render form without error', () => {
      expect(header.find('h4').text()).toBe(title)
  })
})

describe('Person test Component', () => {
  const [steven] = peopleMock
  const countCharaters = jest.fn();
  const findSimilarity = jest.fn();
  const person = shallow(<Person person={steven} countCharaters={countCharaters} findSimilarity={findSimilarity}/>)
  it('Render person name in collection header',()=>{
    expect(person.find('.collection-header h5').text()).toBe(steven.name)
  })

  it('Counter of characters with four as first', ()=>{
    const resutl = frequencyChar('mmm@ss.com')
    expect(resutl[0][1]).toBe(4)
  })

  it('Get Rank of similarity to show related emails', ()=>{
    const [steven] = peopleMock
    const result = similarityRank(steven.email,peopleMock.filter(i=>i.id!== steven.id))
    expect(result.length).toBe(2)
  })
})

