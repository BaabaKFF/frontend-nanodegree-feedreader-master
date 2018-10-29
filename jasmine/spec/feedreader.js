/* feedreader.js
 * This is the spec file that Jasmine will read and contains all of the tests that will be run against your application.
 */

/* All tests are being placed within the $() function,
 * since some of these tests may require DOM elements. This is
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    const body = document.querySelector('body');

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the allFeeds variable has been defined 
         * and that it is not empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });

    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {           
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. It has
          * two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('toggles on and off', function() {
            const menu = document.querySelector('.menu-icon-link');
            // expectation one
            menu.click(); // Body should not have menu-hidden class
            expect(body.classList.contains('menu-hidden')).toBe(false);
            // expectation two
            menu.click(); // Body should have menu-hidden class       
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });    
    
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('completes work', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
   
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feedAfterFirstLoad= "";
        let feedAfterSecondLoad = "";
        /* By storing the entries in variables we can compare whether the articles change when loadFeed is
         * done loading.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedAfterFirstLoad = feed.innerHTML; // get content of feed container
                loadFeed(1, function() {
                    feedAfterSecondLoad = feed.innerHTML; // get content of feed container again
                    done();
                });
            });
        });

       it('content changes', function(done) {
           expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
           console.log(feedAfterFirstLoad, feedAfterSecondLoad);
           done();
        }); 
    });    
}());
