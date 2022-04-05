import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold py-6'>Blogs</h1>
            <div className='mt-8 mb-7 py-5 max-w-4xl mx-auto drop-shadow rounded-lg text-left bg-white px-8'>
                <h2 className='pb-3 text-2xl font-medium' >1. Context API</h2>
                <p className='text-xl'>A React app may use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to children to parent and so on. Context is also offered as a simpler, lighter way to Redux state management. It will provide you a customer and a provider. Provider is a component that supplies the state to its children, as its name indicates. It will contain the "store" and serve as the parent of any components that may require it. A component that consumes and utilizes the state is known as a consumer.</p>
            </div>
            <div className='py-5 mb-5 max-w-4xl mx-auto drop-shadow rounded-lg text-left bg-white px-8'>
                <h2 className='pb-3 text-2xl font-medium' >2. Semantic Tag</h2>
                <p className='text-xl'>Semantic HTML, often known as semantic markup, is a kind of HTML that adds meaning to a web page rather than just making it. It improves the content interpretation of browsers and search engines by making web pages more informative and adaptive. A &lt;p&gt; tag, for example, denotes that the contained text is a paragraph. Because people understand what paragraphs are and how to display them, this is both semantic and presentational. Section, article, footer, progress, nav, aside, mark, and time are all new semantic elements in HTML 5.</p>
            </div>
        </div>
    );
};

export default Blogs;