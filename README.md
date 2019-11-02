#Generic Rating System
## Part 1: Backend and Algorithm
+ Backend
Flask + sqlite for prototype. To deploy, we can use either Gunicorn or Ngnix + wsgi.
Render should on client-side, backend only provides apis for operations and serving frontend App.
+ Algorithm
The algorithm is to summarize the tags we have for each entry to a bunch of numerical metrics.
This process can be done by hand, by making up some formula or by using some fancy machine learning approach.
I prefer we invest more time in this part. For we are computer SCIENCE students, not an ordinary programmer.
Potentially, word2vec might be handy, we can start learning it if interested and also I(JiaYi Zhang) can hold a presentation for this topic.

## Part 2: Frontend
+ Prototyping
Pure HTML + JS + CSS! That's the fastest way to build up a prototype in my opinion.
+ Actual WebApp
To make us more suitable for jobs, I(JiaYi Zhang) suggest we use React.js. Since it's the most popular framework in the industry. I don't expect the web app to be too complicated. It may only contain:
	* User login/logout: Shall we force users to use their school email?
	* Search a specific professor(entry): It should be hierarchical structure indexing all entries. Also, the visualization part could be creative and it's very important.
	* Add a rate to an entry: Select or type in tags, then upload it to server.
## Note:
This document is full of subjective prejudice, please don't hesitate to contact me and discuss anything you don't agree with.
My email: pkazhang@ucdavis.edu

Please put [iDEX] in the title! Thanks for supporting!