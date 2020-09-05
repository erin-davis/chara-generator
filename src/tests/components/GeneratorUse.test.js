import React from "react";
import {render} from "@testing-library/react";
import {ReactTestUtils as RTU} from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import GeneratorUse from "../../components/GeneratorUse.js";
/*a test to make sure that description in /use aka GeneratorUse.js shows only when active aka when the mouse is on it and not when the moust is not on it...*/

test('Should render /use correctly', ()=>{
  const renderer = new ShallowRenderer();
  renderer.render(<GeneratorUse />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})

test('There is no class to start with', ()=>{
  render(
    <div>
      <GeneratorUse />
    </div>
  )

  const npcClass = document.querySelector('.NPC');
  const pcClass = document.querySelector('.PC');

  expect(pcClass.className).toBe('PC');
  expect(npcClass.className).toBe('NPC');
})

test('Should add class when mouse enters', ()=>{
  
})