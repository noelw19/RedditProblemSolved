import React, {ReactElement} from 'react';
import './App.css';

interface whatsBrokenProps {
  value: string;
  handleChange:(value: string) => void;
}

const whatsBroken = (props: whatsBrokenProps ): ReactElement => {
  return (
    <div className="markdownEditor">
      <h3>Hello Reddit</h3>
      <label htmlFor="markdown-content">
        help identify
      </label>
      <textarea
        id="markdown-content"
        onChange={(e) => props.handleChange(e.target.value)}
        defaultValue={props.value} />
       <h3>can you find it</h3>
        <p>Below is the dangerouslySetInnerHTML div</p>
       <div className="content"
       dangerouslySetInnerHTML={{__html: props.value}}/>
    </div>
  )
};


function App() {
  let valText = '<p>This is the text</p>';
  return (
    <div className="App">
      {whatsBroken(
        {value: valText, handleChange(val) {
          console.log(val); 
        }}
        )}
    </div>
  );
}


export default App;
