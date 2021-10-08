
import { OCTOCAT_API, GITHUB_API } from './js/const';
import './js/theme';
import './css/style.css';


const formEl = document.querySelector('.js-form');
const profileImgEl = document.querySelector('.js-profile-img');
const usernameEl = document.querySelector('.js-username');
const nameEl = document.querySelector('.js-name');
const joiningDateEl = document.querySelector('.js-date');
const bioEl = document.querySelector('.js-bio');
const numReposEl = document.querySelector('.js-repos');
const numFollowersEl = document.querySelector('.js-followers');
const numFollowingEl = document.querySelector('.js-following');
const locationEl = document.querySelector('.js-location');
const websiteEl = document.querySelector('.js-website');
const twitterEl = document.querySelector('.js-twitter');
const companyEl = document.querySelector('.js-company');
const errorEl = document.querySelector('.js-error');
const searchEl = document.querySelector('.js-search');

//on first load display octocat profile
window.addEventListener('load', displayDetails(OCTOCAT_API));

//display details fetched from forwarded api
function displayDetails(api) {
    errorEl.classList.remove("visible");
    fetch(api)
        .then((result) => result.json())
        .then((data) => {
            if (data.message == "Not Found") {
                errorEl.classList.add("visible")
            } else {
                setProfileImage(data.avatar_url, data.login);
                showUserData(data.login, data.name, new Date(data.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                }).split(' ').join(' '));
                showBio(data.bio);
                displayStatistics(data.public_repos, data.followers, data.following);
                displayLinks(data.location, data.blog, data.twitter_username, data.company);
            }
        });
}

searchEl.addEventListener('onchange', function () {
    let searchValue = searchEl.value;
    displayDetails(GITHUB_API + searchValue);
})

//submit form and trigger displayDetails function to display info about searched profile
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    //search input value
    let searchValue = searchEl.value;
    //remove spaces from input and then join string
    let username = searchValue.split(' ').join('');
    //display info about searched profile
    displayDetails(GITHUB_API + username)
})

//set image atributes
function setProfileImage(image, alt) {
    profileImgEl.setAttribute('src', image);
    profileImgEl.setAttribute('alt', alt)
}

//show user intro details
function showUserData(username, name, date) {
    if (name == null) {
        nameEl.textContent = username;
    } else {
        nameEl.textContent = name;
    }
    usernameEl.textContent = `@${username}`;
    joiningDateEl.textContent = `Joined ${date}`;
}

function showBio(bio) {
    if (bio == null) {
        bioEl.textContent = "This profile has no bio"
        bioEl.classList.add("no-info-transparency")
    } else {
        bioEl.textContent = bio;
        bioEl.classList.remove("no-info-transparency");
    }
}

function displayStatistics(repo, followers, following) {
    numReposEl.textContent = repo;
    numFollowersEl.textContent = followers;
    numFollowingEl.textContent = following;
}

function displayLinks(location, website, twitter, company) {
    if (!location) {
        locationEl.textContent = "Not available"
        locationEl.parentNode.classList.add("no-info-transparency")
    } else {
        locationEl.textContent = location;
        locationEl.parentNode.classList.remove("no-info-transparency")
    }

    if (!website) {
        websiteEl.textContent = "Not available"
        websiteEl.parentNode.classList.add("no-info-transparency")
    } else {
        websiteEl.textContent = website;
        websiteEl.setAttribute('href', website);
        websiteEl.parentNode.classList.remove("no-info-transparency");
    }

    if (!twitter) {
        twitterEl.textContent = "Not available";
        twitterEl.parentNode.classList.add("no-info-transparency");
    } else {
        twitterEl.setAttribute('href', "https://twitter.com/" + twitter);
        twitterEl.textContent = twitter;
        twitterEl.parentNode.classList.remove("no-info-transparency");
    }

    if (!company) {
        companyEl.innerHTML = "Not available";
        companyEl.parentNode.classList.add("no-info-transparency");
    } else {
        companyEl.textContent = company;
        let link = company.slice(1).split(' ')[0];
        companyEl.setAttribute('href', "https://github.com/" + link);
        companyEl.parentNode.classList.remove("no-info-transparency");
    }
}