import React from 'react'
import Heading from './Heading'
import Imagefile from './Imagefile'
import Paragraph from './Paragraph'

export default function Section(props) {
    return (

        /*
        { title: 'Mapping out our customer journey', 
        description: 'Just an awesome shit of our customer journey', 
        imageURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' }
        */

        <div >
            <Heading {...props}
            // heading={props.heading}
            />
            <Imagefile {...props}
            // src={props.src}
            // alt={props.alt}
            />
            <Paragraph {...props}
            // paragraph={props.paragraph}
            />
        </div>
    )
}
