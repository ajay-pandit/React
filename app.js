
const parent=React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'i\'m an h1 tag'),
            React.createElement('h2',{},'i\'m an h2 tag')
        ]
    )
)

const main=ReactDOM.createRoot(document.getElementById('main'));
console.log(main);
main.render(parent);
// console.log("hello")