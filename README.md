# Generic Rating System
## Part 1: Backend and Algorithm
- Backend
\
Flask + sqlite for prototype. To deploy, we can use either Gunicorn or Ngnix + wsgi.
Render should on client-side, backend only provides apis for operations and serving frontend App.
- Algorithm
\
The algorithm is to summarize the tags we have for each entry to a bunch of numerical metrics.
This process can be done by hand, by making up some formula or by using some fancy machine learning approach.
I prefer we invest more time in this part. For we are computer SCIENCE students, not an ordinary programmer.
Potentially, word2vec might be handy, we can start learning it if interested and also I (JiaYi Zhang) can hold a presentation for this topic.

## Part 2: Frontend
+ Prototyping
Pure HTML + JS + CSS! That's the fastest way to build up a prototype in my opinion.
+ Actual WebApp
To make us more suitable for jobs, I (JiaYi Zhang) suggest we use React.js. Since it's the most popular framework in the industry. I don't expect the web app to be too complicated. It may only contain:
	* User login/logout: Shall we force users to use their school email?
	* Search a specific professor (entry): It should be hierarchical structure indexing all entries. Also, the visualization part could be creative and it's very important.
	* Add a rate to an entry: Select or type in tags, then upload it to server.
## Data Orgnization
Prof table:
keys: Prof Name, Courses, Tags (could be a one-hot vector)

Action table:
Simply log all actions
keys: User, Status(active, deprecated), Timestamp, Action, args

Logs table:
Log all requests
User, Time, Operation

TAG MAP:
Encode all tags into one-hot encoding

Tags
Lecture:
Detailed slides
Over-simplifed slides

Logical explaination:
- Don't know what prof talking about
- Always ask students to ask question
- Don't care at all.

Responsivness:
- Have Piazza(or campuswire etc)
- Use canvas discussion
- No discussion forum
\
&nbsp;
- TA/Prof answer questions fast enough
- TA/prof merely answer questions only
\
&nbsp;
- Lots of OH, can always find them.
- They skip OH.

Communication:
- Prof can understand your question correctly.
- Prof's answer don't really answer the question.

Homeworks:
- Clear instruction on what to do.
- Don't know where to start
\
&nbsp;
- Well explained grading rubric
- Let's hope prof will give a good grade
\
&nbsp;
- HW is too hard, must work more than you should (units) to figure out.
- HW too easy, an afternoon is enough to kill it.

## Database Schema Design

+ User records
  + email
  + username
  + hashed password
  + uid
+ Action log
  + uid
  + action
  + args
  + time
+ Ratee
  + ["TAG":count,...]
  + [{"user":USER, "comment":comment},...]
  + rid
  + summary:{calculated metrics}

## Note:
This document is full of subjective prejudice, please don't hesitate to contact me and discuss anything you don't agree with.
My email: pkazhang@ucdavis.edu

Please put [iDEX] in the title! Thanks for supporting!
