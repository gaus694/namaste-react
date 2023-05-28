
//const heading = React.createElement('h1',{},'this is h1');

//const root= ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement(
    'div',
    {id: 'child'},
    [
        React.createElement('h1',{id:'first'},'first h1'),
        React.createElement('h2',{id: 'second'},'2nd h2')
    ]
)

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);