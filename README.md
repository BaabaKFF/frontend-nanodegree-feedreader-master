# FEED READER PROJECT

This is a project I undertook as part of the Grow With Google Scholarship partnership with Udacity, allowing me to pursue the Front End Web Development Nanodegree.

# Project Overview

In this project a web-based application that reads RSS feeds was given. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. 

# Installation
- Open the index.html file, locate in the Feed Reader main folder, in any web browser to view the feed.
- To run the test on the feed, in the Feed Reader main folder, navigate to the js folder and open the feedreader.js file to view the code. You may also view the feedreader.js in the developer tools once the index.html file is open in a browser.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What I learnt.

I learnt how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How I completed this project?

I carried out the following:

Reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Reviewed the functionality of the application within my browser.
4. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Returned the `allFeeds` variable to a passing state.
8. Wrote a test that loops through each feed in the `allFeeds` object and ensured it had a URL defined and that the URL was not empty.
9. Wrote a test that loops through each feed in the `allFeeds` object and ensured it had a name defined and that the name was not empty.
10. Wrote a new test suite named `"The menu"`.
11. Wrote a test that ensured the menu element was hidden by default. I analyzde the HTML and the CSS to determine how the hiding/showing of the menu element was being performed.
12. Wrote a test that ensured the menu changed visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
13. Wrote a test suite named `"Initial Entries"`.
14. Wrote a test that ensured when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Wrote a test suite named `"New Feed Selection"`.
16. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test are be dependent on the results of another.
18. Callbacks are used to ensure that feeds are loaded before they are tested.
19. Error handling for undefined variables and out-of-bound array access are implemented.
20. When complete - all of your tests pass. 
21. Wrote a README file detailing all steps required to successfully run the application.