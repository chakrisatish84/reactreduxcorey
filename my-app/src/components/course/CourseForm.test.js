import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(){
    let props ={
        course:{}, loading:false, error:{}, 
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(CourseForm {...props});
    let output = renderer.getRenderOutput();

    return{
        props,
        output,
        renderer
    }
}

describe('CourstFrom via React Test Utils',() =>{
 it('renders form and h1',() =>{
   const { output } = setup();
   expect(output.type).toBe('form');
 });
});