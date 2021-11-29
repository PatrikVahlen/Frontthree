
import './App.css';
import Section from './Components/Section';

// const myArray = [
//   {
//     src: "https://images.unsplash.com/photo-1638164659039-77870de9637b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     alt: "Waterfall",
//     heading: "Waterfall",
//     paragraph: "Lorem ipsum"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1638164659039-77870de9637b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     alt: "Waterfall",
//     heading: "Waterfall",
//     paragraph: "Lorem ipsum"
//   }
// ]

const data = [
  { title: 'Look at my Code', description: 'It is awesome 😉', imageURL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Front preview of my latest deployment', description: 'Now that is something to put your eye 👀 on', imageURL: 'https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Latest image of my workstation', description: 'Keeping it simple ♥️', imageURL: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'My computer and my pot', description: 'Green pot for the zen feeling 🧘‍♀️', imageURL: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Est, sleep, code repeat', description: 'The only way to learn something is to get started', imageURL: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Yet another shot of my laptop', description: 'Guess what Im building?', imageURL: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'One screen is not enough', description: 'Keeping it cool with my 3 monitors. Productivity x 3', imageURL: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Just my MBP and my Plant', description: 'Nothing more nothing less', imageURL: 'https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Style with white', description: 'Increase contrast and decrease colors', imageURL: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
  { title: 'Mapping out our customer journey', description: 'Just an awesome shit of our customer journey', imageURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&h=600&q=80' },
]

function App() {
  return (
    <div className="App-header">
      {data.map((item, index) => {
        return <Section
          key={index}
          {...item}
        // key={index}
        // imageURL={item.imageURL}
        // description={item.description}
        // title={item.title}
        // description={item.description}
        />
      })
      }
    </div>
  );
}

export default App;
