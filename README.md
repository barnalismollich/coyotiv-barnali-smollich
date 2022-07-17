# **Family Diary**

In the Github (main branch) called barnalismollich/coyotiv-barnali-smollich you can find my project work I did during the software engineering training at Coyotiv UG in March - June 2022.

# **Project idea**

My project idea was called: Family Diary.
I wanted to build a website which should function as a  storage of our most important documents. Only family members (husband, all daughters and me) should have access to this page. Starting point is a login page as the contents is sensitive. The main page is then a list of our most important documents (Testament, Patientenverfügung, Betreuungsvollmacht, passport copies, Impfpass etc.) which in case of emergency can be accessed easily.

# **Goal**

Store the most important documents in the application i.e. upload, download and deletion of documents. A version control is not realistic for the first version.

# **Non-Goals**

1. Information only for family and not for the public.
2. No chat tool. No todo or shopping list.
3. Form follows function, i.e. the website contains mandatory stuff (Privacy Policy, Terms of use) but is not a fancy website.
4. Only storage of documents. No storage of photos, videos and audios in the first version.

# **References and Sources**

Evernote, Penzu, Jimdo and Wix templates, balsamiq tutorial Armagan Amcalar, Google drive / Amazon drive

# **Technologies**

Frontend: Vue.js, Vuex, HTML, CSS, JavaScript, balsamiq

Backend: MongoDB Atlas, Docker, Google Cloud Run

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
In Windows you can use the path C:\Windows\System32\Drivers\etc\hosts in Windows

Add the following line to your hosts file

`127.0.0.1 coyotiv-barnali-smollich.localhost`

# **Development mode**

You can also run the app in development environment if desired. Instead of running docker-compose up, run the following command:

`$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

# **License**

MIT LICENSE
Copyright (c) 2022 Barnali Smollich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
