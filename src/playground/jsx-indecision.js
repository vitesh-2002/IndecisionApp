//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public  
console.log('app.js is running')

//JSX - JavaScript XML
const risingPlayer1 = {
    name: 'Luka Doncic',
    title1: ['Rookie of the Year 18|', '3x All-Star|', '3x All-NBA'],
    title2: [],
    age: 23,
    location: 'Dallas',
    votes: 0
}
const risingPlayer2 = {
    name: 'Ja Morant',
    title1: ['Rookie of the Year 19|', 'Most Improved Player 22|', '1x All-Star|', '1x All-NBA'],
    title2: [],
    age: 22,
    location: 'Memphis',
    votes: 0
}
const risingPlayer3 = {
    name: 'Jayson Tatum',
    title1: ['All-Rookie 18|', '3x All-Star|', '2x All-NBA'],
    title2: ['ECF 22'],
    age: 24,
    location: 'Boston',
    votes: 0
}
const player1 = {
    name: 'LeBron James',
    title1: ['Rookie of the Year 03|', '18x All-Star|', '18x All-NBA|', '6x All-Defensive Team|', '4x MVP|', 'Scoring Champion 08'],
    title2: ['4x NBA Champion|', '4x NBA Finals MVP'],
    age: 37,
    location: 'Los Angeles',
    votes: 0
}

const player2 = {
    name: 'Kevin Durant',
    title1: ['Rookie of the Year 08|', '12x All-Star|', '10x All-NBA|', '4x Scoring Champion|', 'MVP 13'],
    title2: ['2x NBA Champion|', '2x NBA Finals MVP'],
    age: 34,
    location: 'Brooklyn',
    votes: 0
};
const player3 = {
    name: 'Giannis Antetokounmpo',
    title1: ['All-Rookie 13|', '6x All-Star|', '6x All-NBA|', '5x All-Defensive Team|', 'Most Improved Player 17|', 'Defensive Player of the Year 19|', '2x MVP'],
    title2: ['2021 NBA Champion|', 'NBA Finals MVP 21'], 
    age: 28,
    location: 'Milwaukee',
    votes: 0
}
const player4 = {
    name: 'Stephen Curry',
    title1: ['All-Rookie 10|', '8x All-Star|', '8x All-NBA|', '2x Scoring Champion|', '2x MVP'],
    title2: ['4x NBA Champion|', 'NBA Finals MVP 22'],
    age: 34,
    location: 'Golden State',
    votes: 0
};
function getTitle(title) {
    if (title.length >= 1) {
        return <li2>{title}</li2>;
    } else {
        return 'N/A';
    }
    
}
let deactivateButton = () => {
    return risingPlayer1.votes > 0 || risingPlayer2.votes > 0 || risingPlayer3.votes > 0 || player1.votes > 0 || player2.votes > 0 || player3.votes > 0 || player4.votes > 0;
}

const addRP1 = () => {
    risingPlayer1.votes++;
    deactivateButton()
    renderCounter();
}
const addRP2 = () => {
    risingPlayer2.votes++;
    deactivateButton();
    renderCounter();
}
const addRP3 = () => {
    risingPlayer3.votes++;
    deactivateButton();
    renderCounter();
}
const addP1 = () => {
    player1.votes++;
    deactivateButton();
    renderCounter();
}
const addP2 = () => {
    player2.votes++;
    deactivateButton();
    renderCounter();
}
const addP3 = () => {
    player3.votes++;
    deactivateButton();
    renderCounter();
}
const addP4 = () => {
    player4.votes++;
    deactivateButton();
    renderCounter();
}

const removeAll = () => {
    // risingPlayer1.title2 = [];
    risingPlayer1.votes = 0;
    risingPlayer2.votes = 0;
    risingPlayer3.votes = 0;
    player1.votes = 0;
    player2.votes = 0;
    player3.votes = 0;
    player4.votes = 0;
    renderCounter();
}

let votedPlayer = '';
const displayVote = () => {
    if (risingPlayer1.votes > 0) {
        votedPlayer = 'You voted ' + risingPlayer1.name + ' as the best player in the NBA right now';
    }
    if (risingPlayer2.votes > 0) {
        votedPlayer = 'You voted ' + risingPlayer2.name + ' as the best player in the NBA right now';
    }
    if (risingPlayer3.votes > 0) {
        votedPlayer = 'You voted ' + risingPlayer3.name + ' as the best player in the NBA right now';
    }
    if (player1.votes > 0) {
        votedPlayer = 'You voted ' + player1.name + ' as the best player in the NBA right now';
    }
    if (player2.votes > 0) {
        votedPlayer = 'You voted ' + player2.name + ' as the best player in the NBA right now';
    }
    if (player3.votes > 0) {
        votedPlayer = 'You voted ' + player3.name + ' as the best player in the NBA right now';
    }
    if (player4.votes > 0) {
        votedPlayer = 'You voted ' + player4.name + ' as the best player in the NBA right now';
    }
    
    return votedPlayer;    
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        risingPlayer1.title2.push(option+'|')
        e.target.elements.option.value = ''
        
    }
    renderCounter();     
}

const makeDecision = () => {

    const randNum = Math.floor((Math.random()*(risingPlayer1.title2.length)));
    const option = risingPlayer1.title2[randNum]
    alert(option)
}
let visibility = false;
const buttonClicked = () => {
    visibility = !visibility;
    renderCounter();
}

const appRoot = document.getElementById('app')

const arr = [34, 30, 77]
const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Indecision Application</h1>
            <h3><em>Who is the best player in the NBA?</em></h3>
            <h4>Some stars are rising to the top, but can they surmount the already established superstars?</h4>
            <ol>
                <li><b>{risingPlayer1.name.toUpperCase()} - {risingPlayer1.location} - {risingPlayer1.age} years</b></li>
                <li2>Championships: </li2>
                {getTitle(risingPlayer1.title2)}
                <br></br>
                <li2>Awards: </li2>
                {getTitle(risingPlayer1.title1)}
                <br></br>
                <button disabled={deactivateButton()} onClick={addRP1}>Vote {risingPlayer1.name}</button>
                
                <li3>{(risingPlayer1.age && risingPlayer1.age > 23) && <em>Entering his prime</em>}</li3>
                <li><b>{risingPlayer2.name.toUpperCase()} - {risingPlayer2.location} - {risingPlayer2.age} years</b></li>
                <li2>Championships: </li2>
                {getTitle(risingPlayer2.title2)}
                <br></br>
                <li2>Awards: </li2>
                <li2>{risingPlayer2.title1.length >= 1 ? risingPlayer2.title1 : 'N/A'}</li2>
                <br></br>
                <button disabled={deactivateButton()} onClick={addRP2}>Vote {risingPlayer2.name}</button>
                <li2>{(risingPlayer2.age && risingPlayer2.age > 23) && <em>Entering his prime</em>}</li2>
                <li><b>{risingPlayer3.name.toUpperCase()} - {risingPlayer3.location} - {risingPlayer3.age} years</b></li>
                <li2>Championships: </li2>
                {getTitle(risingPlayer3.title2)}
                <br></br>
                <li2>Awards: </li2>
                <li2>{risingPlayer3.title1.length >= 1 ? risingPlayer3.title1 : 'N/A'}</li2>
                <br></br>
                <button disabled={deactivateButton()} onClick={addRP3}>Vote {risingPlayer3.name}</button>
                <li2>{(risingPlayer3.age && risingPlayer3.age > 23) && <em>Entering his prime</em>}</li2>
                <li><b>{player1.name.toUpperCase()} - {player1.location} - {player1.age} years</b></li>
                <li2>Awards: </li2>
                {getTitle(player1.title1)}
                <br></br>
                <li2>Championships: </li2>
                {getTitle(player1.title2)}
                <br></br>
                <button disabled={deactivateButton()} onClick={addP1}>Vote {player1.name}</button>
                <li><b>{player2.name.toUpperCase()} - {player2.location} - {player2.age} years</b></li>
                <li2>Awards: </li2>
                {getTitle(player2.title1)}
                <br></br>
                <li2>Championships: </li2>
                {getTitle(player2.title2)}
                <br></br>
                <button disabled={deactivateButton()} onClick={addP2}>Vote {player2.name}</button>
                <li><b>{player3.name.toUpperCase()} - {player3.location} - {player3.age} years</b></li>
                <li2>Awards: </li2>
                {getTitle(player3.title1)}
                <br></br>
                <li2>Championships: </li2>
                {getTitle(player3.title2)}
                <br></br>
                <button disabled={deactivateButton()} onClick={addP3}>Vote {player3.name}</button>
                <li><b>{player4.name.toUpperCase()} - {player4.location} - {player4.age} years</b></li>
                <li2>Awards: </li2>
                {getTitle(player4.title1)}
                <br></br>
                <li2>Championships: </li2>
                {getTitle(player4.title2)}
                <br></br>
                <button disabled={deactivateButton()} onClick={addP4}>Vote {player4.name}</button>
                <p></p>
                <button onClick={removeAll}>Clear Votes</button>
            </ol>
            <h3>{deactivateButton() ? <em>{(displayVote())}</em> : 'Vote for a player'}</h3>
            
            <h3>Voting Poll:</h3>
            <ol>
            <li><b>{risingPlayer1.name.toUpperCase()} - {risingPlayer1.votes}</b></li>
            <li><b>{risingPlayer2.name.toUpperCase()} - {risingPlayer2.votes}</b></li>
            <li><b>{risingPlayer3.name.toUpperCase()} - {risingPlayer3.votes}</b></li>
            <li><b>{player1.name.toUpperCase()} - {player1.votes}</b></li>
            <li><b>{player2.name.toUpperCase()} - {player2.votes}</b></li>
            <li><b>{player3.name.toUpperCase()} - {player3.votes}</b></li>
            <li><b>{player4.name.toUpperCase()} - {player4.votes}</b></li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add to Luka Doncic's Championships</button>               
            </form>
            
            <p><b>Luka's championship resume includes: </b></p>
            <ol>
            {
                risingPlayer1.title2.map((title) => <li key={title.length}>{title}</li>)
            }            
            </ol>
            <button disabled={risingPlayer1.title2.length === 0} onClick = {makeDecision}>Click to see a random Luka championship</button>
            <h3>Vitesh Kambara</h3>
            <p>Age: 19</p> 
            <p>Location: Cary, NC</p>
            
            <h1>Visibility Toggle</h1>
            <button onClick={buttonClicked}>{visibility ? 'Hide details' : 'Show details'}</button>
            <br></br>
            <em>{visibility ? 'Details' : ''}</em>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot)   
}

renderCounter();