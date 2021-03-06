const  path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>
{
    res.render('index', 
    {
        title: 'Weather',
        name: 'Josh'
    });
})

app.get('/about', (req, res) =>
{
    res.render('about', 
    {
        title: 'About Me',
        name: 'Josh'
    });
})

app.get('/help', (req, res) =>
{
    res.render('help', 
    {
        title: 'Help Page',
        helpText: 'Help message placeholder.',
        name: 'Josh'
    });
})

app.get('/weather', (req, res) =>
{
    res.send(
    {
        forecast: 'weather forecast',
        location: 'location'
    });
});

app.get('/help/*', (req, res) =>
{
    res.render('404',
    {
        title: '404',
        errorText: 'Help article not found.',
        name:  'Josh'
    });
});

app.get('*', (req, res) =>
{
    res.render('404',
    {
        title: '404',
        errorText: 'Page not found.',
        name: 'Josh'
    });
});

app.listen(3000,  () =>
{
    console.log('server is up on port 3000');
});