let n = 0;

function render() {
    
    const title =React.createElement('h1',{},'Bonjour tous le monde',' jean',' et les enfants ',
    React.createElement('span',{},n),
    React.createElement('p',{},'j\'ai envie d\'une glace')
    );
    ReactDOM.render(title,document.querySelector('#app'));
}
render()
window.setInterval(() => {
    n++
    render()
},1000)

//On peut remarquer que on peut changer uniquement le contenu et pas tout ce qui facilite le chargement 


//console.log(title);
//ReactDOM.render(title,document.body);
