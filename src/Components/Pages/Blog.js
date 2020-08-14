import React from 'react';
import { Helmet } from 'react-helmet';

function Blog(props){
    return(
        <div>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Blog" />
            </Helmet>
            <h1>Blog</h1>
            <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.     
            </p>

        </div>
    );
}

export default Blog;