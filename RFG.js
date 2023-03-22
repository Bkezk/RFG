const adj = ['annoying', 'awful', 'better', 'bloody', 'busy',
'clean', 'cloudy', 'delightful', 'adventurous', 'bad', 'calm', 'comfortable',
'dangerous', 'difficult', 'average', 'beautiful', 'great', 'good', 'nice', 'bright', 'cheerful', 'dark',
'shitty', 'dull', 'fine', 'joyous', 'hard', 'long', 'nasty', 'odd', 'naughty', 'lovely', 'pleasant',
'perfect', 'splendid']
const relation = ['friend', 'buddy', 'pal', 'hoe', 'bitch', 'compadre', 'comrad', 'brother', 'bud', 'best friend', 'tiny dick', 'my man', 'Jethro', 'colleague', 'partner', 
'mate', 'peer', 'associate', 'muskateer']

/*console.log('Hey ' + relation[Math.floor(Math.random() * relation.length)] + 
'! I hope your ' + weekdays[Math.floor(Math.random() * weekdays.length)] + ' is ' + adj[Math.floor(Math.random() * adj.length)] + ', you look ' + adj[Math.floor(Math.random() * adj.length)] + 
' today');*/

const week = () => {
    const weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday']
return weekdays[Math.floor(Math.random() * weekdays.length)]};



const dayOfTheWeek = () => {
    const adj = ['annoying', 'awful', 'better', 'bloody', 'busy',
'clean', 'cloudy', 'delightful', 'adventurous', 'bad', 'calm', 'comfortable',
'dangerous', 'difficult', 'average', 'beautiful', 'great', 'good', 'nice', 'bright', 'cheerful', 'dark',
'shitty', 'dull', 'fine', 'joyous', 'hard', 'long', 'nasty', 'odd', 'naughty', 'lovely', 'pleasant',
'perfect', 'splendid']
const relation = ['friend', 'buddy', 'pal', 'hoe', 'bitch', 'compadre', 'comrad', 'brother', 'bud', 'best friend', 'tiny dick', 'my man', 'Jethro', 'colleague', 'partner', 
'mate', 'peer', 'associate', 'muskateer']

let day = week()

let phrase = switch (day) {
    case "Monday":
        return 'the worst day of the week!';
    case "Tuesday":
        return 'the second worst day of the week!';
    case "Wednesday":
        return 'hump dayyyyy!';
    case "Thursday":
        return "We're almost to the weekend!";
    case "Friday":
        return 'Weekend is here babyyyy!';
    default:
        console.log("for some reason the day of the week is wrong?")
        break;
}

console.log('Hey ' + relation[Math.floor(Math.random() * relation.length)] + 
" it's " + day + ' , ' + phrase + ', you look ' + adj[Math.floor(Math.random() * adj.length)] + 
' today')
};
