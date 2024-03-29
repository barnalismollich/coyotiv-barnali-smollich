# **Family Diary**

In the main branch in Github of barnalismollich/coyotiv-barnali-smollich you can find my project work I did during the software engineering training at Coyotiv UG in March - June 2022.

# **Project idea**

My project called "Family Diary" had the intention to be a website which should function as a  storage of the most important documents of a family or a defined group. In my case, only family members (husband, children and me) were allowed to this page. Starting point was a login page as the contents was sensitive. The main page was a list of our most important documents (testament, living will, power of attorney, passport number, vaccination certicate and so on) which in case of emergency could have been accessed fast and easily.

# **Goal**

Create an application (website) to store the most important (family) documents i.e. upload and download of documents should be possible.

# **Non-Goals**

1. Information only for family and not for the public (thus login and logout functions are mandatory).
2. No todo or shopping list or the like.
3. Form follows function, i.e. the website contains mandatory stuff (Privacy Policy, Terms of use) but is not a fancy website.
4. Only storage of documents. No storage of photos, videos and audios in the first version.
5. Chat tool is integrated but more to show that I have worked with socket.io and not because it was a mandatory feature.
6. Deletion of documents and version control are not mandatory in the first version.

# **References and Sources**

Evernote, Penzu, Jimdo and Wix templates, tutorials at Coyotiv UG e.g. balsamiq, Google drive, Amazon drive

# **Technologies**

Frontend: Vue.js, Vuex, HTML, CSS, JavaScript, balsamiq

Backend: MongoDB Atlas, Docker, Google Cloud Run, socket.io, Node.js

In Google Cloud Run one was able to see the application in the productive environment during the course. As it was a showcase project and not to be used in real life, it is inactive now. Here are some screenshots from the frontend and backend.

Login page:
![Login page](https://user-images.githubusercontent.com/102354821/182457298-2da2e776-110f-49f1-a7bf-8e8932ed48d5.jpg)

Welcome page with chat function:
![Welcome page](https://user-images.githubusercontent.com/102354821/182458079-f1c7e3c1-3f48-4fea-894d-e2e87fd3ffa0.jpg)

If you clicked on your name you were directed to the user page with your documents:
![Overview documents](https://user-images.githubusercontent.com/102354821/182457346-2f500417-1835-4c62-8719-f40108963e46.jpg)

Privacy Policy
![Privacy Policy](https://user-images.githubusercontent.com/102354821/182457395-fa8bdefe-aaa8-4801-97f4-c1a6cc408d5f.jpg)

A cookies policy, terms of use and disclaimer were also created but in order to keep this README short and readable I have not added screenshots here. Their layout was similar to the privacy policy.

Backend:
![Backend](https://user-images.githubusercontent.com/102354821/182457416-38b278ea-3727-4a0a-b7a9-7a0dbeffac87.jpg)

For tracking my todos I had used Kanban boards in Notion and Trello. Here is one screenshot (does not show all todos, it is just to give an impression):

![Trello](https://user-images.githubusercontent.com/102354821/182461192-c1a2712b-5969-4e61-ba5a-2ce15470ba99.jpg)

# **Installation**

Fork the repository.

In the directory you would like to have the project, clone the repository

`$ git clone git@github.com:barnalismollich/coyotiv-barnali-smollich.git`
Open the project in your coding environment and install the dependencies with the following command.

`$ docker-compose up --build`

# **Run the stack**

`$ docker-compose up`

# **Access the stack from the browser**

Open up your /etc/hosts file.

In UNIX and VSCode, it can be opened via the following

`open /etc/hosts`
In Windows you can use the path `C:\Windows\System32\Drivers\etc\hosts in Windows`

Add the following line to your hosts file

`127.0.0.1 coyotiv-barnali-smollich.localhost`

# **Development mode**

You can also run the app in development environment if desired. Instead of running docker-compose up, run the following command:

`$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

# **Contributions and Thank You**

If you have any comments to my application e.g. improvment, bugs or the like please do not hesitate to contact me via Github.com.
I also would like to thank the assistant teachers at Coyotiv UG and the students of my Cohort-8 to support me during the development phase.

# **License**

MIT LICENSE
Copyright (c) 2022 Barnali Smollich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
