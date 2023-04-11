import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-12'>
            <p>1. When should you use context API?</p>
            <h1>Ans: Context is generally used when some data need to be accessible by many components at different nesting pages. It applys sparingly bacause it makes component reuse more difficult. If we only want to aboid pass some props though many different lavels page, component component composition is often a simple solution than context.</h1>
            <br />
            <p>2. What is a custom hook?</p>
            <h1>Ans: Custom hook is a special JavaScript function whose name starts with 'use' and it is use to call other hooks. It create by ourselves, when we want to share logic between other JavaScript functions.</h1>
            <br />
            <p>3. What is useRef?</p>
            <h1>Ans: The useRef Hook allows us to persist valuse between renders. It is used to store a mutable balue that dose not cause a re-render when update. useRef is used to access a DOM element directly.</h1>
            <br />
            <p>4. What is useMemo?</p>
            <h1>Ans: useMemo is a React Hook that lets us cachethe result of a calculation between re-render. useMemo is use to keep expensive, resource intensive functions from needlessly running.</h1>
        </div>
    );
};

export default Blog;