import React from 'react'
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput 
               name ="title"
               label = "Title"
               value = {course.title}
               onChange ={onChange}
               error={errors.title} />
            <SelectInput 
               name ="authroId"
               label = "Author"
               value = {course.authorId}
               options = {allAuthors}
               onChange ={onChange}
               error={errors.authorId} />
            <TextInput 
               name ="category"
               label = "Category"
               value = {course.authorId}
               onChange ={onChange}
               error={errors.category} />
            <TextInput 
               name ="length"
               label = "Length"
               value = {course.length}
               onChange ={onChange}
               error={errors.length} />
            <input 
               type="submit"
               disabled={loading}
               value ={loading? 'Saving...' : 'Save'}
               className='btn btn-primary'
               onClick={onSave} />
        </form>
    )
}

export default CourseForm